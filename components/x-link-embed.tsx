'use client'

import { useEffect, useRef } from 'react'
import { useState } from 'react'

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: HTMLElement | null) => void
      }
    }
  }
}

interface XLinkEmbedProps {
  url: string
}

export function XLinkEmbed({ url }: XLinkEmbedProps) {
  const embedRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let retryTimer: ReturnType<typeof window.setTimeout> | undefined
    const observer = new MutationObserver(() => {
      if (embedRef.current?.querySelector('iframe')) {
        setIsLoaded(true)
      }
    })

    if (embedRef.current) {
      observer.observe(embedRef.current, {
        childList: true,
        subtree: true,
      })
    }

    const loadEmbed = () => {
      if (window.twttr?.widgets) {
        window.twttr.widgets.load(embedRef.current)
        if (embedRef.current?.querySelector('iframe')) {
          setIsLoaded(true)
        }
        return
      }

      retryTimer = window.setTimeout(loadEmbed, 250)
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://platform.x.com/widgets.js"]')

    if (existingScript) {
      window.requestAnimationFrame(loadEmbed)

      return () => {
        observer.disconnect()
        if (retryTimer) {
          window.clearTimeout(retryTimer)
        }
      }
    }

    const script = document.createElement('script')
    script.src = 'https://platform.x.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    script.onload = loadEmbed
    document.body.appendChild(script)

    return () => {
      observer.disconnect()
      if (retryTimer) {
        window.clearTimeout(retryTimer)
      }
    }
  }, [url])

  return (
    <article className="glass-strong overflow-hidden rounded-[clamp(0.75rem,2vw,1rem)] border border-white/10 bg-black/20">
      <div
        ref={embedRef}
        className="relative h-[260px] overflow-y-auto overflow-x-hidden px-1 py-1.5 sm:h-[360px] sm:px-2 sm:py-3 lg:h-[440px] [&_.twitter-tweet]:!my-0 [&_.twitter-tweet]:!mx-auto [&_iframe]:origin-top-left [&_iframe]:!max-w-none max-sm:[&_iframe]:!w-[182%] max-sm:[&_iframe]:scale-[0.55] sm:max-lg:[&_iframe]:!w-[125%] sm:max-lg:[&_iframe]:scale-[0.8] lg:[&_iframe]:!max-w-full"
      >
        {!isLoaded && (
          <div className="absolute inset-2 z-10 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
            <div className="h-full w-full animate-pulse space-y-3 p-3">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-white/10" />
                <div className="space-y-1">
                  <div className="h-2.5 w-20 rounded bg-white/10" />
                  <div className="h-2 w-14 rounded bg-white/5" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2.5 w-full rounded bg-white/10" />
                <div className="h-2.5 w-5/6 rounded bg-white/10" />
                <div className="h-2.5 w-2/3 rounded bg-white/10" />
              </div>
              <div className="h-24 rounded-lg bg-white/5 sm:h-36" />
            </div>
          </div>
        )}
        <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
          <a href={url}>View post on X</a>
        </blockquote>
      </div>
    </article>
  )
}
