import { HeroSection } from "@/components/hero-section"
import { ProductCarousel } from "@/components/product-carousel"
import { IngredientSpotlight } from "@/components/ingredient-spotlight"
import { TestimonialRotator } from "@/components/testimonial-rotator"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Leaf, Heart, Shield, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-italea-cream">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Carousel */}
      <section className="section-italea">
        <div className="container-italea">
          <div className="text-center mb-12">
            <Badge className="badge-italea-primary mb-4">Featured Products</Badge>
            <h2 className="text-brand-xl text-italea-brand mb-4">Discover Our Premium Collection</h2>
            <p className="text-italea-body max-w-2xl mx-auto">
              From wellness shots to artisanal treats, explore our carefully curated selection of premium
              African-inspired products.
            </p>
          </div>
          <ProductCarousel />
        </div>
      </section>

      {/* Wellness Shots Spotlight */}
      <section className="section-italea-alt">
        <div className="container-italea">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="badge-italea-accent mb-4">Wellness Shots</Badge>
              <h2 className="text-brand-lg text-italea-brand mb-6">Daily Wellness in Every Shot</h2>
              <p className="text-italea-body mb-6">
                Our premium wellness shots combine traditional African superfoods with modern nutrition science. Each
                shot is carefully crafted to deliver maximum health benefits in a convenient, delicious format.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-italea-olive-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-italea-olive-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-italea-forest">Natural Ingredients</h4>
                    <p className="text-sm text-italea-forest-600">100% organic superfoods</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-italea-burnt-100 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-italea-burnt-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-italea-forest">Health Focused</h4>
                    <p className="text-sm text-italea-forest-600">Immune & energy support</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-italea-macadamia-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-italea-macadamia-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-italea-forest">Quality Assured</h4>
                    <p className="text-sm text-italea-forest-600">Lab tested & certified</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-italea-olive-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-italea-olive-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-italea-forest">Premium Taste</h4>
                    <p className="text-sm text-italea-forest-600">Delicious & refreshing</p>
                  </div>
                </div>
              </div>
              <Link href="/shop/wellness-shots">
                <Button className="btn-italea-primary group">
                  Shop Wellness Shots
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="card-italea-kraft p-8">
                <Image
                  src="/images/wellness-shots-carrier.jpg"
                  alt="Wellness Shots Collection"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-kraft-md"
                />
                <div className="absolute -bottom-4 -right-4 card-italea-featured p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-italea-forest">4</div>
                    <div className="text-sm text-italea-forest-600">Unique Flavors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="section-italea">
        <div className="container-italea">
          <div className="text-center mb-12">
            <Badge className="badge-italea-nature mb-4">New Arrivals</Badge>
            <h2 className="text-brand-xl text-italea-brand mb-4">Fresh From Our Kitchen</h2>
            <p className="text-italea-body max-w-2xl mx-auto">
              Discover our latest creations, crafted with love and the finest ingredients sourced directly from African
              farms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Spicy Macadamia Nuts",
                price: "R89.99",
                image: "/images/spicy-macadamia-nuts.jpg",
                badge: "Spicy",
                description: "Perfectly roasted macadamias with a kick of African spices",
              },
              {
                name: "Greek Yoghurt",
                price: "R45.99",
                image: "/images/greek-yoghurt.jpg",
                badge: "Creamy",
                description: "Rich, creamy yoghurt made from grass-fed milk",
              },
              {
                name: "Gluten-Free Granola",
                price: "R67.99",
                image: "/images/gluten-free-granola.jpg",
                badge: "Gluten-Free",
                description: "Crunchy granola blend with nuts, seeds, and dried fruits",
              },
            ].map((product, index) => (
              <Card key={index} className="card-italea-product group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="badge-italea-accent absolute top-3 left-3">{product.badge}</Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-italea-forest mb-2">{product.name}</h3>
                    <p className="text-italea-forest-600 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-italea-macadamia">{product.price}</span>
                      <Button className="btn-italea-outline btn-italea text-sm">Add to Cart</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredient Spotlight */}
      <IngredientSpotlight />

      {/* Customer Testimonials */}
      <section className="section-italea-alt">
        <div className="container-italea">
          <div className="text-center mb-12">
            <Badge className="badge-italea-primary mb-4">Customer Love</Badge>
            <h2 className="text-brand-xl text-italea-brand mb-4">What Our Customers Say</h2>
            <p className="text-italea-body max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made Italea part of their daily wellness journey.
            </p>
          </div>
          <TestimonialRotator />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-italea">
        <div className="container-italea">
          <div className="card-italea-featured p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-brand-lg text-italea-brand mb-4">Stay Connected with Italea</h2>
              <p className="text-italea-body mb-8">
                Get the latest updates on new products, wellness tips, and exclusive offers delivered straight to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" className="input-italea flex-1" />
                <Button className="btn-italea-primary">Subscribe</Button>
              </div>
              <p className="text-sm text-italea-forest-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-italea py-16">
        <div className="container-italea">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/images/italea-logo-clean.png"
                  alt="Italea"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-italea-forest-600 mb-4">
                Premium African-inspired wellness products crafted with love and tradition.
              </p>
              <div className="flex gap-4">{/* Social media icons would go here */}</div>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-italea-forest mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/shop/wellness-shots"
                    className="text-italea-forest-600 hover:text-italea-macadamia transition-colors"
                  >
                    Wellness Shots
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/crunchy-snacks"
                    className="text-italea-forest-600 hover:text-italea-macadamia transition-colors"
                  >
                    Crunchy Snacks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/breakfast-cereals"
                    className="text-italea-forest-600 hover:text-italea-macadamia transition-colors"
                  >
                    Breakfast Cereals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/oils-vinegars"
                    className="text-italea-forest-600 hover:text-italea-macadamia transition-colors"
                  >
                    Oils & Vinegars
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-italea-forest mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/story" className="text-italea-forest-600 hover:text-italea-macadamia transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/journal"
                    className="text-italea-forest-600 hover:text-italea-macadamia transition-colors"
                  >
                    Journal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locations"
                    className="text-italea-forest-600 hover:text-italea-macadamia transition-colors"
                  >
                    Store Locations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-italea-forest-600 hover:text-italea-macadamia transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-italea-forest mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-italea-forest-600 hover:text-italea-macadamia transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-italea-forest-600 hover:text-italea-macadamia transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/quiz" className="text-italea-forest-600 hover:text-italea-macadamia transition-colors">
                    Wellness Quiz
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="divider-italea mb-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-italea-forest-600">
            <p>&copy; 2024 Italea. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-italea-macadamia transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-italea-macadamia transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
