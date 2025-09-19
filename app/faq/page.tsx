"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "How long does shipping take?",
        answer:
          "Standard shipping takes 5-7 business days. Express shipping (2-3 days) and white glove delivery are also available for an additional fee.",
      },
      {
        question: "Do you offer free shipping?",
        answer: "Yes! We offer free standard shipping on all orders over $500 within the continental United States.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Absolutely. Once your order ships, you'll receive a tracking number via email. You can also track your order in your account dashboard.",
      },
      {
        question: "What is white glove delivery?",
        answer:
          "White glove delivery includes inside delivery, unpacking, assembly (if needed), and removal of packaging materials. This service is available for an additional fee.",
      },
    ],
  },
  {
    category: "Products & Quality",
    questions: [
      {
        question: "What materials do you use?",
        answer:
          "We use only premium materials including solid hardwoods, genuine leather, high-grade metals, and sustainable fabrics. Each product page lists specific materials used.",
      },
      {
        question: "Are your products handmade?",
        answer:
          "Yes, all our furniture is handcrafted by skilled artisans using traditional techniques combined with modern precision tools.",
      },
      {
        question: "Do you offer custom furniture?",
        answer:
          "Yes, we offer custom furniture services. Contact our design team to discuss your specific requirements and get a personalized quote.",
      },
      {
        question: "What warranty do you provide?",
        answer:
          "All our furniture comes with a 5-year warranty covering manufacturing defects. Upholstery and finishes are covered for 2 years.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for most items. Furniture must be in original condition with all packaging materials.",
      },
      {
        question: "How do I return a large item?",
        answer:
          "For large furniture items, we'll arrange pickup at no additional cost. Contact our customer service team to schedule a return pickup.",
      },
      {
        question: "Are there any items that cannot be returned?",
        answer:
          "Custom-made items, personalized furniture, and items marked as final sale cannot be returned unless defective.",
      },
      {
        question: "How long do refunds take?",
        answer:
          "Refunds are processed within 5-7 business days after we receive the returned item. The refund will appear on your original payment method.",
      },
    ],
  },
  {
    category: "Care & Maintenance",
    questions: [
      {
        question: "How do I care for wood furniture?",
        answer:
          "Dust regularly with a soft cloth, avoid direct sunlight and heat sources, and use coasters for drinks. We recommend professional cleaning annually.",
      },
      {
        question: "How do I clean upholstered furniture?",
        answer:
          "Vacuum regularly and address spills immediately. For deep cleaning, we recommend professional upholstery cleaning services.",
      },
      {
        question: "Do you offer furniture repair services?",
        answer:
          "Yes, we offer repair and restoration services for our furniture. Contact us for an assessment and quote.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions about our furniture, shipping, and services.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredFaqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-serif mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <Card key={faqIndex}>
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                          >
                            <h3 className="font-semibold pr-4">{faq.question}</h3>
                            <svg
                              className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {searchQuery && filteredFaqs.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">Try different search terms or browse all categories.</p>
                <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
              </CardContent>
            </Card>
          )}

          {/* Contact CTA */}
          <Card className="mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our customer service team is here to help you with any questions not covered here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+15035550123">Call (503) 555-0123</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
