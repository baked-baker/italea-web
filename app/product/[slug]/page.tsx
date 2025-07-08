"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Heart, Star, ArrowLeft, Share2, Minus, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useCart } from "@/hooks/use-cart"
import { products, productCategories } from "@/lib/products"
import { useParams } from "next/navigation"

export default function ProductPage() {
  const params = useParams()
  const productSlug = params.slug as string

  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const { addItem } = useCart()

  const product = products.find((p) => p.slug === productSlug)
  const category = productCategories.find((c) => c.id === product?.category)

  if (!product || !category) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
        <Navigation />
        <div className="pt-20 pb-12 text-center">
          <h1 className="text-4xl font-serif text-amber-900 mb-4">Product Not Found</h1>
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

  const productImages = [product.image, product.hoverImage || product.image, product.image, product.image].filter(
    Boolean,
  )

  const handleAddToCart = () => {
    addItem({
      ...product,
      selectedSize,
      quantity,
    })
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
              <Link href={`/shop/${category.slug}`} className="hover:text-amber-900">
                {category.name}
              </Link>
              <span>/</span>
              <span className="text-amber-900 font-medium">{product.name}</span>
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-lg shadow-xl"
              >
                <Image
                  src={productImages[activeImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-96 md:h-[500px] object-cover"
                />

                {/* Image Navigation */}
                {productImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === activeImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Thumbnail Images */}
              {productImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === activeImageIndex ? "border-amber-400" : "border-transparent"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} view ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.isNew && <Badge className="bg-green-500 text-white">New</Badge>}
                  {product.isBestseller && <Badge className="bg-amber-500 text-white">Bestseller</Badge>}
                  {product.badges.map((badge) => (
                    <Badge key={badge} className="bg-amber-100 text-amber-900">
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Product Name */}
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-amber-700">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-amber-900">KSh {product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      KSh {product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-red-100 text-red-800">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <p className="text-amber-700 text-lg leading-relaxed mb-6">{product.description}</p>

                {/* Benefits */}
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">Why It's Good for You:</h3>
                  <p className="text-green-700">{product.benefits}</p>
                </div>

                {/* Size Selection */}
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-amber-900 mb-2">Size</label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger className="border-amber-200">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {product.sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-amber-900 mb-2">Quantity</label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="border-amber-200"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-lg font-medium text-amber-900 min-w-[3rem] text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                      className="border-amber-200"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mb-6">
                  <Button
                    size="lg"
                    className="flex-1 bg-amber-600 hover:bg-amber-700"
                    onClick={handleAddToCart}
                    disabled={!product.inStock || (product.sizes && !selectedSize)}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 bg-transparent">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 bg-transparent">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                {/* Stock Status */}
                <div className="text-sm text-amber-700">
                  {product.inStock ? (
                    <span className="text-green-600">✓ In Stock</span>
                  ) : (
                    <span className="text-red-600">✗ Out of Stock</span>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <Tabs defaultValue="ingredients" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-amber-100">
                <TabsTrigger
                  value="ingredients"
                  className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                >
                  Ingredients
                </TabsTrigger>
                <TabsTrigger
                  value="benefits"
                  className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                >
                  Benefits
                </TabsTrigger>
                <TabsTrigger
                  value="pairing"
                  className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                >
                  Pairing Tips
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>

              <TabsContent value="ingredients" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Ingredients</h3>
                    {product.ingredients ? (
                      <ul className="space-y-2">
                        {product.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-center gap-2 text-amber-800">
                            <div className="w-2 h-2 bg-amber-400 rounded-full" />
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-amber-700">Ingredient information coming soon.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="benefits" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Health Benefits</h3>
                    <p className="text-amber-800 leading-relaxed">{product.benefits}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pairing" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Pairing Suggestions</h3>
                    {product.pairingTips ? (
                      <ul className="space-y-2">
                        {product.pairingTips.map((tip, index) => (
                          <li key={index} className="flex items-center gap-2 text-amber-800">
                            <div className="w-2 h-2 bg-green-400 rounded-full" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-amber-700">Pairing suggestions coming soon.</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">
                      Customer Reviews ({product.reviews})
                    </h3>
                    <div className="space-y-4">
                      {/* Sample reviews */}
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="border-b border-amber-100 pb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <span className="text-sm text-amber-700">Verified Purchase</span>
                          </div>
                          <p className="text-amber-800 mb-2">
                            "Amazing quality and taste! Will definitely order again."
                          </p>
                          <p className="text-sm text-amber-600">- Customer {review}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
