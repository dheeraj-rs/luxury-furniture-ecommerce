"use client"

import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Filter, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProductsPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Compact Navigation Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back to Home</span>
              </Link>
              <div className="hidden sm:block h-6 w-px bg-border" />
              <Breadcrumb className="hidden sm:flex">
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <span className="text-muted-foreground">/</span>
                <span className="text-foreground font-medium">Products</span>
              </Breadcrumb>
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden bg-transparent"
              onClick={() => setShowMobileFilters(true)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-b from-background to-muted/20 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-4 text-balance">
              Luxury Furniture Collection
            </h1>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Discover our complete collection of handcrafted luxury furniture, curated with 40 years of expertise and
              passion for exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Showing 24 of 156 products</span>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
              <span>Free shipping on orders over $2,000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Desktop Filters Sidebar */}
        <aside className="hidden lg:block w-80 border-r bg-background/50">
          <div className="sticky top-[120px] h-[calc(100vh-120px)] overflow-y-auto p-6">
            <ProductFilters />
          </div>
        </aside>

        {/* Mobile Filters Overlay */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setShowMobileFilters(false)} />
            <div className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-background border-l overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowMobileFilters(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <ProductFilters />
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            <ProductGrid />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
