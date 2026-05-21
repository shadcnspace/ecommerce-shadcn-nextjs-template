"use client"

import { useState } from "react"
import { Heart, Star, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import Link from "next/link"
import { useCart } from "@/components/cart-context"
import { useWishlist } from "@/components/wishlist-context"

export interface ProductCardProps {
  id?: string
  image: string
  category: string
  name: string
  rating: number
  reviews: number
  price: number
  slug?: string
  originalPrice?: number
  badge?: {
    text: string
  }
  className?: string
  onWishlist?: () => void
}

export function ProductCard({
  id,
  image,
  category,
  name,
  rating,
  reviews,
  price,
  slug,
  originalPrice,
  badge,
  className,
  onWishlist,
}: ProductCardProps) {
  const { addItem } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()

  const isWishlisted = isInWishlist(id || slug || name)

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist({
      id: id || slug || name,
      name,
      price,
      image,
      slug,
      category,
    })
    onWishlist?.()
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: id || slug || name,
      name,
      price,
      image,
      quantity: 1,
      slug,
    })
  }

  const getBadgeStyles = (text: string) => {
    const lowercaseText = text.toLowerCase()
    if (lowercaseText.includes("%") || lowercaseText === "sale") {
      return "bg-red-500/10 text-red-500"
    }
    if (lowercaseText === "new") {
      return "bg-emerald-500/10 text-emerald-500"
    }
    if (lowercaseText === "hot") {
      return "bg-orange-400/10 text-orange-400"
    }
    return "bg-primary/10 text-primary"
  }

  return (
    <Card
      className={cn(
        "group flex flex-col gap-0 overflow-hidden rounded-2xl border bg-card p-0 ring-0 transition-all",
        className
      )}
    >
      <Link
        href={slug ? `/shop/${slug}` : "#"}
        className="relative block h-full min-h-55 overflow-hidden bg-muted/50"
      >
        {badge && (
          <Badge
            variant="outline"
            className={cn(
              "absolute top-5.5 left-4 z-10 rounded-full border-0 px-2 py-0.5 text-xs capitalize",
              getBadgeStyles(badge.text)
            )}
          >
            {badge.text}
          </Badge>
        )}
        <Button
          size="icon-sm"
          className="group/wishlist absolute top-4 right-4 z-10 size-8 cursor-pointer rounded-full bg-background transition-transform hover:scale-110"
          onClick={handleWishlist}
        >
          <Heart
            className={cn(
              "size-4 transition-all duration-300",
              isWishlisted
                ? "scale-110 fill-red-500 text-red-500"
                : "text-foreground"
            )}
          />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </Link>
      <CardContent className="flex flex-col gap-3 p-5">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground capitalize">
            {category}
          </span>
          <Link href={slug ? `/shop/${slug}` : "#"}>
            <p className="line-clamp-1 text-lg font-medium text-foreground transition-colors hover:text-primary">
              {name}
            </p>
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3.5 w-3.5",
                    i < Math.floor(rating)
                      ? "fill-orange-400 text-orange-400"
                      : "fill-muted text-orange-400"
                  )}
                />
              ))}
            </div>
            <small className="text-sm text-foreground">{rating}</small>
            <small className="text-sm text-foreground">({reviews})</small>
          </div>
          <div className="flex items-center gap-2">
            <small className="text-lg font-medium text-foreground">
              ${price}
            </small>
            {originalPrice && (
              <small className="text-lg font-medium text-muted-foreground line-through">
                ${originalPrice}
              </small>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleAddToCart}
            className="h-10 flex-1 cursor-pointer gap-2 transition-all hover:bg-primary/80 active:scale-95"
          >
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 cursor-pointer transition-all duration-300 active:scale-95"
          >
            <Link href={slug ? `/shop/${slug}` : "#"} className="group">
              <ArrowUpRight className="size-4 transition-all duration-300 group-hover:rotate-45" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
