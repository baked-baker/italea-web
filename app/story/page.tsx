"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Users, Sparkles, Award, Lightbulb, Sprout, Cookie, Globe } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

const brandValues = [
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Wholesome Always",
    description: "Clean ingredients, thoughtfully sourced.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Guilt-Free Fun",
    description: "Healthy food that still makes you smile.",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: <Globe className="w-8 h-8 text-amber-600" />,
    title: "Rooted in Culture",
    description: "Drawing strength from African and global traditions.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-600" />,
    title: "Transparent & True",
    description: "If we wouldn't eat it, we wouldn't sell it.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: <Cookie className="w-8 h-8 text-purple-600" />,
    title: "Youthfully Bold",
    description: "Unafraid to remix health with style.",
    color: "from-purple-400 to-indigo-500",
  },
]

const timeline = [
  {
    year: "2020",
    title: "The Spark",
    description:
      "Born from late-night kitchen experiments and a simple question: 'Why can't healthy snacks actually taste amazing?'",
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    year: "2021",
    title: "First Bites",
    description:
      "Launched our signature wellness shots and root vegetable crisps—proving clean eating could be crave-worthy.",
    icon: <Cookie className="w-6 h-6" />,
  },
  {
    year: "2022",
    title: "Growing Roots",
    description: "Expanded across East Africa, building a community of conscious snackers who refuse to compromise.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: "2023",
    title: "Recognition",
    description:
      "Won the East Africa Wellness Innovation Award—validation that taste and health can absolutely coexist.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: "2024",
    title: "Global Vision",
    description: "Taking our guilt-free philosophy worldwide, one delicious bite at a time.",
    icon: <Sprout className="w-6 h-6" />,
  },
]

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-green-50">
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
              <h1 className="text-4xl md:text-6xl font-serif text-amber-900 mb-6">Our Story</h1>
              <p className="text-xl md:text-2xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
                We're your smart, health-conscious friend who also knows the best food spots. Here's how we're building
                a modern, African, nature-forward movement for guilt-free, joyful living.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl mb-16"
            >
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Hand holding a wholesome Italea snack bar glowing in natural light"
                width={1200}
                height={600}
                className="w-full h-96 md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">The Beauty of Simple Nourishment</h3>
                <p className="text-lg opacity-90">
                  Where African roots meet global wisdom, and wellness becomes a celebration.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Italea Means */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-8">Three Roots, One Soul</h2>
              <p className="text-xl text-amber-800 mb-12 max-w-4xl mx-auto">
                The word "Italea" carries three powerful meanings from different cultural and linguistic roots.
                Together, they form the soul of our brand—a rooted yet evolving wellness movement, proudly African,
                inspired by global food philosophies, and crafted for today's conscious consumer.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100"
              >
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-green-900">From "Ital"</h3>
                </div>
                <p className="text-sm text-green-700 mb-2 font-medium">Rastafarian Philosophy</p>
                <p className="text-green-800 leading-relaxed">
                  Inspired by <strong>"Ital"</strong> food—natural, unprocessed, plant-based nourishment that aligns
                  body, mind, and spirit. It's about eating with intention, choosing ingredients that heal and honor the
                  earth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100"
              >
                <div className="flex items-center mb-4">
                  <Sprout className="w-8 h-8 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-amber-900">From Italian</h3>
                </div>
                <p className="text-sm text-amber-700 mb-2 font-medium">Growth & Vitality</p>
                <p className="text-amber-800 leading-relaxed">
                  <strong>"Italea"</strong> means a young offshoot or sprout—symbolizing growth, vitality, and new
                  beginnings. It's about fresh starts, renewed energy, and the endless potential for transformation
                  through nourishment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100"
              >
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-serif font-bold text-blue-900">From Swahili</h3>
                </div>
                <p className="text-sm text-blue-700 mb-2 font-medium">Nurturing Promise</p>
                <p className="text-blue-800 leading-relaxed">
                  <strong>"Italea"</strong> translates to "it will nurture"—beautifully reinforcing our intention to
                  care for the body through wholesome, functional nourishment. It's a promise in every bite.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center bg-gradient-to-r from-amber-100 via-green-100 to-blue-100 p-8 rounded-2xl"
            >
              <h4 className="text-2xl font-serif font-bold text-amber-900 mb-4">The Convergence</h4>
              <p className="text-lg text-amber-800 leading-relaxed">
                When these three meanings come together, they create something beautiful: a brand that honors ancient
                wisdom, celebrates African heritage, embraces global inspiration, and delivers modern wellness with joy.
                This is Italea—where culture, consciousness, and craving meet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founding Philosophy */}
        <section className="py-24 px-4 bg-gradient-to-r from-green-100 to-amber-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6">
                Filling the Gap Between Health & Happiness
              </h2>
              <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed">
                Italea was born from a simple observation: too often, wellness brands forget joy. We created Italea to
                change that. The idea was beautifully simple—snacks that nourish and delight. Whether you're vegan,
                keto, sugar-conscious, or just want clean ingredients, this is indulgence that loves you back.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                  <Cookie className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">Nourish & Delight</h3>
                  <p className="text-amber-700">
                    Every bite should spark joy, not resignation. We believe healthy snacks should feel like a
                    celebration of what your body deserves.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                  <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">Inclusive Wellness</h3>
                  <p className="text-amber-700">
                    Vegan, keto, sugar-conscious, or simply clean—we craft for every conscious choice without
                    compromising on taste or texture.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                  <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">Indulgence That Loves You</h3>
                  <p className="text-amber-700">
                    This isn't about restriction—it's about expansion. Expanding what healthy can taste like, feel like,
                    and mean in your daily life.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-8">Our Vision</h2>
              <div className="bg-gradient-to-r from-amber-50 to-green-50 p-12 rounded-2xl border border-amber-200">
                <p className="text-2xl md:text-3xl font-serif text-amber-900 leading-relaxed italic">
                  "To become East Africa's most trusted wellness snack brand—making nutritious, feel-good indulgence
                  accessible, honest, and culturally inspired."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand Values */}
        <section className="py-24 px-4 bg-gradient-to-r from-green-100 to-amber-100">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6">What Drives Us</h2>
              <p className="text-xl text-amber-800 max-w-3xl mx-auto">
                These values aren't just words—they're the ingredients in everything we create, every relationship we
                build, and every choice we make.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div
                        className={`p-4 rounded-full bg-gradient-to-r ${value.color} mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{value.icon}</div>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">{value.title}</h3>
                      <p className="text-amber-700 leading-relaxed flex-grow">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6">Our Journey So Far</h2>
              <p className="text-xl text-amber-800">
                From kitchen experiments to award-winning snacks—here's how we've grown (and we're just getting
                started).
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-300" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start gap-8 mb-12"
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <Card className="flex-1 shadow-lg bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <Badge className="bg-amber-600 text-white text-lg px-3 py-1">{item.year}</Badge>
                        <h3 className="text-2xl font-serif font-bold text-amber-900">{item.title}</h3>
                      </div>
                      <p className="text-amber-700 text-lg leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Letter */}
        <section className="py-24 px-4 bg-gradient-to-r from-amber-50 to-green-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
                <CardContent className="p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">A Note from Our Founder</h2>
                    <div className="w-24 h-0.5 bg-amber-400 mx-auto" />
                  </div>

                  <div className="prose prose-lg max-w-none text-amber-800">
                    <p className="text-xl leading-relaxed mb-6">
                      "I started Italea because I was tired of choosing between foods that tasted good and foods that
                      were good for me. Growing up, I watched my grandmother create magic with simple, whole
                      ingredients—foods that nourished and satisfied in equal measure."
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                      "But somewhere along the way, we started believing that healthy meant boring, that wellness
                      required sacrifice. I refused to accept that. Why couldn't we have snacks that honored our bodies,
                      celebrated our culture, and still made us smile with every bite?"
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                      "That's the heart of Italea—we're not here to lecture or restrict. We're here to expand what's
                      possible when you refuse to compromise. Every product we create is proof that you can have it all:
                      taste, health, joy, and cultural pride wrapped up in one beautiful package."
                    </p>

                    <p className="text-lg leading-relaxed mb-8">
                      "This is more than a snack brand—it's a movement toward conscious indulgence, where every choice
                      feels good in your body and your soul. Welcome to the Italea family, where guilt-free isn't just a
                      tagline—it's a way of life."
                    </p>

                    <div className="text-center">
                      <p className="text-xl font-serif text-amber-900 mb-2">With love and intention,</p>
                      <p className="text-2xl font-serif font-bold text-amber-900">[Founder Name]</p>
                      <p className="text-amber-700">Founder & Chief Wellness Enthusiast</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-4 bg-gradient-to-r from-amber-900 to-green-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Join the Movement</h2>
              <p className="text-xl mb-8 opacity-90">
                Ready to experience what happens when wellness meets joy? Discover snacks that nourish your body,
                celebrate your culture, and make every moment a little more delicious.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/quiz"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-colors"
                >
                  Find Your Perfect Match
                </motion.a>
                <motion.a
                  href="/shop"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-900 transition-colors"
                >
                  Start Your Journey
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
