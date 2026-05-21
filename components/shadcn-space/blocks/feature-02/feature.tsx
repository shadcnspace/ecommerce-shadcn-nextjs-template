import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Asterisk, LucideIcon, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Features = {
  icon: LucideIcon
  title: string
  content: string
}[]

const Feature = ({ featureData }: { featureData: Features }) => {
  return (
    <section>
      <div className="py-8 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col gap-8 md:gap-16">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4"
            >
              <Badge variant={"outline"} className="h-auto px-3 py-1 text-sm">
                Why Choose Us?
              </Badge>
              <h1 className="text-center text-3xl font-semibold tracking-[-1px] md:text-4xl">
                Why Shop With Nova Store? The Ultimate Online Shopping
                Experience
              </h1>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {featureData.map((value, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                      show: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                  >
                    <Card className="h-full border-t-4 border-t-transparent py-10 transition-all duration-300 hover:border-t-primary hover:shadow-lg">
                      <CardContent className="flex flex-col gap-6 px-8">
                        <value.icon
                          className="h-8 w-8 text-primary"
                          strokeWidth={1.2}
                        />
                        <div className="flex flex-col gap-3">
                          <h6 className="text-xl font-semibold">
                            {value.title}
                          </h6>
                          <p className="text-base font-normal text-muted-foreground">
                            {value.content}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col items-center justify-center gap-5"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Asterisk size={16} />
                <p className="text-sm font-normal">
                  Join thousands of happy customers today
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
                    Start Shopping
                  </span>
                  <span className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-40px)] group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
