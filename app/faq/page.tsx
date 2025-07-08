"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronDown, Search, HelpCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"

const faqData = [
  {
    category: "Products",
    questions: [
      {
        question: "Are your products really sugar-free?",
        answer:
          "Our sugar-free products contain no refined sugars. We use natural sweeteners like dates, stevia, and monk fruit. Always check individual product labels for specific ingredients.",
      },
      {
        question: "What makes your wellness shots special?",
        answer:
          "Our 60ml wellness shots are concentrated doses of functional ingredients. Each shot is carefully formulated with specific health benefits in mind, from immunity support to energy enhancement.",
      },
      {
        question: "Are your products suitable for vegans?",
        answer:
          "Many of our products are vegan-friendly! Look for the 'Vegan' badge on product pages. Our plant-based options include cookies, wellness shots, and most of our crunchy snacks.",
      },
      {
        question: "Do you use any artificial preservatives?",
        answer:
          "No, we avoid artificial preservatives. Our products use natural preservation methods and ingredients to maintain freshness while keeping everything clean and wholesome.",
      },
    ],
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        question: "What are your shipping costs?",
        answer:
          "We offer free shipping on orders over KSh 2,000 within Nairobi. For other areas and smaller orders, shipping costs vary by location and will be calculated at checkout.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Within Nairobi: 1-2 business days. Other major cities: 2-3 business days. Remote areas: 3-5 business days. We'll provide tracking information once your order ships.",
      },
      {
        question: "Do you deliver nationwide?",
        answer:
          "Yes! We deliver across Kenya. Delivery times and costs may vary depending on your location. Contact us if you're unsure about delivery to your area.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Once your order ships, you'll receive a tracking number via SMS and email. You can also check your order status in your account dashboard.",
      },
    ],
  },
  {
    category: "Orders & Returns",
    questions: [
      {
        question: "Can I modify or cancel my order?",
        answer:
          "You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer service team and we'll do our best to help.",
      },
      {
        question: "What's your return policy?",
        answer:
          "We accept returns within 7 days of delivery for unopened products. Due to food safety regulations, opened perishable items cannot be returned unless there's a quality issue.",
      },
      {
        question: "What if my order arrives damaged?",
        answer:
          "We're sorry if that happens! Please contact us within 24 hours with photos of the damaged items. We'll arrange a replacement or full refund immediately.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer full refunds for eligible returns. Refunds are processed within 5-7 business days to your original payment method.",
      },
    ],
  },
  {
    category: "Health & Nutrition",
    questions: [
      {
        question: "Are your products safe for people with allergies?",
        answer:
          "We clearly label all allergens on our products. Common allergens in our facility include nuts, dairy, and gluten. Always check product labels and contact us if you have specific concerns.",
      },
      {
        question: "Can diabetics consume your products?",
        answer:
          "Many of our products are suitable for diabetics, especially our sugar-free and naturally sweetened options. However, we recommend consulting with your healthcare provider before making dietary changes.",
      },
      {
        question: "Are your wellness shots safe for pregnant women?",
        answer:
          "While our wellness shots use natural ingredients, we recommend pregnant and nursing mothers consult their healthcare provider before consuming any new supplements or functional foods.",
      },
      {
        question: "How often should I take wellness shots?",
        answer:
          "Most of our wellness shots are designed for daily consumption. However, start with every other day to see how your body responds, then adjust as needed. Always follow the recommended serving size.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQ = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <HelpCircle className="w-12 h-12 text-amber-600" />
              <h1 className="text-4xl md:text-5xl font-serif text-amber-900">Frequently Asked Questions</h1>
            </div>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Find answers to common questions about our products, shipping, and wellness philosophy.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
              <Input
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-amber-200 focus:border-amber-400"
              />
            </div>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredFAQ.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">{category.category}</h2>

                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const itemId = `${category.category}-${index}`
                    const isOpen = openItems.includes(itemId)

                    return (
                      <Card key={itemId} className="shadow-lg bg-white/90 backdrop-blur-sm">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full p-6 text-left hover:bg-amber-50 transition-colors duration-200 flex items-center justify-between"
                          >
                            <h3 className="text-lg font-medium text-amber-900 pr-4">{faq.question}</h3>
                            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown className="w-5 h-5 text-amber-600 flex-shrink-0" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6 pt-0">
                                  <p className="text-amber-700 leading-relaxed">{faq.answer}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredFAQ.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-amber-900 mb-2">No results found</h3>
              <p className="text-amber-700 mb-6">
                We couldn't find any FAQ items matching "{searchTerm}". Try a different search term or contact us
                directly.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Support
              </motion.a>
            </motion.div>
          )}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Card className="shadow-xl bg-gradient-to-r from-amber-100 to-green-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">Still have questions?</h3>
                <p className="text-amber-800 mb-6">
                  Our wellness experts are here to help! Get in touch and we'll respond within 24 hours.
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
                >
                  Contact Us
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
