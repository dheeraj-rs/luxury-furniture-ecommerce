"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number | null
  category: string
  description: string
  features: string[]
  dimensions: {
    length: string
    width: string
    height: string
  }
  images: string[]
  inStock: boolean
  rating: number
  reviews: number
}

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="aspect-square overflow-hidden rounded-sm bg-muted">
          <img
            src={product.images[selectedImage] || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square overflow-hidden rounded-sm border-2 transition-colors ${
                selectedImage === index ? "border-accent" : "border-transparent"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${product.name} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <Badge variant="outline" className="mb-2">
            {product.category}
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-serif font-light mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-semibold">${product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
                <Badge className="bg-accent text-accent-foreground">Save {discountPercentage}%</Badge>
              </>
            )}
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
          <span className="text-sm">{product.inStock ? "In Stock - Ready to Ship" : "Out of Stock"}</span>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label htmlFor="quantity" className="text-sm font-medium">
              Quantity:
            </label>
            <div className="flex items-center border rounded-sm">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="px-4 py-2 text-center min-w-[60px]">{quantity}</span>
              <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>
                +
              </Button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button size="lg" className="flex-1" disabled={!product.inStock}>
              {product.inStock ? "Add to Cart" : "Notify When Available"}
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <h3 className="font-medium">Key Features:</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Service Icons */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t">
          <div className="text-center">
            <Truck className="h-6 w-6 mx-auto mb-2 text-accent" />
            <p className="text-xs text-muted-foreground">Free Shipping</p>
          </div>
          <div className="text-center">
            <Shield className="h-6 w-6 mx-auto mb-2 text-accent" />
            <p className="text-xs text-muted-foreground">Lifetime Warranty</p>
          </div>
          <div className="text-center">
            <RotateCcw className="h-6 w-6 mx-auto mb-2 text-accent" />
            <p className="text-xs text-muted-foreground">30-Day Returns</p>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="lg:col-span-2">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          </TabsContent>

          <TabsContent value="dimensions" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-sm">
                <p className="text-2xl font-semibold mb-1">{product.dimensions.length}</p>
                <p className="text-sm text-muted-foreground">Length</p>
              </div>
              <div className="text-center p-4 border rounded-sm">
                <p className="text-2xl font-semibold mb-1">{product.dimensions.width}</p>
                <p className="text-sm text-muted-foreground">Width</p>
              </div>
              <div className="text-center p-4 border rounded-sm">
                <p className="text-2xl font-semibold mb-1">{product.dimensions.height}</p>
                <p className="text-sm text-muted-foreground">Height</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground">Reviews coming soon...</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
