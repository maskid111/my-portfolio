import { allFeaturedTweets } from '@/lib/profile'

export interface XPostMetrics {
  likes: number | null
  replies: number | null
  views: number | null
}

export interface XPost {
  id: string
  tweetId: string
  url: string
  type: string
  title: string
  text: string
  mediaUrl: string | null
  metrics: XPostMetrics
  source: 'api' | 'fallback'
  unavailableReason?: string
}

export function getTweetId(url: string) {
  return url.match(/status\/(\d+)/)?.[1] || url
}

export function formatMetric(value: number | null) {
  if (value === null) {
    return '-'
  }

  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
}

export const fallbackXPosts: XPost[] = allFeaturedTweets.map((item) => ({
  ...item,
  tweetId: getTweetId(item.url),
  text: 'Tweet preview is waiting for X API access.',
  mediaUrl: null,
  metrics: {
    likes: null,
    replies: null,
    views: null,
  },
  source: 'fallback',
}))
