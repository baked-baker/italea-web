"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Have questions about our products? Want to partner with us? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">Send us a Message</h2>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-amber-900 mb-2">First Name</label>
                        <Input placeholder="Your first name" className="border-amber-200 focus:border-amber-400" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-amber-900 mb-2">Last Name</label>
                        <Input placeholder="Your last name" className="border-amber-200 focus:border-amber-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-900 mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-amber-200 focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-900 mb-2">Phone (Optional)</label>
                      <Input placeholder="+254 700 000 000" className="border-amber-200 focus:border-amber-400" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-900 mb-2">Subject</label>
                      <Input placeholder="What's this about?" className="border-amber-200 focus:border-amber-400" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-amber-900 mb-2">Message</label>
                      <Textarea
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="border-amber-200 focus:border-amber-400"
                      />
                    </div>

                    <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-full">
                        <MapPin className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-amber-900 mb-2">Visit Our Store</h3>
                        <p className="text-amber-700">
                          123 Wellness Street
                          <br />
                          Nairobi, Kenya
                          <br />
                          00100
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-full">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-amber-900 mb-2">Call Us</h3>
                        <p className="text-amber-700">
                          +254 700 123 456
                          <br />
                          +254 733 987 654
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-amber-900 mb-2">Email Us</h3>
                        <p className="text-amber-700">
                          hello@italea.co.ke
                          <br />
                          support@italea.co.ke
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 rounded-full">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-amber-900 mb-2">Business Hours</h3>
                        <p className="text-amber-700">
                          Monday - Friday: 8:00 AM - 6:00 PM
                          <br />
                          Saturday: 9:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Link */}
              <Card className="shadow-lg bg-gradient-to-r from-amber-100 to-green-100">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">Quick Questions?</h3>
                  <p className="text-amber-700 mb-4">Check our FAQ section for instant answers to common questions.</p>
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                  >
                    View FAQ
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <Card className="shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-r from-amber-100 to-green-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-amber-900 mb-2">Find Us Here</h3>
                    <p className="text-amber-700">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
