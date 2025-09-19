"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, Loader2 } from "lucide-react"

// Mock product data
const products = [
  {
    id: "1",
    name: "Modern Oak Dining Table",
    price: 2499,
    originalPrice: 2999,
    category: "Dining",
    image: "/luxury-dining-room-furniture--elegant-dining-table.jpg",
    slug: "modern-oak-dining-table",
    inStock: true,
    rating: 4.8,
    reviews: 24,
  },
  {
    id: "2",
    name: "Velvet Chesterfield Sofa",
    price: 3299,
    originalPrice: null,
    category: "Living Room",
    image: "/luxury-living-room-furniture--modern-sofa--elegant.jpg",
    slug: "velvet-chesterfield-sofa",
    inStock: true,
    rating: 4.9,
    reviews: 18,
  },
  {
    id: "3",
    name: "Upholstered Platform Bed",
    price: 1899,
    originalPrice: 2199,
    category: "Bedroom",
    image: "/luxury-bedroom-furniture--elegant-bed-frame--sophi.jpg",
    slug: "upholstered-platform-bed",
    inStock: false,
    rating: 4.7,
    reviews: 31,
  },
  {
    id: "4",
    name: "Executive Leather Chair",
    price: 1299,
    originalPrice: null,
    category: "Office",
    image: "/luxury-office-chair--executive-leather-chair--sop.jpg",
    slug: "executive-leather-chair",
    inStock: true,
    rating: 4.6,
    reviews: 12,
  },
  {
    id: "5",
    name: "Marble Coffee Table",
    price: 899,
    originalPrice: 1099,
    category: "Living Room",
    image: "/luxury-coffee-table--marble-top--elegant-design-.jpg",
    slug: "marble-coffee-table",
    inStock: true,
    rating: 4.8,
    reviews: 27,
  },
  {
    id: "6",
    name: "Walnut Nightstand",
    price: 649,
    originalPrice: null,
    category: "Bedroom",
    image: "/luxury-nightstand--walnut-wood--elegant-bedside-.jpg",
    slug: "walnut-nightstand",
    inStock: true,
    rating: 4.5,
    reviews: 15,
  },
]

export function ProductGrid() {
  const [sortBy, setSortBy] = useState("featured")
  const [currentProducts] = useState(products)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [loading, setLoading] = useState(false)

  const handleLoadMore = async () => {
    setLoading(true)
    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{currentProducts.length}</span> of{" "}
            <span className="font-medium">156</span> products
          </p>

          {/* View Mode Toggle */}
          <div className="hidden sm:flex items-center gap-1 bg-background rounded-md p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="h-8 w-8 p-0"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="h-8 w-8 p-0"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="name">Name A-Z</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div
        className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8" : "space-y-4 mb-8"}
      >
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} viewMode={viewMode} />
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          onClick={handleLoadMore}
          disabled={loading}
          className="px-8 py-3 bg-transparent"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Load More Products"
          )}
        </Button>
        <p className="text-xs text-muted-foreground mt-2">Showing 24 of 156 products</p>
      </div>
    </div>
  )
}
