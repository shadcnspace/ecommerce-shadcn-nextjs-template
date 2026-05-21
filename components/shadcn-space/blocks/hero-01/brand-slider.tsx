"use client"
import { Marquee } from "@/components/shadcn-space/animations/marquee"
import { motion } from "motion/react"

export interface BrandList {
  image: string
  name: string
  lightimg: string
}

function BrandSlider({ brandList }: { brandList: BrandList[] }) {
  return (
    <section>
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="relative flex justify-center py-3 text-center md:py-4">
              <div className="flex items-center justify-center gap-4">
                <div className="hidden h-0.5 w-40 bg-linear-to-l from-muted-foreground to-white opacity-20 md:block dark:from-muted-foreground dark:to-transparent" />
                <p className="px-10 text-center text-sm font-normal text-muted-foreground sm:px-2">
                  Loved by 1000+ big and small brands around the worlds
                </p>
                <div className="hidden h-0.5 w-40 bg-linear-to-r from-muted-foreground to-white opacity-20 md:block dark:from-muted-foreground dark:to-transparent" />
              </div>
            </div>
            {brandList && brandList.length > 0 && (
              <div className="px-2">
                <Marquee pauseOnHover className="p-0 [--duration:20s]">
                  {brandList.map((brand, index) => (
                    <div key={index}>
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="mr-6 h-8 w-36 lg:mr-20 dark:hidden"
                      />
                      <img
                        src={brand.lightimg}
                        alt={brand.name}
                        className="mr-12 hidden h-8 w-36 lg:mr-20 dark:block"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrandSlider
