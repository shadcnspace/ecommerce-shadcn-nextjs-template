"use client"

import { useState } from "react"
import { useCart } from "./cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  CreditCard,
  Truck,
  ShieldCheck,
  MapPin,
  User,
  ChevronRight,
  Check,
  ArrowUpRight,
  ShoppingBag,
} from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Confetti } from "./confetti"
import Link from "next/link"

const STEPS = ["Information", "Shipping", "Payment"]

export function CheckoutForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const { total, items, clearCart } = useCart()
  const [isCompleted, setIsCompleted] = useState(false)

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      setIsCompleted(true)
      clearCart()
    }
  }

  if (!isCompleted && items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 py-20 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="size-10 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Your cart is empty
          </h2>
          <p className="max-w-sm text-muted-foreground">
            You need to add some premium pieces to your cart before you can
            checkout.
          </p>
        </div>
        <Link href="/shop">
          <Button
            className={cn(
              "group relative h-12 w-fit overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6",
              "cursor-pointer"
            )}
          >
            <span className="relative z-10 transition-all duration-500">
              Shop Collection
            </span>
            <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Button>
        </Link>
      </div>
    )
  }

  if (isCompleted) {
    return (
      <>
        <Confetti />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center space-y-6 py-20 text-center"
        >
          <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="size-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Order Confirmed!
            </h2>
            <p className="mx-auto max-w-md text-muted-foreground">
              Thank you for your purchase. We've sent a confirmation email to you,
              and your items will be shipped shortly.
            </p>
          </div>
          <a href="/shop">
            <Button
              className={cn(
                "group relative h-12 w-fit overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6",
                "cursor-pointer"
              )}
            >
              <span className="relative z-10 transition-all duration-500">
                Continue Shopping
              </span>
              <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Button>
          </a>
        </motion.div>
      </>
    )
  }

  return (
    <div className="space-y-10">
      {/* Step Indicator */}
      <div className="mx-auto mb-12 flex max-w-md items-center justify-between">
        {STEPS.map((step, idx) => (
          <div key={step} className="group flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "flex size-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300",
                  currentStep >= idx
                    ? "scale-110 bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {currentStep > idx ? <Check className="size-4" /> : idx + 1}
              </div>
              <span
                className={cn(
                  "text-[10px] font-semibold tracking-widest uppercase",
                  currentStep >= idx ? "text-primary" : "text-muted-foreground"
                )}
              >
                {step}
              </span>
            </div>
            {idx < STEPS.length - 1 && (
              <div className="mx-4 -mt-6 h-[2px] w-12 bg-muted">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: currentStep > idx ? "100%" : "0%" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleNext} className="space-y-12">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-muted p-2">
                    <User className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Contact Information
                  </h3>
                </div>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      placeholder="email@example.com"
                      required
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="rounded border-border"
                    />
                    <Label
                      htmlFor="newsletter"
                      className="text-sm font-normal text-muted-foreground"
                    >
                      Email me with news and offers
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-muted p-2">
                    <MapPin className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Shipping Address
                  </h3>
                </div>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      placeholder="123 Luxury Lane"
                      required
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        placeholder="NY"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input
                        id="zip"
                        placeholder="10001"
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-muted p-2">
                    <Truck className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Shipping Method
                  </h3>
                </div>
                <div className="grid gap-4">
                  <div className="flex cursor-pointer items-center justify-between rounded-xl border border-primary bg-primary/5 p-4">
                    <div className="flex gap-4">
                      <div className="flex size-5 items-center justify-center rounded-full border-2 border-primary p-1">
                        <div className="size-full rounded-full bg-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Standard Shipping</p>
                        <p className="text-xs text-muted-foreground">
                          3-5 business days
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-bold">Free</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-border p-4 opacity-60">
                    <div className="flex gap-4">
                      <div className="size-5 rounded-full border-2 border-muted" />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Express Shipping
                        </p>
                        <p className="text-xs text-muted-foreground">
                          1-2 business days
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-muted-foreground">
                      $25.00
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-muted p-2">
                    <CreditCard className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Payment Details
                  </h3>
                </div>
                <div className="space-y-6 rounded-2xl border border-border/50 bg-muted/30 p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card">Card Number</Label>
                      <div className="relative">
                        <Input
                          id="card"
                          placeholder="0000 0000 0000 0000"
                          required
                          className="h-12 rounded-xl pr-12"
                        />
                        <CreditCard className="absolute top-1/2 right-4 size-5 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <div className="relative">
                          <Input
                            id="cvv"
                            placeholder="123"
                            required
                            className="h-12 rounded-xl pr-12"
                          />
                          <ShieldCheck className="absolute top-1/2 right-4 size-5 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex max-w-lg gap-4 justify-self-center pt-6">
          {currentStep > 0 && (
            <Button
              type="button"
              variant="outline"
              className="h-12 cursor-pointer rounded-full px-8 hover:bg-muted"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </Button>
          )}
          <Button
            type="submit"
            className={cn(
              "group relative h-12 flex-1 overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6",
              "cursor-pointer"
            )}
          >
            <span className="relative z-10 transition-all duration-500">
              {currentStep === STEPS.length - 1
                ? "Complete Order"
                : "Continue to Next Step"}
            </span>
            <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Button>
        </div>
      </form>
    </div>
  )
}
