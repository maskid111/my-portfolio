'use client'

import { motion } from 'framer-motion'
import { ContactHero } from '@/components/contact/hero'
import { AvailabilityCard } from '@/components/contact/availability-card'
import { SocialLinksGrid } from '@/components/contact/social-links-grid'
import { Footer } from '@/components/footer'
import { animations } from '@/lib/animations'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <ContactHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[clamp(2rem,4vw,4rem)]">
        {/* Let's Connect section */}
        <motion.div
          variants={animations.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-[clamp(2rem,4vw,4rem)]"
        >
          <motion.div variants={animations.itemVariants} className="text-center mb-[clamp(2rem,4vw,3rem)]">
            <span className="text-green-400 font-semibold text-[clamp(0.65rem,1.5vw,0.875rem)] tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mt-[clamp(0.75rem,1.5vw,1rem)] text-white text-balance">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-[clamp(0.875rem,2vw,1.125rem)] mt-[clamp(1rem,2vw,1.5rem)] max-w-2xl mx-auto">
              The best way to reach me is through social platforms. Let's start a conversation!
            </p>
          </motion.div>

          {/* Large social cards grid */}
          <SocialLinksGrid />

          {/* Availability info */}
          <motion.div variants={animations.itemVariants} className="mt-[clamp(2rem,4vw,3rem)]">
            <AvailabilityCard />
          </motion.div>
        </motion.div>


      </div>

      <Footer />
    </main>
  )
}
