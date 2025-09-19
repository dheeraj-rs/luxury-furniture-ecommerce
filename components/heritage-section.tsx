import { Clock, Users, Award, Globe } from "lucide-react"

export function HeritageSection() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-6 text-balance">
            Four decades of excellence
          </h2>
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-3xl mx-auto text-pretty">
            From a small family workshop to an internationally acclaimed furniture house, our journey has been defined
            by unwavering commitment to quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">40+</div>
            <div className="text-primary-foreground/80">Years of Heritage</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">10,000+</div>
            <div className="text-primary-foreground/80">Satisfied Clients</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">25+</div>
            <div className="text-primary-foreground/80">Design Awards</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
            <div className="text-primary-foreground/80">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}
