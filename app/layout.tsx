import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Artisan Furniture Co. - Luxury Handcrafted Furniture",
  description:
    "Discover exquisite handcrafted furniture pieces that blend timeless elegance with modern sophistication.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${playfair.variable} ${inter.variable}`}>
        <AuthProvider>
          <CartProvider>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </CartProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
