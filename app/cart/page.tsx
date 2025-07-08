"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { useCart } from "@/hooks/use-cart"

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart()

  const subtotal = getTotalPrice()
  const shipping = subtotal > 2000 ? 0 : 200
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
        <Navigation />

        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-8xl mb-6">🛒</div>
              <h1 className="text-4xl font-serif text-amber-900 mb-4">Your Cart is Empty</h1>
              <p className="text-xl text-amber-800 mb-8">
                Discover our guilt-free indulgences and start your wellness journey.
              </p>
              <Link href="/shop">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Start Shopping
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <Link href="/shop">
                <Button variant="outline" size="sm" className="border-amber-600 text-amber-600 bg-transparent">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl font-serif text-amber-900 mb-2">Shopping Cart</h1>
            <p className="text-amber-800">
              {items.length} item{items.length !== 1 ? "s" : ""} in your cart
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.selectedSize || "default"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-lg font-serif font-bold text-amber-900">{item.name}</h3>
                              {item.selectedSize && <p className="text-sm text-amber-700">Size: {item.selectedSize}</p>}
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="border-amber-200"
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="text-lg font-medium text-amber-900 min-w-[2rem] text-center">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="border-amber-200"
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>

                            <div className="text-right">
                              <p className="text-xl font-bold text-amber-900">
                                KSh {(item.price * item.quantity).toLocaleString()}
                              </p>
                              <p className="text-sm text-amber-700">KSh {item.price.toLocaleString()} each</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Clear Cart */}
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm sticky top-24">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">Order Summary</h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-amber-800">Subtotal</span>
                        <span className="font-medium text-amber-900">KSh {subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-800">Shipping</span>
                        <span className="font-medium text-amber-900">
                          {shipping === 0 ? "Free" : `KSh ${shipping.toLocaleString()}`}
                        </span>
                      </div>
                      {subtotal < 2000 && (
                        <p className="text-sm text-amber-700">
                          Add KSh {(2000 - subtotal).toLocaleString()} more for free shipping
                        </p>
                      )}
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-amber-900">Total</span>
                        <span className="text-amber-900">KSh {total.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Promo Code */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-amber-900 mb-2">Promo Code</label>
                      <div className="flex gap-2">
                        <Input placeholder="Enter code" className="border-amber-200 focus:border-amber-400" />
                        <Button variant="outline" className="border-amber-600 text-amber-600 bg-transparent">
                          Apply
                        </Button>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 mb-4">
                      Proceed to Checkout
                    </Button>

                    <div className="text-center text-sm text-amber-700">
                      <p>Secure checkout with SSL encryption</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
