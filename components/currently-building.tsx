'use client'

import { motion } from 'framer-motion'
import { Zap, Code2, Lightbulb } from 'lucide-react'

export function CurrentlyBuilding() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const activities = [
    { icon: Code2, text: 'Building an AI-powered analytics platform' },
    { icon: Lightbulb, text: 'Exploring zero-knowledge proofs in web3' },
    { icon: Zap, text: 'Creating educational blockchain tutorials' },
  ]

  return (
    <section className="py-[clamp(2.5rem,5vw,5rem)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-30 pointer-events-none"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div className="mb-[clamp(2rem,4vw,3rem)]" variants={itemVariants}>
            <span className="text-purple-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase">Current Status</span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mt-[clamp(0.75rem,1.5vw,1rem)] text-white">
              Currently Building
            </h2>
          </motion.div>

          {/* Main status card */}
          <motion.div
            className="glass-strong rounded-[clamp(0.75rem,2vw,1.5rem)] p-[clamp(1.5rem,3.5vw,3rem)] hover-lift relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            {/* Animated glow on hover */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-[clamp(0.75rem,2vw,1.5rem)] opacity-0 group-hover:opacity-30 blur-xl pointer-events-none transition-opacity duration-300 z-0"
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,3vw,2rem)]">
              {/* Current Project */}
              <motion.div className="flex flex-col" variants={itemVariants}>
                <div className="text-purple-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase mb-[clamp(0.5rem,1vw,0.75rem)]">
                  Main Project
                </div>
                <h3 className="text-[clamp(1.25rem,3vw,1.875rem)] font-bold text-white mb-[clamp(0.75rem,1.5vw,1rem)]">
                  AI Analytics
                </h3>
                <p className="text-gray-400 text-[clamp(0.75rem,1.8vw,0.95rem)] leading-relaxed flex-grow">
                  Building a real-time analytics platform powered by machine learning for developers.
                </p>
                <motion.div
                  className="mt-[clamp(1rem,2vw,1.5rem)] inline-flex items-center px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.375rem,0.75vw,0.5rem)] rounded-full bg-purple-500/20 text-purple-300 text-[clamp(0.65rem,1.2vw,0.75rem)] font-semibold border border-purple-500/30 w-fit"
                  animate={{ borderColor: ['rgba(168, 85, 247, 0.3)', 'rgba(168, 85, 247, 0.5)', 'rgba(168, 85, 247, 0.3)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.span
                    className="w-[clamp(0.375rem,0.8vw,0.5rem)] h-[clamp(0.375rem,0.8vw,0.5rem)] bg-purple-400 rounded-full mr-[clamp(0.375rem,0.75vw,0.5rem)]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  In Progress
                </motion.div>
              </motion.div>

              {/* Technologies */}
              <motion.div className="flex flex-col" variants={itemVariants}>
                <div className="text-blue-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase mb-[clamp(0.75rem,1.5vw,1rem)]">
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-[clamp(0.5rem,1vw,0.75rem)] mt-[clamp(0.5rem,1vw,0.75rem)]">
                  {['React', 'Next.js', 'TypeScript', 'Python', 'TensorFlow', 'PostgreSQL'].map(
                    (tech) => (
                      <motion.span
                        key={tech}
                        className="px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.375rem,0.8vw,0.5rem)] rounded-lg bg-blue-500/10 text-blue-300 text-[clamp(0.65rem,1.2vw,0.75rem)] font-semibold border border-blue-500/20"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
                      >
                        {tech}
                      </motion.span>
                    )
                  )}
                </div>
              </motion.div>

              {/* Latest Activity */}
              <motion.div className="flex flex-col" variants={itemVariants}>
                <div className="text-pink-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase mb-[clamp(0.75rem,1.5vw,1rem)]">
                  Latest Activities
                </div>
                <div className="space-y-[clamp(0.75rem,1.5vw,1rem)]">
                  {activities.map((activity, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-[clamp(0.75rem,1.5vw,1rem)] p-[clamp(0.75rem,1.5vw,1rem)] rounded-lg bg-pink-500/5 hover:bg-pink-500/10 transition-colors"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <activity.icon className="w-[clamp(1.25rem,2vw,1.5rem)] h-[clamp(1.25rem,2vw,1.5rem)] text-pink-400 flex-shrink-0 mt-[clamp(0.125rem,0.25vw,0.25rem)]" />
                      <span className="text-[clamp(0.75rem,1.8vw,0.95rem)] text-gray-300">{activity.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Exploring section */}
          <motion.div className="mt-[clamp(1.5rem,3vw,2rem)]" variants={itemVariants}>
            <motion.div
              className="glass rounded-[clamp(0.75rem,2vw,1rem)] p-[clamp(1rem,2vw,1.5rem)] inline-block hover:bg-purple-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-[clamp(0.85rem,1.8vw,1rem)] text-gray-300">
                <span className="text-purple-400 font-semibold">Exploring:</span> Advanced AI/ML models, On-chain data indexing, Real-time streaming architectures
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
