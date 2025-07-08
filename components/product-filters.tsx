"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"

interface ProductFiltersProps {
  category: string
}

export function ProductFilters({ category }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const filterOptions = {
    "breakfast-snacks": [
      { id: "gluten-free", label: "Gluten Free" },
      { id: "high-protein", label: "High Protein" },
      { id: "organic", label: "Organic" },
      { id: "vegan", label: "Vegan" },
      { id: "raw", label: "Raw" },
    ],
    "spreads-sweeteners": [
      { id: "raw", label: "Raw" },
      { id: "unprocessed", label: "Unprocessed" },
      { id: "single-origin", label: "Single Origin" },
      { id: "artisan", label: "Artisan Made" },
      { id: "no-sugar", label: "No Added Sugar" },
    ],
    "fermented-foods": [
      { id: "probiotic", label: "Live Probiotics" },
      { id: "traditional", label: "Traditional Method" },
      { id: "no-preservatives", label: "No Preservatives" },
      { id: "raw", label: "Raw" },
      { id: "organic", label: "Organic" },
    ],
    "pastries-cookies": [
      { id: "artisan", label: "Artisan Crafted" },
      { id: "natural", label: "Natural Ingredients" },
      { id: "small-batch", label: "Small Batch" },
      { id: "gluten-free", label: "Gluten Free" },
      { id: "vegan", label: "Vegan Options" },
    ],
    "wellness-shots": [
      { id: "organic", label: "Organic" },
      { id: "cold-pressed", label: "Cold Pressed" },
      { id: "raw", label: "Raw" },
      { id: "vegan", label: "Vegan" },
      { id: "no-sugar", label: "No Added Sugar" },
    ],
    "energy-bars": [
      { id: "plant-based", label: "Plant Based" },
      { id: "high-protein", label: "High Protein" },
      { id: "gluten-free", label: "Gluten Free" },
      { id: "raw", label: "Raw" },
      { id: "organic", label: "Organic" },
    ],
    "oils-vinegars": [
      { id: "cold-pressed", label: "Cold Pressed" },
      { id: "extra-virgin", label: "Extra Virgin" },
      { id: "organic", label: "Organic" },
      { id: "unrefined", label: "Unrefined" },
      { id: "single-origin", label: "Single Origin" },
    ],
  }

  const currentFilters = filterOptions[category as keyof typeof filterOptions] || []

  const handleFilterChange = (filterId: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filterId])
    } else {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId))
    }
  }

  const clearFilters = () => {
    setSelectedFilters([])
    setPriceRange([0, 500])
  }

  return (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h4 className="font-medium text-italea-forest mb-3">Price Range</h4>
        <div className="px-2">
          <Slider value={priceRange} onValueChange={setPriceRange} max={500} min={0} step={10} className="mb-2" />
          <div className="flex justify-between text-sm text-italea-forest-600">
            <span>R{priceRange[0]}</span>
            <span>R{priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Category Filters */}
      <div>
        <h4 className="font-medium text-italea-forest mb-3">Features</h4>
        <div className="space-y-3">
          {currentFilters.map((filter) => (
            <div key={filter.id} className="flex items-center space-x-2">
              <Checkbox
                id={filter.id}
                checked={selectedFilters.includes(filter.id)}
                onCheckedChange={(checked) => handleFilterChange(filter.id, checked as boolean)}
              />
              <Label htmlFor={filter.id} className="text-sm text-italea-forest-600 cursor-pointer">
                {filter.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Availability */}
      <div>
        <h4 className="font-medium text-italea-forest mb-3">Availability</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" />
            <Label htmlFor="in-stock" className="text-sm text-italea-forest-600 cursor-pointer">
              In Stock
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="on-sale" />
            <Label htmlFor="on-sale" className="text-sm text-italea-forest-600 cursor-pointer">
              On Sale
            </Label>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      {(selectedFilters.length > 0 || priceRange[0] > 0 || priceRange[1] < 500) && (
        <>
          <Separator />
          <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
            Clear All Filters
          </Button>
        </>
      )}
    </div>
  )
}
