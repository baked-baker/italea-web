"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Heart, Star, Droplets, Award, Thermometer } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useCart } from "@/hooks/use-cart"
import { getProductsByCategory } from "@/lib/products"

export default function OilsVinegarsPage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const { addItem } = useCart()
  const products = getProductsByCategory("oils-vinegars")

  const features = [
    {
      icon: <Droplets className="w-6 h-6 text-blue-600" />,
      title: "Cold-Pressed",
      description: "Extracted without heat to preserve nutrients and flavor",
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: "Small Batch",
      description: "Artisanal production for consistent quality and freshness",
    },
    {
      icon: <Thermometer className="w-6 h-6 text-red-600" />,
      title: "High Smoke Point",
      description: "Perfect for high-heat cooking and versatile culinary use",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-amber-900 mb-6">Premium Oils & Vinegars</h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto mb-8">
              Discover our collection of cold-pressed oils and artisan vinegars. Each bottle is crafted in small batches
              to deliver exceptional flavor and nutritional benefits for your culinary adventures.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Cold-Pressed</Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">Extra Virgin</Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2">Small Batch</Badge>
              <Badge className="bg-orange-100 text-orange-800 px-4 py-2">Pure & Natural</Badge>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">{feature.title}</h3>
                  <p className="text-amber-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Link href={`/product/${product.slug}`}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </Link>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {product.isNew && <Badge className="bg-green-500 text-white">New</Badge>}
                        {product.isBestseller && <Badge className="bg-amber-500 text-white">Bestseller</Badge>}
                        {product.badges.slice(0, 2).map((badge) => (
                          <Badge key={badge} className="bg-white/90 text-amber-900">
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      {/* Wishlist Button */}
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>

                      {/* Quick View Overlay */}
                      {hoveredProduct === product.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/20 flex items-center justify-center"
                        >
                          <Link href={`/product/${product.slug}`}>
                            <Button className="bg-white text-amber-900 hover:bg-amber-50">Quick View</Button>
                          </Link>
                        </motion.div>
                      )}
                    </div>

                    <div className="p-6">
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
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
                        <h3 className="text-xl font-serif font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">
                          {product.name}
                        </h3>
                      </Link>

                      {/* Description */}
                      <p className="text-amber-700 text-sm mb-4 line-clamp-2">{product.description}</p>

                      {/* Nutritional Highlights */}
                      {product.nutritionalHighlights && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {product.nutritionalHighlights.slice(0, 3).map((highlight) => (
                            <Badge
                              key={highlight}
                              variant="outline"
                              className="text-xs border-green-200 text-green-700"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      )}

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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-3xl font-serif text-amber-900 mb-4">Elevate Your Culinary Experience</h2>
            <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
              Transform your cooking with our premium oils and vinegars. From everyday cooking to gourmet preparations,
              our products bring out the best in every dish while providing exceptional nutritional benefits.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Explore All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
