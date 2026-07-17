'use client'

import { motion } from 'framer-motion'
import { Code2, ExternalLink, Rocket } from 'lucide-react'
import { animations } from '@/lib/animations'
import { developedProjects } from '@/lib/profile'

export function ProjectShowcase() {
  return (
    <section className="py-[clamp(2.5rem,5vw,5rem)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-[clamp(2rem,4vw,3rem)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold">Development Work</h2>
          <p className="text-gray-400 mt-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.875rem,2vw,1.125rem)] max-w-2xl mx-auto">
            Completed frontend, blockchain, ecommerce, and web product builds with source code and live demos.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-[clamp(0.5rem,2vw,1.5rem)]"
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {developedProjects.map((project, index) => (
            <motion.article
              key={project.name}
              className="glass-strong group flex min-h-[18rem] flex-col overflow-hidden rounded-xl border border-white/10 bg-black/20 sm:min-h-[22rem]"
              variants={animations.directionalItemVariants}
              custom={index}
              whileHover={{ y: -6, scale: 1.02, rotate: index % 2 === 0 ? -1 : 1 }}
            >
              <div className="relative flex h-24 items-end overflow-hidden bg-gradient-to-br from-blue-500/25 via-purple-500/20 to-pink-500/20 p-3 sm:h-32 sm:p-4">
                <img
                  src={project.previewImageUrl}
                  alt={`${project.name} website preview`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
                <div className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full border border-green-400/30 bg-green-500/10 px-2 py-1 text-[0.55rem] font-semibold text-green-300 sm:right-4 sm:top-4 sm:gap-2 sm:px-3 sm:text-xs">
                  <Rocket className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  {project.status}
                </div>
                <div className="relative z-10 flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-blue-300 sm:h-11 sm:w-11">
                    <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-white sm:text-lg">{project.name}</div>
                    <div className="truncate text-[0.6rem] font-medium text-gray-300 sm:text-xs">
                      {project.technologies.slice(0, 2).join(' / ')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-3 sm:p-5">
                <h3 className="text-sm font-bold text-white sm:text-xl">{project.name}</h3>
                <p className="mt-2 line-clamp-4 flex-1 text-[0.7rem] leading-relaxed text-gray-400 sm:mt-3 sm:text-sm">{project.description}</p>

                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[0.58rem] font-medium text-gray-300 sm:rounded-lg sm:px-2.5 sm:py-1 sm:text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-1.5 sm:mt-6 sm:gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-md border border-white/10 px-2 py-1.5 text-[0.65rem] font-semibold text-gray-200 transition-colors hover:border-white/30 hover:bg-white/10 sm:gap-2 sm:rounded-lg sm:px-3 sm:py-2 sm:text-sm"
                  >
                    <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Code
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-2 py-1.5 text-[0.65rem] font-semibold text-white transition-colors hover:from-blue-600 hover:to-purple-700 sm:gap-2 sm:rounded-lg sm:px-3 sm:py-2 sm:text-sm"
                  >
                    <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
