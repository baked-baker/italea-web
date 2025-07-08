"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, CheckCircle } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Cape Town, SA",
    rating: 5,
    text: "The wellness shots have completely transformed my morning routine. I feel more energized and focused throughout the day. The turmeric ginger shot is my absolute favorite!",
    product: "Turmeric Ginger Shot",
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Johannesburg, SA",
    rating: 5,
    text: "As someone who's always on the go, these products are a game-changer. The macadamia nut butter is incredibly creamy and the perfect healthy snack for my busy lifestyle.",
    product: "Macadamia Nut Butter",
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    rating: 5,
    text: "I love supporting brands that celebrate African ingredients. The moringa shots taste amazing and I can feel the difference in my energy levels. Highly recommend!",
    product: "Moringa Mint Shot",
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "David Williams",
    location: "Nairobi, Kenya",
    rating: 5,
    text: "The fermented products are exceptional. You can taste the quality and care that goes into each bottle. My digestion has improved significantly since I started drinking the kefir shots.",
    product: "Beetroot Kefir Shot",
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    location: "Durban, SA",
    rating: 5,
    text: "Finally found healthy snacks that actually taste good! The spicy macadamia nuts are addictive, and I love that they're locally sourced. Perfect for my family.",
    product: "Spicy Macadamia Nuts",
    image: "/placeholder.svg?height=60&width=60",
    verified: true,
    date: "2 months ago",
  },
]

export function TestimonialRotator() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[currentTestimonial]

  return (
    <div className="relative">
      {/* Main Testimonial */}
      <Card className="card-italea-featured max-w-4xl mx-auto">
        <CardContent className="p-12">
          <div className="text-center mb-8">
            <Quote className="w-12 h-12 text-italea-macadamia-400 mx-auto mb-4" />
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < current.rating ? "text-italea-macadamia fill-current" : "text-italea-cream-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <blockquote className="text-italea-body text-xl leading-relaxed text-center mb-8 max-w-3xl mx-auto">
            "{current.text}"
          </blockquote>

          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-4">
              <Image
                src={current.image || "/placeholder.svg"}
                alt={current.name}
                width={60}
                height={60}
                className="rounded-full shadow-kraft"
              />
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h4 className="font-serif font-semibold text-italea-forest">{current.name}</h4>
                  {current.verified && <CheckCircle className="w-4 h-4 text-italea-olive-600" />}
                </div>
                <p className="text-sm text-italea-forest-600">{current.location}</p>
                <p className="text-xs text-italea-forest-500">{current.date}</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-italea-cream-300" />

            <div className="text-center">
              <Badge className="badge-italea-primary mb-1">Verified Purchase</Badge>
              <p className="text-sm text-italea-forest-600">{current.product}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testimonial Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentTestimonial
                ? "bg-italea-macadamia scale-125 shadow-kraft"
                : "bg-italea-cream-400 hover:bg-italea-macadamia-300"
            }`}
          />
        ))}
      </div>

      {/* Additional Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <Card key={testimonial.id} className="card-italea">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? "text-italea-macadamia fill-current" : "text-italea-cream-400"
                    }`}
                  />
                ))}
              </div>

              <p className="text-italea-body text-sm mb-4 line-clamp-3">"{testimonial.text}"</p>

              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h5 className="font-medium text-italea-forest text-sm">{testimonial.name}</h5>
                    {testimonial.verified && <CheckCircle className="w-3 h-3 text-italea-olive-600" />}
                  </div>
                  <p className="text-xs text-italea-forest-600">{testimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
