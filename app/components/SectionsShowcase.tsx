"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToOferta } from "@/lib/scrollToOferta";
import { isMobile } from "@/lib/isMobile";

import { InfiniteSlider } from "@/components/infinite-slider-horizontal";
import { CallToAction } from "@/components/cta-3";
import { GridBackground } from "@/components/ui/glowing-card";
import { MacbookPro } from "@/components/ui/macbook-pro";
import { ShinyButton } from "@/components/shiny-button";
import type { Variants } from "framer-motion";


import { Search, Copy, Zap } from "lucide-react";

// ======================================================
// IMAGENS
// ======================================================
const heroImages = [
  "/thumbs/1.webp",
  "/thumbs/2.webp",
  "/thumbs/3.webp",
  "/thumbs/4.webp",
  "/thumbs/5.webp",
  "/thumbs/6.webp",
  "/thumbs/7.webp",
  "/thumbs/8.webp",
  "/thumbs/9.webp",
  "/thumbs/10.webp",
  "/thumbs/11.webp",
  "/thumbs/12.webp",
  "/thumbs/13.webp",
  "/thumbs/14.webp",
  "/thumbs/15.webp",
  "/thumbs/16.webp",
  "/thumbs/17.webp",
  "/thumbs/18.webp",
  "/thumbs/19.webp",
  "/thumbs/20.webp",
  "/thumbs/21.webp",
  "/thumbs/22.webp",
  "/thumbs/23.webp",
];

const sliderRow1 = heroImages.slice(0, 8);
const sliderRow2 = heroImages.slice(8, 16);

// ======================================================
// ANIMAÇÕES
// ======================================================
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1], // easeOut real
    },
  },
};



// ======================================================
// COMPONENT
// ======================================================
export function SectionsShowcase() {
  return (
    <section className="relative w-full py-20 md:py-32 text-white overflow-hidden">
      {/* Gradiente topo */}
      <div className="absolute top-0 left-0 right-0 h-40 md:h-56 bg-gradient-to-b from-black via-black/60 to-transparent z-10 pointer-events-none" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' stroke='rgb(255 255 255 / 0.04)' fill='none'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      {/* CTA TOPO */}
      <div className="relative z-20 max-w-4xl mx-auto mb-16 md:mb-24 px-4 pt-8">
        <CallToAction />
      </div>

      {/* =====================
          CARROSSEL
      ====================== */}
      <div className="relative w-full overflow-hidden z-20">
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black/90 to-transparent z-20 pointer-events-none" />

        <InfiniteSlider duration={36} gap={24} className="py-4">
  {sliderRow1.map((src, i) => (
    <div
      key={i}
      className="
        relative
        w-[260px] h-[150px]
        md:w-[360px] md:h-[200px]
        rounded-xl
        overflow-hidden
        shadow-xl shadow-black/40
        will-change-transform
      "
    >
      <Image
        src={src}
        alt="Preview de seção"
        fill
        sizes="
          (max-width: 768px) 520px,
          (max-width: 1280px) 900px,
          1200px
        "
        quality={75}
        loading="lazy"
        decoding="async"
        className="object-cover backface-hidden"
      />
    </div>
  ))}
</InfiniteSlider>


<div className="h-10 md:h-14" />

<InfiniteSlider duration={48} gap={24} reverse className="py-4">
  {sliderRow2.map((src, i) => (
    <div
      key={i}
      className="
        relative
        w-[260px] h-[150px]
        md:w-[360px] md:h-[200px]
        rounded-xl
        overflow-hidden
        shadow-xl shadow-black/40
        will-change-transform
      "
    >
      <Image
        src={src}
        alt="Preview de seção"
        fill
        sizes="
          (max-width: 768px) 520px,
          (max-width: 1280px) 900px,
          1200px
        "
        quality={75}
        loading="lazy"
        decoding="async"
        className="object-cover backface-hidden"
      />
    </div>
  ))}
</InfiniteSlider>


      </div>

      {/* =====================
          CARD + VIDEO
      ====================== */}
      <div className="relative z-20 mt-10 md:mt-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* CARD */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
  animate={isMobile ? { opacity: 1, y: 0 } : undefined}
  viewport={isMobile ? undefined : { once: true }}
  transition={{ duration: 0.6 }}
>

            <GridBackground
              description="A Biblioteca onde você só precisa copiar e colar. Rápido, simples e pronto para arrasar no seu Elementor!"
              className="w-full max-w-lg mx-auto lg:mx-0"
            />
          </motion.div>

          {/* VIDEO */}
          <motion.div
  initial={{ opacity: 0, scale: 0.95, y: 20 }}
  whileInView={isMobile ? undefined : { opacity: 1, scale: 1, y: 0 }}
  animate={isMobile ? { opacity: 1, scale: 1, y: 0 } : undefined}
  viewport={isMobile ? undefined : { once: true }}
  transition={{ duration: 0.7 }}
  className="flex justify-center lg:justify-end"
>

            {/* DESKTOP */}
            <div className="hidden md:block">
              <MacbookPro
                videoSrc="/plp.webm"
                posterSrc="/thumbs/1.webp"
                autoPlay
                loop
                muted
                controls={false}
                preload="none"
                className="w-full max-w-[580px] lg:max-w-[720px]"
              />
            </div>

            {/* MOBILE */}
            <div className="block md:hidden w-full max-w-[320px] mx-auto rounded-xl overflow-hidden shadow-xl">
              <video
  ref={(el) => {
    if (el) {
      el.muted = true;
      el.playsInline = true;
      el.autoplay = true;
      el.play().catch(() => {});
    }
  }}
  loop
  muted
  playsInline
  preload="none"
  poster="/thumbs/1.webp"
  className="w-full h-auto object-cover rounded-xl"
>
  <source src="/plp.webm" type="video/webm" />
  <source src="/plp.mp4" type="video/mp4" />
</video>

            </div>
          </motion.div>
        </div>

        {/* =====================
            COMO FUNCIONA
        ====================== */}
        <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView={isMobile ? undefined : "show"}
  animate={isMobile ? "show" : undefined}
  viewport={isMobile ? undefined : { once: true }}
  className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
>

          {[
            {
              title: "Explore",
              desc: "Explore nossa biblioteca e encontre diversas Seções, Códigos CSS e Botões.",
              icon: Search,
            },
            {
              title: "Clique em Copiar",
              desc: "Com um clique, copie qualquer seção ou bloco pronto que quiser usar.",
              icon: Copy,
            },
            {
              title: "CTRL + V e pronto!",
              desc: "Cole no WordPress/Elementor, ajuste cores (se quiser) e pronto.",
              icon: Zap,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center hover:bg-black/50 transition"
            >
              <div className="flex justify-center mb-4">
                <item.icon className="size-6 text-white/80" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA FINAL */}
        <motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mt-12 flex justify-center"
>
  <ShinyButton
    onClick={scrollToOferta}
    className="
      transition-transform duration-300 ease-out 
      hover:scale-105
    "
  >
    EXPERIMENTE POR 7 DIAS
  </ShinyButton>
</motion.div>

      </div>
    </section>
  );
}
