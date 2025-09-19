import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Interior Designer",
      content:
        "The attention to detail is extraordinary. Every piece feels like it was made specifically for our space.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Architect",
      content:
        "40 years of experience shows in every joint, every finish. This is furniture that will last generations.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "Homeowner",
      content: "From consultation to delivery, the service was impeccable. Our dining room has never looked better.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-6 text-balance">
            What our clients say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Four decades of creating exceptional furniture has earned us the trust of clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 shadow-lg border">
              <Quote className="h-8 w-8 text-accent mb-4" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 text-pretty leading-relaxed">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
