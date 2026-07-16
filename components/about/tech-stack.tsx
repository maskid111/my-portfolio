'use client'

import { motion } from 'framer-motion'
import { animations } from '@/lib/animations'
import { profile } from '@/lib/profile'

interface TechCategory {
  category: string
  technologies: string[]
  color: string
}

export function TechStack() {
  const techStack: TechCategory[] = [
    {
      category: 'Primary Skills',
      technologies: profile.primarySkills,
      color: 'from-blue-500 to-blue-600',
    },
    {
      category: 'Builder Skills',
      technologies: ['Blockchain Builder', 'Frontend Products', 'Consensus Hire', 'GenLayer'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      category: 'Creator Topics',
      technologies: profile.contentTopics,
      color: 'from-pink-500 to-pink-600',
    },
    {
      category: 'Secondary Focus',
      technologies: profile.secondarySkills,
      color: 'from-green-500 to-green-600',
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
          <span className="text-green-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase">Skills</span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mt-[clamp(0.75rem,1.5vw,1rem)]">What I Do</h2>
        </motion.div>

        {/* Tech Categories - 2 columns on mobile and tablet */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[clamp(1rem,2.5vw,2rem)]"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              className="glass-strong rounded-[clamp(0.75rem,2vw,1rem)] p-[clamp(1.25rem,2.5vw,2rem)]"
              variants={animations.itemVariants}
            >
              <h3 className={`text-[clamp(1.125rem,2.2vw,1.5rem)] font-bold mb-[clamp(1rem,2vw,1.5rem)] bg-gradient-to-r ${stack.color} bg-clip-text text-transparent`}>
                {stack.category}
              </h3>

              <div className="flex flex-wrap gap-[clamp(0.5rem,1.2vw,0.75rem)]">
                {stack.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="inline-block px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.5rem,1vw,0.625rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] bg-white/5 border border-white/10 text-gray-300 font-medium hover-lift text-[clamp(0.75rem,1.4vw,0.9rem)]"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
