"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Heart, Star, Eye } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [wishlist, setWishlist] = useState<string[]>([])

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-italea-cream-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingCart className="w-8 h-8 text-italea-forest-400" />
        </div>
        <h3 className="text-lg font-semibold text-italea-forest mb-2">No products found</h3>
        <p className="text-italea-forest-600 mb-4">Try adjusting your filters or browse all products.</p>
        <Link href="/shop">
          <Button className="btn-italea-primary">Browse All Products</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="card-italea-product group">
          <CardContent className="p-0">
            <div className="relative overflow-hidden rounded-t-lg">
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg?height=300&width=300"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isNew && <Badge className="badge-italea-accent">New</Badge>}
                {product.originalPrice && (
                  <Badge className="bg-italea-burnt-orange text-white">
                    Save R{product.originalPrice - product.price}
                  </Badge>
                )}
                {!product.inStock && <Badge variant="secondary">Out of Stock</Badge>}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="bg-white/80 hover:bg-white"
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-italea-forest"
                    }`}
                  />
                </Button>
                <Link href={`/product/${product.id}`}>
                  <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
                    <Eye className="w-4 h-4 text-italea-forest" />
                  </Button>
                </Link>
              </div>

              {/* Quick Add Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button className="btn-italea-primary" disabled={!product.inStock}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? "Quick Add" : "Out of Stock"}
                </Button>
              </div>
            </div>

            <div className="p-4">
              <Link href={`/product/${product.id}`}>
                <h3 className="font-serif font-semibold text-italea-forest mb-2 hover:text-italea-macadamia transition-colors">
                  {product.name}
                </h3>
              </Link>

              <p className="text-sm text-italea-forest-600 mb-3 line-clamp-2">{product.description}</p>

              {/* Rating */}
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

              {/* Price and Add to Cart */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-italea-forest">R{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-italea-forest-400 line-through">R{product.originalPrice}</span>
                  )}
                </div>
                <Button size="sm" className="btn-italea-primary" disabled={!product.inStock}>
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </div>

              {/* Ingredients Preview */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="mt-3 pt-3 border-t border-italea-cream-200">
                  <p className="text-xs text-italea-forest-500">
                    Key ingredients: {product.ingredients.slice(0, 3).join(", ")}
                    {product.ingredients.length > 3 && "..."}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
