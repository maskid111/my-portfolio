'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, ExternalLink, Sparkles } from 'lucide-react'
import { animations } from '@/lib/animations'
import { developedProjects } from '@/lib/profile'

export function FeaturedWork() {
  const featuredProjects = developedProjects.slice(0, 3)

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative z-10"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="mb-[clamp(2rem,4vw,4rem)]" variants={animations.itemVariants}>
            <span className="text-blue-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase">
              Featured Work
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mt-[clamp(0.75rem,2vw,1rem)] text-white text-balance">
              Featured Builds
            </h2>
            <p className="text-gray-400 text-[clamp(0.875rem,2vw,1.125rem)] mt-[clamp(1rem,2vw,1.5rem)] max-w-2xl leading-relaxed">
              Selected products showing the range of Maskid&apos;s work across decentralized apps, ecommerce, and practical web experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.name}
                className="group glass-strong rounded-xl sm:rounded-2xl lg:rounded-[1.5rem] overflow-hidden hover-lift relative flex flex-col border border-white/10 bg-black/20"
                custom={index}
                variants={animations.directionalItemVariants}
                whileHover={{ y: -8, scale: 1.02, rotate: index % 2 === 0 ? -1 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-28 overflow-hidden bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-pink-500/20 p-3 sm:h-36 sm:p-5">
                  <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.25),transparent_35%)]"
                    animate={{ scale: [1, 1.04, 1], opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 6, repeat: Infinity, delay: index * 0.4 }}
                  />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-green-400/30 bg-green-500/10 px-2 py-1 text-[0.58rem] font-semibold text-green-300 sm:gap-2 sm:px-3 sm:text-xs">
                      <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {project.status}
                    </span>
                    <div>
                      <h3 className="text-base font-bold leading-tight text-white sm:text-2xl">{project.name}</h3>
                      <p className="mt-1 line-clamp-1 text-[0.62rem] text-gray-300 sm:text-sm">{project.technologies.slice(0, 3).join(' / ')}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-3 sm:p-5 lg:p-6">
                  <p className="line-clamp-4 flex-1 text-[0.68rem] leading-relaxed text-gray-400 sm:text-[0.9rem]">
                    {project.description}
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 px-2 py-2 text-[0.65rem] font-semibold text-gray-200 transition-colors hover:border-white/30 hover:bg-white/10 sm:gap-2 sm:px-3 sm:text-sm"
                    >
                      <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      Code
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-2 py-2 text-[0.65rem] font-semibold text-white transition-colors hover:from-blue-600 hover:to-purple-700 sm:gap-2 sm:px-3 sm:text-sm"
                    >
                      Demo
                      <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.a
            href="/development"
            className="mt-8 inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300"
            variants={animations.itemVariants}
            whileHover={{ x: 4 }}
          >
            See full developer portfolio
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
