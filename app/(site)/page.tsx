import type { Metadata } from "next"
import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01/index"
import LogoCloudDemo from "@/components/shadcn-space/blocks/logo-cloud-01/logo-cloud"
import ProductCategory from "@/components/shadcn-space/blocks/product-category-02/product-category"
import ProductListing from "@/components/shadcn-space/blocks/product-listing-01/index"
import Feature02 from "@/components/shadcn-space/blocks/feature-02/index"
import Testimonials from "@/components/shadcn-space/blocks/testimonial-01/testimonial"
import Newsletter from "@/components/shadcn-space/blocks/newsletter-01/newsletter"

import { PRODUCTS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Nova Store | Home",
  description: "Welcome to Nova Store. Find the latest trends in fashion and electronics with free shipping worldwide.",
}

export default function Page() {
  return (
    <main>
      <AgencyHeroSection />
      {/* <LogoCloudDemo /> */}
      <ProductCategory />
      <ProductListing products={PRODUCTS} />
      <Feature02 />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
