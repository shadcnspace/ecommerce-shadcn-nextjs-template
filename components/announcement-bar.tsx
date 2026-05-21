"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const MESSAGES = [
  "Free global shipping on orders over $150",
  "New Autumn Collection out now • Limited Edition",
  "Sign up for Nova Circle & get 10% off your first order",
]

export function AnnouncementBar() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % MESSAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-foreground text-background py-2 px-4 relative overflow-hidden h-9 flex items-center justify-center">
      <div className="absolute inset-y-0 left-4 flex items-center md:hidden">
        <button 
          onClick={() => setCurrent((prev) => (prev - 1 + MESSAGES.length) % MESSAGES.length)}
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="size-4" />
        </button>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-[11px] md:text-xs font-medium tracking-[0.1em] uppercase text-center"
          >
            {MESSAGES[current]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center md:hidden">
        <button 
          onClick={() => setCurrent((prev) => (prev + 1) % MESSAGES.length)}
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  )
}
