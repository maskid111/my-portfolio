'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { animations } from '@/lib/animations'
import { useState } from 'react'
import { Globe, Zap, Gamepad2, Sparkles, ExternalLink, Code2 } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  category: 'web' | 'web3' | 'game' | 'experiment'
  thumbnail: string
  tech: string[]
  links: {
    demo?: string
    github?: string
  }
  featured: boolean
}

export function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps', icon: <Globe className="h-4 w-4" /> },
    { id: 'web3', label: 'Web3', icon: <Zap className="h-4 w-4" /> },
    { id: 'game', label: 'Games', icon: <Gamepad2 className="h-4 w-4" /> },
    { id: 'experiment', label: 'Experiments', icon: <Sparkles className="h-4 w-4" /> },
  ]

  const projects: Project[] = [
    {
      id: '1',
      title: 'DeFi Dashboard',
      description: 'A comprehensive dashboard for managing DeFi investments and tracking yield farming opportunities.',
      category: 'web3',
      thumbnail: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tech: ['Next.js', 'Web3.js', 'Tailwind CSS', 'Ethers.js'],
      links: { demo: '#', github: '#' },
      featured: true,
    },
    {
      id: '2',
      title: 'AI Content Generator',
      description: 'Intelligent platform for generating high-quality content using advanced AI models and custom prompts.',
      category: 'web',
      thumbnail: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tech: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
      links: { demo: '#', github: '#' },
      featured: true,
    },
    {
      id: '3',
      title: 'Smart Contract Auditor',
      description: 'Tool for analyzing and identifying vulnerabilities in smart contracts using static analysis.',
      category: 'web3',
      thumbnail: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tech: ['Solidity', 'Python', 'TypeScript', 'Web3'],
      links: { demo: '#', github: '#' },
      featured: false,
    },
    {
      id: '4',
      title: 'Interactive Game Dev Tutorial',
      description: 'Educational 3D game built with Three.js to teach game development concepts.',
      category: 'game',
      thumbnail: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      tech: ['Three.js', 'React Three Fiber', 'Cannon.js'],
      links: { demo: '#', github: '#' },
      featured: true,
    },
    {
      id: '5',
      title: 'Real-time Collaboration App',
      description: 'Multiplayer document editor with real-time synchronization and WebSocket support.',
      category: 'web',
      thumbnail: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tech: ['React', 'WebSocket', 'Node.js', 'PostgreSQL'],
      links: { demo: '#', github: '#' },
      featured: false,
    },
    {
      id: '6',
      title: 'Generative Art Platform',
      description: 'Create unique digital art using procedural generation algorithms and neural networks.',
      category: 'experiment',
      thumbnail: 'linear-gradient(135deg, #30b0fe 0%, #bce6ff 100%)',
      tech: ['Canvas API', 'P5.js', 'Machine Learning', 'WebGL'],
      links: { demo: '#', github: '#' },
      featured: false,
    },
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="py-[clamp(2.5rem,5vw,5rem)] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-[clamp(2rem,4vw,3rem)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold">Featured Projects</h2>
          <p className="text-gray-400 mt-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.875rem,2vw,1.125rem)]">Explore my recent work and experiments</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-[clamp(0.75rem,1.5vw,1rem)] mb-[clamp(2rem,4vw,3rem)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.5rem,1vw,0.625rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] font-medium transition-all duration-300 flex items-center gap-[clamp(0.375rem,0.8vw,0.5rem)] text-[clamp(0.7rem,1.4vw,0.9rem)] ${
                activeCategory === category.id
                  ? 'glass-strong bg-green-500/20 border-green-500/50 text-green-300'
                  : 'glass border-white/10 text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-[clamp(1rem,1.8vw,1.1rem)] h-[clamp(1rem,1.8vw,1.1rem)]">
                {category.icon}
              </span>
              <span className="hidden sm:inline">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - 2 columns on mobile, expand on larger screens */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,2.5vw,1.5rem)]"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-strong rounded-[clamp(0.75rem,2vw,1.25rem)] overflow-hidden group hover-lift flex flex-col relative"
                whileHover={{ y: -4 }}
              >
                {/* Animated glow on hover */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-[clamp(0.75rem,2vw,1.25rem)] opacity-0 group-hover:opacity-30 blur-xl pointer-events-none transition-opacity duration-300 z-0"
                />

                {/* Thumbnail */}
                <div
                  className="h-[clamp(120px,40vw,200px)] bg-gradient-to-br relative overflow-hidden z-10"
                  style={{ background: project.thumbnail }}
                >
                  <motion.div
                    className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  >
                    <div className="flex gap-[clamp(0.75rem,1.5vw,1rem)]">
                      {project.links.demo && (
                        <motion.a
                          href={project.links.demo}
                          className="p-[clamp(0.625rem,1.2vw,0.75rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] bg-white/20 backdrop-blur text-white hover:bg-white/30"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink className="w-[clamp(1.25rem,2vw,1.5rem)] h-[clamp(1.25rem,2vw,1.5rem)]" />
                        </motion.a>
                      )}
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          className="p-[clamp(0.625rem,1.2vw,0.75rem)] rounded-[clamp(0.5rem,1.5vw,0.75rem)] bg-white/20 backdrop-blur text-white hover:bg-white/30"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Code2 className="w-[clamp(1.25rem,2vw,1.5rem)] h-[clamp(1.25rem,2vw,1.5rem)]" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>

                  {project.featured && (
                    <motion.div
                      className="absolute top-[clamp(0.5rem,1.2vw,1rem)] right-[clamp(0.5rem,1.2vw,1rem)] px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.375rem,0.8vw,0.5rem)] bg-yellow-500/30 backdrop-blur border border-yellow-500/50 rounded-full text-yellow-300 text-[clamp(0.65rem,1.2vw,0.75rem)] font-semibold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Featured
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-[clamp(1rem,2.5vw,1.5rem)] space-y-[clamp(0.75rem,1.5vw,1rem)] flex-grow flex flex-col relative z-10">
                  <div>
                    <h3 className="text-[clamp(0.95rem,2vw,1.375rem)] font-bold leading-tight">{project.title}</h3>
                    <p className="text-gray-400 text-[clamp(0.7rem,1.5vw,0.9rem)] mt-[clamp(0.5rem,1vw,0.75rem)] line-clamp-2">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-[clamp(0.375rem,0.8vw,0.5rem)] mt-auto pt-[clamp(0.75rem,1.5vw,1rem)] border-t border-white/10">
                    {project.tech.map(tech => (
                      <motion.span
                        key={tech}
                        className="px-[clamp(0.5rem,1vw,0.75rem)] py-[clamp(0.25rem,0.6vw,0.375rem)] text-[clamp(0.65rem,1.2vw,0.75rem)] bg-white/5 border border-white/10 rounded text-gray-300 font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
