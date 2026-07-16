'use client'

import { motion } from 'framer-motion'
import { BarChart3, PenLine, Sparkles, Video } from 'lucide-react'
import { animations } from '@/lib/animations'

const strengths = [
  {
    title: 'Video-Led Storytelling',
    description: 'Short-form explainers that make crypto products, Web3 tools, and technical ideas feel clear and useful.',
    icon: Video,
  },
  {
    title: 'Threads That Teach',
    description: 'Structured writing for CT audiences: hooks, context, steps, and takeaways that people can act on.',
    icon: PenLine,
  },
  {
    title: 'Builder Perspective',
    description: 'Content shaped by real frontend and blockchain building experience, not surface-level commentary.',
    icon: Sparkles,
  },
  {
    title: 'Market Awareness',
    description: 'A creator voice that understands crypto culture, trading narratives, technical analysis, and timing.',
    icon: BarChart3,
  },
]

export function CreatorPitch() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-[clamp(2.5rem,5vw,5rem)]">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={animations.containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={animations.directionalItemVariants} custom={0} className="max-w-3xl">
          <span className="text-purple-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase">
            Creator Positioning
          </span>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-bold text-white">
            Content for teams that need clarity, trust, and attention.
          </h2>
          <p className="mt-4 text-[clamp(0.875rem,2vw,1.125rem)] leading-relaxed text-gray-400">
            Maskid combines creator instincts with builder context, turning technical products and crypto ideas into content that people can understand, remember, and share.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-[clamp(0.5rem,2vw,1.5rem)]">
          {strengths.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                variants={animations.directionalItemVariants}
                custom={index}
                className="glass-strong group rounded-xl border border-white/10 p-3 sm:p-5"
                whileHover={{ y: -6, scale: 1.03, rotate: index % 2 === 0 ? -1 : 1 }}
              >
                <motion.div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.25 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <h3 className="text-[0.8rem] font-bold text-white sm:text-base">{item.title}</h3>
                <p className="mt-2 text-[0.68rem] leading-relaxed text-gray-400 sm:text-sm">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
