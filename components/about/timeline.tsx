'use client'

import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'

interface TimelineEvent {
  year: string
  title: string
  description: string
  color: string
}

export function Timeline() {
  const events: TimelineEvent[] = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Started learning web development and fell in love with creating interactive experiences on the web.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      year: '2020',
      title: 'Content Creator',
      description: 'Launched YouTube channel and started writing technical articles to share knowledge with the community.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      year: '2021',
      title: 'Web3 Pioneer',
      description: 'Dove deep into blockchain development and launched first DApp project, exploring the future of decentralized web.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      year: '2023',
      title: 'Community Leader',
      description: 'Grew community to 50K+ followers and launched multiple educational platforms to help others learn.',
      color: 'from-green-500 to-green-600',
    },
    {
      year: 'Today',
      title: 'Building the Future',
      description: 'Continuing to create, innovate, and inspire. Currently working on several exciting projects that push technological boundaries.',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section className="py-[clamp(2.5rem,5vw,5rem)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-[clamp(2rem,4vw,4rem)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase">Journey</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mt-[clamp(0.75rem,1.5vw,1rem)]">My Timeline</h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-[clamp(2rem,3vw,2.5rem)] relative">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-[clamp(0.5rem,-2.5vw,0.75rem)] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`flex gap-[clamp(1.5rem,3vw,2rem)] md:gap-0 md:relative md:mb-[clamp(2rem,3vw,2.5rem)] ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline dot with glow */}
              <motion.div
                className={`absolute left-[clamp(-0.75rem,-2.5vw,-0.25rem)] md:left-1/2 top-0 md:top-1/2 w-[clamp(0.875rem,1.8vw,1.125rem)] h-[clamp(0.875rem,1.8vw,1.125rem)] rounded-full bg-gradient-to-br ${event.color} transform md:-translate-x-1/2 md:-translate-y-1/2 z-20 ring-4 ring-background`}
                whileHover={{ scale: 1.4 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-full`}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ opacity: 0.3 }}
                />
              </motion.div>

              {/* Content */}
              <div className={`pl-[clamp(2rem,4vw,3rem)] md:pl-0 md:w-1/2 ${index % 2 === 1 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <motion.div
                  className="glass-strong rounded-[clamp(0.75rem,2vw,1rem)] p-[clamp(1rem,2vw,1.5rem)] group hover:bg-white/10 transition-colors"
                  whileHover={{ y: -4 }}
                >
                  <span className="text-blue-400 font-bold text-[clamp(1rem,2vw,1.25rem)]">{event.year}</span>
                  <h3 className="text-[clamp(1.1rem,2.2vw,1.5rem)] font-bold mt-[clamp(0.5rem,1vw,0.75rem)] text-white">{event.title}</h3>
                  <p className="text-gray-400 mt-[clamp(0.5rem,1vw,0.75rem)] text-[clamp(0.85rem,1.8vw,1rem)] leading-relaxed">{event.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
