"use client";

import React, { lazy } from "react";
import { HeroSectionDemo } from "@/app/components/HeroSectionDemo";
import { Navbar } from "@/app/components/Navbar";
import dynamic from "next/dynamic";
import { LazySection } from "@/app/components/LazySection";

const SectionsShowcase = lazy(() => import("@/app/components/SectionsShowcase").then(mod => ({ default: mod.SectionsShowcase })));
const ParaQuemESection = lazy(() => import("@/app/components/ParaQuemESection").then(mod => ({ default: mod.ParaQuemESection })));
const ParaVoceSection = lazy(() => import("./components/ParaVoceSection").then(mod => ({ default: mod.ParaVoceSection })));
const BonusSection = lazy(() => import("@/app/components/BonusSection").then(mod => ({ default: mod.BonusSection })));
const TestimonialsSection = lazy(() => import("@/app/components/TestimonialsSection").then(mod => ({ default: mod.TestimonialsSection })));
const PremiumPricingSection = lazy(() => import("@/app/components/PremiumPricingSection").then(mod => ({ default: mod.PremiumPricingSection })));
const TestimonialsCTA = lazy(() => import("./components/TestimonialsCTA").then(mod => ({ default: mod.TestimonialsCTA })));

const GuaranteeSection = lazy(() => import("@/app/components/GuaranteeSection"));
const FaqSection = lazy(() => import("@/app/components/FaqSection"));
const FinalCtaSection = lazy(() => import("@/app/components/FinalCtaSection"));
const Footer = lazy(() => import("@/app/components/Footer"));

// TextureOverlay pode continuar com next/dynamic pois é puramente visual e sem SSR
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
        <LazySection rootMargin="1000px 0px">
          <SectionsShowcase />
        </LazySection>
        
        <LazySection rootMargin="800px 0px">
          <ParaVoceSection />
        </LazySection>

        <LazySection rootMargin="800px 0px">
          <ParaQuemESection />
        </LazySection>

        <LazySection rootMargin="800px 0px">
          <BonusSection />
        </LazySection>

        <LazySection rootMargin="800px 0px">
          <TestimonialsSection />
        </LazySection>

        <LazySection rootMargin="800px 0px">
          <TestimonialsCTA />
        </LazySection>

        <LazySection rootMargin="800px 0px">
          <PremiumPricingSection />
        </LazySection>

        <LazySection rootMargin="800px 0px">
          <GuaranteeSection />
        </LazySection>

        <LazySection rootMargin="800px 0px">
          <FaqSection />
        </LazySection>

        <LazySection rootMargin="800px 0px">
          <FinalCtaSection />
        </LazySection>

        <LazySection rootMargin="400px 0px">
          <Footer />
        </LazySection>
      </div>
    </main>
  );
}
