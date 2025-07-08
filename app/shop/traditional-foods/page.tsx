import { Suspense } from "react"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LoadingAnimation } from "@/components/loading-animation"

const traditionalFoods = products.filter(
  (product) =>
    product.category === "traditional-foods" ||
    product.name.toLowerCase().includes("traditional") ||
    product.name.toLowerCase().includes("heritage") ||
    product.name.toLowerCase().includes("ancient"),
)

export default function TraditionalFoodsPage() {
  return (
    <div className="min-h-screen bg-italea-cream">
      <div className="container-italea py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="heading-italea-primary mb-4">Traditional Foods</h1>
          <p className="text-italea-forest-600 text-lg max-w-2xl mx-auto">
            Authentic African foods prepared using time-honored methods. Discover the rich culinary heritage of Africa
            through these traditional delicacies.
          </p>
        </div>

        {/* Products Grid */}
        <Suspense fallback={<LoadingAnimation />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {traditionalFoods.map((product) => (
              <Card key={product.id} className="card-italea-product group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.isNew && <Badge className="absolute top-3 left-3 badge-italea-accent">New</Badge>}
                    <Button size="icon" className="absolute top-3 right-3 btn-italea-ghost bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="p-4">
                    <h3 className="font-serif font-semibold text-italea-forest mb-2">{product.name}</h3>
                    <p className="text-sm text-italea-forest-600 mb-3 line-clamp-2">{product.description}</p>

                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-italea-macadamia text-italea-macadamia"
                              : "text-italea-cream-400"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-italea-forest-600 ml-1">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-italea-forest">R{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-italea-forest-400 line-through">R{product.originalPrice}</span>
                        )}
                      </div>
                      <Button size="sm" className="btn-italea-primary">
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Suspense>

        {traditionalFoods.length === 0 && (
          <div className="text-center py-12">
            <p className="text-italea-forest-600 text-lg">No traditional foods available at the moment.</p>
            <Link href="/shop">
              <Button className="btn-italea-primary mt-4">Browse All Products</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
