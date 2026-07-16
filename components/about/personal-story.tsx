'use client'

import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'
import { profile } from '@/lib/profile'

export function PersonalStory() {
  const paragraphs = [
    `${profile.name} is a video content creator, content writer, frontend developer, blockchain builder, graphic designer, technical analyst, and trader.`,
    `${profile.education}, building a personal brand around CT, Web3, frontend products, and creator-led storytelling.`,
    `${profile.tagline}. The mission is clear: ${profile.mission}`,
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="space-y-8"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg text-gray-400 leading-relaxed"
              variants={animations.fadeInUp}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
