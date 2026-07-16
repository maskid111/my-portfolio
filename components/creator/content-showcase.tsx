'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MessageSquareText, Play } from 'lucide-react'
import { allFeaturedTweets, featuredThreads, featuredVideos, profile } from '@/lib/profile'
import { XLinkEmbed } from '@/components/x-link-embed'

export function ContentShowcase() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'video' | 'thread'>('all')

  const categories = [
    { id: 'all' as const, label: 'All Content' },
    { id: 'video' as const, label: 'Videos', icon: Play },
    { id: 'thread' as const, label: 'Threads', icon: MessageSquareText },
  ]

  const contentItems = allFeaturedTweets.map((item) => ({
    ...item,
    category: item.type.toLowerCase() as 'video' | 'thread',
  }))

  const filteredContent = activeCategory === 'all'
    ? contentItems
    : contentItems.filter(item => item.category === activeCategory)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Featured X Content</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Selected videos and threads that show Maskid&apos;s voice, research, storytelling, and ability to make technical ideas easier to follow.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-[clamp(0.75rem,1.5vw,1rem)] mb-[clamp(2rem,4vw,3rem)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map(category => {
            const Icon = category.icon

            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.5rem,1vw,0.625rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] font-medium transition-all duration-300 flex items-center gap-[clamp(0.375rem,0.8vw,0.5rem)] text-[clamp(0.7rem,1.4vw,0.9rem)] ${
                  activeCategory === category.id
                    ? 'glass-strong bg-blue-500/20 border-blue-500/50 text-blue-300'
                    : 'glass border-white/10 text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{category.label}</span>
              </motion.button>
            )
          })}
        </motion.div>

        <motion.div className="grid grid-cols-2 lg:grid-cols-3 gap-[clamp(0.5rem,2vw,1.5rem)]" layout>
          <AnimatePresence mode="wait">
            {filteredContent.map(item => {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <XLinkEmbed url={item.url} />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
