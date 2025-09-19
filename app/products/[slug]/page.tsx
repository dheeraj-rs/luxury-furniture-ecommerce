import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetails } from "@/components/product-details"
import { RelatedProducts } from "@/components/related-products"
import { Breadcrumb } from "@/components/ui/breadcrumb"

// Mock product data - in real app this would come from database
const getProduct = (slug: string) => {
  const products = {
    "modern-oak-dining-table": {
      id: "1",
      name: "Modern Oak Dining Table",
      price: 2499,
      originalPrice: 2999,
      category: "Dining",
      description:
        "A stunning centerpiece for your dining room, this handcrafted oak table combines modern design with traditional craftsmanship. Features a live-edge top and sleek steel legs.",
      features: [
        "Solid oak construction",
        "Live-edge design",
        "Seats 6-8 people",
        "Steel powder-coated legs",
        "Hand-finished with natural oil",
      ],
      dimensions: {
        length: "84 inches",
        width: "42 inches",
        height: "30 inches",
      },
      images: [
        "/luxury-dining-room-furniture--elegant-dining-table.jpg",
        "/luxury-dining-room-furniture--elegant-dining-table.jpg",
        "/luxury-dining-room-furniture--elegant-dining-table.jpg",
      ],
      inStock: true,
      rating: 4.8,
      reviews: 24,
    },
  }

  return products[slug as keyof typeof products] || null
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb className="mb-6">
          <a href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </a>
          <span className="text-muted-foreground">/</span>
          <a href="/products" className="text-muted-foreground hover:text-foreground">
            Products
          </a>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{product.name}</span>
        </Breadcrumb>

        <ProductDetails product={product} />
        <RelatedProducts currentProductId={product.id} />
      </div>

      <Footer />
    </main>
  )
}
