import { Hero } from '@/components/hero'
import { FeaturedWork } from '@/components/featured-work'
import { CurrentlyBuilding } from '@/components/currently-building'
import { SocialProof } from '@/components/social-proof'
import { LatestContent } from '@/components/latest-content'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Hero Section */}
      <Hero />

      {/* Featured Work Section */}
      <FeaturedWork />

      {/* Currently Building Section */}
      <CurrentlyBuilding />

      {/* Social Proof Section */}
      <SocialProof />

      {/* Latest Content Section */}
      <LatestContent />

      {/* Footer */}
      <Footer />
    </main>
  )
}
