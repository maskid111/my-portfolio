'use client'

import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'
import { profile } from '@/lib/profile'

export function CreatorHero() {
  return (
    <section className="relative min-h-[30vh] sm:min-h-[36vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
      <div className="absolute inset-x-8 top-8 bottom-8 rounded-2xl border border-white/5 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />

      <motion.div
        className="max-w-4xl relative z-10 text-center"
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={animations.itemVariants} className="space-y-6">
          <span className="inline-block text-purple-400 font-semibold text-sm tracking-widest uppercase">Creator Portfolio</span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            I explain products, markets, and Web3 ideas for CT.
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {profile.name} creates videos, threads, and written breakdowns across {profile.contentTopics.join(', ')} for teams and communities that need attention with substance.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
