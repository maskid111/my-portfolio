'use client'

import { motion } from 'framer-motion'
import { Code2, Mail, MessageCircle, Send, Zap } from 'lucide-react'
import { profile } from '@/lib/profile'

export function SocialLinks() {
  const links = [
    { icon: Code2, label: 'GitHub', href: profile.socialLinks.github, color: 'from-gray-600 to-gray-700' },
    { icon: Zap, label: 'X', href: profile.socialLinks.x, color: 'from-blue-500 to-blue-600' },
    { icon: Mail, label: 'Email', href: profile.socialLinks.email, color: 'from-red-500 to-red-600' },
    { icon: Send, label: 'Telegram', href: profile.socialLinks.telegram, color: 'from-blue-400 to-blue-500' },
    { icon: MessageCircle, label: 'Discord', href: profile.socialLinks.discord, color: 'from-purple-500 to-purple-600' },
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
        {links.map((link) => {
          const Icon = link.icon

          return (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
            >
              <div className={`p-2 rounded-lg bg-gradient-to-br ${link.color} bg-opacity-20`}>
                <Icon className="h-5 w-5 text-blue-300" />
              </div>
              <span className="flex-1 font-medium text-gray-300">{link.label}</span>
              <span className="text-gray-500 text-sm">Open</span>
            </motion.a>
          )
        })}
      </div>
    </motion.div>
  )
}
