'use client'

import { ExternalLink, Eye, Heart, MessageCircle, Play, MessageSquareText } from 'lucide-react'
import { formatMetric, type XPost } from '@/lib/x-posts'

interface XPostCardProps {
  post: XPost
}

export function XPostCard({ post }: XPostCardProps) {
  const isVideo = post.type === 'Video'
  const Icon = isVideo ? Play : MessageSquareText

  return (
    <article className="glass-strong group flex min-h-[12rem] flex-col overflow-hidden rounded-[clamp(0.75rem,2vw,1rem)] border border-white/10 bg-black/20">
      <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-pink-500/20">
          {post.mediaUrl ? (
            <img
              src={post.mediaUrl}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 px-3 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-blue-300 sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
              </div>
              {post.unavailableReason && (
                <span className="text-[0.58rem] leading-snug text-gray-500 sm:text-xs">
                  Open the original post on X
                </span>
              )}
            </div>
          )}
          <span className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-1 text-[0.55rem] font-semibold uppercase tracking-wide text-white backdrop-blur sm:text-[0.65rem]">
            {post.type}
          </span>
        </div>
      </a>

      <div className="flex flex-1 flex-col p-2 sm:p-4">
        <h3 className="line-clamp-2 text-[0.72rem] font-bold leading-snug text-white sm:text-base">{post.title}</h3>
        <p className="mt-1.5 line-clamp-3 flex-1 text-[0.65rem] leading-relaxed text-gray-400 sm:mt-2 sm:text-sm">
          {post.unavailableReason ? 'View the full post, media, and engagement directly on X.' : post.text}
        </p>

        <div className="mt-3 grid grid-cols-3 gap-1 border-t border-white/10 pt-2 text-[0.6rem] text-gray-400 sm:text-xs">
          <span className="flex min-w-0 items-center gap-1">
            <Heart className="h-3 w-3 shrink-0 text-pink-400" />
            {formatMetric(post.metrics.likes)}
          </span>
          <span className="flex min-w-0 items-center gap-1">
            <MessageCircle className="h-3 w-3 shrink-0 text-blue-400" />
            {formatMetric(post.metrics.replies)}
          </span>
          <span className="flex min-w-0 items-center gap-1">
            <Eye className="h-3 w-3 shrink-0 text-purple-400" />
            {formatMetric(post.metrics.views)}
          </span>
        </div>

        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-[0.65rem] font-semibold text-blue-400 hover:text-blue-300 sm:text-sm"
        >
          Open on X
          <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </a>
      </div>
    </article>
  )
}
