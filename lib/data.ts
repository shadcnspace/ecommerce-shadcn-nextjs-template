export interface Product {
  id: string
  slug: string
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  description: string
  details?: string[]
  discount?: number
  sizes?: { name: string; price: number; outOfStock?: boolean }[]
  accordionInfo?: { title: string; content: string }[]
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "nova-minimalist-watch",
    name: "Nova Minimalist Watch",
    category: "Accessories",
    price: 684,
    originalPrice: 855,
    rating: 4.5,
    reviews: 105,
    image: "/assets/product/watch-1.png",
    description:
      "A sleek, minimalist timepiece designed for the modern professional. Features a genuine leather strap and a scratch-resistant sapphire crystal face.",
    details: [
      "/assets/product/watch-2.png",
      "/assets/shop/category-accessories.png",
    ],
    discount: 20,
    sizes: [
      { name: "38mm", price: 684 },
      { name: "42mm", price: 720 },
    ],
    accordionInfo: [
      {
        title: "Material & Care",
        content: "Genuine leather strap. Water resistant up to 50m.",
      },
      { title: "Shipping", content: "Free shipping worldwide." },
    ],
  },
  {
    id: "2",
    slug: "signature-cotton-trench",
    name: "Signature Cotton Trench",
    category: "Apparel",
    price: 479,
    originalPrice: 599,
    rating: 4.8,
    reviews: 124,
    image: "/assets/product/trench-1.png",
    description:
      "A timeless classic redefined for the modern trendsetter. This cotton trench coat features a minimalist design with premium stitching.",
    details: [
      "/assets/product/trench-2.png",
      "/assets/shop/category-apparel.png",
    ],
    discount: 15,
    sizes: [
      { name: "S", price: 479 },
      { name: "M", price: 479 },
      { name: "L", price: 479 },
    ],
    accordionInfo: [
      {
        title: "Material & Care",
        content: "100% Organic Cotton. Dry clean only.",
      },
      { title: "Shipping", content: "Free shipping worldwide." },
    ],
  },
  {
    id: "3",
    slug: "radiance-night-serum",
    name: "Radiance Night Serum",
    category: "Skincare",
    price: 46,
    originalPrice: 55,
    rating: 4.5,
    reviews: 89,
    image: "/assets/product/serum-1.png",
    description:
      "Rejuvenate your skin overnight with our Radiance Night Serum. Infused with hyaluronic acid and vitamin C.",
    details: ["/assets/avatars/user-1.png"],
    discount: 10,
    sizes: [
      { name: "30ml", price: 46 },
      { name: "50ml", price: 65 },
    ],
    accordionInfo: [
      {
        title: "How to use",
        content: "Apply 2-3 drops to clean skin before bedtime.",
      },
      {
        title: "Ingredients",
        content: "Hyaluronic Acid, Vitamin C, Aloe Vera.",
      },
    ],
  },
  {
    id: "4",
    slug: "nova-premium-headphones",
    name: "Nova Premium Headphones",
    category: "Audio",
    price: 279,
    originalPrice: 349,
    rating: 4.9,
    reviews: 210,
    image: "/assets/shop/category-electronics.png",
    description:
      "Industry-leading noise cancellation and superior sound quality. The Nova Premium Headphones offer up to 30 hours of battery life.",
    details: [
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-03-4.webp",
      "/assets/product/lifestyle.png",
    ],
    discount: 20,
    sizes: [{ name: "Standard", price: 279 }],
    accordionInfo: [
      {
        title: "Features",
        content: "Active Noise Cancellation, Bluetooth 5.0, 30h battery life.",
      },
      {
        title: "What's in the box",
        content: "Headphones, Carrying case, USB-C cable.",
      },
    ],
  },
  {
    id: "5",
    slug: "premium-leather-wallet",
    name: "Premium Leather Wallet",
    category: "Accessories",
    price: 89,
    originalPrice: 110,
    rating: 4.7,
    reviews: 45,
    image: "/assets/shop/category-accessories.png",
    description:
      "Handcrafted from top-grain leather, this minimalist wallet features RFID protection and enough room for your daily essentials.",
    details: [
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-02-3.webp",
      "/assets/avatars/user-3.png",
    ],
    discount: 19,
    sizes: [{ name: "One Size", price: 89 }],
  },
  {
    id: "6",
    slug: "urban-utility-backpack",
    name: "Urban Utility Backpack",
    category: "Bags",
    price: 159,
    originalPrice: 199,
    rating: 4.6,
    reviews: 67,
    image: "/assets/shop/category-bags.png",
    description:
      "Designed for the modern commuter, this weather-resistant backpack features a padded laptop sleeve and multiple organizational pockets.",
    details: [
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-04-4.webp",
      "/assets/product/lifestyle.png",
    ],
    discount: 20,
    sizes: [{ name: "Standard", price: 159 }],
  },
  {
    id: "7",
    slug: "essential-linen-shirt",
    name: "Essential Linen Shirt",
    category: "Apparel",
    price: 75,
    originalPrice: 95,
    rating: 4.4,
    reviews: 32,
    image: "/assets/shop/category-apparel.png",
    description:
      "Stay cool and comfortable with our breathable linen shirt. Perfect for warm days and casual outings.",
    details: [
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-02-2.webp",
      "/assets/about/hero.png",
    ],
    discount: 21,
    sizes: [
      { name: "S", price: 75 },
      { name: "M", price: 75 },
      { name: "L", price: 75 },
    ],
  },
  {
    id: "8",
    slug: "smart-home-hub",
    name: "Smart Home Hub",
    category: "Electronics",
    price: 129,
    originalPrice: 159,
    rating: 4.8,
    reviews: 112,
    image: "/assets/shop/category-electronics.png",
    description:
      "Control your entire home with ease using the Nova Smart Home Hub. Compatible with all your favorite smart devices.",
    details: [
      "https://images.shadcnspace.com/assets/ecommerce/product-category/product-category-04-3.webp",
      "/assets/product/craftsmanship.png",
    ],
    discount: 18,
    sizes: [{ name: "Standard", price: 129 }],
  },
  {
    id: "9",
    slug: "tailored-minimalist-trouser",
    name: "Tailored Minimalist Trouser",
    category: "Apparel",
    price: 145,
    originalPrice: 185,
    rating: 4.7,
    reviews: 42,
    image: "/assets/product/trouser-1.png",
    description:
      "Premium tailored trousers with a minimalist silhouette. Crafted from high-quality neutral stone fabric for a sophisticated look.",
    details: ["/assets/product/detail-trouser-1.png"],
    discount: 22,
    sizes: [
      { name: "S", price: 145 },
      { name: "M", price: 145 },
      { name: "L", price: 145 },
    ],
  },
  {
    id: "10",
    slug: "minimalist-gold-bracelet",
    name: "Minimalist Gold Bracelet",
    category: "Accessories",
    price: 210,
    originalPrice: 250,
    rating: 4.9,
    reviews: 56,
    image: "/assets/product/bracelet-1.png",
    description:
      "An elegant gold bracelet featuring a minimalist design. Perfect for adding a touch of luxury to any outfit.",
    details: ["/assets/product/detail-bracelet-1.png"],
    discount: 16,
    sizes: [{ name: "One Size", price: 210 }],
  },
  {
    id: "11",
    slug: "delicate-gold-necklace",
    name: "Delicate Gold Necklace",
    category: "Accessories",
    price: 185,
    originalPrice: 220,
    rating: 4.8,
    reviews: 38,
    image: "/assets/product/necklace-1.png",
    description:
      "A delicate minimalist necklace crafted from premium gold. A timeless piece for the modern jewelry collection.",
    details: ["/assets/product/detail-necklace-1.png"],
    discount: 16,
    sizes: [{ name: "One Size", price: 185 }],
  },
  {
    id: "12",
    slug: "nova-phone-pro",
    name: "Nova Phone Pro",
    category: "Electronics",
    price: 999,
    originalPrice: 1099,
    rating: 4.9,
    reviews: 342,
    image: "/assets/product/phone-1.png",
    description:
      "The ultimate modern smartphone with a sleek minimalist design and powerful performance capabilities.",
    details: ["/assets/product/detail-phone-1.png"],
    discount: 9,
    sizes: [
      { name: "128GB", price: 999 },
      { name: "256GB", price: 1199 },
    ],
  },
  {
    id: "13",
    slug: "nova-air-earbuds",
    name: "Nova Air Earbuds",
    category: "Electronics",
    price: 159,
    originalPrice: 199,
    rating: 4.7,
    reviews: 156,
    image: "/assets/product/earbuds-1.png",
    description:
      "Premium wireless earbuds with industry-leading sound quality and a sleek charging case.",
    details: ["/assets/product/detail-earbuds-1.png"],
    discount: 20,
    sizes: [{ name: "Standard", price: 159 }],
  },
  {
    id: "14",
    slug: "premium-leather-tote",
    name: "Premium Leather Tote",
    category: "Bags",
    price: 245,
    originalPrice: 299,
    rating: 4.8,
    reviews: 84,
    image: "/assets/product/bag-1.png",
    description:
      "A sophisticated leather tote bag designed for daily functionality and timeless style.",
    details: ["/assets/product/detail-bag-1.png"],
    discount: 18,
    sizes: [{ name: "One Size", price: 245 }],
  },
  {
    id: "15",
    slug: "minimalist-crossbody-bag",
    name: "Minimalist Crossbody Bag",
    category: "Bags",
    price: 125,
    originalPrice: 155,
    rating: 4.6,
    reviews: 47,
    image: "/assets/product/bag-2.png",
    description:
      "Sleek and functional, this minimalist crossbody bag is the perfect companion for the urban lifestyle.",
    details: ["/assets/product/lifestyle.png"],
    discount: 19,
    sizes: [{ name: "One Size", price: 125 }],
  },
  {
    id: "16",
    slug: "pure-essence-facewash",
    name: "Pure Essence Facewash",
    category: "Skincare",
    price: 32,
    originalPrice: 40,
    rating: 4.7,
    reviews: 92,
    image: "/assets/product/facewash-1.png",
    description:
      "A premium minimalist facewash that gently cleanses and rejuvenates for a radiant complexion.",
    details: ["/assets/avatars/user-3.png"],
    discount: 20,
    sizes: [{ name: "150ml", price: 32 }],
  },
  {
    id: "17",
    slug: "ultra-hydrating-cream",
    name: "Ultra Hydrating Cream",
    category: "Skincare",
    price: 48,
    originalPrice: 60,
    rating: 4.8,
    reviews: 76,
    image: "/assets/product/facewash-1.png",
    description:
      "Deeply hydrating cream with minimalist packaging and high-fidelity skincare ingredients.",
    details: ["/assets/avatars/user-1.png"],
    discount: 20,
    sizes: [{ name: "50ml", price: 48 }],
  },
  {
    id: "18",
    slug: "nova-audio-earbuds",
    name: "Nova Audio Earbuds",
    category: "Audio",
    price: 129,
    originalPrice: 159,
    rating: 4.6,
    reviews: 88,
    image: "/assets/product/earbuds-1.png",
    description:
      "Professional-grade audio earbuds featuring superior sound design and premium build quality.",
    details: ["/assets/product/detail-earbuds-1.png"],
    discount: 18,
    sizes: [{ name: "Standard", price: 129 }],
  },
  {
    id: "19",
    slug: "premium-wired-earphones",
    name: "Premium Wired Earphones",
    category: "Audio",
    price: 85,
    originalPrice: 110,
    rating: 4.5,
    reviews: 54,
    image: "/assets/product/earbuds-1.png",
    description:
      "High-fidelity wired earphones with a minimalist design for pure audio enjoyment.",
    details: ["/assets/product/detail-earbuds-1.png"],
    discount: 22,
    sizes: [{ name: "Standard", price: 85 }],
  },
]
