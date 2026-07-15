'use client'

import { DevelopmentHero } from '@/components/development/hero'
import { ProjectShowcase } from '@/components/development/project-showcase'
import { Footer } from '@/components/footer'

export default function DevelopmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <DevelopmentHero />
      <ProjectShowcase />
      <Footer />
    </main>
  )
}
