import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCollections } from "@/components/featured-collections"
import { CraftsmanshipSection } from "@/components/craftsmanship-section"
import { Footer } from "@/components/footer"

import { HeritageSection } from "@/components/heritage-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedCollections />
      <CraftsmanshipSection />
      <HeritageSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
