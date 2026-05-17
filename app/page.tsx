"use client";

import { HeroSectionDemo } from "@/app/components/HeroSectionDemo";
import { Navbar } from "@/app/components/Navbar";
import dynamic from "next/dynamic";

const SectionsShowcase = dynamic(() => import("@/app/components/SectionsShowcase").then(mod => mod.SectionsShowcase), { ssr: true });
const ParaQuemESection = dynamic(() => import("@/app/components/ParaQuemESection").then(mod => mod.ParaQuemESection), { ssr: true });
const ParaVoceSection = dynamic(() => import("./components/ParaVoceSection").then(mod => mod.ParaVoceSection), { ssr: true });
const BonusSection = dynamic(() => import("@/app/components/BonusSection").then(mod => mod.BonusSection), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/app/components/TestimonialsSection").then(mod => mod.TestimonialsSection), { ssr: true });
const PremiumPricingSection = dynamic(() => import("@/app/components/PremiumPricingSection").then(mod => mod.PremiumPricingSection), { ssr: true });
const TestimonialsCTA = dynamic(() => import("./components/TestimonialsCTA").then(mod => mod.TestimonialsCTA), { ssr: true });

const GuaranteeSection = dynamic(() => import("@/app/components/GuaranteeSection"), { ssr: true });
const FaqSection = dynamic(() => import("@/app/components/FaqSection"), { ssr: true });
const FinalCtaSection = dynamic(() => import("@/app/components/FinalCtaSection"), { ssr: true });
const Footer = dynamic(() => import("@/app/components/Footer"), { ssr: true });

const TextureOverlay = dynamic(
  () => import("@/app/components/TextureOverlay").then(mod => mod.TextureOverlay),
  { ssr: false }
);



export default function Page() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />

      {/* Fixed Grid Overlay that fades in after Hero */}
      <TextureOverlay />

      {/* Hero Section - Elevated z-index to ensure visibility over any background grid */}
      <div className="relative z-10">
        <HeroSectionDemo />
      </div>

      {/* Subsequent Sections - Standard relative z-10 */}
      <div className="relative z-10 bg-transparent">
        <SectionsShowcase />
        
        <ParaVoceSection />
        <ParaQuemESection />
        <BonusSection />
        <TestimonialsSection />
        <TestimonialsCTA />
        <PremiumPricingSection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCtaSection />

        <Footer />
      </div>
    </main>
  );
}
