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
            <span className="eyebrow">
              Latest Content
            </span>
            <h2 className="heading-section mt-[clamp(0.75rem,2vw,1rem)] text-white text-balance">
              Voice On X
            </h2>
            <p className="body-copy mt-[clamp(1rem,2vw,1.5rem)] max-w-3xl">
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
              className="btn-primary hover-lift w-full px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] text-center text-[clamp(0.875rem,2vw,1rem)] sm:w-auto"
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
