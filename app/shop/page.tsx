"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ShoppingCart, Heart, Star, Search, Filter, Grid, List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useCart } from "@/hooks/use-cart"
import { products, productCategories, dietaryFilters, sortOptions } from "@/lib/products"

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const { addItem } = useCart()

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesFilters =
      selectedFilters.length === 0 || selectedFilters.some((filter) => product.badges.includes(filter))

    return matchesSearch && matchesCategory && matchesFilters
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

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">Shop Guilt-Free Indulgence</h1>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Discover our complete range of wholesome, plant-powered products crafted for your wellness journey.
            </p>
          </motion.div>

          {/* Category Quick Links */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className={
                  selectedCategory === "all"
                    ? "bg-amber-600 hover:bg-amber-700"
                    : "border-amber-600 text-amber-600 hover:bg-amber-50"
                }
              >
                All Products
              </Button>
              {productCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "bg-amber-600 hover:bg-amber-700"
                      : "border-amber-600 text-amber-600 hover:bg-amber-50"
                  }
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                <Input
                  placeholder="Search products..."
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
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-amber-600 text-amber-600 hover:bg-amber-50"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <div className="flex border border-amber-200 rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={viewMode === "grid" ? "bg-amber-600 hover:bg-amber-700" : ""}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={viewMode === "list" ? "bg-amber-600 hover:bg-amber-700" : ""}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-amber-200"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-3">Dietary Preferences</h3>
                    <div className="space-y-2">
                      {dietaryFilters.map((filter) => (
                        <div key={filter} className="flex items-center space-x-2">
                          <Checkbox
                            id={filter}
                            checked={selectedFilters.includes(filter)}
                            onCheckedChange={() => toggleFilter(filter)}
                          />
                          <label htmlFor={filter} className="text-amber-800">
                            {filter}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-3">Product Type</h3>
                    <div className="space-y-2">
                      {["Premium", "Traditional", "Spicy", "Sweet", "Crunchy"].map((filter) => (
                        <div key={filter} className="flex items-center space-x-2">
                          <Checkbox
                            id={filter}
                            checked={selectedFilters.includes(filter)}
                            onCheckedChange={() => toggleFilter(filter)}
                          />
                          <label htmlFor={filter} className="text-amber-800">
                            {filter}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-3">Special Features</h3>
                    <div className="space-y-2">
                      {["New", "Bestseller", "Local", "Functional", "Aromatic"].map((filter) => (
                        <div key={filter} className="flex items-center space-x-2">
                          <Checkbox
                            id={filter}
                            checked={selectedFilters.includes(filter)}
                            onCheckedChange={() => toggleFilter(filter)}
                          />
                          <label htmlFor={filter} className="text-amber-800">
                            {filter}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6 text-amber-700">
            Showing {sortedProducts.length} of {products.length} products
            {selectedCategory !== "all" && (
              <span> in {productCategories.find((c) => c.id === selectedCategory)?.name}</span>
            )}
          </div>

          {/* Products Grid/List */}
          <div
            className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"}
          >
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card
                  className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm ${viewMode === "list" ? "flex" : ""}`}
                >
                  <CardContent className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}>
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                      <Link href={`/product/${product.slug}`}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                            viewMode === "list" ? "w-48 h-48" : "w-full h-64"
                          }`}
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

                    <div className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
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
                      <div className={`flex gap-2 ${viewMode === "list" ? "mt-auto" : ""}`}>
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
              <div className="text-6xl mb-4">🍪</div>
              <h3 className="text-2xl font-serif text-amber-900 mb-2">No products found</h3>
              <p className="text-amber-700 mb-4">Try adjusting your search or filters</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedFilters([])
                }}
                className="bg-amber-600 hover:bg-amber-700"
              >
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
