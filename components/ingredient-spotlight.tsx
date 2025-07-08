"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Leaf, Zap, Shield, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ingredients = [
  {
    name: "Moringa",
    scientificName: "Moringa oleifera",
    description:
      "Known as the 'miracle tree', moringa is packed with vitamins, minerals, and antioxidants. Our moringa is sustainably sourced from small-scale farmers in Kenya.",
    benefits: ["Rich in Vitamin C", "High in Iron", "Antioxidant Power", "Natural Energy"],
    image: "/images/moringa-shot.jpg",
    color: "olive",
    icon: Leaf,
    products: ["Moringa Mint Shot", "Moringa Protein Bar"],
  },
  {
    name: "Turmeric",
    scientificName: "Curcuma longa",
    description:
      "This golden spice has been used for centuries for its anti-inflammatory properties. Our turmeric is organically grown and contains high levels of curcumin.",
    benefits: ["Anti-inflammatory", "Immune Support", "Joint Health", "Digestive Aid"],
    image: "/images/turmeric-shot.jpg",
    color: "burnt",
    icon: Zap,
    products: ["Turmeric Ginger Shot", "Golden Milk Blend"],
  },
  {
    name: "Macadamia",
    scientificName: "Macadamia integrifolia",
    description:
      "Premium macadamia nuts from South African orchards, known for their buttery texture and heart-healthy fats. Sustainably harvested and minimally processed.",
    benefits: ["Healthy Fats", "Heart Health", "Rich in Fiber", "Natural Protein"],
    image: "/images/macadamia-nut-butter.jpg",
    color: "macadamia",
    icon: Heart,
    products: ["Macadamia Nut Butter", "Spicy Macadamia Nuts", "Macadamia Cookies"],
  },
  {
    name: "Kefir Cultures",
    scientificName: "Lactobacillus kefiri",
    description:
      "Traditional fermentation cultures that create probiotic-rich foods. Our kefir cultures are carefully maintained to ensure maximum beneficial bacteria.",
    benefits: ["Probiotic Power", "Digestive Health", "Immune Support", "Gut Balance"],
    image: "/images/kefir-milk.jpg",
    color: "olive",
    icon: Shield,
    products: ["Beetroot Kefir Shot", "Kefir Milk", "Fermented Vegetables"],
  },
]

export function IngredientSpotlight() {
  const [activeIngredient, setActiveIngredient] = useState(0)

  const nextIngredient = () => {
    setActiveIngredient((prev) => (prev + 1) % ingredients.length)
  }

  const prevIngredient = () => {
    setActiveIngredient((prev) => (prev - 1 + ingredients.length) % ingredients.length)
  }

  const current = ingredients[activeIngredient]
  const IconComponent = current.icon

  const getColorClasses = (color: string) => {
    switch (color) {
      case "olive":
        return {
          badge: "badge-italea-nature",
          icon: "bg-italea-olive-100 text-italea-olive-600",
          accent: "text-italea-olive-600",
        }
      case "burnt":
        return {
          badge: "badge-italea-accent",
          icon: "bg-italea-burnt-100 text-italea-burnt-600",
          accent: "text-italea-burnt-600",
        }
      case "macadamia":
        return {
          badge: "badge-italea-primary",
          icon: "bg-italea-macadamia-100 text-italea-macadamia-600",
          accent: "text-italea-macadamia-600",
        }
      default:
        return {
          badge: "badge-italea-primary",
          icon: "bg-italea-macadamia-100 text-italea-macadamia-600",
          accent: "text-italea-macadamia-600",
        }
    }
  }

  const colorClasses = getColorClasses(current.color)

  return (
    <section className="section-italea bg-gradient-to-br from-italea-cream-100 to-italea-macadamia-50">
      <div className="container-italea">
        <div className="text-center mb-16">
          <Badge className="badge-italea-nature mb-4">
            <Leaf className="w-4 h-4 mr-2" />
            Ingredient Spotlight
          </Badge>
          <h2 className="text-brand-xl text-italea-brand mb-4">Nature's Finest Ingredients</h2>
          <p className="text-italea-body max-w-2xl mx-auto">
            Discover the powerful superfoods and traditional ingredients that make our products extraordinary. Each
            ingredient is carefully sourced and sustainably harvested.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${colorClasses.icon}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-brand-lg text-italea-brand">{current.name}</h3>
                  <p className="text-sm text-italea-forest-600 italic">{current.scientificName}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={prevIngredient}
                  variant="outline"
                  size="icon"
                  className="btn-italea-ghost bg-transparent"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={nextIngredient}
                  variant="outline"
                  size="icon"
                  className="btn-italea-ghost bg-transparent"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <p className="text-italea-body text-lg leading-relaxed">{current.description}</p>

            {/* Benefits */}
            <div>
              <h4 className="font-serif font-semibold text-italea-forest mb-4">Health Benefits</h4>
              <div className="grid grid-cols-2 gap-3">
                {current.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-italea-macadamia" />
                    <span className="text-italea-forest-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-serif font-semibold text-italea-forest mb-4">Featured In</h4>
              <div className="flex flex-wrap gap-2">
                {current.products.map((product, index) => (
                  <Badge key={index} className={colorClasses.badge}>
                    {product}
                  </Badge>
                ))}
              </div>
            </div>

            <Link href="/shop">
              <Button className="btn-italea-primary">Shop {current.name} Products</Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="card-italea-kraft p-8">
              <Image
                src={current.image || "/placeholder.svg"}
                alt={current.name}
                width={500}
                height={400}
                className="rounded-lg shadow-kraft-md w-full h-80 object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 card-italea-featured p-4">
                <div className="text-center">
                  <div className={`text-lg font-bold ${colorClasses.accent}`}>100%</div>
                  <div className="text-xs text-italea-forest-600">Organic</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredient Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          {ingredients.map((ingredient, index) => (
            <button
              key={index}
              onClick={() => setActiveIngredient(index)}
              className={`p-4 rounded-lg transition-all duration-300 ${
                index === activeIngredient ? "card-italea-featured shadow-kraft-md" : "card-italea hover:shadow-kraft"
              }`}
            >
              <div className="text-center">
                <div
                  className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 ${
                    getColorClasses(ingredient.color).icon
                  }`}
                >
                  <ingredient.icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-italea-forest">{ingredient.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
