import { Marquee } from "@/components/shadcn-space/animations/marquee";

type BrandList = {
  image: string;
  lightimg: string;
  name: string;
};

const LogoCloudDemo = () => {
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
  ];

  return (
    <>
      <div className="lg:py-20 sm:py-16 py-8 relative overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] p-0">
          {brandList.map((brand, index) => (
            <div key={index}>
              <img
                src={brand.image}
                alt={brand.name}
                className="w-36 h-8 mr-6 lg:mr-20 dark:hidden"
              />
              <img
                src={brand.lightimg}
                alt={brand.name}
                className="hidden dark:block w-36 h-8 mr-12 lg:mr-20"
              />
            </div>
          ))}
        </Marquee>

        {/* Left blur */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />

        {/* Right blur */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
      </div>
    </>
  );
};

export default LogoCloudDemo;
