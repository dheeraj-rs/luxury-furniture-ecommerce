"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CartDrawer } from "@/components/cart-drawer"
import { UserMenu } from "@/components/user-menu"
import { Menu, X, Search } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl lg:text-2xl font-serif font-bold tracking-tight">
              ARTISAN
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/products" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Collections
            </a>
            <a
              href="/products?category=seating"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Seating
            </a>
            <a
              href="/products?category=tables"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Tables
            </a>
            <a
              href="/products?category=bedroom"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Bedroom
            </a>
            <a
              href="/products?category=lighting"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Lighting
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <Search className="h-5 w-5" />
            </Button>
            <UserMenu />
            <CartDrawer />
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <nav className="py-4 space-y-4">
              <a
                href="/products"
                className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Collections
              </a>
              <a
                href="/products?category=seating"
                className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Seating
              </a>
              <a
                href="/products?category=tables"
                className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Tables
              </a>
              <a
                href="/products?category=bedroom"
                className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Bedroom
              </a>
              <a
                href="/products?category=lighting"
                className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Lighting
              </a>
              <a href="#" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
                About
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
