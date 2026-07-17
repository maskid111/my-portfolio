import { NextResponse } from 'next/server'
import { fallbackXProfile, getHighResProfileImage, type XProfile } from '@/lib/x-profile'
import { profile } from '@/lib/profile'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface XUserResponse {
  data?: {
    name?: string
    username?: string
    description?: string
    profile_image_url?: string
    profile_banner_url?: string
    verified?: boolean
    public_metrics?: {
      followers_count?: number
      following_count?: number
      tweet_count?: number
    }
  }
  errors?: unknown[]
}

const USER_FIELDS = [
  'name',
  'username',
  'description',
  'profile_image_url',
  'profile_banner_url',
  'public_metrics',
  'verified',
].join(',')

async function fetchXUser(endpoint: string, bearerToken: string) {
  const response = await fetch(
    endpoint,
    {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
      cache: 'no-store',
    }
  )
  const text = await response.text()
  const payload = text ? JSON.parse(text) as XUserResponse : {}

  return {
    response,
    payload,
    text,
  }
}

export async function GET() {
  const bearerToken = process.env.X_BEARER_TOKEN
  const username = process.env.X_USERNAME || profile.xUsername
  const userId = process.env.X_USER_ID
  const apiBaseUrl = 'https://api.x.com/2'
  const bannerUrl = process.env.X_PROFILE_BANNER_URL || process.env.X_BANNER_URL || fallbackXProfile.bannerUrl
  const profileImageUrl = process.env.X_PROFILE_IMAGE_URL || process.env.X_IMAGE_URL || fallbackXProfile.profileImageUrl

  if (!bearerToken) {
    return NextResponse.json({
      ...fallbackXProfile,
      username,
      handle: `@${username}`,
      bannerUrl,
      profileImageUrl,
    })
  }

  try {
    let lastError = 'X API did not return profile data'
    const endpoints = [
      `${apiBaseUrl}/users/me?user.fields=${USER_FIELDS}`,
      userId ? `${apiBaseUrl}/users/${encodeURIComponent(userId)}?user.fields=${USER_FIELDS}` : null,
      `${apiBaseUrl}/users/by/username/${encodeURIComponent(username)}?user.fields=${USER_FIELDS}`,
    ].filter(Boolean) as string[]

    for (const endpoint of endpoints) {
      const { response, payload, text } = await fetchXUser(endpoint, bearerToken)

      if (!response.ok) {
        lastError = `X API returned ${response.status} from ${endpoint}${text ? `: ${text.slice(0, 180)}` : ''}`
        continue
      }

      const user = payload.data

      if (!user) {
        lastError = `X API returned no user data from ${apiBaseUrl}`
        continue
      }

      const resolvedUsername = user.username || username
      const xProfile: XProfile = {
        name: user.name || profile.name,
        username: resolvedUsername,
        handle: `@${resolvedUsername}`,
        description: user.description || fallbackXProfile.description,
        profileImageUrl: getHighResProfileImage(user.profile_image_url) || profileImageUrl,
        bannerUrl: user.profile_banner_url || bannerUrl,
        followersCount: user.public_metrics?.followers_count ?? null,
        followingCount: user.public_metrics?.following_count ?? null,
        tweetCount: user.public_metrics?.tweet_count ?? null,
        verified: Boolean(user.verified),
        source: 'api',
      }

      return NextResponse.json(xProfile)
    }

    return NextResponse.json({
      ...fallbackXProfile,
      username,
      handle: `@${username}`,
      bannerUrl,
      profileImageUrl,
      error: lastError,
    })
  } catch (error) {
    return NextResponse.json({
      ...fallbackXProfile,
      username,
      handle: `@${username}`,
      bannerUrl,
      profileImageUrl,
      error: error instanceof Error ? error.message : 'Unexpected X API error',
    })
  }
}
