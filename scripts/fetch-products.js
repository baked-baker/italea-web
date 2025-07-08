// Fetch and analyze the Italea product data
const response = await fetch(
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Italea_Product_List-JSpZyKWkxPZ1psBJcGOQtwdfW6BC29.csv",
)
const csvText = await response.text()

console.log("Raw CSV Data:")
console.log(csvText)

// Parse CSV data
const lines = csvText.trim().split("\n")
const headers = lines[0].split(",")
const products = []

for (let i = 1; i < lines.length; i++) {
  const values = lines[i].split(",")
  const product = {}
  headers.forEach((header, index) => {
    product[header.trim()] = values[index]?.trim() || ""
  })
  products.push(product)
}

console.log("\nParsed Products:")
console.log(JSON.stringify(products, null, 2))

// Analyze categories
const categories = [...new Set(products.map((p) => p.Category))]
console.log("\nCategories found:")
categories.forEach((cat) => console.log(`- ${cat}`))

// Count products per category
console.log("\nProducts per category:")
categories.forEach((cat) => {
  const count = products.filter((p) => p.Category === cat).length
  console.log(`${cat}: ${count} products`)
})
