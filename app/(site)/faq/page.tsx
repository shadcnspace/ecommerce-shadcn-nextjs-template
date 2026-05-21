"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Mail,
  MessageSquare,
  Phone,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react"
import { Instrument_Serif } from "next/font/google"
import { cn } from "@/lib/utils"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
})

const FAQ_CATEGORIES = [
  {
    id: "shipping",
    title: "Shipping & Delivery",
    icon: Truck,
    questions: [
      {
        q: "How long will my order take to arrive?",
        a: "Standard shipping typically takes 3-5 business days. Express shipping takes 1-2 business days. International delivery times vary by location but usually range from 7-14 business days.",
      },
      {
        q: "Do you offer international shipping?",
        a: "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times will be calculated at checkout based on your location.",
      },
      {
        q: "How can I track my order?",
        a: "Once your order ships, you will receive an email with a tracking number and a link to our tracking portal. You can also view your order status in your account dashboard.",
      },
    ],
  },
  {
    id: "returns",
    title: "Returns & Exchanges",
    icon: RotateCcw,
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day hassle-free return policy. Items must be in their original condition, unworn, and with all tags attached. Returns within the US are free.",
      },
      {
        q: "How do I start a return?",
        a: "Visit our Returns Portal and enter your order number and email address. Follow the steps to print your pre-paid shipping label.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & Security",
    icon: ShieldCheck,
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay.",
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely. We use industry-standard SSL encryption and a secure payment gateway to ensure your information is protected at all times. We never store your credit card details.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-20 space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
            How can we{" "}
            <span className={cn("italic", instrumentSerif.className)}>
              help
            </span>{" "}
            you?
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about our premium services, shipping
            policies, and more.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-16">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.id} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-muted p-2 text-primary">
                  <category.icon className="size-6" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {category.title}
                </h2>
              </div>

              <Accordion
                defaultValue={["item-1", "item-2"]}
                className="w-full space-y-4"
              >
                {category.questions.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${category.id}-${idx}`}
                    className="rounded-2xl border border-border/60 bg-card px-6 transition-all hover:border-primary/20 hover:shadow-sm"
                  >
                    <AccordionTrigger className="py-6 text-left text-lg font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                      <div className="group flex w-full items-center justify-between">
                        <span className="transition-colors group-hover:text-primary">
                          {item.q}
                        </span>
                        <ChevronRight className="size-5 shrink-0 transition-transform duration-300 group-aria-expanded:rotate-90" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 leading-relaxed text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Support CTA Redesign */}
        <section className="group relative mt-32 overflow-hidden rounded-[3rem] border border-border/50 bg-muted/30 p-8 md:p-16">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -z-10 size-96 bg-primary/5 blur-[100px] transition-all duration-1000 group-hover:bg-primary/10" />

          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-medium tracking-tight md:text-5xl xl:text-6xl">
                  Still have <br />
                  <span
                    className={cn("text-primary", instrumentSerif.className)}
                  >
                    questions?
                  </span>
                </h2>
                <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
                  Can't find the answer you're looking for? Our dedicated team
                  is here to assist you with every step of your journey.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="size-10 overflow-hidden rounded-full border-2 border-background bg-muted"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Team member"
                        className="size-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium">
                  <span className="font-bold text-primary">24/7</span> Expert
                  support available
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-1">
              <div className="group/card rounded-[2rem] border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                  <Mail className="size-6" />
                </div>
                <h4 className="mb-2 text-lg font-bold">Email Support</h4>
                <p className="mb-6 text-sm text-muted-foreground">
                  Detailed inquiries and assistance.
                </p>
                <a
                  href="mailto:support@novastore.com"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-primary"
                >
                  Email Us <ArrowUpRight className="size-4" />
                </a>
              </div>

              <div className="group/card rounded-[2rem] border border-border/60 bg-background p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                  <MessageSquare className="size-6" />
                </div>
                <h4 className="mb-2 text-lg font-bold">Live Chat</h4>
                <p className="mb-6 text-sm text-muted-foreground">
                  Real-time answers to your questions.
                </p>
                <button className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold transition-colors hover:text-primary">
                  Start Chat <ArrowUpRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
