"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

const questions = [
  {
    id: 1,
    question: "What's your primary wellness goal?",
    options: [
      { id: "energy", text: "Boost Energy Levels", emoji: "⚡" },
      { id: "immunity", text: "Support Immunity", emoji: "🛡️" },
      { id: "fitness", text: "Enhance Fitness Performance", emoji: "💪" },
      { id: "digestion", text: "Improve Digestion", emoji: "🌱" },
    ],
  },
  {
    id: 2,
    question: "When do you typically snack?",
    options: [
      { id: "morning", text: "Morning Boost", emoji: "🌅" },
      { id: "afternoon", text: "Afternoon Pick-me-up", emoji: "☀️" },
      { id: "preworkout", text: "Pre-workout Fuel", emoji: "🏃‍♀️" },
      { id: "evening", text: "Evening Wind-down", emoji: "🌙" },
    ],
  },
  {
    id: 3,
    question: "What's your preferred snack texture?",
    options: [
      { id: "crunchy", text: "Crunchy & Crispy", emoji: "🥨" },
      { id: "chewy", text: "Soft & Chewy", emoji: "🍯" },
      { id: "smooth", text: "Smooth & Creamy", emoji: "🥛" },
      { id: "mixed", text: "Mixed Textures", emoji: "🎭" },
    ],
  },
  {
    id: 4,
    question: "Which dietary preference applies to you?",
    options: [
      { id: "vegan", text: "Plant-based/Vegan", emoji: "🌿" },
      { id: "keto", text: "Keto/Low-carb", emoji: "🥑" },
      { id: "glutenfree", text: "Gluten-free", emoji: "🌾" },
      { id: "none", text: "No specific restrictions", emoji: "🍽️" },
    ],
  },
  {
    id: 5,
    question: "What flavor profile excites you most?",
    options: [
      { id: "sweet", text: "Sweet & Indulgent", emoji: "🍯" },
      { id: "nutty", text: "Nutty & Earthy", emoji: "🥜" },
      { id: "tropical", text: "Tropical & Fruity", emoji: "🥥" },
      { id: "spiced", text: "Warm & Spiced", emoji: "🌶️" },
    ],
  },
]

const recommendations = {
  "energy-morning-crunchy-vegan-sweet": {
    title: "The Morning Energizer",
    products: ["Sweet Potato Crisps", "Mixed Cassava & Matoke Chips"],
    description: "Perfect for plant-powered morning fuel with natural sweetness and energizing crunch.",
    spirit: "You're a sunrise warrior who believes in starting the day with intention and natural energy!",
  },
  "fitness-preworkout-chewy-keto-nutty": {
    title: "The Fitness Fueler",
    products: ["Cassava Chips", "Arrowroot Crisps"],
    description: "Ideal for pre-workout nutrition with clean carbs and easy digestion.",
    spirit: "You're a dedicated athlete who knows that peak performance starts with premium fuel!",
  },
  "immunity-afternoon-smooth-glutenfree-tropical": {
    title: "The Wellness Guardian",
    products: ["Purple Sweet Potato Chips", "Plantain Chips"],
    description: "Designed to support your wellness with antioxidants and natural nutrients.",
    spirit: "You're a health-conscious protector who prioritizes wellness in every choice!",
  },
  default: {
    title: "The Balanced Explorer",
    products: ["Mixed Root Vegetable Chips", "Sweet Potato Crisps", "Plantain Chips"],
    description: "A perfect starter pack to explore the full spectrum of guilt-free root vegetable snacking.",
    spirit: "You're an adventurous soul ready to discover the perfect balance of taste and wellness!",
  },
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: optionId }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const getRecommendation = () => {
    const answerKey = Object.values(answers).join("-")
    return recommendations[answerKey as keyof typeof recommendations] || recommendations.default
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (showResults) {
    const recommendation = getRecommendation()

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-amber-100">
        <Navigation />

        <div className="pt-20 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-8">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="text-8xl mb-4"
                >
                  ✨
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">Your Snack Spirit Revealed!</h1>
              </div>

              <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 mb-8">
                <CardContent className="p-8">
                  <div className="text-6xl mb-6">🍪</div>
                  <h2 className="text-3xl font-serif font-bold text-amber-900 mb-4">{recommendation.title}</h2>
                  <p className="text-xl text-amber-800 mb-6 italic">"{recommendation.spirit}"</p>
                  <p className="text-amber-700 text-lg mb-8">{recommendation.description}</p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-amber-900">Your Perfect Match Products:</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {recommendation.products.map((product, index) => (
                        <motion.div
                          key={product}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <Card className="bg-amber-50 border-amber-200">
                            <CardContent className="p-4">
                              <p className="font-medium text-amber-900">{product}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/shop">
                      <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Shop Your Matches
                      </Button>
                    </Link>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => {
                        setCurrentQuestion(0)
                        setAnswers({})
                        setShowResults(false)
                      }}
                      className="border-amber-600 text-amber-600 hover:bg-amber-50"
                    >
                      Retake Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-amber-100">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">Snack Spirit Quiz</h1>
            <p className="text-xl text-amber-800">
              Discover your perfect guilt-free indulgence match in just 5 questions!
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-amber-700 mb-2">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2 bg-amber-100" />
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-amber-900 mb-8 text-center">
                    {questions[currentQuestion].question}
                  </h2>

                  <div className="grid gap-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={option.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleAnswer(option.id)}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 text-left hover:scale-105 ${
                          answers[currentQuestion] === option.id
                            ? "border-amber-500 bg-amber-50 shadow-lg"
                            : "border-amber-200 bg-white hover:border-amber-300 hover:bg-amber-50"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-3xl">{option.emoji}</span>
                          <span className="text-lg font-medium text-amber-900">{option.text}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={nextQuestion}
              disabled={!answers[currentQuestion]}
              className="bg-amber-600 hover:bg-amber-700"
            >
              {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
