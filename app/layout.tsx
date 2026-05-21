import { Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { CartProvider } from "@/components/cart-context"
import { WishlistProvider } from "@/components/wishlist-context"

export const metadata: Metadata = {
  title: "Nova Store | Premium Everyday Style",
  description:
    "Elevate your everyday look with Nova Store. Shop our curated collection of premium quality products with free shipping and secure payments.",
  keywords: "ecommerce, fashion, lifestyle, premium products, nova store",
  openGraph: {
    title: "Nova Store | Premium Everyday Style",
    description:
      "Elevate your everyday look with Nova Store. Shop our curated collection of premium quality products.",
    type: "website",
    locale: "en_US",
  },
}

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
