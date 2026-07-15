'use client'

import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'
import { Coffee, Music, BookOpen, Rocket } from 'lucide-react'

interface Fact {
  icon: React.ReactNode
  title: string
  description: string
}

export function FunFacts() {
  const facts: Fact[] = [
    {
      icon: <Coffee className="h-6 w-6" />,
      title: 'Coffee Fueled',
      description: 'Most of my best code and creative ideas come after a good cup of coffee (or three).',
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: 'Music Enthusiast',
      description: 'I code to lo-fi beats and enjoy discovering new artists while building projects.',
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Lifelong Learner',
      description: 'Always exploring new technologies, frameworks, and methodologies to stay ahead.',
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: 'Tech Optimist',
      description: 'Believe technology can solve real-world problems and make life better for everyone.',
    },
  ]

  return (
    <section className="py-[clamp(2.5rem,5vw,5rem)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-[clamp(2rem,4vw,4rem)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-pink-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase">Fun Facts</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mt-[clamp(0.75rem,1.5vw,1rem)]">Beyond the Code</h2>
        </motion.div>

        {/* Facts Grid - 2 columns on mobile and tablet */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[clamp(1rem,2.5vw,1.5rem)]"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              className="glass-strong rounded-[clamp(0.75rem,2vw,1rem)] p-[clamp(1.25rem,2.5vw,2rem)] hover-lift group relative overflow-hidden"
              variants={animations.itemVariants}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-[clamp(0.75rem,1.5vw,1rem)]">
                <motion.div
                  className="inline-flex p-[clamp(0.5rem,1vw,0.75rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] bg-gradient-to-br from-pink-500 to-purple-600 bg-opacity-20 text-pink-400"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <div className="w-[clamp(1rem,1.8vw,1.25rem)] h-[clamp(1rem,1.8vw,1.25rem)]">
                    {fact.icon}
                  </div>
                </motion.div>

                <h3 className="text-[clamp(1rem,2vw,1.25rem)] font-bold">{fact.title}</h3>
                <p className="text-gray-400 text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed">{fact.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
