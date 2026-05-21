"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface ProductCategoryProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  {
    id: "Apparel",
    name: "Apparel",
    image: "/assets/shop/category-apparel.png",
  },
  {
    id: "Accessories",
    name: "Accessories",
    image: "/assets/shop/category-accessories.png",
  },
  {
    id: "Electronics",
    name: "Electronics",
    image: "/assets/shop/category-electronics.png",
  },
  {
    id: "Bags",
    name: "Bags",
    image: "/assets/shop/category-bags.png",
  },
]

const filters = [
  "All",
  "Apparel",
  "Accessories",
  "Electronics",
  "Bags",
  "Skincare",
  "Audio",
]

const ProductCategory = ({
  activeCategory,
  onCategoryChange,
}: ProductCategoryProps) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="overflow-hidden bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-6">
          <div className="flex w-full flex-col items-center gap-5 text-center">
            {/* Centered Filters */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-wrap justify-center gap-2"
            >
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeCategory === filter ? "default" : "outline"}
                  onClick={() => onCategoryChange(filter)}
                  className={cn(
                    "h-9 cursor-pointer rounded-lg px-5 text-sm font-medium transition-all duration-200",
                    activeCategory === filter
                      ? "border-transparent bg-foreground text-background hover:bg-foreground/90"
                      : "border-border text-foreground hover:bg-accent dark:border-border dark:bg-background"
                  )}
                >
                  {filter}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCategory
