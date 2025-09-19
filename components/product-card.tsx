import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number | null
  category: string
  image: string
  slug: string
  inStock: boolean
  rating: number
  reviews: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <Link href={`/products/${product.slug}`}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {!product.inStock && (
            <Badge variant="secondary" className="bg-muted text-muted-foreground">
              Out of Stock
            </Badge>
          )}
          {discountPercentage > 0 && (
            <Badge className="bg-accent text-accent-foreground">{discountPercentage}% OFF</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-semibold">${product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full" disabled={!product.inStock} variant={product.inStock ? "default" : "secondary"}>
          {product.inStock ? "Add to Cart" : "Notify When Available"}
        </Button>
      </div>
    </Card>
  )
}
