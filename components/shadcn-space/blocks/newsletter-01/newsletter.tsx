import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Newsletter() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-20 lg:px-8">
        <div className="relative overflow-hidden bg-teal-400/20 py-24">
          <img
            src="https://images.shadcnspace.com/assets/svgs/newsletter-flake.svg"
            alt="newsletter-flake"
            className="absolute -top-2/4 right-0 -z-1 h-80 w-80 animate-spin [animation-duration:3000ms]"
          />
          <div className="relative z-0 flex flex-col gap-10">
            <div className="flex flex-col gap-6 text-center">
              <h2 className="animate-in text-3xl font-semibold delay-100 duration-1000 ease-in-out fill-mode-both slide-in-from-bottom-10 fade-in sm:text-5xl">
                Get 10% Off Your First Order
              </h2>
              <p className="mx-auto max-w-xl animate-in text-base text-muted-foreground delay-200 duration-1000 ease-in-out fill-mode-both slide-in-from-bottom-10 fade-in">
                Subscribe to our newsletter to receive exclusive offers, early
                access to sales, and the latest style updates directly to your
                inbox.
              </p>
            </div>
            <InputGroup className="mx-auto flex h-auto w-full max-w-xl animate-in items-center gap-6 overflow-hidden rounded-full bg-background! delay-300 duration-1000 ease-in-out fill-mode-both slide-in-from-bottom-10 fade-in">
              <InputGroupInput
                type="email"
                placeholder="Email address"
                className="ps-8"
              />
              <InputGroupAddon align="inline-end" className="py-2 pe-2.5">
                <Button
                  className={cn(
                    "group relative h-11 w-fit overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 hover:ps-14 hover:pe-6",
                    "cursor-pointer"
                  )}
                >
                  <span className="relative z-10 transition-all duration-500">
                    Subscribe
                  </span>
                  <span className="absolute right-1 flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <img
            src="https://images.shadcnspace.com/assets/svgs/newsletter-flake.svg"
            alt="newsletter-flake"
            className="absolute top-1/3 -z-1 animate-spin [animation-duration:3500ms]"
          />
        </div>
      </div>
    </section>
  )
}
