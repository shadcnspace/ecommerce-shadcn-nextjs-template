import { Sparkles, Leaf, ShieldCheck, Heart, ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"
import { Instrument_Serif } from "next/font/google"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
})

export const metadata: Metadata = {
  title: "About Us | Nova Store",
  description:
    "Discover the story behind Nova Store—a brand built on quality, minimalism, and the pursuit of timeless style.",
}

const VALUES = [
  {
    icon: Sparkles,
    title: "Timeless Design",
    description:
      "We believe in products that transcend trends. Our designs are focused on longevity and classic aesthetics.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "From our materials to our packaging, we prioritize the planet without compromising on luxury.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Every item in our collection is rigorously tested for durability and excellence.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your experience is our priority. We offer dedicated support and a seamless shopping journey.",
  },
]

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero Section - Brand Story */}
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/about/hero.png"
            alt="Nova Store Brand Story"
            className="h-full w-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4 text-center text-white">
          <h1 className="mb-6 text-5xl font-medium tracking-tight md:text-7xl">
            Redefining{" "}
            <span className={instrumentSerif.className}>Modern Luxury</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl font-light opacity-90 md:text-2xl">
            Nova Store was founded on a simple principle: high-quality
            essentials shouldn't be complicated.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-16">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-4xl font-medium tracking-tight text-foreground">
              Our Mission is to <br />
              <span className="text-primary italic">Simplify Your Style.</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Since 2024, Nova Store has been curated with a focus on minimalist
              aesthetics and maximum impact. We partner with the world's finest
              artisans to bring you products that are as functional as they are
              beautiful.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We don't just sell products; we offer a lifestyle of
              intentionality. Every piece in our collection is chosen to serve a
              purpose and last a lifetime.
            </p>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/assets/about/quality.png"
              alt="Our Mission"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 px-4 py-24 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium tracking-tight">
              The Nova Philosophy
            </h2>
            <p className="text-muted-foreground">
              What drives us every single day.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/50 bg-background p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="size-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-medium">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 text-center">
        <div className="mx-auto max-w-2xl space-y-8">
          <h2 className="text-4xl font-medium">
            Ready to experience <br />
            the difference?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of others who have simplified their style with Nova
            Store.
          </p>
          <div className="pt-4">
            <Link href="/shop">
              <Button
                className={cn(
                  "group relative h-12 w-fit overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6",
                  "cursor-pointer"
                )}
              >
                <span className="relative z-10 transition-all duration-500">
                  Explore the Collection
                </span>
                <span className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
