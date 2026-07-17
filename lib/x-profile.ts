import { profile } from '@/lib/profile'

export interface XProfile {
  name: string
  username: string
  handle: string
  description: string
  profileImageUrl: string | null
  bannerUrl: string | null
  followersCount: number | null
  followingCount: number | null
  tweetCount: number | null
  verified: boolean
  source: 'api' | 'fallback'
  error?: string
}

export const fallbackXProfile: XProfile = {
  name: profile.name,
  username: profile.xUsername,
  handle: profile.xHandle,
  description: `${profile.fullTitle}. ${profile.tagline}.`,
  profileImageUrl: '/maskid-pfp.jpg',
  bannerUrl: '/maskid-banner.jpg',
  followersCount: null,
  followingCount: null,
  tweetCount: null,
  verified: false,
  source: 'fallback',
}

export function formatCompactNumber(value: number | null) {
  if (value === null) {
    return null
  }

  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value)
}

export function getHighResProfileImage(url: string | undefined) {
  if (!url) {
    return null
  }

  return url.replace('_normal.', '_400x400.')
}
