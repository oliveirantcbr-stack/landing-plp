"use client";

import { HeroSectionDemo } from "@/app/components/HeroSectionDemo";
import { SectionsShowcase } from "@/app/components/SectionsShowcase";
import { ParaQuemESection } from "@/app/components/ParaQuemESection";
import { ParaVoceSection } from "./components/ParaVoceSection";
import { BonusSection } from "@/app/components/BonusSection";
import { TestimonialsSection } from "@/app/components/TestimonialsSection";
import dynamic from "next/dynamic";
import PricingSection from "@/app/components/PricingSection";
import GuaranteeSection from "@/app/components/GuaranteeSection";
import FaqSection from "@/app/components/FaqSection";
import FinalCtaSection from "@/app/components/FinalCtaSection";
import Footer from "@/app/components/Footer";




// IMPORTAÇÃO CORRETA DA GALERIA (CLIENT ONLY)
const ArcGallerySection = dynamic(
  () => import("@/app/components/ArcGallerySection").then(mod => mod.ArcGallerySection),
  { ssr: false }
);

export default function Page() {
  return (
    <main>
      <HeroSectionDemo />
      <SectionsShowcase />
      <ParaVoceSection />   
      <ParaQuemESection />
      <BonusSection />
      <TestimonialsSection />
      {/* Agora NÃO causa hydration mismatch */}
      <ArcGallerySection />
      <PricingSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />

    </main>
  );
}
