import { Hero } from '@/components/hero'
import { BrandOperatingSystem } from '@/components/brand-operating-system'
import { FeaturedWork } from '@/components/featured-work'
import { LatestContent } from '@/components/latest-content'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Hero Section */}
      <Hero />

      {/* Brand System Section */}
      <BrandOperatingSystem />

      {/* Featured Work Section */}
      <FeaturedWork />

      {/* Latest Content Section */}
      <LatestContent />

      {/* Footer */}
      <Footer />
    </main>
  )
}
