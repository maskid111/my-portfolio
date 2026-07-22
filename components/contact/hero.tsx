'use client'

import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'
import { profile } from '@/lib/profile'

export function ContactHero() {
  return (
    <section className="relative min-h-[28vh] sm:min-h-[34vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-[clamp(1.5rem,3vw,2.5rem)] overflow-hidden">
      {/* Background accents */}
      <motion.div
        className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-violet-300/25 to-transparent"
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-x-8 top-8 bottom-8 rounded-2xl border border-white/5 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5"
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />

      {/* Animated accent elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-px h-40 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        className="max-w-4xl relative z-10 text-center"
        variants={animations.containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={animations.itemVariants} className="space-y-[clamp(1.5rem,3vw,2rem)]">
          <span className="eyebrow inline-block">Let&apos;s Connect</span>

          <h1 className="heading-section text-balance">
            Follow, collaborate, or build with Maskid.
          </h1>

          <p className="body-copy max-w-2xl mx-auto">
            Connect for {profile.contactFor.join(', ').toLowerCase()}, or follow the journey as Maskid builds in public on CT.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
