import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About Us - Artisan Furniture Co.",
  description:
    "Learn about our commitment to crafting exceptional luxury furniture with traditional techniques and sustainable materials.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              {"Since 1985"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif text-balance mb-6">
              Crafting Timeless Furniture for Modern Living
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              For nearly four decades, we've been dedicated to creating exceptional furniture pieces that blend
              traditional craftsmanship with contemporary design.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1985 by master craftsman Robert Chen, Artisan Furniture Co. began as a small workshop in
                  Portland, Oregon. What started as a passion for woodworking has grown into a renowned furniture
                  manufacturer known for exceptional quality and timeless design.
                </p>
                <p>
                  Our commitment to traditional techniques, combined with modern innovation, allows us to create pieces
                  that are both beautiful and built to last. Every piece of furniture is carefully crafted by skilled
                  artisans who take pride in their work.
                </p>
                <p>
                  Today, we continue to honor our founder's vision while embracing sustainable practices and
                  contemporary design trends that meet the needs of modern living.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder-860b9.png"
                alt="Craftsman working in furniture workshop"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from design to delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Every piece is meticulously crafted using time-honored techniques and the finest materials.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Sustainable Practices</h3>
                <p className="text-muted-foreground">
                  We source responsibly and use eco-friendly processes to minimize our environmental impact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We blend traditional craftsmanship with modern design and technology for exceptional results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented individuals who bring our furniture to life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Robert Chen", role: "Founder & Master Craftsman", image: "elderly craftsman with tools" },
              { name: "Sarah Martinez", role: "Head of Design", image: "female designer sketching furniture" },
              { name: "David Kim", role: "Production Manager", image: "male manager in workshop" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={`/abstract-geometric-shapes.png?height=300&width=300&query=${member.image}`}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Experience Our Craftsmanship?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore our collection of handcrafted furniture and find the perfect pieces for your home.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/products">Shop Our Collection</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
