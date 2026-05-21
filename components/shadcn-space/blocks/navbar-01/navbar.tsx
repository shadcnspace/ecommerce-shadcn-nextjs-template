"use client"

import Logo from "@/assets/logo/logo"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ArrowUpRight, TextAlignJustify, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { useCart } from "@/components/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"

export type NavigationSection = {
  title: string
  href: string
}

const navigationData: NavigationSection[] = [
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

const CollaborateButton = ({ className }: { className?: string }) => (
  <Link href="/shop">
    <Button
      className={cn(
        "group relative h-10 w-fit overflow-hidden rounded-full p-1 ps-4 pe-12 text-sm font-medium transition-all duration-500 hover:bg-primary/80 hover:ps-12 hover:pe-4",
        className
      )}
    >
      <span className="relative z-10 transition-all duration-500 hover:cursor-pointer">
        Shop Now
      </span>
      <div className="absolute right-1 flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </div>
    </Button>
  </Link>
)

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { itemCount } = useCart()

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50)
  }, [])

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [handleScroll, handleResize])

  return (
    <>
      <header className="bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
          <nav
            className={cn(
              "flex h-fit w-full items-center justify-between gap-3.5 transition-all duration-500 lg:gap-6",
              sticky
                ? "rounded-full border border-border/40 bg-background/60 p-2.5 shadow-2xl shadow-primary/5 backdrop-blur-lg"
                : "border-transparent bg-transparent"
            )}
          >
            <Link href="/">
              <Logo />
            </Link>
            <div>
              <NavigationMenu className="rounded-full bg-muted p-0.5 max-lg:hidden">
                <NavigationMenuList className="flex gap-0">
                  {navigationData.map((navItem) => (
                    <NavigationMenuItem key={navItem.title}>
                      <Link href={navItem.href} passHref legacyBehavior>
                        <NavigationMenuLink className="rounded-full px-2 py-2 text-sm font-medium tracking-normal text-muted-foreground outline outline-transparent transition hover:bg-background hover:text-foreground hover:shadow-xs hover:outline-border lg:px-4">
                          {navItem.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            <div className="flex items-center gap-2">
              <CollaborateButton className="hidden lg:flex" />
              <Button
                variant="outline"
                size="icon"
                className="relative size-10 rounded-full border-border/40 bg-background shadow-sm backdrop-blur-md cursor-pointer"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="size-4" />
                {itemCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </Button>
              
              <div className="lg:hidden">
                <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                  <DropdownMenuTrigger className="flex cursor-pointer items-center justify-center rounded-full border border-border bg-background p-2 transition-colors outline-none">
                    <TextAlignJustify size={20} />
                    <span className="sr-only">Menu</span>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="mt-2 w-56">
                    {navigationData.map((item) => (
                      <DropdownMenuItem key={item.title}>
                        <Link
                          href={item.href}
                          className="w-full cursor-pointer text-sm font-medium"
                        >
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <CartSidebar open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  )
}

export default Navbar
