'use client'

import { motion } from 'framer-motion'
import { Code2, BookOpen, Mail, Send, MessageCircle } from 'lucide-react'

interface SocialLink {
  icon: React.ReactNode
  label: string
  href: string
  color: string
}

export function SocialLinks() {
  const links: SocialLink[] = [
    {
      icon: <Code2 className="h-5 w-5" />,
      label: 'GitHub',
      href: '#',
      color: 'from-gray-600 to-gray-700',
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      label: 'Blog',
      href: '#',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      href: 'mailto:hello@maskid.dev',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: <Send className="h-5 w-5" />,
      label: 'Telegram',
      href: '#',
      color: 'from-blue-400 to-blue-500',
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'Discord',
      href: '#',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <motion.div
      className="glass-strong rounded-xl p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-bold mb-6">Connect With Me</h3>

      <div className="space-y-3">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            className={`flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all`}
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
          >
            <div className={`p-2 rounded-lg bg-gradient-to-br ${link.color} bg-opacity-20`}>
              <div className={`text-transparent bg-gradient-to-r ${link.color} bg-clip-text`}>
                {link.icon}
              </div>
            </div>
            <span className="flex-1 font-medium text-gray-300">{link.label}</span>
            <span className="text-gray-500 text-sm">→</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
