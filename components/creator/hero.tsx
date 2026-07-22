'use client'

import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'
import { profile } from '@/lib/profile'

export function CreatorHero() {
  return (
    <section className="relative min-h-[30vh] sm:min-h-[36vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-violet-300/25 to-transparent" />
      <div className="absolute inset-x-8 top-8 bottom-8 rounded-2xl border border-white/5 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5" />

      <motion.div
        className="max-w-4xl relative z-10 text-center"
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={animations.itemVariants} className="space-y-6">
          <span className="eyebrow inline-block">Creator Portfolio</span>

          <h1 className="heading-section">
            I explain products, markets, and Web3 ideas for CT.
          </h1>

          <p className="body-copy max-w-2xl mx-auto">
            {profile.name} creates videos, threads, and written breakdowns across {profile.contentTopics.join(', ')} for teams and communities that need attention with substance.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
