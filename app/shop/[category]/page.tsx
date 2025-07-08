"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Heart, Star, Search, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useCart } from "@/hooks/use-cart"
import { products, productCategories, sortOptions } from "@/lib/products"
import { useParams } from "next/navigation"

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.category as string

  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const { addItem } = useCart()

  const category = productCategories.find((c) => c.slug === categorySlug)
  const categoryProducts = products.filter((p) => p.category === category?.id)

  const filteredProducts = categoryProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
      case "bestsellers":
        return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0)
      default:
        return 0
    }
  })

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
        <Navigation />
        <div className="pt-20 pb-12 text-center">
          <h1 className="text-4xl font-serif text-amber-900 mb-4">Category Not Found</h1>
          <Link href="/shop">
            <Button className="bg-amber-600 hover:bg-amber-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex items-center space-x-2 text-amber-700">
              <Link href="/shop" className="hover:text-amber-900">
                Shop
              </Link>
              <span>/</span>
              <span className="text-amber-900 font-medium">{category.name}</span>
            </nav>
          </div>

          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">{category.name}</h1>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">{category.description}</p>
          </motion.div>

          {/* Search and Sort */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                <Input
                  placeholder={`Search ${category.name.toLowerCase()}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-amber-200 focus:border-amber-400"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48 border-amber-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-amber-700">
            Showing {sortedProducts.length} products in {category.name}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Link href={`/product/${product.slug}`}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                        {product.isNew && <Badge className="bg-green-500 text-white text-xs">New</Badge>}
                        {product.isBestseller && <Badge className="bg-amber-500 text-white text-xs">Bestseller</Badge>}
                        {product.badges.slice(0, 2).map((badge) => (
                          <Badge key={badge} className="bg-white/90 text-amber-900 text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      {/* Wishlist Button */}
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="p-6">
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-amber-700">({product.reviews})</span>
                      </div>

                      {/* Product Name */}
                      <Link href={`/product/${product.slug}`}>
                        <h3 className="text-xl font-serif font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>

                      {/* Description */}
                      <p className="text-amber-700 text-sm mb-4 line-clamp-2">{product.description}</p>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-amber-900">KSh {product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            KSh {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-amber-600 hover:bg-amber-700"
                          onClick={() => addItem(product)}
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                        <Link href={`/product/${product.slug}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                          >
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedProducts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-serif text-amber-900 mb-2">No products found</h3>
              <p className="text-amber-700 mb-4">Try adjusting your search terms</p>
              <Button onClick={() => setSearchTerm("")} className="bg-amber-600 hover:bg-amber-700">
                Clear Search
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
