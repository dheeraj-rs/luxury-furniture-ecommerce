import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const collections = [
  {
    title: "Living Room",
    description: "Sophisticated seating and tables for elegant entertaining",
    image: "/luxury-living-room-furniture--modern-sofa--elegant.jpg",
    itemCount: "24 pieces",
    href: "/categories/living-room",
  },
  {
    title: "Bedroom",
    description: "Serene sanctuaries crafted for ultimate comfort",
    image: "/luxury-bedroom-furniture--elegant-bed-frame--sophi.jpg",
    itemCount: "18 pieces",
    href: "/categories/bedroom",
  },
  {
    title: "Dining",
    description: "Exquisite tables and chairs for memorable gatherings",
    image: "/luxury-dining-room-furniture--elegant-dining-table.jpg",
    itemCount: "16 pieces",
    href: "/categories/dining",
  },
]

export function FeaturedCollections() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-light mb-6 text-balance">Curated Collections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Discover our carefully selected furniture collections, each piece designed to elevate your living spaces
            with timeless elegance and unmatched craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />

                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium opacity-90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {collection.itemCount}
                  </p>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-primary transition-colors">
                  {collection.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{collection.description}</p>

                <Link href={collection.href}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 bg-transparent"
                  >
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" className="px-8 py-3">
              View All Collections
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
