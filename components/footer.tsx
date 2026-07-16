'use client'

import { motion } from 'framer-motion'
import { Code2, Mail, Send, Share2 } from 'lucide-react'
import { profile } from '@/lib/profile'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Creator', href: '/creator' },
    { label: 'Development', href: '/development' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
  ]

  const socialLinks = [
    { Icon: Code2, label: 'GitHub', href: profile.socialLinks.github },
    { Icon: Share2, label: 'X', href: profile.socialLinks.x },
    { Icon: Mail, label: 'Email', href: profile.socialLinks.email },
    { Icon: Send, label: 'Telegram', href: profile.socialLinks.telegram },
  ]

  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {profile.tagline}. {profile.title}.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-2 rounded-lg hover-lift transition-colors hover:bg-white/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.Icon className="w-5 h-5 text-blue-400 hover:text-purple-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
