'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Send, Zap } from 'lucide-react'
import { animations } from '@/lib/animations'
import { profile } from '@/lib/profile'

export function FollowCTA() {
  return (
    <motion.section
      className="glass-strong relative overflow-hidden rounded-2xl border border-white/10 p-[clamp(1.25rem,3vw,2.5rem)]"
      variants={animations.itemVariants}
      whileHover={{ y: -4 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-slate-500/5"
        animate={{ opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-blue-300 text-sm font-semibold uppercase tracking-widest">
            <Zap className="h-4 w-4" />
            Follow the journey
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold text-white">
            Building, creating, and sharing in public.
          </h2>
          <p className="mt-3 max-w-2xl text-gray-400 leading-relaxed">
            Follow Maskid on X for videos, threads, product experiments, crypto ideas, and the journey toward becoming one of the biggest creator-builders on CT.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
          <a
            href={profile.socialLinks.x}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-3"
          >
            Follow on X
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={profile.socialLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-5 py-3 text-gray-200"
          >
            <Send className="h-4 w-4" />
            Telegram
          </a>
          <a
            href={profile.socialLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-5 py-3 text-gray-200"
          >
            <MessageCircle className="h-4 w-4" />
            Discord
          </a>
        </div>
      </div>
    </motion.section>
  )
}
