'use client'

import { motion } from 'framer-motion'
import { AboutHero } from '@/components/about/hero'
import { PersonalStory } from '@/components/about/personal-story'
import { Timeline } from '@/components/about/timeline'
import { CoreValues } from '@/components/about/core-values'
import { TechStack } from '@/components/about/tech-stack'
import { FunFacts } from '@/components/about/fun-facts'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <AboutHero />
      <PersonalStory />
      <Timeline />
      <CoreValues />
      <TechStack />
      <FunFacts />
      <Footer />
    </main>
  )
}
