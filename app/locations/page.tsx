"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Navigation,
  Calendar,
  Users,
  Coffee,
  Wifi,
  Car,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation as NavComponent } from "@/components/navigation"

const storeImages = [
  "/placeholder.svg?height=400&width=600&text=Store+Front+View",
  "/placeholder.svg?height=400&width=600&text=Interior+Shopping+Area",
  "/placeholder.svg?height=400&width=600&text=Product+Display+Section",
  "/placeholder.svg?height=400&width=600&text=Wellness+Shots+Counter",
]

const partnerStores = [
  {
    name: "Healthy Living Westlands",
    address: "Westlands Shopping Centre, Nairobi",
    phone: "+254 700 123 456",
    type: "Health Store",
  },
  {
    name: "Organic Market Karen",
    address: "Karen Shopping Centre, Nairobi",
    phone: "+254 700 234 567",
    type: "Organic Market",
  },
  {
    name: "Wellness Corner Kilimani",
    address: "Yaya Centre, Kilimani, Nairobi",
    phone: "+254 700 345 678",
    type: "Wellness Store",
  },
  {
    name: "Natural Foods Gigiri",
    address: "Village Market, Gigiri, Nairobi",
    phone: "+254 700 456 789",
    type: "Natural Foods",
  },
  {
    name: "Green Life Runda",
    address: "Runda Mall, Nairobi",
    phone: "+254 700 567 890",
    type: "Health & Wellness",
  },
  {
    name: "Pure Living Lavington",
    address: "Lavington Mall, Nairobi",
    phone: "+254 700 678 901",
    type: "Lifestyle Store",
  },
]

export default function LocationsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    businessType: "",
    message: "",
  })

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % storeImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + storeImages.length) % storeImages.length)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Stockist application:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <NavComponent />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-6">Find Italea Near You</h1>
            <p className="text-xl text-amber-800 max-w-3xl mx-auto mb-8">
              Visit our flagship store or find us at premium retailers across Nairobi
            </p>
            <Badge className="bg-green-500 text-white text-lg px-6 py-2">Now Available at 7+ Locations</Badge>
          </motion.div>
        </div>
      </section>

      {/* Flagship Store Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Our Flagship Store</h2>
            <p className="text-lg text-amber-800">Experience the full Italea collection at Highway Mall</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Store Images Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Card className="overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={storeImages[currentImageIndex] || "/placeholder.svg"}
                      alt="Italea Flagship Store"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />

                    {/* Navigation Buttons */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {storeImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Store Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-amber-900">
                    <MapPin className="w-6 h-6 text-green-600" />
                    Italea Flagship Store
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-medium text-amber-900">Highway Mall, Nairobi</p>
                      <p className="text-amber-700">Ground Floor, Shop G-24</p>
                      <p className="text-amber-700">Mombasa Road, Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-medium text-amber-900">+254 700 ITALEA</p>
                      <p className="text-amber-700">+254 700 482 532</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-amber-600 mt-1" />
                    <div>
                      <p className="font-medium text-amber-900">Store Hours</p>
                      <p className="text-amber-700">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p className="text-amber-700">Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-600" />
                    <p className="text-amber-700">store@italea.co.ke</p>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-amber-700 font-medium">4.9/5 (127 reviews)</span>
                  </div>
                </CardContent>
              </Card>

              {/* Plan Your Visit */}
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-green-900">
                    <Calendar className="w-5 h-5" />
                    Plan Your Visit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 text-green-800">
                    <Coffee className="w-4 h-4" />
                    <span>Free wellness shot tasting daily</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-800">
                    <Users className="w-4 h-4" />
                    <span>Nutrition consultations available</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-800">
                    <Car className="w-4 h-4" />
                    <span>Free parking available</span>
                  </div>
                  <div className="flex items-center gap-3 text-green-800">
                    <Wifi className="w-4 h-4" />
                    <span>Complimentary WiFi</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Store
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Stores Network */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Partner Stores</h2>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto">
              Find selected Italea products at these premium wellness and health stores across Nairobi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerStores.map((store, index) => (
              <motion.div
                key={store.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-amber-900 text-lg">{store.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {store.type}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-amber-700">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 text-amber-600" />
                        <p className="text-sm">{store.address}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-amber-600" />
                        <p className="text-sm">{store.phone}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-amber-100">
                      <p className="text-xs text-amber-600">Selected wellness shots and snacks available</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Stockist */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Become a Stockist</h2>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto">
              Join our network of premium retailers and bring Italea's wellness products to your customers
            </p>
          </motion.div>

          <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Business Name *</label>
                    <Input
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="border-amber-200 focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Contact Name *</label>
                    <Input
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="border-amber-200 focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-amber-200 focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-900 mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-amber-200 focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Business Address *</label>
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Business Type *</label>
                  <Input
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    placeholder="e.g., Health Store, Organic Market, Wellness Center"
                    required
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Additional Information</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business, target customers, and why you'd like to stock Italea products..."
                    rows={4}
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-amber-600 hover:bg-amber-700 px-8">
                    Submit Application
                  </Button>
                  <p className="text-sm text-amber-700 mt-4">
                    We'll review your application and get back to you within 2-3 business days
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Image
                src="/images/italea-logo-clean.png"
                alt="Italea"
                width={150}
                height={75}
                className="h-16 w-auto mb-4"
                style={{
                  filter: "brightness(0) invert(1)",
                  clipPath: "polygon(8% 8%, 92% 8%, 92% 92%, 8% 92%)",
                }}
              />
              <p className="text-amber-100 leading-relaxed mb-4 max-w-md">
                Where wellness meets wonder. Guilt-free indulgence for the modern wellness warrior.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  📷
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  🐦
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 text-amber-200">Shop</h3>
              <div className="space-y-2">
                <Link href="/shop" className="block text-amber-100 hover:text-white transition-colors">
                  All Products
                </Link>
                <Link href="/shop/wellness-shots" className="block text-amber-100 hover:text-white transition-colors">
                  Wellness Shots
                </Link>
                <Link href="/shop/pastries-cookies" className="block text-amber-100 hover:text-white transition-colors">
                  Pastries & Cookies
                </Link>
                <Link href="/shop/crunchy-snacks" className="block text-amber-100 hover:text-white transition-colors">
                  Crunchy Snacks
                </Link>
                <Link
                  href="/shop/spreads-sweeteners"
                  className="block text-amber-100 hover:text-white transition-colors"
                >
                  Spreads & Sweeteners
                </Link>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 text-amber-200">Support</h3>
              <div className="space-y-2">
                <Link href="/story" className="block text-amber-100 hover:text-white transition-colors">
                  Our Story
                </Link>
                <Link href="/quiz" className="block text-amber-100 hover:text-white transition-colors">
                  Snack Quiz
                </Link>
                <Link href="/locations" className="block text-amber-100 hover:text-white transition-colors">
                  Store Locations
                </Link>
                <Link href="/contact" className="block text-amber-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
                <Link href="/faq" className="block text-amber-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm">© 2024 Italea. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-amber-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-amber-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-amber-200 hover:text-white text-sm transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
