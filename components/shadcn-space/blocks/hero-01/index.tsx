import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero"
import BrandSlider, {
  BrandList,
} from "@/components/shadcn-space/blocks/hero-01/brand-slider"
import type { AvatarList } from "@/components/shadcn-space/blocks/hero-01/hero"

export default function AgencyHeroSection() {
  const avatarList: AvatarList[] = [
    {
      image: "/assets/avatars/user-1.png",
    },
    {
      image: "/assets/avatars/user-2.png",
    },
    {
      image: "/assets/avatars/user-3.png",
    },
    {
      image: "/assets/avatars/user-4.png",
    },
  ]

  const brandList: BrandList[] = [
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-1.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-1.svg",
      name: "Vogue",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-2.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-2.svg",
      name: "GQ",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-3.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-3.svg",
      name: "Hypebeast",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-4.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-4.svg",
      name: "Highsnobiety",
    },
    {
      image: "https://images.shadcnspace.com/assets/brand-logo/logoipsum-5.svg",
      lightimg:
        "https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-5.svg",
      name: "Esquire",
    },
  ]

  return (
    <div className="relative">
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  )
}
