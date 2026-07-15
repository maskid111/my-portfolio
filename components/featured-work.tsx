'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { animations } from '@/lib/animations'

interface FeaturedItem {
  title: string
  description: string
  category: string
  icon: string
}

export function FeaturedWork() {
  const featuredItems: FeaturedItem[] = [
    {
      title: 'BlockChain DApp',
      description: 'A fully decentralized application built on Ethereum with Web3 integration and smart contracts.',
      category: 'Project',
      icon: '⛓️',
    },
    {
      title: 'Building Web3 Series',
      description: 'Deep dive video series on blockchain development covering smart contracts, DeFi, and NFTs.',
      category: 'Video',
      icon: '🎥',
    },
    {
      title: 'Modern Web Dev Guide',
      description: 'Comprehensive technical article on latest web development practices and emerging technologies.',
      category: 'Article',
      icon: '📝',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Floating background elements */}
        <motion.div
          className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-30 pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="relative z-10"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div className="mb-[clamp(2rem,4vw,4rem)]" variants={animations.itemVariants}>
            <motion.span
              className="text-blue-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Featured Work
            </motion.span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mt-[clamp(0.75rem,2vw,1rem)] text-white text-balance">
              Projects, Videos & Articles
            </h2>
            <p className="text-gray-400 text-[clamp(0.875rem,2vw,1.125rem)] mt-[clamp(1rem,2vw,1.5rem)] max-w-2xl leading-relaxed">
              A curated selection of my best work across different mediums and technologies.
            </p>
          </motion.div>

          {/* Featured items grid - 2 on mobile, 3 on tablet+, centered for fewer items */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[clamp(0.75rem,2.5vw,2rem)] auto-cols-max place-items-center md:place-items-stretch mx-auto md:mx-0 w-full">
            {featuredItems.map((item, index) => (
              <motion.div
                key={index}
                className="group glass-strong rounded-[clamp(0.75rem,2vw,1.5rem)] p-[clamp(1rem,3vw,2rem)] hover-lift cursor-pointer relative overflow-hidden flex flex-col justify-between"
                custom={index}
                variants={animations.itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated glow on hover */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[clamp(0.75rem,2vw,1.5rem)] opacity-0 group-hover:opacity-30 blur-xl pointer-events-none transition-opacity duration-300 z-0"
                />

                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                />

                <div className="relative z-10">
                  {/* Icon with animation */}
                  <motion.div
                    className="text-[clamp(2.5rem,5vw,3.5rem)] mb-[clamp(0.75rem,2vw,1rem)] inline-block"
                    animate={{ rotate: [0, 10, -10, 0], y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Category badge with pulse */}
                  <motion.div
                    className="inline-block px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.5rem,1vw,0.625rem)] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/10 text-blue-300 text-[clamp(0.65rem,1.2vw,0.75rem)] font-semibold mb-[clamp(0.75rem,2vw,1rem)] border border-blue-500/30 backdrop-blur-sm"
                    whileHover={{ scale: 1.1, borderColor: 'rgba(59, 130, 246, 0.6)' }}
                    animate={{ borderColor: ['rgba(59, 130, 246, 0.3)', 'rgba(59, 130, 246, 0.5)', 'rgba(59, 130, 246, 0.3)'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {item.category}
                  </motion.div>

                  {/* Title with gradient hover */}
                  <h3 className="text-[clamp(1rem,2.5vw,1.5rem)] font-bold text-white mb-[clamp(0.75rem,1.5vw,1rem)] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-[clamp(0.75rem,1.8vw,0.95rem)] leading-relaxed mb-[clamp(0.75rem,2vw,1rem)]">
                    {item.description}
                  </p>
                </div>

                {/* Link with arrow animation */}
                <motion.div
                  className="flex items-center text-blue-400 font-semibold text-[clamp(0.75rem,1.8vw,0.95rem)] group-hover:text-blue-300 transition-colors cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <span>Explore</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    group-hover={{ x: 2 }}
                  >
                    <ArrowRight className="w-[clamp(1rem,2vw,1.25rem)] h-[clamp(1rem,2vw,1.25rem)]" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
