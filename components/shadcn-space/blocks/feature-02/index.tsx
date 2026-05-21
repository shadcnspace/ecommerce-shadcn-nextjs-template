"use client";
import Feature from "@/components/shadcn-space/blocks/feature-02/feature";
import {
    Truck,
    ShieldCheck,
    Headset,
} from "lucide-react"

const featureData = [
    {
      icon: Truck,
      title: "Free & Fast Shipping",
      content: "Enjoy free shipping on all orders over $50. We partner with the best carriers to get your items to you quickly and safely.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      content: "Shop with confidence knowing that your transactions are 100% secure. We accept all major credit cards and PayPal.",
    },
    {
      icon: Headset,
      title: "24/7 Customer Support",
      content: "Our dedicated support team is here to help you around the clock. Whether you have a question about an item or need help with a return.",
    }
];

const Feature02 = () => {
  return (
    <>
      <Feature featureData={featureData} />
    </>
  );
};

export default Feature02;
