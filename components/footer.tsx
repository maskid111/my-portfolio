'use client'

import { motion } from 'framer-motion'
import { Mail, Send, Code2, Share2 } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const socialLinks = [
    { Icon: Code2, label: 'GitHub', href: '#' },
    { Icon: Share2, label: 'Blog', href: '#' },
    { Icon: Mail, label: 'Email', href: 'mailto:hello@maskid.dev' },
    { Icon: Send, label: 'Telegram', href: '#' },
  ]

  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-2">Maskid</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the future with code, creativity, and curiosity.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Work', 'Blog', 'About', 'Contact'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="glass p-2 rounded-lg hover-lift transition-colors hover:bg-white/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.Icon className="w-5 h-5 text-blue-400 hover:text-purple-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/10 py-6"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} Maskid. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
