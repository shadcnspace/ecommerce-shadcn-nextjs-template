import Contact from "@/components/shadcn-space/blocks/contact-01/index";
import FAQ from "@/components/shadcn-space/blocks/faq-01/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Nova Store",
    description: "Get in touch with Nova Store for support, inquiries, or feedback.",
};

export default function ContactPage() {
    return (
        <main>
            {/* Contact Hero */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/assets/contact/hero.png" 
                        alt="Contact Nova Store" 
                        className="w-full h-full object-cover brightness-75"
                    />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-2">
                        How can we help?
                    </h1>
                    <p className="text-lg opacity-90 max-w-xl mx-auto">
                        Whether you have a question about our collections or need help with an order, our team is here for you.
                    </p>
                </div>
            </section>

            <div className="pt-10">
                <Contact />
            </div>
            <div className="py-20 border-t">
                <FAQ />
            </div>
        </main>
    );
}
