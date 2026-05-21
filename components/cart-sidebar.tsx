"use client"

import { useCart } from "./cart-context"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Minus, Plus, Trash2, ShoppingBag, ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface CartSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSidebar({ open, onOpenChange }: CartSidebarProps) {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col p-0 sm:max-w-md">
        <SheetHeader className="p-6">
          <SheetTitle className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            <ShoppingBag className="size-6" />
            Your Cart
            {itemCount > 0 && (
              <span className="ml-1 text-sm font-medium text-muted-foreground">
                ({itemCount} {itemCount === 1 ? "item" : "items"})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        <Separator />

        <div className="flex flex-1 flex-col overflow-hidden">
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center space-y-4 p-8 text-center">
              <div className="rounded-full bg-muted p-6">
                <ShoppingBag className="size-10 text-muted-foreground opacity-50" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">
                  Looks like you haven&apos;t added anything yet.
                </p>
              </div>
              <Button
                onClick={() => onOpenChange(false)}
                variant="outline"
                className="mt-4 rounded-full px-8"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative aspect-square size-24 shrink-0 overflow-hidden rounded-xl bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between py-1">
                        <div className="space-y-1">
                          <h4 className="line-clamp-1 font-medium text-foreground">
                            {item.name}
                          </h4>
                          <p className="text-sm font-semibold">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-border bg-muted/50 p-1">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="flex size-6 items-center justify-center rounded-full transition-colors hover:bg-background"
                            >
                              <Minus className="size-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="flex size-6 items-center justify-center rounded-full transition-colors hover:bg-background"
                            >
                              <Plus className="size-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground transition-colors hover:text-destructive"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 border-t bg-muted/30 p-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between text-lg font-bold tracking-tight">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  onClick={() => onOpenChange(false)}
                  className="w-full"
                >
                  <Button className="group relative h-12 w-full cursor-pointer overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6">
                    <span className="relative z-10 transition-all duration-500">
                      Checkout Now
                    </span>
                    <span className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-41px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </Button>
                </Link>
                <p className="mt-2 text-center text-[10px] tracking-widest text-muted-foreground uppercase">
                  Secure Checkout Powered by Nova
                </p>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
