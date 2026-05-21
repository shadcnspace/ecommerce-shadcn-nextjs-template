"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Category {
  id: string
  name: string
  count: string
  image: string
}

const categories: Category[] = [
  {
    id: "apparel",
    name: "Apparel",
    count: "30 items",
    image: "/assets/shop/category-apparel.png",
  },
  {
    id: "accessories",
    name: "Accessories",
    count: "40 items",
    image: "/assets/shop/category-accessories.png",
  },
  {
    id: "electronics",
    name: "Electronics",
    count: "30 items",
    image: "/assets/shop/category-electronics.png",
  },
  {
    id: "bags",
    name: "Bags",
    count: "35 items",
    image: "/assets/shop/category-bags.png",
  },
  {
    id: "skincare",
    name: "Skincare",
    count: "3 items",
    image: "/assets/product/facewash-1.png",
  },
  {
    id: "audio",
    name: "Audio",
    count: "37 items",
    image: "/assets/product/earbuds-1.png",
  },
]

const ProductCategory = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="bg-background py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="flex h-full flex-col gap-8">
          {/* Header */}
          <div className="flex w-full items-center justify-between">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-2xl font-semibold text-foreground"
            >
              Explore Our Top-Rated Product Collections
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <Link href="/shop">
                <Button
                  className={cn(
                    "group relative h-10 w-fit overflow-hidden rounded-full p-1 ps-4 pe-12 text-sm font-medium transition-all duration-500 hover:ps-12 hover:pe-4",
                    "cursor-pointer"
                  )}
                >
                  <span className="relative z-10 transition-all duration-500">
                    See all
                  </span>
                  <span className="absolute right-1 flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="w-full overflow-x-auto xl:[scrollbar-width:none] xl:[-ms-overflow-style:none] xl:[&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="w-full max-w-67.5 shrink-0"
                >
                  <Link
                    href={`/shop?category=${encodeURIComponent(category.name)}`}
                    className="group flex items-center overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/20"
                  >
                    {/* Image Container */}
                    <div className="relative flex h-23 w-26 shrink-0 items-center justify-center overflow-hidden border-r border-border">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content Container */}
                    <div className="flex-1 p-6">
                      <p className="text-base font-medium text-foreground">
                        {category.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {category.count}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCategory
