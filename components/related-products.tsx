import { ProductCard } from "@/components/product-card"

// Mock related products data
const relatedProducts = [
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
]

interface RelatedProductsProps {
  currentProductId: string
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  // Filter out current product
  const filteredProducts = relatedProducts.filter((product) => product.id !== currentProductId)

  return (
    <section className="py-12">
      <h2 className="text-2xl lg:text-3xl font-serif font-light mb-8 text-center">You Might Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
