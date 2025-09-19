import { Award, Clock, Shield, Leaf, Heart } from "lucide-react"

export function CraftsmanshipSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
            <Clock className="h-4 w-4 mr-2" />
            Est. 1984 • Four Decades of Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-light mb-8 text-balance">
            A legacy of exceptional craftsmanship
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Founded by master craftsman Giovanni Rossi and his wife Maria, our family-owned workshop has been creating
            bespoke furniture for four generations. What started as a small atelier in Milan has grown into a globally
            recognized brand, yet we've never lost our commitment to handcrafted excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          <div>
            <h3 className="text-2xl lg:text-4xl font-serif font-light mb-8 text-balance">
              Artisan craftsmanship in every detail
            </h3>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Each piece in our collection is meticulously handcrafted by skilled artisans using traditional techniques
              passed down through generations. We source only the finest materials to ensure lasting beauty and
              durability that will be treasured for decades to come.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Sustainable Materials</h4>
                  <p className="text-sm text-muted-foreground">Premium hardwoods from certified sustainable forests</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Hand-Finished</h4>
                  <p className="text-sm text-muted-foreground">Natural oils and waxes applied by master craftsmen</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Lifetime Warranty</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive coverage on all craftsmanship</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Award Winning</h4>
                  <p className="text-sm text-muted-foreground">Recognized globally for design excellence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/artisan-craftsman-working-on-luxury-furniture--woo.jpg"
              alt="Master craftsman at work"
              className="w-full h-96 lg:h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">40+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground">Master Craftsmen</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-xs text-muted-foreground">Pieces Created</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary/30 rounded-3xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Award key={i} className="h-6 w-6 text-yellow-500 mx-1" />
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl font-serif font-light text-foreground mb-6 text-balance">
              "In four decades of collecting fine furniture, I've never encountered craftsmanship of this caliber. Each
              piece is not just furniture—it's a work of art that tells a story."
            </blockquote>
            <cite className="text-muted-foreground">
              <span className="font-semibold">Isabella Montenegro</span> • Interior Design Magazine Editor
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}
