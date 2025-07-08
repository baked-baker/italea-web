import { Suspense } from "react"
import type { Metadata } from "next"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { LoadingAnimation } from "@/components/loading-animation"
import { getProductsByCategory } from "@/lib/products"

export const metadata: Metadata = {
  title: "Pastries & Cookies | Italea",
  description: "Artisan pastries and cookies made with premium African ingredients and traditional baking methods.",
}

export default function PastriesCookiesPage() {
  const products = getProductsByCategory("pastries-cookies")

  return (
    <div className="min-h-screen bg-italea-cream">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-italea-cream to-italea-cream-200">
        <div className="container-italea">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-italea-xl mb-6">Pastries & Cookies</h1>
            <p className="text-italea-forest-600 text-lg leading-relaxed mb-8">
              Indulge in our artisan-crafted pastries and cookies made with premium African ingredients. Each bite
              delivers authentic flavors and wholesome nutrition, perfect for special moments or everyday treats.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-italea-forest-500">
              <span className="px-3 py-1 bg-white rounded-full">Artisan Crafted</span>
              <span className="px-3 py-1 bg-white rounded-full">Natural Ingredients</span>
              <span className="px-3 py-1 bg-white rounded-full">Traditional Methods</span>
              <span className="px-3 py-1 bg-white rounded-full">Small Batch</span>
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
                  <ProductFilters category="pastries-cookies" />
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

              {/* Baking Philosophy */}
              <div className="mt-16 card-italea-kraft p-8 text-center">
                <h3 className="heading-italea-lg mb-6">Our Baking Philosophy</h3>
                <p className="text-italea-forest-600 max-w-2xl mx-auto mb-8">
                  We believe that the best baked goods come from the finest ingredients and time-honored techniques. Our
                  pastries and cookies are made in small batches using traditional African ingredients like macadamia
                  nuts, baobab, and raw honey.
                </p>
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="text-left">
                    <h4 className="font-semibold text-italea-forest mb-2">Premium Ingredients</h4>
                    <ul className="text-sm text-italea-forest-600 space-y-1">
                      <li>• Organic macadamia nuts</li>
                      <li>• Raw African honey</li>
                      <li>• Ancient grain flours</li>
                      <li>• Grass-fed butter</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-italea-forest mb-2">Traditional Methods</h4>
                    <ul className="text-sm text-italea-forest-600 space-y-1">
                      <li>• Hand-mixed batters</li>
                      <li>• Slow fermentation</li>
                      <li>• Stone-ground spices</li>
                      <li>• Small batch production</li>
                    </ul>
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
