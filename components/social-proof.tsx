'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FolderKanban, CodeXml, PenSquare, Zap } from 'lucide-react'
import { animations } from '@/lib/animations'

interface Stat {
  label: string
  value: string
  icon: React.ReactNode
  color: string
}

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = target / 50

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [target])

  return <span>{count}</span>
}

export function SocialProof() {
  const stats: Stat[] = [
    {
      label: 'Projects Built',
      value: '42',
      icon: <FolderKanban className="h-8 w-8 text-blue-400" />,
      color: 'from-blue-500 to-purple-600',
    },
    {
      label: 'Content Created',
      value: '180+',
      icon: <CodeXml className="h-8 w-8 text-purple-400" />,
      color: 'from-purple-500 to-pink-600',
    },
    {
      label: 'Community Size',
      value: '50K+',
      icon: <PenSquare className="h-8 w-8 text-pink-400" />,
      color: 'from-pink-500 to-red-600',
    },
    {
      label: 'Tech Explored',
      value: '20+',
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      color: 'from-yellow-500 to-orange-600',
    },
  ]



  return (
    <section className="py-[clamp(2.5rem,5vw,5rem)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Background elements */}
        <motion.div
          className="absolute -top-48 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-30 pointer-events-none transform -translate-x-1/2"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="relative z-10"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div className="text-center mb-[clamp(2rem,4vw,4rem)]" variants={animations.itemVariants}>
            <span className="text-pink-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase">By The Numbers</span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mt-[clamp(0.75rem,1.5vw,1rem)] text-white text-balance">
              Social Proof & Impact
            </h2>
            <p className="text-gray-400 text-[clamp(0.875rem,2vw,1.125rem)] mt-[clamp(1rem,2vw,1.5rem)] max-w-2xl mx-auto">
              Metrics that showcase the journey and impact built in public
            </p>
          </motion.div>

          {/* Stats grid - responsive 2-4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[clamp(0.75rem,2.5vw,2rem)]">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-strong rounded-[clamp(0.75rem,2vw,1rem)] p-[clamp(1rem,2.5vw,1.5rem)] hover-lift relative overflow-hidden group"
                custom={index}
                variants={animations.itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                />

                {/* Animated glow on hover */}
                <motion.div
                  className={`absolute -inset-2 bg-gradient-to-br ${stat.color} rounded-[clamp(0.75rem,2vw,1rem)] opacity-0 group-hover:opacity-20 blur-xl pointer-events-none transition-opacity duration-300 z-0`}
                />

                <div className="relative z-10 space-y-[clamp(0.75rem,1.5vw,1rem)]">
                  {/* Icon with animation */}
                  <motion.div
                    className="w-[clamp(2rem,4vw,2.5rem)] h-[clamp(2rem,4vw,2.5rem)]"
                    animate={{ rotate: [0, 10, -10, 0], y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Value with pulsing animation */}
                  <div className="flex items-baseline gap-[clamp(0.25rem,0.5vw,0.5rem)]">
                    <motion.span
                      className="text-[clamp(2rem,4vw,2.5rem)] font-bold text-white leading-none"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    >
                      <AnimatedCounter target={parseInt(stat.value)} />
                    </motion.span>
                    {stat.value.includes('+') && (
                      <motion.span
                        className="text-[clamp(1.25rem,2.5vw,1.5rem)] text-gray-400 font-semibold"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                      >
                        +
                      </motion.span>
                    )}
                  </div>

                  {/* Label */}
                  <p className="text-gray-400 text-[clamp(0.7rem,1.5vw,0.875rem)] font-medium leading-tight">{stat.label}</p>

                  {/* Animated border */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r ${stat.color}`}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: '100%', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial section */}
          <motion.div
            className="mt-[clamp(2rem,4vw,4rem)]"
            variants={animations.itemVariants}
          >
            <motion.div
              className="glass-strong rounded-[clamp(0.75rem,2vw,1.25rem)] p-[clamp(1.5rem,3vw,3rem)] border-l-4 border-blue-500 relative overflow-hidden group"
              whileHover={{ y: -4 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Animated accent */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                <p className="text-[clamp(1rem,2.2vw,1.375rem)] text-gray-300 italic leading-relaxed">
                  "What started as a passion for building has evolved into a community of thousands learning and creating together. Every project, every tutorial, every line of code brings us closer to the future of technology."
                </p>
                <motion.p
                  className="text-blue-400 font-semibold mt-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.875rem,1.8vw,1rem)]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  — Maskid
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
