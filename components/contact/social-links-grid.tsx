'use client'

import { motion } from 'framer-motion'
import { Mail, Send, Code2, Zap, MessageCircle } from 'lucide-react'
import { animations } from '@/lib/animations'
import { profile } from '@/lib/profile'

interface SocialLink {
  id: string
  name: string
  username?: string
  description: string
  icon: React.ReactNode
  href: string
  color: string
  bgGradient: string
}

export function SocialLinksGrid() {
  const socialLinks: SocialLink[] = [
    {
      id: 'x',
      name: 'X (Twitter)',
      username: profile.xHandle,
      description: 'Videos, threads, CT updates, and building in public',
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />,
      href: profile.socialLinks.x,
      color: 'text-white',
      bgGradient: 'from-slate-600 to-slate-900',
    },
    {
      id: 'github',
      name: 'GitHub',
      username: '@maskid111',
      description: 'Frontend and blockchain projects',
      icon: <Code2 className="w-8 h-8 md:w-10 md:h-10" />,
      href: profile.socialLinks.github,
      color: 'text-gray-200',
      bgGradient: 'from-gray-700 to-gray-900',
    },
    {
      id: 'telegram',
      name: 'Telegram',
      username: profile.telegramHandle,
      description: 'Reach out for gigs, collaborations, mentorship, and training',
      icon: <Send className="w-8 h-8 md:w-10 md:h-10" />,
      href: profile.socialLinks.telegram,
      color: 'text-blue-400',
      bgGradient: 'from-blue-600 to-sky-900',
    },
    {
      id: 'discord',
      name: 'Discord',
      username: profile.discordHandle,
      description: 'Contact handle for collaborations and community conversations',
      icon: <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />,
      href: profile.socialLinks.discord,
      color: 'text-indigo-300',
      bgGradient: 'from-indigo-600 to-violet-950',
    },
    {
      id: 'email',
      name: 'Email',
      username: profile.email,
      description: 'Drop me an email directly',
      icon: <Mail className="w-8 h-8 md:w-10 md:h-10" />,
      href: profile.socialLinks.email,
      color: 'text-blue-100',
      bgGradient: 'from-slate-700 to-blue-950',
    },
  ]

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[clamp(0.75rem,2.5vw,2rem)]"
      variants={animations.containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative overflow-hidden rounded-[clamp(0.75rem,2vw,1.25rem)] bg-gradient-to-br ${link.bgGradient} p-[clamp(1rem,2.5vw,2rem)] min-h-[clamp(160px,50vw,240px)] flex flex-col justify-between cursor-pointer transition-all duration-300`}
          custom={index}
          variants={animations.directionalItemVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Animated background overlay */}
          <motion.div
            className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon with rotation animation */}
            <motion.div
              className={`${link.color} mb-[clamp(0.75rem,1.5vw,1rem)] inline-block p-[clamp(0.5rem,1.2vw,0.75rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] bg-white/10 group-hover:bg-white/20 transition-all duration-300`}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
            >
              <div className="w-[clamp(1.25rem,3vw,1.75rem)] h-[clamp(1.25rem,3vw,1.75rem)]">
                {link.icon}
              </div>
            </motion.div>

            {/* Title and username */}
            <h3 className="text-[clamp(0.95rem,2vw,1.375rem)] font-bold text-white mb-[clamp(0.25rem,0.5vw,0.375rem)] group-hover:text-white transition-colors leading-tight">
              {link.name}
            </h3>
            {link.username && (
              <p className="text-[clamp(0.65rem,1.5vw,0.875rem)] text-white/70 mb-[clamp(0.5rem,1vw,0.75rem)] font-medium line-clamp-1">
                {link.username}
              </p>
            )}

            {/* Description */}
            <p className="text-[clamp(0.7rem,1.4vw,0.9rem)] text-white/80 leading-tight line-clamp-2">
              {link.description}
            </p>
          </div>

          {/* Bottom arrow indicator */}
          <motion.div
            className="relative z-10 flex items-center gap-[clamp(0.375rem,0.8vw,0.5rem)] text-white/70 group-hover:text-white transition-colors mt-[clamp(1rem,2vw,1.5rem)]"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-[clamp(0.65rem,1.2vw,0.8rem)] font-semibold hidden sm:block">Visit</span>
            <span className="text-[clamp(0.75rem,1.5vw,1rem)]">→</span>
          </motion.div>

          {/* Animated border on hover */}
          <motion.div
            className="absolute inset-0 rounded-[clamp(0.75rem,2vw,1.25rem)] border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.5 }}
          />
        </motion.a>
      ))}
    </motion.div>
  )
}
