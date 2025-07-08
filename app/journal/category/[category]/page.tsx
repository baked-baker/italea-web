"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { notFound } from "next/navigation"

const categoryData = {
  recipes: {
    name: "Ancestral Recipes",
    description:
      "Traditional African recipes reimagined for modern wellness, honoring the wisdom of our ancestors while nourishing today's bodies and souls.",
    color: "from-amber-400 to-orange-500",
    articles: [
      {
        title: "Sacred Fermentation: Grandmother's Kimchi with African Greens",
        slug: "sacred-fermentation-kimchi",
        excerpt:
          "Learn how to create probiotic-rich fermented vegetables using traditional African greens and ancient preservation techniques passed down through generations.",
        author: "Chef Amina Kone",
        date: "2024-01-15",
        readTime: "12 min read",
        image: "/images/fermented-cabbage.jpg",
      },
      {
        title: "The Healing Power of Bone Broth: Ubuntu in a Bowl",
        slug: "healing-bone-broth",
        excerpt:
          "Discover the sacred art of making nutrient-dense bone broth using traditional African herbs and spices that heal the gut and nourish the soul.",
        author: "Dr. Kwame Asante",
        date: "2024-01-12",
        readTime: "8 min read",
        image: "/images/traditional-foods.jpg",
      },
      {
        title: "Moringa Smoothie Bowls: Green Gold from the Miracle Tree",
        slug: "moringa-smoothie-bowls",
        excerpt:
          "Transform your morning ritual with these nutrient-packed smoothie bowls featuring moringa, baobab, and other African superfoods.",
        author: "Zara Osei",
        date: "2024-01-10",
        readTime: "6 min read",
        image: "/images/moringa-shot.jpg",
      },
      {
        title: "Ancient Grain Porridge: Breakfast of Champions",
        slug: "ancient-grain-porridge",
        excerpt:
          "Start your day with intention using traditional African grains prepared with modern nutritional wisdom and ancestral cooking methods.",
        author: "Thandiwe Mthembu",
        date: "2024-01-08",
        readTime: "10 min read",
        image: "/images/gluten-free-granola.jpg",
      },
    ],
  },
  "ital-living": {
    name: "Ital Living",
    description:
      "Embracing natural, unprocessed living in harmony with nature - the Rastafarian philosophy of eating and living that honors the earth and our bodies.",
    color: "from-green-400 to-emerald-500",
    articles: [
      {
        title: "The Ital Way: Living in Harmony with Nature's Rhythms",
        slug: "ital-way-natural-rhythms",
        excerpt:
          "Understanding the deeper philosophy behind Ital living and how it connects us to the earth, our ancestors, and our highest selves.",
        author: "Ras Marcus Thompson",
        date: "2024-01-14",
        readTime: "15 min read",
        image: "/images/wellness-hero.jpg",
      },
      {
        title: "Plant-Based Healing: Foods That Restore and Regenerate",
        slug: "plant-based-healing",
        excerpt:
          "Explore the healing power of plants and how a natural, unprocessed diet can transform your health and spiritual connection.",
        author: "Dr. Fatima Al-Zahra",
        date: "2024-01-11",
        readTime: "9 min read",
        image: "/images/healthy-treats.jpg",
      },
    ],
  },
  "healing-foods": {
    name: "Healing Foods",
    description:
      "Foods that nourish the body, mind, and spirit - understanding how nutrition becomes medicine when approached with wisdom and intention.",
    color: "from-red-400 to-pink-500",
    articles: [
      {
        title: "Turmeric: The Golden Healer of African Medicine",
        slug: "turmeric-golden-healer",
        excerpt:
          "Dive deep into the anti-inflammatory power of turmeric and its sacred use in traditional African healing practices.",
        author: "Dr. Aisha Patel",
        date: "2024-01-13",
        readTime: "11 min read",
        image: "/images/turmeric-shot.jpg",
      },
    ],
  },
  "farm-stories": {
    name: "Farm Stories",
    description:
      "Stories from the farmers and communities we work with - celebrating the hands that grow our food and the land that sustains us all.",
    color: "from-blue-400 to-cyan-500",
    articles: [
      {
        title: "Ubuntu Farming: Community-Centered Agriculture",
        slug: "ubuntu-farming",
        excerpt:
          "Meet the farming communities practicing Ubuntu - 'I am because we are' - and how this philosophy creates sustainable, healing food systems.",
        author: "Sipho Ndlovu",
        date: "2024-01-09",
        readTime: "13 min read",
        image: "/images/traditional-foods.jpg",
      },
    ],
  },
  wellness: {
    name: "Wellness Wisdom",
    description:
      "Ancient wisdom meets modern science - bridging traditional healing knowledge with contemporary understanding of nutrition and wellness.",
    color: "from-purple-400 to-indigo-500",
    articles: [
      {
        title: "The Science of Sacred: How Ancient Wisdom Meets Modern Nutrition",
        slug: "science-of-sacred",
        excerpt:
          "Exploring how traditional African healing practices align with modern nutritional science and functional medicine.",
        author: "Dr. Kofi Mensah",
        date: "2024-01-07",
        readTime: "14 min read",
        image: "/images/wellness-shots-carrier.jpg",
      },
    ],
  },
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryData[params.category as keyof typeof categoryData]

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-green-50 to-cream-50">
      <Navigation />

      <div className="pt-20 pb-12">
        {/* Header */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Journal
              </Link>

              <div className="text-center mb-12">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                  <div className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6">{category.name}</h1>
                <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">{category.description}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.articles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/journal/${article.slug}`}>
                    <Card className="group border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                      <div className="relative">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-serif font-bold text-amber-900 mb-3 text-xl group-hover:text-amber-700 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-amber-800 leading-relaxed mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-amber-600">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(article.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
