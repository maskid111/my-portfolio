'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Orbit,
  Sparkles,
} from 'lucide-react'
import { animations } from '@/lib/animations'
import { profile, developedProjects } from '@/lib/profile'

export function BrandOperatingSystem() {
  const featuredBuild = developedProjects[1] ?? developedProjects[0]

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-[min(80vw,44rem)] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        variants={animations.containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-120px' }}
      >
        <motion.div
          className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between"
          variants={animations.directionalItemVariants}
          custom={0}
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-xs">
              <Orbit className="h-4 w-4" />
              Brand Operating System
            </span>
            <h2 className="mt-3 text-[clamp(1.85rem,5vw,4.25rem)] font-bold leading-[0.95] text-white text-balance">
              One portfolio. Four signals. Clear reason to work together.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
            Maskid sits at the intersection of content, frontend products, blockchain ideas, and market insight.
          </p>
        </motion.div>

        <div className="grid gap-3 lg:gap-5">
          <motion.div
            className="glass-strong relative min-h-[24rem] overflow-hidden rounded-2xl border border-white/10 p-4 sm:p-6 lg:rounded-3xl lg:p-8"
            variants={animations.directionalItemVariants}
            custom={1}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.20),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.14),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />

            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">Current Build</p>
                  <h3 className="mt-2 text-3xl font-bold text-white sm:text-5xl">{profile.currentProject}</h3>
                </div>
                <motion.div
                  className="hidden h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-blue-200 sm:flex"
                  animate={{ rotate: [0, 6, -4, 0], y: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sparkles className="h-7 w-7" />
                </motion.div>
              </div>

              <div className="grid gap-3 sm:grid-cols-[1fr_0.78fr]">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                    {profile.currentProjectDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['GenLayer', 'AI Validators', 'Hiring', 'Consensus'].map((item) => (
                      <span key={item} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={featuredBuild.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <img
                    src={featuredBuild.previewImageUrl}
                    alt={`${featuredBuild.name} preview`}
                    className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = '/placeholder.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
                  <div className="relative z-10 flex h-full min-h-[10rem] flex-col justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-300">Featured App</p>
                    <div>
                      <div className="mt-2 flex items-center justify-between gap-3">
                        <span className="text-lg font-bold text-white">{featuredBuild.name}</span>
                        <ArrowRight className="h-4 w-4 text-blue-300 transition-transform group-hover:translate-x-1" />
                      </div>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-300">
                        {featuredBuild.description}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
