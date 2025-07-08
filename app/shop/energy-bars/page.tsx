"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Heart, Star, Zap, Leaf, Dumbbell } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useCart } from "@/hooks/use-cart"
import { getProductsByCategory } from "@/lib/products"

export default function EnergyBarsPage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const { addItem } = useCart()
  const products = getProductsByCategory("energy-bars")

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: "Plant-Based Power",
      description: "100% plant-based protein from nuts, seeds, and superfoods",
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-blue-600" />,
      title: "High Protein",
      description: "8-12g of complete protein per bar for muscle support",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-600" />,
      title: "Sustained Energy",
      description: "Natural sugars and complex carbs for lasting fuel",
    },
  ]

  const benefits = [
    "Perfect pre or post-workout fuel",
    "No refined sugars or artificial ingredients",
    "Rich in fiber and healthy fats",
    "Convenient on-the-go nutrition",
    "Supports muscle recovery and growth",
    "Sustained energy without crashes",
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
            <h1 className="text-4xl md:text-6xl font-serif text-amber-900 mb-6">Energy & Protein Bars</h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto mb-8">
              Plant-based nutrition bars crafted for sustained energy and muscle support. Made with whole food
              ingredients, superfoods, and no refined sugars for guilt-free fuel that powers your active lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge className="bg-green-100 text-green-800 px-4 py-2">Plant-Based Protein</Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">No Refined Sugar</Badge>
              <Badge className="bg-orange-100 text-orange-800 px-4 py-2">Sustained Energy</Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2">Superfood Ingredients</Badge>
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
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
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
                          width={500}
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

                      {/* Nutritional Info */}
                      {product.nutritionalInfo && (
                        <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-green-50 rounded-lg">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-700">{product.nutritionalInfo.calories}</div>
                            <div className="text-xs text-green-600">Calories</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-700">{product.nutritionalInfo.protein}g</div>
                            <div className="text-xs text-green-600">Protein</div>
                          </div>
                        </div>
                      )}

                      {/* Benefits */}
                      {product.benefits && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {product.benefits.slice(0, 2).map((benefit) => (
                            <Badge key={benefit} variant="outline" className="text-xs border-blue-200 text-blue-700">
                              {benefit}
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

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-16"
          >
            <h2 className="text-3xl font-serif text-amber-900 mb-6 text-center">Why Choose Our Energy Bars?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-amber-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8"
          >
            <h2 className="text-3xl font-serif text-amber-900 mb-4">Fuel Your Active Lifestyle</h2>
            <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
              Whether you're hitting the gym, going for a hike, or need an afternoon energy boost, our plant-based
              protein bars provide the perfect combination of taste, nutrition, and convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/shop">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Shop All Products
                </Button>
              </Link>
              <Link href="/quiz">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  Find Your Perfect Bar
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
