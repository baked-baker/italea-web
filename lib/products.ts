export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  originalPrice?: number
  image: string
  hoverImage?: string
  category: string
  subcategory?: string
  inStock: boolean
  isNew: boolean
  isBestseller: boolean
  isSignature?: boolean
  rating: number
  reviews: number
  reviewCount: number
  badges: string[]
  benefits: string[]
  ingredients: string[]
  pairingTips?: string[]
  sizes?: string[]
  nutritionalHighlights?: string[]
  servingSize?: string
  nutritionalInfo?: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
    sugar: number
  }
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  image?: string
}

export const productCategories: ProductCategory[] = [
  {
    id: "wellness-shots",
    name: "Wellness Shots",
    slug: "wellness-shots",
    description: "Concentrated nutrition in every 60ml shot",
    icon: "🥤",
    image: "/images/wellness-shots-carrier.jpg",
  },
  {
    id: "breakfast-cereals",
    name: "Breakfast & Cereals",
    slug: "breakfast-cereals",
    description: "Wholesome morning fuel to start your day right",
    icon: "🥣",
    image: "/images/gluten-free-granola.jpg",
  },
  {
    id: "energy-bars",
    name: "Energy & Protein Bars",
    slug: "energy-bars",
    description: "Plant-based nutrition bars for sustained energy",
    icon: "🍫",
    image: "/images/date-moringa-protein-bar.jpg",
  },
  {
    id: "pastries-cookies",
    name: "Pastries & Cookies",
    slug: "pastries-cookies",
    description: "Guilt-free indulgence that loves you back",
    icon: "🍪",
    image: "/images/macadamia-cookies.jpg",
  },
  {
    id: "crunchy-snacks",
    name: "Crunchy Snacks",
    slug: "crunchy-snacks",
    description: "Satisfying crunch with wholesome ingredients",
    icon: "🥜",
    image: "/images/spicy-macadamia-nuts.jpg",
  },
  {
    id: "spreads-sweeteners",
    name: "Spreads & Sweeteners",
    slug: "spreads-sweeteners",
    description: "Natural sweetness and creamy goodness",
    icon: "🍯",
    image: "/images/raw-natural-honey.jpg",
  },
  {
    id: "fermented-foods",
    name: "Fermented Foods",
    slug: "fermented-foods",
    description: "Probiotic-rich foods for gut health",
    icon: "🥛",
    image: "/images/kefir-milk.jpg",
  },
  {
    id: "oils-vinegars",
    name: "Oils & Vinegars",
    slug: "oils-vinegars",
    description: "Premium cold-pressed oils and artisan vinegars",
    icon: "🫒",
    image: "/images/macadamia-oil.jpg",
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Turmeric Ginger Shot",
    slug: "turmeric-ginger-shot",
    description:
      "Anti-inflammatory powerhouse with fresh ginger and black pepper for enhanced absorption and joint health support.",
    price: 280,
    originalPrice: 320,
    image: "/images/turmeric-ginger-shot.jpg",
    hoverImage: "/images/turmeric-ginger-shot.jpg",
    category: "wellness-shots",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isSignature: true,
    rating: 4.8,
    reviews: 156,
    reviewCount: 156,
    badges: ["Anti-inflammatory", "Organic", "Vegan", "Joint Health"],
    benefits: ["Joint Health", "Anti-inflammatory", "Digestive Support", "Circulation Boost"],
    ingredients: ["Fresh Turmeric Root", "Fresh Ginger", "Black Pepper", "Coconut Oil", "Raw Honey", "Lemon"],
    pairingTips: ["Take with meals", "Great with warm milk", "Perfect evening ritual", "Mix with coconut water"],
    sizes: ["60ml", "120ml"],
    nutritionalHighlights: ["Curcumin", "Gingerol", "Piperine", "Healthy Fats"],
    servingSize: "60ml",
    nutritionalInfo: {
      calories: 35,
      protein: 0.5,
      carbs: 7,
      fat: 1,
      fiber: 0.5,
      sugar: 5,
    },
  },
  {
    id: "2",
    name: "Beetroot Kefir Shot",
    slug: "beetroot-kefir-shot",
    description:
      "Probiotic-rich beetroot kefir shot for gut health and natural nitrates. Perfect for circulation and digestive wellness.",
    price: 320,
    originalPrice: 360,
    image: "/images/beetroot-kefir-shot.jpg",
    category: "wellness-shots",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isSignature: true,
    rating: 4.7,
    reviews: 134,
    reviewCount: 134,
    badges: ["Probiotic Rich", "Natural Nitrates", "Vegan", "Circulation Support"],
    benefits: ["Gut Health", "Circulation Support", "Natural Energy", "Probiotic Rich"],
    ingredients: ["Fresh Beetroot Juice", "Coconut Kefir", "Live Cultures", "Ginger", "Lemon"],
    pairingTips: ["Best before workouts", "Great post-exercise", "Mix with smoothies", "Take on empty stomach"],
    sizes: ["60ml"],
    nutritionalHighlights: ["Probiotics", "Natural Nitrates", "Folate", "Antioxidants"],
    servingSize: "60ml",
    nutritionalInfo: {
      calories: 25,
      protein: 1,
      carbs: 5,
      fat: 0.5,
      fiber: 1,
      sugar: 4,
    },
  },
  {
    id: "3",
    name: "Moringa Mint Shot",
    slug: "moringa-mint-shot",
    description:
      "92 nutrients from the miracle tree with refreshing mint. The ultimate daily vitality shot for energy and wellness.",
    price: 250,
    originalPrice: 300,
    image: "/images/moringa-mint-shot.jpg",
    category: "wellness-shots",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isSignature: true,
    rating: 4.9,
    reviews: 189,
    reviewCount: 189,
    badges: ["Vegan", "Organic", "Raw", "Energy Boost"],
    benefits: ["Energy Boost", "Immune Support", "92 Nutrients", "Mental Clarity"],
    ingredients: ["Organic Moringa Leaves", "Fresh Mint", "Filtered Water", "Natural Lemon", "Raw Honey"],
    pairingTips: [
      "Best taken on empty stomach",
      "Mix with coconut water",
      "Perfect pre-workout boost",
      "Great morning ritual",
    ],
    sizes: ["60ml", "120ml"],
    nutritionalHighlights: ["Vitamin C", "Iron", "Calcium", "Protein"],
    servingSize: "60ml",
    nutritionalInfo: {
      calories: 30,
      protein: 2,
      carbs: 6,
      fat: 0.5,
      fiber: 1,
      sugar: 4,
    },
  },
  {
    id: "4",
    name: "Charcoal Lemonade Shot",
    slug: "charcoal-lemonade-shot",
    description:
      "Activated charcoal with fresh lemon for natural detox and cleansing. A refreshing way to reset and recharge.",
    price: 300,
    image: "/images/charcoal-lemonade-shot.jpg",
    category: "wellness-shots",
    inStock: true,
    isNew: true,
    isBestseller: false,
    isSignature: true,
    rating: 4.6,
    reviews: 98,
    reviewCount: 98,
    badges: ["Detox", "Cleansing", "Vegan", "Natural"],
    benefits: ["Natural Detox", "Digestive Cleanse", "Alkalizing", "Refreshing"],
    ingredients: ["Activated Charcoal", "Fresh Lemon Juice", "Filtered Water", "Maple Syrup", "Sea Salt"],
    pairingTips: ["Take between meals", "Great for cleanse days", "Perfect morning detox", "Mix with water"],
    sizes: ["60ml"],
    nutritionalHighlights: ["Activated Charcoal", "Vitamin C", "Electrolytes"],
    servingSize: "60ml",
    nutritionalInfo: {
      calories: 20,
      protein: 0,
      carbs: 5,
      fat: 0,
      fiber: 0,
      sugar: 4,
    },
  },
  {
    id: "5",
    name: "Date & Moringa Protein Bar",
    slug: "date-moringa-protein-bar",
    description:
      "Plant-based protein bar with dates and moringa. High protein, no added sugar, and packed with 92 nutrients from the miracle tree.",
    price: 180,
    originalPrice: 220,
    image: "/images/date-moringa-protein-bar.jpg",
    category: "energy-bars",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isSignature: true,
    rating: 4.8,
    reviews: 142,
    reviewCount: 142,
    badges: ["Vegan", "High Protein", "No Refined Sugar", "Gluten-Free"],
    benefits: ["Plant-Based Protein", "Sustained Energy", "92 Nutrients", "Pre/Post Workout"],
    ingredients: ["Dates", "Moringa Powder", "Almonds", "Cashews", "Coconut Oil", "Vanilla Extract"],
    pairingTips: ["Perfect pre-workout", "Great post-exercise", "Ideal afternoon snack", "Pairs with coffee"],
    sizes: ["45g", "90g (2-pack)"],
    nutritionalHighlights: ["Plant Protein", "Fiber", "Iron", "Vitamin C"],
    servingSize: "1 bar (45g)",
    nutritionalInfo: {
      calories: 180,
      protein: 8,
      carbs: 22,
      fat: 7,
      fiber: 4,
      sugar: 16,
    },
  },
  {
    id: "6",
    name: "Raw Natural Honey",
    slug: "raw-natural-honey",
    description:
      "Unfiltered, unprocessed raw honey packed with nature's sweetness. 100% raw with no additives - a true immune booster.",
    price: 750,
    originalPrice: 850,
    image: "/images/raw-natural-honey.jpg",
    category: "spreads-sweeteners",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isSignature: true,
    rating: 4.9,
    reviews: 234,
    reviewCount: 234,
    badges: ["100% Raw", "Unrefined", "No Additives", "Immune Booster"],
    benefits: ["Natural Enzymes", "Immune Support", "Antioxidant Rich", "Energy Boost"],
    ingredients: ["100% Raw Wildflower Honey"],
    pairingTips: [
      "Add to warm kefir milk",
      "Drizzle on yoghurt",
      "Perfect for tea",
      "Great for baking",
      "Mix with lemon water",
    ],
    sizes: ["250g", "500g", "1kg"],
    nutritionalHighlights: ["Natural Enzymes", "Antioxidants", "Minerals", "Vitamins"],
    servingSize: "1 tbsp (21g)",
    nutritionalInfo: {
      calories: 64,
      protein: 0.1,
      carbs: 17,
      fat: 0,
      fiber: 0,
      sugar: 16,
    },
  },
  {
    id: "7",
    name: "Gluten-Free Granola",
    slug: "gluten-free-granola",
    description:
      "Coconut, seeds & cinnamon granola that's completely gluten-free and vegan. No refined sugar, just pure wholesome goodness.",
    price: 520,
    originalPrice: 580,
    image: "/images/gluten-free-granola.jpg",
    category: "breakfast-cereals",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isSignature: true,
    rating: 4.9,
    reviews: 167,
    reviewCount: 167,
    badges: ["Gluten-Free", "Vegan", "No Refined Sugar", "High Fiber"],
    benefits: ["High Fiber", "Sustained Energy", "Digestive Health", "Heart Healthy"],
    ingredients: [
      "Gluten-Free Oats",
      "Coconut Flakes",
      "Pumpkin Seeds",
      "Sunflower Seeds",
      "Cinnamon",
      "Coconut Oil",
      "Maple Syrup",
    ],
    pairingTips: ["Perfect with yoghurt", "Great with plant milk", "Delicious as a snack", "Add fresh berries"],
    sizes: ["350g", "500g"],
    nutritionalHighlights: ["Fiber", "Protein", "Healthy Fats", "Complex Carbs"],
    servingSize: "45g (1/2 cup)",
    nutritionalInfo: {
      calories: 210,
      protein: 6,
      carbs: 28,
      fat: 9,
      fiber: 5,
      sugar: 8,
    },
  },
  {
    id: "8",
    name: "Artisan Greek Yoghurt",
    slug: "artisan-greek-yoghurt",
    description:
      "Honey-infused Greek yoghurt that's probiotic-rich and naturally thick. Gluten-free, keto-friendly with no added sugar.",
    price: 380,
    originalPrice: 420,
    image: "/images/greek-yoghurt.jpg",
    category: "fermented-foods",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isSignature: true,
    rating: 4.8,
    reviews: 203,
    reviewCount: 203,
    badges: ["Probiotic Rich", "Gluten-Free", "Keto-Friendly", "No Added Sugar"],
    benefits: ["Probiotic Rich", "High Protein", "Digestive Health", "Bone Health"],
    ingredients: ["Organic Milk", "Live Active Cultures", "Raw Honey", "Natural Flavors"],
    pairingTips: ["Perfect with granola", "Great with berries", "Ideal for smoothies", "Delicious with nuts"],
    sizes: ["250ml", "500ml", "1L"],
    nutritionalHighlights: ["Probiotics", "Protein", "Calcium", "B-Vitamins"],
    servingSize: "170g (3/4 cup)",
    nutritionalInfo: {
      calories: 130,
      protein: 15,
      carbs: 9,
      fat: 4,
      fiber: 0,
      sugar: 9,
    },
  },
  {
    id: "9",
    name: "Raw Korean Kimchi",
    slug: "raw-korean-kimchi",
    description:
      "Wild fermented Korean kimchi that's raw, probiotic-rich and vegan. No preservatives, just traditional fermentation at its finest.",
    price: 480,
    originalPrice: 530,
    image: "/images/raw-korean-kimchi.jpg",
    category: "fermented-foods",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isSignature: true,
    rating: 4.9,
    reviews: 156,
    reviewCount: 156,
    badges: ["Probiotic", "Vegan", "No Preservatives", "Wild Fermented"],
    benefits: ["Digestive Health", "Immune Support", "Probiotic Rich", "Anti-inflammatory"],
    ingredients: ["Napa Cabbage", "Korean Chili Flakes", "Garlic", "Ginger", "Sea Salt", "Fish Sauce Alternative"],
    pairingTips: ["Perfect with rice", "Great in stir-fries", "Add to sandwiches", "Pairs with grilled meats"],
    sizes: ["350g", "500g"],
    nutritionalHighlights: ["Probiotics", "Vitamin C", "Fiber", "Antioxidants"],
    servingSize: "50g (1/4 cup)",
    nutritionalInfo: {
      calories: 15,
      protein: 1,
      carbs: 3,
      fat: 0,
      fiber: 1,
      sugar: 2,
    },
  },
  {
    id: "10",
    name: "Fermented Cabbage with Caraway",
    slug: "fermented-cabbage-caraway",
    description:
      "Handcrafted fermented cabbage with aromatic caraway seeds. Raw, probiotic-rich and naturally preserved using traditional methods.",
    price: 420,
    image: "/images/fermented-cabbage.jpg",
    category: "fermented-foods",
    inStock: true,
    isNew: true,
    isBestseller: false,
    isSignature: true,
    rating: 4.7,
    reviews: 89,
    reviewCount: 89,
    badges: ["Raw & Probiotic", "Naturally Preserved", "Vegan", "Handcrafted"],
    benefits: ["Digestive Health", "Probiotic Rich", "Traditional Recipe", "Gut Health"],
    ingredients: ["Red Cabbage", "Caraway Seeds", "Sea Salt", "Bay Leaves", "Natural Fermentation"],
    pairingTips: ["Perfect with sausages", "Great in salads", "Add to sandwiches", "Pairs with cheese"],
    sizes: ["400g", "600g"],
    nutritionalHighlights: ["Probiotics", "Vitamin K", "Fiber", "Antioxidants"],
    servingSize: "50g (1/4 cup)",
    nutritionalInfo: {
      calories: 12,
      protein: 1,
      carbs: 3,
      fat: 0,
      fiber: 2,
      sugar: 1,
    },
  },
  {
    id: "11",
    name: "Date Syrup",
    slug: "date-syrup",
    description:
      "Wholesome, sweet-free date syrup that's vegan and low GI. A whole food sweetener with no added sugar, perfect for healthy baking and drizzling.",
    price: 580,
    originalPrice: 650,
    image: "/images/date-syrup.jpg",
    category: "spreads-sweeteners",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isSignature: true,
    rating: 4.8,
    reviews: 178,
    reviewCount: 178,
    badges: ["Vegan", "Whole Food Sweetener", "No Added Sugar", "Low GI"],
    benefits: ["Natural Sweetener", "Low Glycemic", "Rich in Minerals", "Antioxidant Rich"],
    ingredients: ["100% Pure Dates", "Natural Extraction"],
    pairingTips: ["Perfect for pancakes", "Great in smoothies", "Ideal for baking", "Drizzle over yoghurt"],
    sizes: ["350ml", "750ml"],
    nutritionalHighlights: ["Potassium", "Fiber", "Antioxidants", "Natural Sugars"],
    servingSize: "1 tbsp (20g)",
    nutritionalInfo: {
      calories: 60,
      protein: 0,
      carbs: 16,
      fat: 0,
      fiber: 0,
      sugar: 15,
    },
  },
  {
    id: "12",
    name: "Macadamia Wellness Cookies",
    slug: "macadamia-wellness-cookies",
    description:
      "Buttery macadamia cookies made with almond flour and coconut sugar. Guilt-free indulgence at its finest.",
    price: 450,
    originalPrice: 500,
    image: "/images/macadamia-cookies.jpg",
    category: "pastries-cookies",
    inStock: true,
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviews: 156,
    reviewCount: 156,
    badges: ["Gluten-Free", "Keto-Friendly", "Premium", "Low Sugar"],
    benefits: ["Healthy Fats", "Low Carb", "Guilt-Free", "Protein Rich"],
    ingredients: ["Almond Flour", "Macadamia Nuts", "Coconut Sugar", "Grass-fed Butter", "Vanilla Extract"],
    pairingTips: ["Perfect with coffee", "Great afternoon snack", "Pairs with herbal tea"],
    nutritionalHighlights: ["Healthy Fats", "Protein", "Low Sugar", "Gluten-Free"],
    servingSize: "2 cookies (40g)",
  },
  {
    id: "13",
    name: "Traditional Kefir Milk",
    slug: "traditional-kefir-milk",
    description:
      "Probiotic-rich fermented milk with 30+ beneficial bacteria strains for optimal gut health and immunity. No added sugar.",
    price: 320,
    originalPrice: 380,
    image: "/images/kefir-milk.jpg",
    category: "fermented-foods",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isSignature: true,
    rating: 4.8,
    reviews: 187,
    reviewCount: 187,
    badges: ["Probiotic", "Gut Health", "No Added Sugar", "Traditional"],
    benefits: ["30+ Probiotics", "Digestive Health", "Immune Support", "Mental Wellness"],
    ingredients: ["Organic Milk", "Traditional Kefir Grains", "Live Cultures"],
    pairingTips: [
      "Best consumed fresh",
      "Great in smoothies",
      "Perfect breakfast drink",
      "Add honey for sweetness",
      "Mix with berries",
    ],
    sizes: ["250ml", "500ml", "1L"],
    nutritionalHighlights: ["30+ Probiotic Strains", "Protein", "Calcium", "B-Vitamins"],
    servingSize: "250ml",
    nutritionalInfo: {
      calories: 110,
      protein: 11,
      carbs: 12,
      fat: 2.5,
      fiber: 0,
      sugar: 12,
    },
  },
  {
    id: "14",
    name: "Raw Baobab Honey",
    slug: "raw-baobab-honey",
    description:
      "Unprocessed honey infused with vitamin C-rich baobab powder. Nature's perfect energy and immunity booster.",
    price: 680,
    image: "/images/baobab-honey.jpg",
    category: "spreads-sweeteners",
    inStock: true,
    isNew: false,
    isBestseller: true,
    isSignature: true,
    rating: 4.8,
    reviews: 203,
    reviewCount: 203,
    badges: ["Raw", "Vitamin C", "Antioxidant", "Natural"],
    benefits: ["6x Vitamin C", "Natural Energy", "Immune Boost", "Antioxidant Rich"],
    ingredients: ["Raw Wildflower Honey", "Organic Baobab Powder", "Natural Flavors"],
    pairingTips: ["Drizzle on toast", "Mix in tea", "Perfect for baking"],
    nutritionalHighlights: ["Vitamin C", "Antioxidants", "Natural Enzymes", "Minerals"],
    servingSize: "1 tbsp (20g)",
  },
  {
    id: "15",
    name: "Macadamia Nut Butter",
    slug: "macadamia-nut-butter",
    description:
      "Slow-roasted, stone-ground macadamia nut butter with no additives. Pure, creamy indulgence that's keto-friendly and vegan.",
    price: 850,
    originalPrice: 950,
    image: "/images/macadamia-nut-butter.jpg",
    category: "spreads-sweeteners",
    inStock: true,
    isNew: false,
    isBestseller: true,
    isSignature: true,
    rating: 4.9,
    reviews: 187,
    reviewCount: 187,
    badges: ["Keto-Friendly", "Vegan", "No Added Sugar", "Stone-Ground"],
    benefits: ["Healthy Fats", "Protein Rich", "No Additives", "Slow-Roasted"],
    ingredients: ["100% Macadamia Nuts"],
    pairingTips: ["Spread on toast", "Add to smoothies", "Perfect for baking", "Great with apples"],
    nutritionalHighlights: ["Monounsaturated Fats", "Protein", "Fiber", "Magnesium"],
    servingSize: "2 tbsp (32g)",
    nutritionalInfo: {
      calories: 230,
      protein: 3,
      carbs: 4,
      fat: 24,
      fiber: 3,
      sugar: 1,
    },
  },
  {
    id: "16",
    name: "Spicy Macadamia Mixed Nuts",
    slug: "spicy-macadamia-mixed-nuts",
    description:
      "Roasted macadamia nuts with chili, seeds & a dash of sea salt. Naturally spicy, high protein snack with no preservatives.",
    price: 650,
    originalPrice: 720,
    image: "/images/spicy-macadamia-nuts.jpg",
    category: "crunchy-snacks",
    inStock: true,
    isNew: true,
    isBestseller: true,
    isSignature: true,
    rating: 4.7,
    reviews: 134,
    reviewCount: 134,
    badges: ["Naturally Spicy", "High Protein", "No Preservatives", "Roasted"],
    benefits: ["High Protein", "Healthy Fats", "Natural Spice", "Energy Boost"],
    ingredients: ["Macadamia Nuts", "Cashews", "Pumpkin Seeds", "Chili Powder", "Sea Salt", "Paprika"],
    pairingTips: ["Perfect beer snack", "Great with cheese", "Ideal for hiking", "Add to salads"],
    sizes: ["250g", "500g"],
    nutritionalHighlights: ["Protein", "Healthy Fats", "Fiber", "Minerals"],
    servingSize: "30g (small handful)",
    nutritionalInfo: {
      calories: 180,
      protein: 5,
      carbs: 6,
      fat: 16,
      fiber: 3,
      sugar: 2,
    },
  },
  {
    id: "17",
    name: "Extra Virgin Macadamia Oil",
    slug: "extra-virgin-macadamia-oil",
    description:
      "Cold-pressed, extra virgin macadamia oil in small batches. Rich in Omega 7 and naturally nourishing for cooking and skincare.",
    price: 1200,
    originalPrice: 1350,
    image: "/images/macadamia-oil.jpg",
    category: "oils-vinegars",
    inStock: true,
    isNew: false,
    isBestseller: true,
    isSignature: true,
    rating: 4.9,
    reviews: 143,
    reviewCount: 143,
    badges: ["Keto-Friendly", "Cold-Pressed", "Extra Virgin", "Small Batch"],
    benefits: ["Rich in Omega 7", "Heart Healthy", "High Smoke Point", "Naturally Nourishing"],
    ingredients: ["100% Cold-Pressed Macadamia Nuts"],
    pairingTips: [
      "Perfect for high-heat cooking",
      "Great for salad dressings",
      "Excellent for skincare",
      "Ideal for baking",
    ],
    sizes: ["230ml", "500ml"],
    nutritionalHighlights: ["Omega 7", "Monounsaturated Fats", "Vitamin E", "Antioxidants"],
    servingSize: "1 tbsp (14g)",
    nutritionalInfo: {
      calories: 120,
      protein: 0,
      carbs: 0,
      fat: 14,
      fiber: 0,
      sugar: 0,
    },
  },
]

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isBestseller || product.isNew || product.isSignature).slice(0, 6)
}

