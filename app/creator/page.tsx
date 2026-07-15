'use client'

import { motion } from 'framer-motion'
import { CreatorHero } from '@/components/creator/hero'
import { ContentShowcase } from '@/components/creator/content-showcase'
import { Footer } from '@/components/footer'

export default function CreatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <CreatorHero />
      <ContentShowcase />
      <Footer />
    </main>
  )
}
