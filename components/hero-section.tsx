import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Award, Users, Clock } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-modern-living-room-with-elegant-furniture--.jpg"
          alt="Luxury furniture showcase"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Floating Achievement Badges */}
      <div className="absolute top-20 right-10 hidden xl:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 mb-4">
          <div className="flex items-center space-x-2 text-white">
            <Award className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium">40 Years Excellence</span>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <div className="flex items-center space-x-2 text-white">
            <Users className="h-5 w-5 text-blue-400" />
            <span className="text-sm font-medium">10,000+ Happy Clients</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/95 text-sm font-medium border border-white/20 mb-6">
            <Clock className="h-4 w-4 mr-2 text-yellow-400" />
            Handcrafted Excellence Since 1984 • 40 Years of Mastery
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-serif font-light text-white mb-8 leading-[0.85] text-balance">
          Where luxury meets
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/80 mt-2">
            timeless craftsmanship
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto text-pretty leading-relaxed">
          Four decades of expertise in creating bespoke furniture pieces that define elegance. Our master craftsmen
          blend traditional techniques with contemporary design to deliver heirloom-quality furniture for discerning
          clients worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-12 py-5 text-lg font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 rounded-full"
            >
              Explore Collections
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-12 py-5 text-lg font-semibold bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 rounded-full"
            >
              Book Consultation
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-white/90 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9/5 Rating</span>
            <span className="text-xs text-white/70">2,847 reviews</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <Award className="h-6 w-6 text-yellow-400 mb-2" />
            <span className="text-sm font-medium">40 Years</span>
            <span className="text-xs text-white/70">Experience</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <Users className="h-6 w-6 text-blue-400 mb-2" />
            <span className="text-sm font-medium">10,000+</span>
            <span className="text-xs text-white/70">Happy Clients</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mb-2">
              <span className="text-xs font-bold text-green-900">✓</span>
            </div>
            <span className="text-sm font-medium">Lifetime</span>
            <span className="text-xs text-white/70">Warranty</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
