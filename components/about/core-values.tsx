'use client'

import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'
import { Lightbulb, Users, Target, Zap } from 'lucide-react'

interface Value {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

export function CoreValues() {
  const values: Value[] = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries and exploring new technologies to create meaningful solutions.',
      color: 'blue',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'Building and nurturing a supportive community where everyone can learn and grow together.',
      color: 'purple',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Committed to delivering high-quality work in everything I create, from code to content.',
      color: 'pink',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Impact',
      description: 'Focused on creating work that makes a positive difference in people lives and careers.',
      color: 'yellow',
    },
  ]

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    yellow: 'from-yellow-500 to-yellow-600',
  }

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
          <span className="text-purple-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase">Values</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mt-[clamp(0.75rem,1.5vw,1rem)]">What Drives Me</h2>
        </motion.div>

        {/* Values Grid - 2 columns on mobile and tablet */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[clamp(1rem,2.5vw,1.5rem)]"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {values.map((value, index) => {
            const colorClass = colorClasses[value.color as keyof typeof colorClasses]
            return (
              <motion.div
                key={index}
                className="glass-strong rounded-[clamp(0.75rem,2vw,1rem)] p-[clamp(1.25rem,2.5vw,2rem)] hover-lift group relative overflow-hidden"
                variants={animations.itemVariants}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10 space-y-[clamp(0.75rem,1.5vw,1rem)]">
                  <motion.div
                    className={`inline-flex p-[clamp(0.5rem,1vw,0.75rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] bg-gradient-to-br ${colorClass} bg-opacity-20 text-${value.color}-400`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-[clamp(1.25rem,2vw,1.75rem)] h-[clamp(1.25rem,2vw,1.75rem)]">
                      {value.icon}
                    </div>
                  </motion.div>

                  <h3 className="text-[clamp(1.125rem,2.2vw,1.5rem)] font-bold">{value.title}</h3>
                  <p className="text-gray-400 text-[clamp(0.875rem,1.8vw,1rem)] leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
