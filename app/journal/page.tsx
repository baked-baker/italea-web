"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Heart, Utensils, Sprout, Sun, Search, Calendar, User, ArrowRight, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

const categories = [
  {
    name: "Ital Living",
    slug: "ital-living",
    description: "Embracing natural, unprocessed living in harmony with nature",
    icon: <Leaf className="w-6 h-6" />,
    color: "from-green-400 to-emerald-500",
    count: 12,
  },
  {
    name: "Ancestral Recipes",
    slug: "recipes",
    description: "Traditional African recipes reimagined for modern wellness",
    icon: <Utensils className="w-6 h-6" />,
    color: "from-amber-400 to-orange-500",
    count: 18,
  },
  {
    name: "Healing Foods",
    slug: "healing-foods",
    description: "Foods that nourish the body, mind, and spirit",
    icon: <Heart className="w-6 h-6" />,
    color: "from-red-400 to-pink-500",
    count: 15,
  },
  {
    name: "Farm Stories",
    slug: "farm-stories",
    description: "Stories from the farmers and communities we work with",
    icon: <Sprout className="w-6 h-6" />,
    color: "from-blue-400 to-cyan-500",
    count: 8,
  },
  {
    name: "Wellness Wisdom",
    slug: "wellness",
    description: "Ancient wisdom meets modern science",
    icon: <Sun className="w-6 h-6" />,
    color: "from-purple-400 to-indigo-500",
    count: 10,
  },
]

const featuredArticles = [
  {
    title: "The Sacred Art of Fermentation: How Our Ancestors Preserved Life",
    slug: "sacred-fermentation",
    excerpt:
      "Discover the ancient African traditions of fermentation that not only preserved food but created powerful probiotics for gut health and spiritual well-being.",
    category: "Ital Living",
    author: "Amara Okafor",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/images/fermented-cabbage.jpg",
    featured: true,
  },
  {
    title: "Moringa: The Miracle Tree That Feeds Body and Soul",
    slug: "moringa-miracle-tree",
    excerpt:
      "From the baobab's shadow to your morning ritual - understanding why moringa has been called the tree of life across Africa for centuries.",
    category: "Healing Foods",
    author: "Dr. Kwame Asante",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "/images/moringa-shot.jpg",
    featured: true,
  },
  {
    title: "Ubuntu in Every Bite: Community-Centered Food Systems",
    slug: "ubuntu-food-systems",
    excerpt:
      "How the philosophy of Ubuntu - 'I am because we are' - shapes our approach to sustainable farming and community wellness.",
    category: "Farm Stories",
    author: "Thandiwe Mthembu",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "/images/traditional-foods.jpg",
    featured: true,
  },
]

const recentArticles = [
  {
    title: "Turmeric Ceremonies: Golden Healing in African Traditions",
    slug: "turmeric-ceremonies",
    excerpt: "Exploring the ceremonial use of turmeric in healing rituals across the continent.",
    category: "Healing Foods",
    author: "Fatima Al-Zahra",
    date: "2024-01-08",
    readTime: "5 min read",
    image: "/images/turmeric-shot.jpg",
  },
  {
    title: "The Macadamia Journey: From Tree to Table with Intention",
    slug: "macadamia-journey",
    excerpt: "Following the sacred journey of macadamia nuts from South African orchards to your wellness routine.",
    category: "Farm Stories",
    author: "Sipho Ndlovu",
    date: "2024-01-05",
    readTime: "7 min read",
    image: "/images/macadamia-nut-butter.jpg",
  },
  {
    title: "Breakfast as Ceremony: Starting Your Day with Intention",
    slug: "breakfast-ceremony",
    excerpt: "Transform your morning meal into a sacred ritual of gratitude and nourishment.",
    category: "Ital Living",
    author: "Zara Osei",
    date: "2024-01-03",
    readTime: "4 min read",
    image: "/images/gluten-free-granola.jpg",
  },
  {
    title: "The Wisdom of Fermented Foods in African Cuisine",
    slug: "fermented-wisdom",
    excerpt: "Ancient preservation techniques that created superfoods for optimal health.",
    category: "Ancestral Recipes",
    author: "Chef Kofi Mensah",
    date: "2024-01-01",
    readTime: "9 min read",
    image: "/images/raw-korean-kimchi.jpg",
  },
]

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-green-50 to-cream-50">
      <Navigation />

      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-amber-600" />
                <h1 className="text-4xl md:text-6xl font-serif text-amber-900">The Ital Journal</h1>
              </div>
              <p className="text-xl md:text-2xl text-amber-800 max-w-4xl mx-auto leading-relaxed mb-8">
                Stories of nourishment, wisdom from our ancestors, and the sacred relationship between food, community,
                and healing. This is where Ital philosophy meets modern wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
                  <Input
                    placeholder="Search for wisdom..."
                    className="pl-10 bg-white/80 border-amber-200 focus:border-amber-400"
                  />
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6">Search</Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">Explore Our Wisdom</h2>
              <p className="text-lg text-amber-800 max-w-2xl mx-auto">
                Each category represents a different aspect of the Ital way of life - natural, intentional, and deeply
                connected to our roots.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Link href={`/journal/category/${category.slug}`}>
                    <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
                      <CardContent className="p-8 text-center h-full flex flex-col">
                        <div
                          className={`p-4 rounded-full bg-gradient-to-r ${category.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div className="text-white">{category.icon}</div>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-amber-900 mb-3">{category.name}</h3>
                        <p className="text-amber-700 leading-relaxed flex-grow mb-4">{category.description}</p>
                        <Badge className="bg-amber-100 text-amber-800 border border-amber-200">
                          {category.count} articles
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">Sacred Stories</h2>
              <p className="text-lg text-amber-800 max-w-2xl mx-auto">
                Deep dives into the wisdom that shapes our understanding of food as medicine, community as healing, and
                tradition as guidance.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
                >
                  <Link href={`/journal/${article.slug}`}>
                    <Card className="group border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                      <div className="relative">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={index === 0 ? 800 : 400}
                          height={index === 0 ? 400 : 250}
                          className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                            index === 0 ? "h-64 lg:h-80" : "h-48"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-amber-600 text-white border-0">
                          {article.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6 lg:p-8">
                        <h3
                          className={`font-serif font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors ${
                            index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                          }`}
                        >
                          {article.title}
                        </h3>
                        <p className={`text-amber-800 leading-relaxed mb-4 ${index === 0 ? "text-lg" : "text-base"}`}>
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-amber-600">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(article.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <span className="font-medium">{article.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-100 to-amber-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">Recent Wisdom</h2>
                <p className="text-lg text-amber-800">
                  Fresh insights and stories from our community of healers, farmers, and food lovers.
                </p>
              </div>
              <Link href="/journal/all">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white group">
                  View All Articles
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/journal/${article.slug}`}>
                    <Card className="group border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                      <div className="relative">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={300}
                          height={200}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <Badge className="absolute top-3 left-3 bg-amber-600 text-white border-0 text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-serif font-bold text-amber-900 mb-2 text-lg group-hover:text-amber-700 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-amber-800 text-sm leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-amber-600">
                          <span>{article.author}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-24 px-4 bg-gradient-to-r from-amber-900 to-green-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Leaf className="w-12 h-12 mx-auto mb-6 text-amber-300" />
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Circle of Wisdom</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Receive weekly insights on Ital living, ancestral recipes, and the sacred art of nourishment. Join our
                community of conscious food lovers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-amber-300"
                />
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8">Subscribe</Button>
              </div>
              <p className="text-sm opacity-70 mt-4">
                We honor your privacy. Unsubscribe anytime. Ubuntu - we are because you are.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
