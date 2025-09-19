export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  category: string
  subcategory?: string
  description: string
  features: string[]
  materials: string[]
  dimensions: {
    width: number
    height: number
    depth: number
  }
  weight: number
  images: string[]
  inStock: boolean
  rating: number
  reviewCount: number
  tags: string[]
}

export const categories = [
  { id: "seating", name: "Seating", subcategories: ["Sofas", "Chairs", "Ottomans", "Benches"] },
  { id: "tables", name: "Tables", subcategories: ["Dining Tables", "Coffee Tables", "Side Tables", "Desks"] },
  { id: "storage", name: "Storage", subcategories: ["Wardrobes", "Bookcases", "Cabinets", "Chests"] },
  { id: "bedroom", name: "Bedroom", subcategories: ["Beds", "Nightstands", "Dressers", "Mirrors"] },
  { id: "lighting", name: "Lighting", subcategories: ["Floor Lamps", "Table Lamps", "Chandeliers", "Wall Sconces"] },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Executive Leather Chair",
    slug: "executive-leather-chair",
    price: 2499,
    originalPrice: 2999,
    category: "seating",
    subcategory: "Chairs",
    description:
      "Handcrafted executive chair featuring premium Italian leather and solid walnut frame. Designed for ultimate comfort and sophistication in professional environments.",
    features: ["Premium Italian leather", "Solid walnut frame", "Ergonomic design", "Adjustable height", "360° swivel"],
    materials: ["Italian leather", "Walnut wood", "Steel hardware"],
    dimensions: { width: 65, height: 120, depth: 70 },
    weight: 28,
    images: ["/luxury-office-chair--executive-leather-chair--sop.jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 24,
    tags: ["executive", "leather", "walnut", "ergonomic"],
  },
  {
    id: "2",
    name: "Modern Dining Table",
    slug: "modern-dining-table",
    price: 3299,
    category: "tables",
    subcategory: "Dining Tables",
    description:
      "Contemporary dining table crafted from solid oak with a minimalist design. Perfect for modern dining spaces that value both form and function.",
    features: [
      "Solid oak construction",
      "Minimalist design",
      "Seats 6-8 people",
      "Natural finish",
      "Handcrafted joints",
    ],
    materials: ["Oak wood", "Natural oil finish"],
    dimensions: { width: 200, height: 75, depth: 100 },
    weight: 65,
    images: ["/modern-oak-dining-table.jpg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 18,
    tags: ["dining", "oak", "modern", "minimalist"],
  },
  {
    id: "3",
    name: "Luxury Velvet Sofa",
    slug: "luxury-velvet-sofa",
    price: 4599,
    originalPrice: 5299,
    category: "seating",
    subcategory: "Sofas",
    description:
      "Opulent three-seater sofa upholstered in rich emerald velvet with brass accents. A statement piece that combines comfort with timeless elegance.",
    features: [
      "Premium velvet upholstery",
      "Brass accent details",
      "Down-filled cushions",
      "Hardwood frame",
      "Three-seater design",
    ],
    materials: ["Velvet fabric", "Brass hardware", "Hardwood frame", "Down filling"],
    dimensions: { width: 220, height: 85, depth: 95 },
    weight: 85,
    images: ["/luxury-emerald-velvet-sofa-brass-accents.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 31,
    tags: ["sofa", "velvet", "luxury", "brass", "emerald"],
  },
  {
    id: "4",
    name: "Artisan Coffee Table",
    slug: "artisan-coffee-table",
    price: 1899,
    category: "tables",
    subcategory: "Coffee Tables",
    description:
      "Handcrafted coffee table featuring live-edge walnut top with steel hairpin legs. Each piece is unique, showcasing the natural beauty of the wood grain.",
    features: [
      "Live-edge walnut top",
      "Steel hairpin legs",
      "Unique wood grain",
      "Handcrafted finish",
      "Mid-century modern style",
    ],
    materials: ["Walnut wood", "Steel legs", "Natural finish"],
    dimensions: { width: 120, height: 45, depth: 60 },
    weight: 32,
    images: ["/live-edge-walnut-coffee-table-hairpin-legs.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 15,
    tags: ["coffee table", "walnut", "live-edge", "mid-century", "artisan"],
  },
  {
    id: "5",
    name: "Designer Floor Lamp",
    slug: "designer-floor-lamp",
    price: 899,
    category: "lighting",
    subcategory: "Floor Lamps",
    description:
      "Contemporary floor lamp with adjustable brass arm and linen shade. Perfect for reading corners or as accent lighting in modern interiors.",
    features: ["Adjustable brass arm", "Linen shade", "Marble base", "Dimmable LED", "Contemporary design"],
    materials: ["Brass", "Marble", "Linen fabric"],
    dimensions: { width: 35, height: 165, depth: 35 },
    weight: 12,
    images: ["/contemporary-brass-floor-lamp-marble-base-linen-sh.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 22,
    tags: ["floor lamp", "brass", "marble", "contemporary", "adjustable"],
  },
  {
    id: "6",
    name: "Handwoven Storage Basket",
    slug: "handwoven-storage-basket",
    price: 299,
    category: "storage",
    subcategory: "Baskets",
    description:
      "Artisan-crafted storage basket made from sustainable rattan. Perfect for organizing while adding natural texture to any space.",
    features: ["Handwoven rattan", "Sustainable materials", "Natural finish", "Versatile storage", "Artisan crafted"],
    materials: ["Rattan", "Natural fibers"],
    dimensions: { width: 40, height: 35, depth: 40 },
    weight: 2,
    images: ["/handwoven-rattan-storage-basket-natural.jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 8,
    tags: ["storage", "rattan", "handwoven", "sustainable", "natural"],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = products.find((p) => p.id === productId)
  if (!product) return []

  return products.filter((p) => p.id !== productId && p.category === product.category).slice(0, limit)
}
