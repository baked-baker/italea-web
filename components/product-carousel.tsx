"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "Turmeric Ginger Shot",
    price: "R29.99",
    originalPrice: "R34.99",
    image: "/images/turmeric-ginger-shot.jpg",
    badge: "Best Seller",
    category: "Wellness Shots",
    description: "Anti-inflammatory powerhouse with organic turmeric and fresh ginger",
  },
  {
    id: 2,
    name: "Macadamia Nut Butter",
    price: "R89.99",
    image: "/images/macadamia-nut-butter.jpg",
    badge: "Premium",
    category: "Spreads",
    description: "Creamy, rich nut butter made from premium South African macadamias",
  },
  {
    id: 3,
    name: "Moringa Mint Shot",
    price: "R32.99",
    image: "/images/moringa-mint-shot.jpg",
    badge: "Superfood",
    category: "Wellness Shots",
    description: "Nutrient-dense moringa with refreshing mint for daily vitality",
  },
  {
    id: 4,
    name: "Baobab Honey",
    price: "R67.99",
    image: "/images/baobab-honey.jpg",
    badge: "Organic",
    category: "Sweeteners",
    description: "Raw honey infused with baobab fruit powder for natural energy",
  },
  {
    id: 5,
    name: "Beetroot Kefir Shot",
    price: "R28.99",
    image: "/images/beetroot-kefir-shot.jpg",
    badge: "Probiotic",
    category: "Wellness Shots",
    description: "Fermented beetroot with live cultures for digestive health",
  },
  {
    id: 6,
    name: "Macadamia Cookies",
    price: "R45.99",
    image: "/images/macadamia-cookies.jpg",
    badge: "Artisan",
    category: "Treats",
    description: "Handcrafted cookies with chunks of premium macadamia nuts",
  },
]

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, featuredProducts.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const getBadgeClass = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "badge-italea-accent"
      case "Premium":
        return "badge-italea-primary"
      case "Superfood":
        return "badge-italea-nature"
      case "Organic":
        return "badge-italea-nature"
      case "Probiotic":
        return "badge-italea-accent"
      case "Artisan":
        return "badge-italea-primary"
      default:
        return "badge-italea-primary"
    }
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-2">
          <Button onClick={prevSlide} disabled={currentIndex === 0} className="btn-italea-ghost w-12 h-12 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="btn-italea-ghost w-12 h-12 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <Link href="/shop">
          <Button className="btn-italea-outline">View All Products</Button>
        </Link>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-1/3">
              <Card className="card-italea-product group h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={240}
                      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className={`${getBadgeClass(product.badge)} absolute top-4 left-4`}>{product.badge}</Badge>
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4 bg-italea-burnt text-italea-cream text-xs px-2 py-1 rounded-full font-medium">
                        Save R
                        {(
                          Number.parseFloat(product.originalPrice.replace("R", "")) -
                          Number.parseFloat(product.price.replace("R", ""))
                        ).toFixed(2)}
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs text-italea-macadamia-600 font-medium uppercase tracking-wide">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-italea-forest mb-2 group-hover:text-italea-macadamia transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-italea-forest-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-italea-macadamia">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-italea-forest-400 line-through">{product.originalPrice}</span>
                        )}
                      </div>

                      <Button className="btn-italea-primary btn-italea text-sm group">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-italea-macadamia" : "bg-italea-cream-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
