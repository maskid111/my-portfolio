'use client'

import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'
import { profile } from '@/lib/profile'

export function DevelopmentHero() {
  return (
    <section className="relative min-h-[30vh] sm:min-h-[36vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />
      <div className="absolute inset-x-8 top-8 bottom-8 rounded-2xl border border-white/5 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5" />

      <motion.div
        className="max-w-4xl relative z-10 text-center"
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={animations.itemVariants} className="space-y-6">
          <span className="eyebrow inline-block">Developer Portfolio</span>

          <h1 className="heading-section">
            Frontend, Web3, and product builds that ship.
          </h1>

          <p className="body-copy max-w-2xl mx-auto">
            A portfolio of completed websites, ecommerce platforms, decentralized apps, and current AI validator work through {profile.currentProject}.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
