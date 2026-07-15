'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { animations } from '@/lib/animations'
import { useState } from 'react'
import { Video, BookOpen, MessageSquare, Code2 } from 'lucide-react'

interface ContentItem {
  id: string
  title: string
  category: 'video' | 'article' | 'thread' | 'tutorial'
  thumbnail: string
  description: string
  engagement: number
  date: string
}

export function ContentShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Content' },
    { id: 'video', label: 'Videos', icon: <Video className="h-4 w-4" /> },
    { id: 'article', label: 'Articles', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'thread', label: 'Threads', icon: <MessageSquare className="h-4 w-4" /> },
    { id: 'tutorial', label: 'Tutorials', icon: <Code2 className="h-4 w-4" /> },
  ]

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Building Web3 Apps with Next.js',
      category: 'video',
      thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'Complete guide to integrating blockchain with modern web frameworks.',
      engagement: 2400,
      date: '2024-01-15',
    },
    {
      id: '2',
      title: 'The Future of Decentralized Web',
      category: 'article',
      thumbnail: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Exploring how Web3 is reshaping the internet landscape.',
      engagement: 1800,
      date: '2024-01-10',
    },
    {
      id: '3',
      title: 'Smart Contract Best Practices',
      category: 'tutorial',
      thumbnail: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: 'Essential patterns for writing secure and efficient Solidity code.',
      engagement: 3200,
      date: '2024-01-05',
    },
    {
      id: '4',
      title: 'AI & Machine Learning in Web Dev',
      category: 'thread',
      thumbnail: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      description: 'A deep dive into integrating AI APIs into web applications.',
      engagement: 2100,
      date: '2024-01-01',
    },
    {
      id: '5',
      title: 'React 19 Deep Dive',
      category: 'video',
      thumbnail: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      description: 'Exploring new features and improvements in React 19.',
      engagement: 2800,
      date: '2023-12-28',
    },
    {
      id: '6',
      title: 'TypeScript Best Practices',
      category: 'article',
      thumbnail: 'linear-gradient(135deg, #30b0fe 0%, #bce6ff 100%)',
      description: 'Advanced TypeScript patterns for scalable applications.',
      engagement: 2200,
      date: '2023-12-20',
    },
  ]

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Latest Content</h2>
          <p className="text-gray-400 mt-4">Curated collection of my best work across different formats</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-[clamp(0.75rem,1.5vw,1rem)] mb-[clamp(2rem,4vw,3rem)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
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
              <span className="w-[clamp(1rem,1.8vw,1.1rem)] h-[clamp(1rem,1.8vw,1.1rem)]">
                {category.icon}
              </span>
              <span className="hidden sm:inline">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Grid - 2 columns on mobile, 3 on tablet, 3+ on desktop */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,2.5vw,1.5rem)]"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredContent.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-strong rounded-[clamp(0.75rem,2vw,1rem)] overflow-hidden group hover-lift cursor-pointer flex flex-col"
                whileHover={{ y: -4 }}
              >
                {/* Thumbnail */}
                <div
                  className="h-[clamp(100px,40vw,180px)] bg-gradient-to-br relative overflow-hidden"
                  style={{ background: item.thumbnail }}
                >
                  <motion.div
                    className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-[clamp(0.75rem,2vw,1.5rem)] space-y-[clamp(0.75rem,1.5vw,1rem)] flex-grow flex flex-col">
                  <div className="flex items-start justify-between">
                    <h3 className="text-[clamp(0.85rem,2vw,1.125rem)] font-bold leading-tight flex-1 line-clamp-2">{item.title}</h3>
                  </div>

                  <p className="text-gray-400 text-[clamp(0.7rem,1.5vw,0.875rem)] line-clamp-2 flex-grow">{item.description}</p>

                  <div className="flex items-center justify-between text-[clamp(0.65rem,1.2vw,0.8rem)] text-gray-500 pt-[clamp(0.5rem,1vw,0.75rem)] border-t border-white/10">
                    <span className="truncate">{item.engagement.toLocaleString()} engaged</span>
                    <span className="text-right ml-2 flex-shrink-0">{new Date(item.date).toLocaleDateString('en', { month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
