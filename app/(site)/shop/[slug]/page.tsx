import ProductOverview from "@/components/shadcn-space/blocks/product-overview-04/product-overview"
import ProductListing from "@/components/shadcn-space/blocks/product-listing-01/index"
import { PRODUCTS } from "@/lib/data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Instrument_Serif } from "next/font/google"
import { Star, ShieldCheck, Leaf, Globe, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
})

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    return {
      title: "Product Not Found | Nova Store",
    }
  }

  return {
    title: `${product.name} | Nova Store`,
    description: product.description,
  }
}

const REVIEWS = [
  {
    name: "Sarah Johnson",
    date: "October 12, 2024",
    rating: 5,
    title: "Absolutely stunning quality",
    content:
      "The attention to detail on this piece is incredible. The fabric feels substantial yet soft, and the fit is exactly as described. Truly a premium experience that sets a new standard for my wardrobe.",
    hasImage: true,
  },
  {
    name: "Michael Chen",
    date: "September 28, 2024",
    rating: 5,
    title: "Minimalist perfection",
    content: "Exactly what I was looking for. Simple, elegant, and functional.",
  },
  {
    name: "Elena Rodriguez",
    date: "September 15, 2024",
    rating: 4,
    title: "Great addition",
    content: "Love the aesthetic and the craftsmanship. Highly recommended!",
    // hasImage: true,
  },
  {
    name: "Sophia Williams",
    date: "August 22, 2024",
    rating: 4,
    title: "The perfect gift",
    content:
      "Bought this as a gift and it was a huge hit. Beautifully packaged.",
  },
  {
    name: "David Smith",
    date: "August 30, 2024",
    rating: 5,
    title: "Exceeded expectations",
    content:
      "I was hesitant to order at first, but I am so glad I did. The quality is top-tier and the design is timeless. It fits perfectly into my minimalist lifestyle. The customer service team was also very helpful with my sizing questions.",
    hasImage: true,
  },
  {
    name: "James Wilson",
    date: "August 10, 2024",
    rating: 5,
    title: "Quality you can feel",
    content:
      "You can immediately tell that these aren't mass-produced items. There's a weight and a texture to the fabric that just screams luxury. Highly recommended for anyone who values quality over quantity.",
  },
  {
    name: "Isabella Martinez",
    date: "July 25, 2024",
    rating: 4,
    title: "Beautiful design",
    content: "A very thoughtful design. It took a few days longer to arrive.",
  },
  {
    name: "Liam Thompson",
    date: "July 12, 2024",
    rating: 5,
    title: "My new daily essential",
    content:
      "This has quickly become my most-used item. It's versatile enough for any occasion and the comfort is unmatched. I'll be ordering more colors soon!",
    hasImage: true,
  },
]

const FEATURES = [
  { icon: Leaf, title: "Eco-Conscious", desc: "Sustainably sourced materials" },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Rigorous quality control",
  },
  { icon: Globe, title: "Global Shipping", desc: "Fast & secure delivery" },
]

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const overviewData = {
    brand: "NOVA PREMIUM",
    title: product.name,
    rating: product.rating,
    reviewCount: product.reviews,
    description: product.description,
    discount: product.discount,
    sizes: product.sizes || [{ name: "Standard", price: product.price }],
    images: {
      main: product.image,
      details: product.details || [],
    },
    accordionInfo: product.accordionInfo || [
      {
        title: "Material & Care",
        content:
          "Crafted from 100% premium materials. We recommend professional cleaning to maintain the integrity of the fibers and structure.",
      },
      {
        title: "Shipping & Returns",
        content:
          "Free express shipping on orders over $150. Easy 30-day returns for all unused items in original packaging.",
      },
    ],
  }

  return (
    <main className="bg-background">
      <div className="pt-20">
        <ProductOverview product={overviewData} />

        {/* Bespoke Reviews Section */}
        <section className="bg-muted/30 px-4 py-24 sm:px-6 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">
                  Customer Experiences
                </h2>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {product.rating} Based on {product.reviews} reviews
                  </span>
                </div>
              </div>
              <button className="h-12 rounded-full border border-border bg-background px-8 text-sm font-medium shadow-sm transition-all hover:bg-muted">
                Write a Review
              </button>
            </div>

            <div className="columns-1 gap-8 [column-fill:_balance] md:columns-2 lg:columns-3">
              {REVIEWS.map((review, i) => (
                <div
                  key={i}
                  className="mb-8 break-inside-avoid space-y-5 rounded-2xl border border-border/50 bg-background p-8 transition-all hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="text-base leading-tight font-medium">
                        {review.name}
                      </h4>
                      <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase opacity-60">
                        {review.date}
                      </p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="size-3 fill-orange-400 text-orange-400"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {(review as any).hasImage && (
                      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                        <img
                          src={product.image}
                          alt="Review product"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    )}
                    <h5 className="text-xl leading-tight font-semibold tracking-tight">
                      &quot;{review.title}&quot;
                    </h5>
                    <p className="text-base leading-relaxed font-normal text-muted-foreground">
                      {review.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t py-12">
          <ProductListing
            title="Related Products"
            description="You might also like these curated pieces"
            products={PRODUCTS.filter((p) => p.slug !== slug).slice(0, 4)}
          />
        </div>
        {/* Cinematic Lifestyle Showcase */}
        <section className="overflow-hidden px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="group relative aspect-[21/9] overflow-hidden rounded-[2rem]">
              <img
                src="/assets/product/lifestyle.png"
                alt="Lifestyle Showcase"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 p-8 text-center text-white">
                <h2
                  className={cn(
                    "mb-4 max-w-3xl text-4xl md:text-7xl",
                    instrumentSerif.className
                  )}
                >
                  Designed for the <span className="italic">intentional</span>{" "}
                  life.
                </h2>
                <p className="text-sm font-light tracking-[0.2em] uppercase opacity-90 md:text-base">
                  The Nova Signature Series
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
