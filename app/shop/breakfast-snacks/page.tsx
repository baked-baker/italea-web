import { Suspense } from "react"
import type { Metadata } from "next"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { LoadingAnimation } from "@/components/loading-animation"
import { getProductsByCategory } from "@/lib/products"

export const metadata: Metadata = {
  title: "Breakfast Cereals & Snacks | Italea",
  description:
    "Start your day right with our nutritious breakfast cereals and wholesome snacks made from premium African ingredients.",
}

export default function BreakfastSnacksPage() {
  const products = getProductsByCategory("breakfast-snacks")

  return (
    <div className="min-h-screen bg-italea-cream">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-italea-cream to-italea-cream-200">
        <div className="container-italea">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-italea-xl mb-6">Breakfast Cereals & Snacks</h1>
            <p className="text-italea-forest-600 text-lg leading-relaxed mb-8">
              Fuel your day with our nutritious breakfast cereals and wholesome snacks. From gluten-free granola to
              spicy macadamia nuts, each product is crafted with premium African ingredients to nourish your body and
              delight your taste buds.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-italea-forest-500">
              <span className="px-3 py-1 bg-white rounded-full">Gluten-Free Options</span>
              <span className="px-3 py-1 bg-white rounded-full">High Protein</span>
              <span className="px-3 py-1 bg-white rounded-full">Natural Ingredients</span>
              <span className="px-3 py-1 bg-white rounded-full">No Artificial Additives</span>
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
                  <ProductFilters category="breakfast-snacks" />
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

              {/* Category Highlights */}
              <div className="mt-16 grid md:grid-cols-2 gap-8">
                <div className="card-italea-kraft p-8 text-center">
                  <h3 className="heading-italea-lg mb-4">Breakfast Cereals</h3>
                  <p className="text-italea-forest-600 mb-6">
                    Start your morning with our nutrient-dense cereals made from ancient grains and superfoods.
                  </p>
                  <div className="space-y-2 text-sm text-italea-forest-500">
                    <div>✓ Gluten-Free Granola</div>
                    <div>✓ High-Fiber Options</div>
                    <div>✓ Probiotic Greek Yogurt</div>
                  </div>
                </div>

                <div className="card-italea-kraft p-8 text-center">
                  <h3 className="heading-italea-lg mb-4">Crunchy Snacks</h3>
                  <p className="text-italea-forest-600 mb-6">
                    Satisfy your cravings with our wholesome snacks packed with protein and healthy fats.
                  </p>
                  <div className="space-y-2 text-sm text-italea-forest-500">
                    <div>✓ Spiced Macadamia Nuts</div>
                    <div>✓ Roasted Seeds</div>
                    <div>✓ Protein-Rich Options</div>
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
