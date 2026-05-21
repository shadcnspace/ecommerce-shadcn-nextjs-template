"use client"

import { Instrument_Serif } from "next/font/google"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
})

export type AvatarList = {
  image: string
}

type HeroSectionProps = {
  avatarList: AvatarList[]
}

function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section>
      <div className="relative h-full w-full">
        <div className="relative w-full pt-0 pb-6 before:absolute before:top-24 before:-z-10 before:h-full before:w-full before:rounded-full before:bg-linear-to-r before:from-sky-100 before:via-white before:to-amber-100 before:blur-3xl md:pt-20 md:pb-10 dark:before:-z-10 dark:before:rounded-full dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:blur-3xl">
          <div className="relative z-10 container mx-auto">
            <div className="mx-auto flex max-w-5xl flex-col gap-8">
              <div className="relative flex flex-col items-center gap-4 text-center sm:gap-6">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="text-5xl leading-14 font-medium md:text-7xl md:leading-20 lg:text-8xl lg:leading-24"
                >
                  Modern Style and Living{" "}
                  <span
                    className={`${instrumentSerif.className} tracking-tight`}
                  >
                    , For Every Day
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className="max-w-2xl text-base font-normal text-muted-foreground"
                >
                  Discover Nova Store's exclusive collection of high-quality
                  apparel, luxury accessories, and smart tech. Enjoy free global
                  shipping and elevate your everyday look with the best
                  lifestyle products online.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center gap-8 md:flex-row"
              >
                <Button className="group relative h-12 w-fit cursor-pointer overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6">
                  <span className="relative z-10 transition-all duration-500">
                    Shop Now
                  </span>
                  <span className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-40px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </Button>
                <div className="flex items-center gap-3 sm:gap-7">
                  <ul className="avatar flex flex-row items-center">
                    {avatarList.map((avatar, index) => (
                      <li key={index} className="avatar-hover:ml-2 z-1 -mr-2">
                        <img
                          src={avatar.image}
                          alt="Avatar"
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-border"
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <img
                          key={index}
                          src="https://images.shadcnspace.com/assets/svgs/icon-star.svg"
                          alt="star"
                          className="h-full w-full"
                        />
                      ))}
                    </div>
                    <p className="text-xs font-normal text-muted-foreground sm:text-sm">
                      Trusted by 10,000+ happy customers
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
