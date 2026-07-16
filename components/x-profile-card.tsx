'use client'

import { motion } from 'framer-motion'
import { Code2, BookOpen, Zap, Send, MessageCircle, Heart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { profile } from '@/lib/profile'
import { fallbackXProfile, type XProfile } from '@/lib/x-profile'

export function XProfileCard() {
  const [xProfile, setXProfile] = useState<XProfile>(fallbackXProfile)

  useEffect(() => {
    let isMounted = true

    fetch('/api/x-profile')
      .then((response) => response.json())
      .then((data: XProfile) => {
        if (isMounted) {
          setXProfile(data)
        }
      })
      .catch(() => {
        if (isMounted) {
          setXProfile(fallbackXProfile)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const socialIcons = [
    { Icon: Code2, label: 'GitHub', href: profile.socialLinks.github },
    { Icon: BookOpen, label: 'X Threads', href: profile.socialLinks.x },
    { Icon: Zap, label: 'Content', href: profile.socialLinks.x },
    { Icon: Send, label: 'Telegram', href: profile.socialLinks.telegram },
    { Icon: MessageCircle, label: 'Discord', href: profile.socialLinks.discord },
  ]
  return (
    <motion.div
      className="glass-strong rounded-2xl overflow-hidden w-full max-w-sm md:max-w-md"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Cover */}
      <div className="h-18 sm:h-32 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 relative overflow-hidden">
        {xProfile.bannerUrl && (
          <img
            src={xProfile.bannerUrl}
            alt={`${xProfile.name} X banner`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 top-1 bottom-0 bg-gradient-to-br from-blue-400/20 to-transparent" />
      </div>

      {/* Profile content */}
      <div className="px-5 sm:px-6 py-3 sm:py-6">
        <motion.div
          className="relative z-10 flex justify-center mb-2 sm:mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 -mt-10 sm:-mt-16 ring-4 ring-background flex items-center justify-center text-white font-bold text-xl sm:text-2xl overflow-hidden">
            {xProfile.profileImageUrl ? (
              <img
                src={xProfile.profileImageUrl}
                alt={`${xProfile.name} profile photo`}
                className="h-full w-full object-cover"
              />
            ) : (
              <span>{xProfile.name.charAt(0)}</span>
            )}
          </div>
        </motion.div>

        {/* Name and username */}
        <motion.h3
          className="text-lg sm:text-xl font-bold text-center text-white mb-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {xProfile.name}
          {xProfile.verified && <span className="ml-1 text-blue-400">✓</span>}
        </motion.h3>

        <motion.p
          className="text-center text-gray-500 text-sm mb-1.5 sm:mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {xProfile.handle}
        </motion.p>

        {/* Bio */}
        <motion.p
          className="text-center text-gray-300 text-sm mt-2 mb-3 sm:mb-6 leading-relaxed line-clamp-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          {xProfile.description}
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-3 mb-3 sm:mb-6 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {socialIcons.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-2.5 rounded-full hover-lift transition-colors hover:bg-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
            >
              <social.Icon className="w-5 h-5 text-blue-400" />
            </motion.a>
          ))}
        </motion.div>

        {/* Engagement stats */}
        <motion.div
          className="flex justify-between pt-2.5 sm:pt-4 border-t border-white/10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <div className="flex-1 text-center py-1.5 sm:py-2">
            <div className="text-gray-400 text-xs mb-0.5">Status</div>
            <div className="flex items-center justify-center gap-1 text-pink-400 font-semibold text-sm">
              <Heart className="w-4 h-4" />
              <span>Open</span>
            </div>
          </div>
          <div className="w-px bg-white/10" />
          <div className="flex-1 text-center py-1.5 sm:py-2">
            <div className="text-gray-400 text-xs mb-0.5">Focus</div>
            <div className="flex items-center justify-center gap-1 text-blue-400 font-semibold text-sm">
              <MessageCircle className="w-4 h-4" />
              <span>CT</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
