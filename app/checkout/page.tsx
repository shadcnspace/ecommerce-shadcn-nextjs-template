"use client"

import { useCart } from "@/components/cart-context"
import { CheckoutForm } from "@/components/checkout-form"
import { Separator } from "@/components/ui/separator"
import {
  ShoppingBag,
  ChevronLeft,
  ShieldCheck,
  Truck,
  RefreshCcw,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function CheckoutPage() {
  const { items, total, itemCount } = useCart()

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Return to Store
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          {/* Main Checkout Area */}
          <div className="lg:col-span-7">
            <CheckoutForm />

            <div className="mt-20 grid grid-cols-1 gap-8 rounded-3xl border border-border/50 bg-muted/30 p-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Truck className="size-6 text-primary" />
                <h4 className="text-sm font-bold tracking-widest uppercase">
                  Free Shipping
                </h4>
                <p className="text-xs text-muted-foreground">
                  On all orders over $150
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <RefreshCcw className="size-6 text-primary" />
                <h4 className="text-sm font-bold tracking-widest uppercase">
                  Easy Returns
                </h4>
                <p className="text-xs text-muted-foreground">
                  30-day hassle-free policy
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <ShieldCheck className="size-6 text-primary" />
                <h4 className="text-sm font-bold tracking-widest uppercase">
                  Secure Pay
                </h4>
                <p className="text-xs text-muted-foreground">
                  Industry standard encryption
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-8 rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight">
                Order Summary
              </h3>

              <div className="custom-scrollbar max-h-[40vh] space-y-6 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-full object-cover"
                      />
                      <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-sm">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <h4 className="line-clamp-2 text-sm leading-tight font-medium text-foreground">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-sm font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="bg-border/60" />

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Estimated Shipping
                  </span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-green-600">
                  <span>Nova Circle Discount</span>
                  <span>-$0.00</span>
                </div>

                <Separator className="bg-border" />

                <div className="flex justify-between text-xl font-bold tracking-tight">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3 rounded-xl bg-muted/50 p-4">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-primary/20 focus:outline-none"
                  />
                  <Button
                    variant="outline"
                    className="h-9 rounded-lg px-4 text-xs font-semibold"
                  >
                    Apply
                  </Button>
                </div>
              </div>

              <p className="text-center text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                All prices include applicable taxes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
