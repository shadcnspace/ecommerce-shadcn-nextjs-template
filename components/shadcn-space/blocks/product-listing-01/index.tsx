"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  ProductCard,
  type ProductCardProps,
} from "@/components/shadcn-space/blocks/product-listing-01/product-card"

export const PRODUCTS: ProductCardProps[] = [
  {
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-1.webp",
    category: "Electronics",
    name: "Apple Watch S9",
    rating: 4.5,
    reviews: 105,
    price: 684,
    originalPrice: 855,
  },
  {
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-02-2.webp",
    category: "Fashion",
    name: "Beige Jacket",
    rating: 4.3,
    reviews: 105,
    price: 479,
    originalPrice: 599,
    badge: { text: "-15%" },
  },
  {
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-3.webp",
    category: "Beauty",
    name: "Glow Serum",
    rating: 4.5,
    reviews: 105,
    price: 46,
    originalPrice: 55,
    badge: { text: "New" },
  },
  {
    image:
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-4.webp",
    category: "Electronics",
    name: "Space WH-1000XM5",
    rating: 4.5,
    reviews: 105,
    price: 279,
    originalPrice: 349,
    badge: { text: "Hot" },
  },
]

export interface ProductListingProps {
  products?: ProductCardProps[]
  title?: string
  description?: string
}

export default function ProductListing({
  products = [],
  title = "Best-Selling Fashion & Electronics Online",
  description = "Buy top trending products recommended by our experts",
}: ProductListingProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
            <p className="text-base text-muted-foreground">{description}</p>
          </div>
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
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div key={index} className="w-full">
              <ProductCard {...product} className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
