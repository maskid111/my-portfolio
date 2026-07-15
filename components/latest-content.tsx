'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Clock, Play } from 'lucide-react'
import { animations } from '@/lib/animations'

interface ContentItem {
  id: string
  title: string
  description: string
  date: string
  icon: string
  type: 'tweet' | 'video' | 'article'
  engagement: {
    likes: number
    comments: number
  }
}

export function LatestContent() {
  // Only keep latest 3 (one of each type)
  const latestContent: ContentItem[] = [
    {
      id: '1',
      title: 'Just launched my new AI analytics project',
      description: 'Excited to share what I\'ve been building for the past 3 months. Real-time analytics powered by cutting-edge machine learning.',
      date: '2 days ago',
      icon: '💻',
      type: 'tweet',
      engagement: { likes: 2400, comments: 380 },
    },
    {
      id: 'v1',
      title: 'Building a Full-Stack Web3 App',
      description: '2-hour tutorial on building a complete decentralized application with smart contracts and frontend.',
      date: '1 week ago',
      icon: '🎥',
      type: 'video',
      engagement: { likes: 5600, comments: 920 },
    },
    {
      id: 'a1',
      title: 'Modern Web Development Best Practices',
      description: 'A comprehensive guide to modern web development in 2024. Covering frameworks, tools, and architectural patterns.',
      date: '3 days ago',
      icon: '📚',
      type: 'article',
      engagement: { likes: 2100, comments: 340 },
    },
  ]

  const ContentCard = ({ item, index }: { item: ContentItem; index: number }) => (
    <motion.div
      className="group relative overflow-hidden rounded-[clamp(0.75rem,2vw,1.5rem)] glass-strong backdrop-blur-xl cursor-pointer"
      custom={index}
      variants={animations.itemVariants}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-[clamp(1rem,2.5vw,2rem)] h-full flex flex-col">
        {/* Top section: icon, type badge, date */}
        <div className="flex items-start justify-between mb-[clamp(0.75rem,1.5vw,1rem)]">
          <motion.span
            className="text-[clamp(2rem,4vw,3rem)]"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
          >
            {item.icon}
          </motion.span>
          <div className="flex items-center gap-[clamp(0.5rem,1vw,0.75rem)]">
            <span className="inline-flex items-center gap-1 px-[clamp(0.5rem,1.2vw,0.75rem)] py-[clamp(0.25rem,0.6vw,0.375rem)] rounded-full bg-white/10 text-white text-[clamp(0.55rem,1vw,0.7rem)] font-semibold uppercase tracking-wider">
              {item.type}
            </span>
            <span className="text-[clamp(0.55rem,1vw,0.7rem)] text-gray-400 flex items-center gap-1 whitespace-nowrap">
              <Clock className="w-[clamp(0.75rem,1.5vw,1rem)] h-[clamp(0.75rem,1.5vw,1rem)]" />
              {item.date}
            </span>
          </div>
        </div>

        {/* Title with gradient hover */}
        <h4 className="text-[clamp(0.9rem,2vw,1.25rem)] font-bold text-white mb-[clamp(0.5rem,1.2vw,0.75rem)] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
          {item.title}
        </h4>

        {/* Description */}
        <p className="text-[clamp(0.7rem,1.5vw,0.9rem)] text-gray-400 mb-[clamp(1rem,1.5vw,1.5rem)] line-clamp-2 flex-grow">
          {item.description}
        </p>

        {/* Engagement stats with hover animation */}
        <div className="flex gap-[clamp(0.75rem,1.5vw,1rem)] pt-[clamp(0.5rem,1vw,0.75rem)] border-t border-white/10">
          <motion.button
            className="flex items-center gap-[clamp(0.375rem,0.8vw,0.5rem)] text-gray-400 hover:text-pink-400 transition-colors text-[clamp(0.65rem,1.2vw,0.875rem)] font-medium group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-[clamp(0.875rem,1.8vw,1rem)] h-[clamp(0.875rem,1.8vw,1rem)] group-hover:fill-pink-400 transition-all" />
            <span>{(item.engagement.likes / 1000).toFixed(1)}K</span>
          </motion.button>
          <motion.button
            className="flex items-center gap-[clamp(0.375rem,0.8vw,0.5rem)] text-gray-400 hover:text-blue-400 transition-colors text-[clamp(0.65rem,1.2vw,0.875rem)] font-medium group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-[clamp(0.875rem,1.8vw,1rem)] h-[clamp(0.875rem,1.8vw,1rem)] group-hover:stroke-blue-400" />
            <span>{item.engagement.comments}</span>
          </motion.button>
          <motion.button
            className="flex items-center gap-[clamp(0.375rem,0.8vw,0.5rem)] text-gray-400 hover:text-green-400 transition-colors text-[clamp(0.65rem,1.2vw,0.875rem)] font-medium ml-auto group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="w-[clamp(0.875rem,1.8vw,1rem)] h-[clamp(0.875rem,1.8vw,1rem)] group-hover:stroke-green-400" />
          </motion.button>
        </div>
      </div>

      {/* Video play icon indicator */}
      {item.type === 'video' && (
        <motion.div
          className="absolute top-[clamp(0.5rem,1.2vw,1rem)] right-[clamp(0.5rem,1.2vw,1rem)] bg-white/20 backdrop-blur p-[clamp(0.375rem,0.8vw,0.5rem)] rounded-full group-hover:bg-white/30 transition-all"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Play className="w-[clamp(1rem,1.8vw,1.25rem)] h-[clamp(1rem,1.8vw,1.25rem)] text-white fill-white" />
        </motion.div>
      )}
    </motion.div>
  )

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Floating background elements */}
        <motion.div
          className="absolute -top-32 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10"
        >
          {/* Section header */}
          <motion.div className="mb-[clamp(2rem,4vw,4rem)]" variants={animations.itemVariants}>
            <motion.span
              className="text-green-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Latest Content
            </motion.span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mt-[clamp(0.75rem,2vw,1rem)] text-white text-balance">
              What I'm Creating Right Now
            </h2>
            <p className="text-gray-400 text-[clamp(0.875rem,2vw,1.125rem)] mt-[clamp(1rem,2vw,1.5rem)] max-w-3xl leading-relaxed">
              My latest tweets, videos, and articles. Follow for more insights on web development, blockchain, and the future of technology.
            </p>
          </motion.div>

          {/* Content grid - 2 on mobile, 3 on tablet+ */}
          <motion.div
            variants={animations.itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-[clamp(0.75rem,2.5vw,2rem)]"
          >
            {latestContent.map((item, index) => (
              <ContentCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>

          {/* CTA with responsive sizing */}
          <motion.div className="mt-[clamp(2rem,4vw,4rem)] flex flex-col sm:flex-row justify-center items-center gap-[clamp(1rem,2vw,1.5rem)]" variants={animations.itemVariants}>
            <motion.a
              href="#"
              className="w-full sm:w-auto px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] glass hover-lift font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center text-[clamp(0.875rem,2vw,1rem)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Content
            </motion.a>
            <motion.a
              href="#"
              className="w-full sm:w-auto px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] glass border border-white/20 hover-lift font-semibold text-white text-center hover:border-white/40 transition-colors text-[clamp(0.875rem,2vw,1rem)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Follow on Social
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
