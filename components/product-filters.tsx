"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { X, Filter, ChevronDown, ChevronUp } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    materials: true,
    availability: true,
  })

  const categories = [
    { id: "living-room", label: "Living Room", count: 24 },
    { id: "bedroom", label: "Bedroom", count: 18 },
    { id: "dining", label: "Dining", count: 16 },
    { id: "office", label: "Office", count: 12 },
    { id: "outdoor", label: "Outdoor", count: 8 },
  ]

  const materials = [
    { id: "oak", label: "Oak", count: 15 },
    { id: "walnut", label: "Walnut", count: 12 },
    { id: "maple", label: "Maple", count: 8 },
    { id: "leather", label: "Leather", count: 10 },
    { id: "fabric", label: "Fabric", count: 14 },
    { id: "metal", label: "Metal", count: 6 },
  ]

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const handleMaterialChange = (materialId: string, checked: boolean) => {
    if (checked) {
      setSelectedMaterials([...selectedMaterials, materialId])
    } else {
      setSelectedMaterials(selectedMaterials.filter((id) => id !== materialId))
    }
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setPriceRange([0, 5000])
  }

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedMaterials.length > 0 || priceRange[0] > 0 || priceRange[1] < 5000

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="lg:hidden">
        <h2 className="text-lg font-semibold mb-4">Filter Products</h2>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <span className="text-sm font-medium">Active Filters</span>
          <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-8 px-2">
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        </div>
      )}

      {/* Price Range */}
      <Card className="p-4 shadow-sm">
        <h3 className="font-medium mb-4 flex items-center justify-between">
          Price Range
          <span className="text-xs text-muted-foreground">
            ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
          </span>
        </h3>
        <div className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={5000} min={0} step={50} className="w-full" />
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="text-center p-2 bg-muted/50 rounded">Min: ${priceRange[0].toLocaleString()}</div>
            <div className="text-center p-2 bg-muted/50 rounded">Max: ${priceRange[1].toLocaleString()}</div>
          </div>
        </div>
      </Card>

      {/* Categories */}
      <Card className="p-4 shadow-sm">
        <button
          onClick={() => toggleSection("categories")}
          className="w-full flex items-center justify-between mb-4 text-left"
        >
          <h3 className="font-medium">Categories</h3>
          {expandedSections.categories ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.categories && (
          <div className="space-y-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center space-x-3 p-2 rounded hover:bg-muted/50 transition-colors"
              >
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                />
                <Label htmlFor={category.id} className="flex-1 text-sm cursor-pointer">
                  {category.label}
                </Label>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{category.count}</span>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Materials */}
      <Card className="p-4 shadow-sm">
        <button
          onClick={() => toggleSection("materials")}
          className="w-full flex items-center justify-between mb-4 text-left"
        >
          <h3 className="font-medium">Materials</h3>
          {expandedSections.materials ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.materials && (
          <div className="space-y-3">
            {materials.map((material) => (
              <div
                key={material.id}
                className="flex items-center space-x-3 p-2 rounded hover:bg-muted/50 transition-colors"
              >
                <Checkbox
                  id={material.id}
                  checked={selectedMaterials.includes(material.id)}
                  onCheckedChange={(checked) => handleMaterialChange(material.id, checked as boolean)}
                />
                <Label htmlFor={material.id} className="flex-1 text-sm cursor-pointer">
                  {material.label}
                </Label>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{material.count}</span>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Availability */}
      <Card className="p-4 shadow-sm">
        <button
          onClick={() => toggleSection("availability")}
          className="w-full flex items-center justify-between mb-4 text-left"
        >
          <h3 className="font-medium">Availability</h3>
          {expandedSections.availability ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {expandedSections.availability && (
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-2 rounded hover:bg-muted/50 transition-colors">
              <Checkbox id="in-stock" />
              <Label htmlFor="in-stock" className="text-sm cursor-pointer">
                In Stock Only
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded hover:bg-muted/50 transition-colors">
              <Checkbox id="on-sale" />
              <Label htmlFor="on-sale" className="text-sm cursor-pointer">
                On Sale
              </Label>
            </div>
            <div className="flex items-center space-x-3 p-2 rounded hover:bg-muted/50 transition-colors">
              <Checkbox id="new-arrivals" />
              <Label htmlFor="new-arrivals" className="text-sm cursor-pointer">
                New Arrivals
              </Label>
            </div>
          </div>
        )}
      </Card>
    </div>
  )

  return (
    <>
      <div className="lg:hidden mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full bg-transparent">
              <Filter className="h-4 w-4 mr-2" />
              Filters {hasActiveFilters && `(${selectedCategories.length + selectedMaterials.length})`}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filter Products</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:block">
        <FilterContent />
      </div>
    </>
  )
}
