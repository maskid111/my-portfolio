'use client'

import { motion } from 'framer-motion'
import { Blocks, Code2, Database, ShieldCheck } from 'lucide-react'
import { animations } from '@/lib/animations'

const capabilities = [
  {
    title: 'Frontend Products',
    description: 'Clean, responsive interfaces built for real users, clear flows, and polished presentation.',
    icon: Code2,
  },
  {
    title: 'Blockchain Apps',
    description: 'Onchain product thinking across escrow, mapping, AI evaluation, and decentralized ownership.',
    icon: Blocks,
  },
  {
    title: 'Product Systems',
    description: 'From idea to working demo: structure, flows, states, and deployment-ready delivery.',
    icon: Database,
  },
  {
    title: 'Trust & Utility',
    description: 'Projects focused on practical use cases, user confidence, and visible product value.',
    icon: ShieldCheck,
  },
]

export function DeveloperPitch() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-[clamp(2.5rem,5vw,5rem)]">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={animations.containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={animations.itemVariants} className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          <motion.div variants={animations.directionalItemVariants} custom={0}>
            <span className="eyebrow">
              Builder Profile
            </span>
            <h2 className="heading-section mt-3 text-white">
              I build usable products with a Web3-native edge.
            </h2>
            <p className="mt-4 text-[clamp(0.875rem,2vw,1.125rem)] leading-relaxed text-gray-400">
              From ecommerce and student housing platforms to decentralized escrow and mapping tools, the work is practical, shipped, and built to be experienced.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  className="glass-strong rounded-xl border border-white/10 p-3 sm:p-5"
                  variants={animations.directionalItemVariants}
                  custom={index + 1}
                  whileHover={{ y: -6, scale: 1.03, rotate: index % 2 === 0 ? -1 : 1 }}
                >
                  <motion.div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-300/20 bg-blue-500/10 text-blue-200"
                    animate={{ rotate: [0, 2, 0], y: [0, -3, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: index * 0.25 }}
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
      </motion.div>
    </section>
  )
}
