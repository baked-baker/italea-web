import { Suspense } from "react"
import type { Metadata } from "next"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { LoadingAnimation } from "@/components/loading-animation"
import { getProductsByCategory } from "@/lib/products"

export const metadata: Metadata = {
  title: "Fermented Foods | Italea",
  description:
    "Probiotic-rich fermented foods including kimchi, kefir, and fermented vegetables for optimal gut health.",
}

export default function FermentedFoodsPage() {
  const products = getProductsByCategory("fermented-foods")

  return (
    <div className="min-h-screen bg-italea-cream">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-italea-cream to-italea-cream-200">
        <div className="container-italea">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-italea-xl mb-6">Fermented Foods</h1>
            <p className="text-italea-forest-600 text-lg leading-relaxed mb-8">
              Nourish your gut with our collection of traditionally fermented foods. Rich in probiotics and beneficial
              enzymes, these foods support digestive health while delivering bold, complex flavors to your meals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-italea-forest-500">
              <span className="px-3 py-1 bg-white rounded-full">Live Probiotics</span>
              <span className="px-3 py-1 bg-white rounded-full">Traditional Methods</span>
              <span className="px-3 py-1 bg-white rounded-full">Gut Health</span>
              <span className="px-3 py-1 bg-white rounded-full">No Preservatives</span>
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
                  <ProductFilters category="fermented-foods" />
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

              {/* Health Benefits Section */}
              <div className="mt-16 card-italea-kraft p-8">
                <h3 className="heading-italea-lg text-center mb-8">Benefits of Fermented Foods</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-italea-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      🦠
                    </div>
                    <h4 className="font-semibold text-italea-forest mb-2">Gut Health</h4>
                    <p className="text-sm text-italea-forest-600">
                      Live probiotics support healthy digestion and immune function
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-italea-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      🧬
                    </div>
                    <h4 className="font-semibold text-italea-forest mb-2">Enhanced Nutrition</h4>
                    <p className="text-sm text-italea-forest-600">
                      Fermentation increases bioavailability of nutrients
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-italea-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      ⚖️
                    </div>
                    <h4 className="font-semibold text-italea-forest mb-2">Microbiome Balance</h4>
                    <p className="text-sm text-italea-forest-600">Promotes healthy bacterial diversity in your gut</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}
