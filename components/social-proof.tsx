'use client'

import { motion } from 'framer-motion'
import { CodeXml, GraduationCap, PenSquare, Zap } from 'lucide-react'
import { animations } from '@/lib/animations'
import { profile } from '@/lib/profile'

const proofPoints = [
  {
    label: 'Computer Science',
    value: 'BSc',
    icon: GraduationCap,
    color: 'from-blue-500 to-violet-600',
  },
  {
    label: 'Primary Focus',
    value: 'Creator',
    icon: PenSquare,
    color: 'from-violet-500 to-indigo-600',
  },
  {
    label: 'Builder Track',
    value: 'Web3',
    icon: CodeXml,
    color: 'from-blue-600 to-slate-700',
  },
  {
    label: 'Current Build',
    value: 'AI',
    icon: Zap,
    color: 'from-sky-500 to-violet-600',
  },
]

export function SocialProof() {
  return (
    <section className="py-[clamp(2.5rem,5vw,5rem)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative z-10"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="text-center mb-[clamp(2rem,4vw,4rem)]" variants={animations.itemVariants}>
            <span className="eyebrow">
              Proof Points
            </span>
            <h2 className="heading-section mt-[clamp(0.75rem,1.5vw,1rem)] text-white text-balance">
              Built Around Real Work
            </h2>
            <p className="body-copy mt-[clamp(1rem,2vw,1.5rem)] max-w-2xl mx-auto">
              No inflated numbers. Just the real foundation behind {profile.name}: education, content, frontend, blockchain, and the current build.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[clamp(0.75rem,2.5vw,2rem)]">
            {proofPoints.map((point, index) => {
              const Icon = point.icon

              return (
                <motion.div
                  key={point.label}
                  className="glass-strong rounded-[clamp(0.75rem,2vw,1rem)] p-[clamp(1rem,2.5vw,1.5rem)] hover-lift relative overflow-hidden group"
                  custom={index}
                  variants={animations.itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                  <div className="relative z-10 space-y-[clamp(0.75rem,1.5vw,1rem)]">
                    <Icon className="h-8 w-8 text-blue-300" />
                    <div className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-white leading-none">{point.value}</div>
                    <p className="text-gray-400 text-[clamp(0.7rem,1.5vw,0.875rem)] font-medium leading-tight">{point.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div className="mt-[clamp(2rem,4vw,4rem)]" variants={animations.itemVariants}>
            <div className="glass-strong rounded-[clamp(0.75rem,2vw,1.25rem)] p-[clamp(1.5rem,3vw,3rem)] border-l-4 border-blue-500">
              <p className="text-[clamp(1rem,2.2vw,1.375rem)] text-gray-300 italic leading-relaxed">
                &quot;{profile.tagline}&quot;
              </p>
              <p className="text-blue-300 font-semibold mt-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.875rem,1.8vw,1rem)]">
                - {profile.name}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
