"use client"

import { useState, useRef } from "react"
import ProductCategory from "../product-category-04/product-category"
import ProductListing from "../product-listing-01/index"
import { PRODUCTS } from "@/lib/data"

/**
 * ProductCatalog combines the filtering capabilities of ProductCategory
 * with the display logic of ProductListing into a single, high-fidelity
 * shopping experience.
 */
export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("All")
  const listingRef = useRef<HTMLDivElement>(null)

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)

  return (
    <div className="flex flex-col">
      {/* Filters Section */}
      <ProductCategory
        activeCategory={activeCategory}
        onCategoryChange={(category) => {
          setActiveCategory(category)
          // Optional: Smooth scroll to listing on mobile if filters are at top
          if (window.innerWidth < 768 && listingRef.current) {
            listingRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }}
      />

      {/* Results Section */}
      <div ref={listingRef} className="scroll-mt-24">
        <ProductListing
          products={filteredProducts}
          title={
            activeCategory === "All"
              ? "Shop All Collections"
              : `${activeCategory} Collection`
          }
          description={
            activeCategory === "All"
              ? "Browse Nova Store's full collection of premium apparel, luxury accessories, and smart tech."
              : `Exploring our premium selection of ${activeCategory.toLowerCase()} products.`
          }
        />
      </div>
    </div>
  )
}
