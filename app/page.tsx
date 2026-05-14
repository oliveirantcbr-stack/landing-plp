"use client";

import { HeroSectionDemo } from "@/app/components/HeroSectionDemo";
import { SectionsShowcase } from "@/app/components/SectionsShowcase";
import { ParaQuemESection } from "@/app/components/ParaQuemESection";
import { ParaVoceSection } from "./components/ParaVoceSection";
import { BonusSection } from "@/app/components/BonusSection";
import { TestimonialsSection } from "@/app/components/TestimonialsSection";
import dynamic from "next/dynamic";
import { PremiumPricingSection } from "@/app/components/PremiumPricingSection";
import GuaranteeSection from "@/app/components/GuaranteeSection";
import FaqSection from "@/app/components/FaqSection";
import FinalCtaSection from "@/app/components/FinalCtaSection";
import Footer from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import { TestimonialsCTA } from "./components/TestimonialsCTA";
const TextureOverlay = dynamic(
  () => import("@/app/components/TextureOverlay").then(mod => mod.TextureOverlay),
  { ssr: false }
);



export default function Page() {
  return (
    <main className="bg-black min-h-screen">
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
