import { NextResponse } from 'next/server'
import { fallbackXPosts } from '@/lib/x-posts'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface XTweetResponse {
  data?: {
    id: string
    text?: string
    attachments?: {
      media_keys?: string[]
    }
    public_metrics?: {
      like_count?: number
      reply_count?: number
      impression_count?: number
    }
  }
  includes?: {
    media?: Array<{
      media_key: string
      type?: string
      url?: string
      preview_image_url?: string
    }>
  }
}

interface XOEmbedResponse {
  html?: string
  author_name?: string
}

const TWEET_FIELDS = ['attachments', 'created_at', 'entities', 'public_metrics', 'referenced_tweets', 'text'].join(',')
const MEDIA_FIELDS = ['preview_image_url', 'type', 'url'].join(',')
const USER_FIELDS = ['name', 'profile_image_url', 'username'].join(',')

function decodeHtml(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&mdash;/g, '-')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function extractTextFromOEmbed(html: string) {
  const paragraph = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || ''

  return decodeHtml(paragraph)
    .replace(/<a[^>]*>([\s\S]*?)<\/a>/gi, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

async function fetchOEmbed(url: string) {
  const params = new URLSearchParams({
    url,
    theme: 'dark',
    dnt: 'true',
    omit_script: 'true',
  })

  const response = await fetch(`https://publish.twitter.com/oembed?${params.toString()}`, {
    cache: 'no-store',
  })
  const text = await response.text()
  const payload = text ? JSON.parse(text) as XOEmbedResponse : {}

  return {
    response,
    payload,
    text,
  }
}

async function fetchTweet(tweetId: string, bearerToken: string) {
  const params = new URLSearchParams({
    'tweet.fields': TWEET_FIELDS,
    expansions: 'author_id,attachments.media_keys',
    'user.fields': USER_FIELDS,
    'media.fields': MEDIA_FIELDS,
  })

  const response = await fetch(`https://api.x.com/2/tweets/${encodeURIComponent(tweetId)}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
    cache: 'no-store',
  })
  const text = await response.text()
  const payload = text ? JSON.parse(text) as XTweetResponse : {}

  return {
    response,
    payload,
    text,
  }
}

export async function GET() {
  const bearerToken = process.env.X_BEARER_TOKEN

  if (!bearerToken) {
    return NextResponse.json({
      posts: fallbackXPosts.map((post) => ({
        ...post,
        unavailableReason: 'Missing X_BEARER_TOKEN',
      })),
      source: 'fallback',
      error: 'Missing X_BEARER_TOKEN',
    })
  }

  try {
    let lastError = 'X API did not return tweet data'
    const posts = await Promise.all(fallbackXPosts.map(async (fallbackPost) => {
      const { response, payload, text } = await fetchTweet(fallbackPost.tweetId, bearerToken)
    
      if (!response.ok) {
        lastError = `X API returned ${response.status} for tweet ${fallbackPost.tweetId}${text ? `: ${text.slice(0, 180)}` : ''}`
        const oembed = await fetchOEmbed(fallbackPost.url)

        if (oembed.response.ok && oembed.payload.html) {
          const previewText = extractTextFromOEmbed(oembed.payload.html)

          return {
            ...fallbackPost,
            title: oembed.payload.author_name ? `${oembed.payload.author_name} on X` : fallbackPost.title,
            text: previewText || fallbackPost.text,
            source: 'fallback',
          }
        }

        return {
          ...fallbackPost,
          unavailableReason: `X API and oEmbed failed for tweet ${fallbackPost.tweetId}`,
        }
      }

      const tweet = payload.data
      const mediaByKey = new Map(payload.includes?.media?.map((media) => [media.media_key, media]) || [])

      if (!tweet) {
        lastError = `X API returned no tweet data for ${fallbackPost.tweetId}`
        const oembed = await fetchOEmbed(fallbackPost.url)

        if (oembed.response.ok && oembed.payload.html) {
          const previewText = extractTextFromOEmbed(oembed.payload.html)

          return {
            ...fallbackPost,
            title: oembed.payload.author_name ? `${oembed.payload.author_name} on X` : fallbackPost.title,
            text: previewText || fallbackPost.text,
            source: 'fallback',
          }
        }

        return {
          ...fallbackPost,
          unavailableReason: lastError,
        }
      }

      const firstMediaKey = tweet.attachments?.media_keys?.[0]
      const media = firstMediaKey ? mediaByKey.get(firstMediaKey) : undefined

      return {
        ...fallbackPost,
        text: tweet.text || fallbackPost.text,
        mediaUrl: media?.url || media?.preview_image_url || null,
        metrics: {
          likes: tweet.public_metrics?.like_count ?? null,
          replies: tweet.public_metrics?.reply_count ?? null,
          views: tweet.public_metrics?.impression_count ?? null,
        },
        source: 'api',
      }
    }))

    return NextResponse.json({
      posts,
      source: posts.every((post) => post.source === 'api') ? 'api' : 'partial',
      error: posts.some((post) => post.source !== 'api') ? lastError : undefined,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected X API error'

    return NextResponse.json({
      posts: fallbackXPosts.map((post) => ({
        ...post,
        unavailableReason: message,
      })),
      source: 'fallback',
      error: message,
    })
  }
}