export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "breakfast-snacks") {
    return products.filter(
      (product) => product.category === "breakfast-cereals" || product.category === "crunchy-snacks",
    )
  }
  return products.filter((product) => product.category === categoryId)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getNewProducts(): Product[] {
  return products.filter((product) => product.isNew)
}

export function getBestsellerProducts(): Product[] {
  return products.filter((product) => product.isBestseller)
}

export function getSignatureProducts(): Product[] {
  return products.filter((product) => product.isSignature)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.benefits.some((benefit) => benefit.toLowerCase().includes(lowercaseQuery)) ||
      product.ingredients.some((ingredient) => ingredient.toLowerCase().includes(lowercaseQuery)),
  )
}

export const dietaryFilters = [
  "Vegan",
  "Gluten-Free",
  "Keto-Friendly",
  "Sugar-Free",
  "Organic",
  "Raw",
  "Paleo",
  "Non-GMO",
  "Anti-inflammatory",
  "Probiotic",
  "Cold-Pressed",
  "Extra Virgin",
  "High Fiber",
  "High Protein",
  "No Preservatives",
  "Wild Fermented",
  "Low GI",
  "Whole Food Sweetener",
  "100% Raw",
  "Unrefined",
  "No Additives",
  "Plant-Based",
  "Detox",
  "Cleansing",
  "Natural Nitrates",
  "Circulation Support",
  "Gut Health",
  "No Added Sugar",
  "Traditional",
]

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "bestsellers", label: "Best Sellers" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
]
