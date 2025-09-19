import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { products } from "@/lib/products"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

interface CategoryPageProps {
  params: {
    category: string
  }
}

const categories = [
  { slug: "seating", name: "Seating", description: "Comfortable chairs, sofas, and benches" },
  { slug: "tables", name: "Tables", description: "Dining tables, coffee tables, and desks" },
  { slug: "storage", name: "Storage", description: "Cabinets, shelves, and storage solutions" },
  { slug: "lighting", name: "Lighting", description: "Lamps, chandeliers, and light fixtures" },
  { slug: "bedroom", name: "Bedroom", description: "Beds, dressers, and bedroom furniture" },
  { slug: "office", name: "Office", description: "Desks, chairs, and office furniture" },
]

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories.find((cat) => cat.slug === params.category)

  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  return {
    title: `${category.name} - Artisan Furniture Co.`,
    description: category.description,
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((cat) => cat.slug === params.category)

  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes(category.slug) || product.name.toLowerCase().includes(category.slug),
  )

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Category Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">{category.name}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <ProductFilters />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  {categoryProducts.length} product{categoryProducts.length !== 1 ? "s" : ""}
                </p>

                {/* Mobile Filter Button */}
                <div className="lg:hidden">
                  <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                      />
                    </svg>
                    Filters
                  </button>
                </div>
              </div>

              <ProductGrid products={categoryProducts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
