"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { Menu, X, ShoppingBag, ArrowUpRight, Heart, HelpCircle } from "lucide-react"
import Logo from "@/assets/logo/logo"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCart } from "@/components/cart-context"
import { useWishlist } from "@/components/wishlist-context"
import { CartSidebar } from "@/components/cart-sidebar"

export type NavigationSection = {
  title: string
  href: string
  isActive?: boolean
}

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const CollaborateButton = ({ className }: { className?: string }) => (
  <Link href="/shop" className="block">
    <Button
      className={cn(
        "group relative h-10 w-fit overflow-hidden rounded-full p-1 ps-4 pe-12 text-sm font-medium transition-all duration-500 hover:ps-12 hover:pe-4",
        className,
        "cursor-pointer"
      )}
    >
      <span className="relative z-10 transition-all duration-500">
        Shop Now
      </span>
      <span className="absolute right-1 flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </span>
    </Button>
  </Link>
)

const AuthButtons = ({ 
  className,
  onCartClick 
}: { 
  className?: string;
  onCartClick: () => void;
}) => {
  const { itemCount } = useCart()
  const { wishlistCount } = useWishlist()
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Link href="/faq">
        <Button
          variant="ghost"
          size="icon"
          className="size-10 rounded-full hover:bg-muted cursor-pointer"
          title="FAQ"
        >
          <HelpCircle className="size-4" />
        </Button>
      </Link>
      <Link href="/login">
        <Button
          variant="ghost"
          className="hidden h-10 cursor-pointer rounded-full px-6 text-sm font-medium hover:bg-muted sm:flex"
        >
          Login
        </Button>
      </Link>
      <CollaborateButton />
      <Link href="/wishlist">
        <Button
          variant="outline"
          size="icon"
          className="relative size-10 rounded-full border-border/40 bg-background/60 shadow-sm backdrop-blur-md cursor-pointer"
        >
          <Heart className="size-4" />
          {wishlistCount > 0 && (
            <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {wishlistCount}
            </span>
          )}
        </Button>
      </Link>
      <Button
        variant="outline"
        size="icon"
        className="relative size-10 rounded-full border-border/40 bg-background/60 shadow-sm backdrop-blur-md cursor-pointer"
        onClick={onCartClick}
      >
        <ShoppingBag className="size-4" />
        {itemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
            {itemCount}
          </span>
        )}
      </Button>
    </div>
  )
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [sticky, setSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const pathname = usePathname()

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

  const isNavItemActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false
    return pathname.startsWith(href)
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={cn(
          "sticky inset-x-0 top-0 z-50 flex h-20 items-center justify-center px-4",
          className
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-fit w-full max-w-7xl items-center justify-between gap-3.5 transition-all duration-500 lg:gap-6",
            sticky
              ? "rounded-full border border-border/40 bg-background/60 px-3 py-2.5 shadow-2xl shadow-primary/5 backdrop-blur-lg"
              : "border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <div>
            <Link href="/">
              <Logo className="gap-3" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu className="relative rounded-full border border-border/40 bg-muted/30 p-1 backdrop-blur-md">
              <NavigationMenuList className="relative flex gap-1">
                {navigationData.map((navItem) => {
                  const active = isNavItemActive(navItem.href)
                  return (
                    <NavigationMenuItem key={navItem.title} className="relative">
                      <Link href={navItem.href} passHref legacyBehavior>
                        <NavigationMenuLink
                          className={cn(
                            "relative z-10 block rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-300",
                            active
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {navItem.title}
                          {active && (
                            <motion.div
                              layoutId="active-nav"
                              className="absolute inset-0 z-[-1] rounded-full bg-background shadow-sm outline outline-border"
                              transition={{
                                type: "spring",
                                bounce: 0.2,
                                duration: 0.6,
                              }}
                            />
                          )}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA */}
          <div className="flex gap-4">
            <AuthButtons 
              onCartClick={() => setIsCartOpen(true)}
              className="hidden lg:flex" 
            />

            <div className="lg:hidden flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="size-10 rounded-full border-border/40 bg-background/60 shadow-sm backdrop-blur-md"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="size-4" />
                <span className="sr-only">Cart</span>
              </Button>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger id="mobile-menu-trigger">
                  <span className="block rounded-full border border-border p-2 bg-background/60 backdrop-blur-md">
                    <Menu width={20} height={20} />
                    <span className="sr-only">Menu</span>
                  </span>
                </SheetTrigger>

                <SheetContent
                  showCloseButton={false}
                  side="right"
                  className="w-full border-l-0 p-0 sm:w-96"
                >
                  <div className="flex items-center justify-between p-6">
                    <Link href="/">
                      <Logo className="gap-2" />
                    </Link>
                    <SheetClose id="mobile-menu-close">
                      <span className="block rounded-full border border-border p-2.5">
                        <X width={16} height={16} />
                      </span>
                    </SheetClose>
                  </div>

                  <div className="flex flex-col gap-12 overflow-y-auto px-6 pb-6">
                    <div className="flex flex-col gap-8">
                      <SheetTitle className="sr-only">Menu</SheetTitle>
                      <NavigationMenu
                        orientation="vertical"
                        className="flex-none items-start"
                      >
                        <NavigationMenuList className="flex flex-col items-start gap-3">
                          {navigationData.map((item) => (
                            <NavigationMenuItem key={item.title}>
                              <Link href={item.href} passHref legacyBehavior>
                                <NavigationMenuLink
                                  onClick={() => setIsOpen(false)}
                                  className={cn(
                                    "group/nav flex items-center p-0 text-2xl font-semibold tracking-tight transition-all hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
                                    isNavItemActive(item.href)
                                      ? "text-primary"
                                      : "text-muted-foreground hover:translate-x-2 hover:text-foreground"
                                  )}
                                >
                                  <div
                                    className={cn(
                                      "h-0.5 overflow-hidden bg-primary transition-all duration-300",
                                      isNavItemActive(item.href)
                                        ? "mr-2 w-4 opacity-100"
                                        : "w-0 opacity-0 group-hover/nav:mr-2 group-hover/nav:w-4 group-hover/nav:opacity-100"
                                    )}
                                  />
                                  {item.title}
                                </NavigationMenuLink>
                              </Link>
                            </NavigationMenuItem>
                          ))}
                        </NavigationMenuList>
                      </NavigationMenu>

                      <div className="w-fit">
                        <AuthButtons onCartClick={() => {
                          setIsOpen(false)
                          setIsCartOpen(true)
                        }} />
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-4">
                      <div className="flex gap-3">
                        {[
                          "lucide:dribbble",
                          "lucide:instagram",
                          "lucide:twitter",
                          "lucide:linkedin",
                        ].map((icon) => (
                          <a
                            key={icon}
                            href="#"
                            className="flex items-center justify-center rounded-full p-3 shadow-xs outline outline-border transition hover:bg-muted"
                          >
                            <Icon icon={icon} width={16} height={16} />
                          </a>
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground">
                        © 2026 Nova Store
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>
      <CartSidebar open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  )
}

export default Header
