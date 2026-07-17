'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, CodeXml, GraduationCap, PenSquare, TrendingUp } from 'lucide-react'
import { XProfileCard } from './x-profile-card'
import { animations } from '@/lib/animations'
import { useState, useEffect } from 'react'
import { profile } from '@/lib/profile'

const heroProofPoints = [
  { label: 'Computer Science', value: 'BSc', icon: GraduationCap },
  { label: 'Videos, Articles, Threads', value: 'Creator', icon: PenSquare },
  { label: 'Frontend & Blockchain', value: 'Developer', icon: CodeXml },
  { label: 'Crypto & Forex', value: 'Trader', icon: TrendingUp },
]

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 10
      const y = (e.clientY / window.innerHeight) * 10
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const title = "Welcome to Maskid's Portfolio"
  const titleWords = title.split(' ')

  return (
    <section className="relative md:min-h-screen md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr] overflow-hidden flex md:flex-none flex-col justify-start md:justify-normal gap-0 sm:gap-8 md:gap-0">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -15,
          y: mousePosition.y * -15,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml?utf8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      </div>

      {/* Animated accent elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-px h-40 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent pointer-events-none"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      {/* Top Section: 50% on mobile, left column on desktop */}
      <motion.div
        className="md:flex-none md:h-auto flex min-h-[42dvh] md:min-h-0 flex-col justify-center md:items-center my-2 sm:my-0 py-0.5 sm:py-6 md:py-20 px-3 sm:px-6 lg:px-8 relative z-10"
        variants={animations.heroTextVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left column content */}
        <motion.div className="flex min-h-full w-full max-w-xl flex-1 flex-col justify-evenly gap-3 sm:gap-5 md:block md:min-h-0 md:flex-none md:space-y-8" variants={animations.itemVariants}>
          {/* Animated headline */}
          <div className="space-y-0.5 sm:space-y-1 md:space-y-4">
            <div className="flex flex-wrap gap-0.5 sm:gap-2 md:gap-3 items-baseline">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="text-[clamp(1.98rem,9.02vw,2.915rem)] md:text-[clamp(1.15rem,3.8vw,3.5rem)] font-bold leading-tight"
                  variants={animations.floatingVariants}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                >
                  {word === 'Future.' ? (
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Description */}
          <motion.p
            className="text-[clamp(0.82rem,3.2vw,1rem)] md:text-[clamp(0.7rem,1.8vw,1.125rem)] text-gray-400 leading-relaxed max-w-lg"
            variants={animations.itemVariants}
          >
            Creator, frontend developer, blockchain builder, and trader building in public across CT and Web3.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3"
            variants={animations.itemVariants}
          >
            {heroProofPoints.map((point, index) => {
              const Icon = point.icon

              return (
                <motion.div
                  key={point.label}
                  className="glass border border-white/10 rounded-lg px-2.5 py-2 sm:px-3 sm:py-2.5"
                  custom={index}
                  variants={animations.directionalItemVariants}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400 sm:h-4 sm:w-4" />
                    <div className="min-w-0">
                      <div className="text-[0.68rem] font-bold leading-tight text-white sm:text-xs md:text-sm">{point.value}</div>
                      <div className="mt-0.5 text-[0.58rem] leading-tight text-gray-400 sm:text-[0.68rem] md:text-xs">{point.label}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 md:gap-4 pt-0.5 sm:pt-2 md:pt-8"
            variants={animations.itemVariants}
          >
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <a
                href="/creator"
                className="flex w-full items-center justify-center glass hover-lift bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 h-8 sm:h-10 md:h-12 px-2.5 sm:px-5 md:px-8 font-semibold text-[clamp(0.65rem,1.6vw,1rem)] rounded-md sm:rounded-xl shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 sm:w-auto"
              >
                View My Work
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <ArrowRight className="ml-0.5 sm:ml-2 h-2.5 w-2.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                </motion.span>
              </a>
            </motion.div>
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <a
                href={profile.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center glass h-8 sm:h-10 md:h-12 px-2.5 sm:px-5 md:px-8 font-semibold border border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-md sm:rounded-xl text-[clamp(0.65rem,1.6vw,1rem)] transition-all duration-300 sm:w-auto"
              >
                Follow on X
              </a>
            </motion.div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            className="flex items-center gap-1 sm:gap-2 pt-0 sm:pt-1 md:pt-6"
            variants={animations.itemVariants}
          >
            <motion.div
              className="h-1 w-1 sm:h-2 sm:w-2 md:h-3 md:w-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[clamp(0.6rem,1vw,0.875rem)] text-gray-400">{profile.currentStatuses.join(' | ')}</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Section: 50% on mobile, right column on desktop - Profile card */}
      <motion.div
        className="md:flex-none md:h-auto flex flex-col justify-center items-center mt-4 pt-1 pb-0 sm:mt-0 sm:py-6 md:py-20 px-3 sm:px-6 lg:px-8 relative z-10"
        variants={animations.heroVisualVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex w-full max-w-sm justify-center md:max-w-none md:w-full"
        >
          <XProfileCard />
        </motion.div>
      </motion.div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </div>
      </motion.div>
    </section>
  )
}
