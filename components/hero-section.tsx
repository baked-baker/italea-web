"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Sparkles, Leaf, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const heroSlides = [
  {
    title: "Guilt-Free Indulgence",
    subtitle: "Premium Wellness Products",
    description:
      "Discover our collection of artisanal wellness shots, fermented foods, and natural treats crafted with love from Africa's finest ingredients.",
    image: "/images/wellness-hero.jpg",
    cta: "Shop Now",
    ctaLink: "/shop",
    badge: "New Collection",
  },
  {
    title: "Daily Wellness Shots",
    subtitle: "Superfoods in Every Sip",
    description:
      "Boost your immunity and energy with our premium wellness shots featuring moringa, turmeric, and other African superfoods.",
    image: "/images/wellness-shots-carrier.jpg",
    cta: "Explore Shots",
    ctaLink: "/shop/wellness-shots",
    badge: "Best Sellers",
  },
  {
    title: "Artisanal Treats",
    subtitle: "Handcrafted with Love",
    description:
      "From macadamia cookies to fermented delights, every product tells a story of tradition, quality, and sustainable farming.",
    image: "/images/traditional-foods.jpg",
    cta: "Discover More",
    ctaLink: "/story",
    badge: "Artisan Made",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const currentHero = heroSlides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-italea-cream via-italea-cream-100 to-italea-olive-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentHero.image || "/placeholder.svg"}
          alt="Hero Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-italea-cream/80 via-italea-cream/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-italea pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="badge-italea-nature">
                <Sparkles className="w-4 h-4 mr-2" />
                {currentHero.badge}
              </Badge>

              <h1 className="text-brand-hero text-italea-brand leading-tight">{currentHero.title}</h1>

              <p className="text-italea-tagline text-xl">{currentHero.subtitle}</p>

              <p className="text-italea-body text-lg max-w-xl">{currentHero.description}</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={currentHero.ctaLink}>
                <Button className="btn-italea-primary text-lg px-8 py-4 group">
                  {currentHero.cta}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/story">
                <Button variant="outline" className="btn-italea-outline text-lg px-8 py-4 group bg-transparent">
                  <Play className="w-5 h-5 mr-2" />
                  Our Story
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-italea-olive-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-italea-olive-600" />
                </div>
                <div>
                  <h4 className="font-medium text-italea-forest">100% Natural</h4>
                  <p className="text-sm text-italea-forest-600">Organic ingredients</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-italea-burnt-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-italea-burnt-600" />
                </div>
                <div>
                  <h4 className="font-medium text-italea-forest">Made with Love</h4>
                  <p className="text-sm text-italea-forest-600">Artisan crafted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="card-italea-kraft p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src={currentHero.image || "/placeholder.svg"}
                alt={currentHero.title}
                width={600}
                height={500}
                className="rounded-lg shadow-kraft-lg"
                priority
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 card-italea-featured p-4 animate-gentle-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-italea-forest">100%</div>
                  <div className="text-sm text-italea-forest-600">Natural</div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 card-italea-featured p-4 animate-gentle-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-italea-forest">5⭐</div>
                  <div className="text-sm text-italea-forest-600">Rated</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-italea-macadamia scale-125 shadow-kraft"
                  : "bg-italea-cream-400 hover:bg-italea-macadamia-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 text-6xl opacity-10 animate-leaf-sway">🍃</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-10 animate-gentle-float">🥜</div>
    </section>
  )
}
