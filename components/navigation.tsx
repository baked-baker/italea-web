"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, ShoppingCart, User, Heart, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const shopCategories = [
    {
      name: "All Products",
      href: "/shop",
      description: "Browse our complete collection",
      icon: "🌿",
    },
    {
      name: "Wellness Shots",
      href: "/shop/wellness-shots",
      description: "Concentrated nutrition in 60ml shots",
      icon: "🥤",
    },
    {
      name: "Breakfast Cereals & Snacks",
      href: "/shop/breakfast-snacks",
      description: "Morning fuel and wholesome snacks",
      icon: "🥣",
    },
    {
      name: "Energy Bars",
      href: "/shop/energy-bars",
      description: "Plant-based nutrition bars",
      icon: "🍫",
    },
    {
      name: "Spreads & Sweeteners",
      href: "/shop/spreads-sweeteners",
      description: "Natural sweetness and creamy goodness",
      icon: "🍯",
    },
    {
      name: "Fermented Foods",
      href: "/shop/fermented-foods",
      description: "Probiotic-rich foods for gut health",
      icon: "🥛",
    },
    {
      name: "Pastries & Cookies",
      href: "/shop/pastries-cookies",
      description: "Guilt-free indulgence that loves you back",
      icon: "🍪",
    },
    {
      name: "Oils & Vinegars",
      href: "/shop/oils-vinegars",
      description: "Premium cold-pressed oils",
      icon: "🫒",
    },
  ]

  const journalCategories = [
    {
      name: "All Articles",
      href: "/journal",
      description: "Browse all wellness content",
      icon: "📖",
    },
    {
      name: "Nutrition",
      href: "/journal/nutrition",
      description: "Food science and healthy eating",
      icon: "🥗",
    },
    {
      name: "Wellness",
      href: "/journal/wellness",
      description: "Holistic health and lifestyle",
      icon: "🧘",
    },
    {
      name: "Recipes",
      href: "/journal/recipes",
      description: "Delicious and nutritious recipes",
      icon: "👩‍🍳",
    },
    {
      name: "Sustainability",
      href: "/journal/sustainability",
      description: "Eco-friendly living tips",
      icon: "🌱",
    },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-kraft-sm border-b border-italea-cream-200" : "bg-transparent"
      }`}
    >
      <div className="container-italea">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/italea-logo-clean.png"
              alt="Italea"
              width={120}
              height={40}
              className="h-8 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("shop")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-italea-forest hover:text-italea-macadamia transition-colors">
                <span>Shop</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "shop" && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-kraft-lg border border-italea-cream-200 p-4 z-50">
                  <div className="grid gap-2">
                    {shopCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-italea-cream-50 transition-colors group"
                      >
                        <span className="text-xl">{category.icon}</span>
                        <div>
                          <div className="font-medium text-italea-forest group-hover:text-italea-macadamia">
                            {category.name}
                          </div>
                          <div className="text-sm text-italea-forest-600">{category.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Journal Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("journal")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-italea-forest hover:text-italea-macadamia transition-colors">
                <span>Journal</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "journal" && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-kraft-lg border border-italea-cream-200 p-4 z-50">
                  <div className="grid gap-2">
                    {journalCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-italea-cream-50 transition-colors group"
                      >
                        <span className="text-xl">{category.icon}</span>
                        <div>
                          <div className="font-medium text-italea-forest group-hover:text-italea-macadamia">
                            {category.name}
                          </div>
                          <div className="text-sm text-italea-forest-600">{category.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            <Link
              href="/story"
              className="text-italea-forest hover:text-italea-macadamia transition-colors font-medium"
            >
              Our Story
            </Link>
            <Link
              href="/locations"
              className="text-italea-forest hover:text-italea-macadamia transition-colors font-medium"
            >
              Locations
            </Link>
            <Link
              href="/contact"
              className="text-italea-forest hover:text-italea-macadamia transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button size="icon" variant="ghost" className="hidden lg:flex">
              <Search className="w-5 h-5" />
            </Button>

            {/* Wishlist */}
            <Button size="icon" variant="ghost" className="hidden lg:flex relative">
              <Heart className="w-5 h-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-italea-burnt-orange">
                2
              </Badge>
            </Button>

            {/* Cart */}
            <Link href="/cart">
              <Button size="icon" variant="ghost" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-italea-burnt-orange">
                  3
                </Badge>
              </Button>
            </Link>

            {/* Account */}
            <Button size="icon" variant="ghost" className="hidden lg:flex">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-italea-cream">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Shop Categories */}
                  <div>
                    <h3 className="font-semibold text-italea-forest mb-4">Shop</h3>
                    <div className="space-y-2">
                      {shopCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
                        >
                          <span>{category.icon}</span>
                          <div>
                            <div className="font-medium text-italea-forest">{category.name}</div>
                            <div className="text-sm text-italea-forest-600">{category.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Journal Categories */}
                  <div>
                    <h3 className="font-semibold text-italea-forest mb-4">Journal</h3>
                    <div className="space-y-2">
                      {journalCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
                        >
                          <span>{category.icon}</span>
                          <div>
                            <div className="font-medium text-italea-forest">{category.name}</div>
                            <div className="text-sm text-italea-forest-600">{category.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Other Links */}
                  <div className="space-y-4">
                    <Link href="/story" className="block text-italea-forest font-medium">
                      Our Story
                    </Link>
                    <Link href="/locations" className="block text-italea-forest font-medium">
                      Locations
                    </Link>
                    <Link href="/contact" className="block text-italea-forest font-medium">
                      Contact
                    </Link>
                  </div>

                  {/* Mobile Actions */}
                  <div className="flex space-x-4 pt-4 border-t border-italea-cream-200">
                    <Button size="icon" variant="ghost">
                      <Search className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="ghost" className="relative">
                      <Heart className="w-5 h-5" />
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-italea-burnt-orange">
                        2
                      </Badge>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <User className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
