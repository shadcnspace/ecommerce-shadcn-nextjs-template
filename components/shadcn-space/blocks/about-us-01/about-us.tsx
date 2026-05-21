"use client"

import { cn } from "@/lib/utils"
import { LucideIcon, Plus, Sparkles, ShoppingBag, Globe } from "lucide-react"
import { Instrument_Serif } from "next/font/google"
import { useEffect, useRef } from "react"
import { motion, useSpring, useTransform, useInView } from "motion/react"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
})

type aboutusData = {
  icon: LucideIcon
  title: string
  color: string
}[]

type statisticsCounter = {
  title: string
  count: number
}[]

const defaultAboutData: aboutusData = [
  {
    icon: Sparkles,
    title: "Premium Design",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShoppingBag,
    title: "Curated Style",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Globe,
    title: "Global Reach",
    color: "bg-primary/10 text-primary",
  },
]

const defaultStatsData: statisticsCounter = [
  {
    title: "Curated Collections",
    count: 150,
  },
  {
    title: "Happy Customers",
    count: 500,
  },
  {
    title: "Global Stores",
    count: 12,
  },
]

const AnimatedCounter = ({
  value,
  isInView,
}: {
  value: number
  isInView: boolean
}) => {
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  })

  const displayValue = useTransform(springValue, (current) =>
    Math.round(current)
  )

  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])

  return <motion.span>{displayValue}</motion.span>
}

const AboutUs = ({
  aboutusData = defaultAboutData,
  statisticsCounter = defaultStatsData,
}: {
  aboutusData?: aboutusData
  statisticsCounter?: statisticsCounter
}) => {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, margin: "-100px" })

  return (
    <section className="py-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <h2 className="text-center text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Crafting exceptional, well experienced & technology driven
              strategies to drive impactful results with
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
              {aboutusData.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-3 rounded-full px-6 py-2",
                    item.color
                  )}
                >
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                  <span
                    className={cn(
                      "text-4xl font-normal",
                      instrumentSerif.className
                    )}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          <div
            ref={statsRef}
            className="grid w-full grid-cols-1 gap-1 sm:grid-cols-3 sm:gap-0"
          >
            {statisticsCounter?.map((value, index) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center gap-3 px-6 py-5 sm:py-10"
                >
                  {index !== 0 && (
                    <div className="absolute top-1/2 left-0 hidden h-40 w-px -translate-y-1/2 bg-border sm:block" />
                  )}
                  <div className="flex gap-0 text-6xl font-medium sm:gap-2 sm:text-7xl md:text-8xl lg:text-9xl">
                    <Plus
                      strokeWidth={3.5}
                      className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12"
                    />
                    <AnimatedCounter value={value.count} isInView={isInView} />
                  </div>
                  <p className="text-center text-base font-normal text-muted-foreground">
                    {value.title}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
