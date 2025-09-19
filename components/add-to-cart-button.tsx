"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Check } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/products"

interface AddToCartButtonProps {
  product: Product
  className?: string
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { dispatch } = useCart()
  const [isAdded, setIsAdded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = async () => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300))

    dispatch({ type: "ADD_ITEM", product })

    setIsAdded(true)
    setIsLoading(false)

    // Reset the success state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Button onClick={handleAddToCart} disabled={isLoading || isAdded} size="lg" className={className}>
      {isAdded ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isLoading ? "Adding..." : "Add to Cart"}
        </>
      )}
    </Button>
  )
}
