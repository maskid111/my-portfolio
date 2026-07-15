'use client'

import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'

export function PersonalStory() {
  const paragraphs = [
    "I started as a curious kid fascinated by how things work. This curiosity evolved into a passion for technology, leading me to explore web development, blockchain, and content creation.",
    "My journey combines three pillars: building innovative solutions, sharing knowledge through content, and fostering a community of learners. Each project, tutorial, and insight I share is a stepping stone toward democratizing technology.",
    "Today, I focus on creating meaningful work that impacts others. Whether it's through code, video tutorials, or written guides, my goal is to make complex technologies accessible and inspire the next generation of builders."
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
