import { Suspense } from "react"
import type { Metadata } from "next"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { LoadingAnimation } from "@/components/loading-animation"
import { getProductsByCategory } from "@/lib/products"

export const metadata: Metadata = {
  title: "Spreads & Sweeteners | Italea",
  description:
    "Natural spreads and sweeteners including raw honey, date syrup, and macadamia nut butter made from premium African ingredients.",
}

export default function SpreadsSweetenersPage() {
  const products = getProductsByCategory("spreads-sweeteners")

  return (
    <div className="min-h-screen bg-italea-cream">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-italea-cream to-italea-cream-200">
        <div className="container-italea">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-italea-xl mb-6">Spreads & Sweeteners</h1>
            <p className="text-italea-forest-600 text-lg leading-relaxed mb-8">
              Enhance your meals with our collection of natural spreads and sweeteners. From raw African honey to creamy
              macadamia nut butter, each product brings authentic flavors and wholesome nutrition to your table.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-italea-forest-500">
              <span className="px-3 py-1 bg-white rounded-full">Raw & Unprocessed</span>
              <span className="px-3 py-1 bg-white rounded-full">No Added Sugar</span>
              <span className="px-3 py-1 bg-white rounded-full">Single Origin</span>
              <span className="px-3 py-1 bg-white rounded-full">Artisan Made</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container-italea">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="card-italea-kraft p-6 sticky top-24">
                <h3 className="font-semibold text-italea-forest mb-4">Filter Products</h3>
                <Suspense fallback={<LoadingAnimation />}>
                  <ProductFilters category="spreads-sweeteners" />
                </Suspense>
              </div>
            </aside>

            {/* Products Grid */}
            <main className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-italea-forest-600">Showing {products.length} products</p>
                <select className="px-4 py-2 border border-italea-cream-300 rounded-lg bg-white text-italea-forest">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                  <option>Best Selling</option>
                </select>
              </div>

              <Suspense fallback={<LoadingAnimation />}>
                <ProductGrid products={products} />
              </Suspense>

              {/* Featured Categories */}
              <div className="mt-16 grid md:grid-cols-3 gap-6">
                <div className="card-italea-kraft p-6 text-center">
                  <div className="w-16 h-16 bg-italea-macadamia-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    🍯
                  </div>
                  <h3 className="font-semibold text-italea-forest mb-2">Raw Honey</h3>
                  <p className="text-sm text-italea-forest-600">Pure, unfiltered honey from African wildflowers</p>
                </div>

                <div className="card-italea-kraft p-6 text-center">
                  <div className="w-16 h-16 bg-italea-macadamia-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    🥜
                  </div>
                  <h3 className="font-semibold text-italea-forest mb-2">Nut Butters</h3>
                  <p className="text-sm text-italea-forest-600">Creamy macadamia and other premium nut spreads</p>
                </div>

                <div className="card-italea-kraft p-6 text-center">
                  <div className="w-16 h-16 bg-italea-macadamia-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    🌴
                  </div>
                  <h3 className="font-semibold text-italea-forest mb-2">Natural Syrups</h3>
                  <p className="text-sm text-italea-forest-600">Date syrup and other natural sweetening alternatives</p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}
