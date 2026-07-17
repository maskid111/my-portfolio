'use client'

import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'
import { allFeaturedTweets } from '@/lib/profile'
import { XLinkEmbed } from '@/components/x-link-embed'

export function LatestContent() {
  const latestContent = [
    allFeaturedTweets[0],
    allFeaturedTweets[4],
    allFeaturedTweets[1],
  ].filter(Boolean)

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10"
        >
          <motion.div className="mb-[clamp(2rem,4vw,4rem)]" variants={animations.itemVariants}>
            <span className="text-green-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase">
              Latest Content
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mt-[clamp(0.75rem,2vw,1rem)] text-white text-balance">
              Voice On X
            </h2>
            <p className="text-gray-400 text-[clamp(0.875rem,2vw,1.125rem)] mt-[clamp(1rem,2vw,1.5rem)] max-w-3xl leading-relaxed">
              A quick look at the videos and threads shaping Maskid&apos;s creator brand on CT.
            </p>
          </motion.div>

          <motion.div variants={animations.itemVariants} className="grid grid-cols-2 lg:grid-cols-3 gap-[clamp(0.5rem,2vw,2rem)]">
            {latestContent.map((item) => (
              <XLinkEmbed key={item.id} url={item.url} />
            ))}
          </motion.div>

          <motion.div className="mt-[clamp(2rem,4vw,4rem)] flex justify-center" variants={animations.itemVariants}>
            <motion.a
              href="/creator"
              className="w-full sm:w-auto px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] glass hover-lift font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center text-[clamp(0.875rem,2vw,1rem)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Contents
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
