"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { scrollToOferta } from "@/lib/scrollToOferta";

import { InfiniteSlider } from "@/components/infinite-slider-horizontal";
import { CallToAction } from "@/components/cta-3";
import { MacbookPro } from "@/components/ui/macbook-pro";
import { ShinyButton } from "@/components/shiny-button";
import { Search, Copy, Zap, Layout } from "lucide-react";

// ======================================================
// IMAGENS
// ======================================================
const heroImages = [
  "/thumbs/1.webp", "/thumbs/2.webp", "/thumbs/3.webp", "/thumbs/4.webp",
  "/thumbs/5.webp", "/thumbs/6.webp", "/thumbs/7.webp", "/thumbs/8.webp",
  "/thumbs/9.webp", "/thumbs/10.webp", "/thumbs/11.webp", "/thumbs/12.webp",
  "/thumbs/13.webp", "/thumbs/14.webp", "/thumbs/15.webp", "/thumbs/16.webp",
  "/thumbs/17.webp", "/thumbs/18.webp", "/thumbs/19.webp", "/thumbs/20.webp",
  "/thumbs/21.webp", "/thumbs/22.webp", "/thumbs/23.webp",
];

const sliderRow1 = heroImages.slice(0, 8);
const sliderRow2 = heroImages.slice(8, 16);

export function SectionsShowcase() {
  const [isClientMobile, setIsClientMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100 };
  const tiltX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), springConfig);

  useEffect(() => {
    const checkIsMobile = () => setIsClientMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section id="beneficios" className="relative w-full py-16 md:py-48 text-white bg-black">

      {/* 🔮 CINEMATIC BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        <div className="absolute top-[15%] left-[-10%] w-[350px] md:w-[800px] h-[350px] md:h-[800px] bg-purple-600/[0.04] md:bg-purple-600/10 blur-[80px] md:blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/[0.04] md:bg-indigo-600/10 blur-[60px] md:blur-[120px] rounded-full" />
      </div>

      {/* 🌑 SECTION FADES */}
      <div className="absolute top-0 left-0 right-0 h-48 md:h-72 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* HEADER CTA */}
      <div className="relative z-30 max-w-4xl mx-auto mb-12 md:mb-20 px-4">
        <CallToAction />
      </div>

      {/* INFINITY CAROUSELS */}
      <div className="relative w-full overflow-hidden z-20 space-y-4 md:space-y-8">
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-20" />

        <InfiniteSlider duration={40} gap={20} className="py-2">
          {sliderRow1.map((src, i) => (
            <CarouselCard key={i} src={src} />
          ))}
        </InfiniteSlider>

        <InfiniteSlider duration={55} gap={20} reverse className="py-2">
          {sliderRow2.map((src, i) => (
            <CarouselCard key={i} src={src} />
          ))}
        </InfiniteSlider>
      </div>

      {/* MACBOOK + DESCRIPTION */}
      <div className="relative z-20 mt-16 md:mt-48 px-6">

        {/* DESKTOP KEY VIDEO */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] pointer-events-none z-10 opacity-60 hidden lg:block">
          <video
            autoPlay loop muted playsInline
            className="w-full h-full object-contain mix-blend-screen scale-110"
            style={{
              maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
            }}
          >
            <source src="/key.webm" type="video/webm" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24 relative z-20">

          {/* CONTENT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-10 order-1"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <Layout className="size-3.5 text-purple-400" />
              <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/50">Recursos Premium</span>
            </div>

            <h2 className="text-3xl md:text-6xl font-black leading-[1.1] md:leading-[1] tracking-tighter uppercase">
              COPIOU. <br className="hidden md:block" />
              <span className="text-purple-500 italic">COLOU.</span> <br className="hidden md:block" />
              VENDEU.
            </h2>

            <p className="text-white/40 text-base md:text-xl font-medium leading-relaxed max-w-md">
              A maior biblioteca de seções do Elementor onde você só precisa copiar o código e colar na sua página.
            </p>

            <div className="flex flex-col gap-4 md:gap-6 pt-2 md:pt-6 w-full max-w-xs md:max-w-none">
              {[
                "Biblioteca atualizada semanalmente",
                "Seções de alta conversão",
                "Design exclusivo e responsivo"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 group justify-center lg:justify-start">
                  <div className="size-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_#a855f7]" />
                  <span className="text-sm md:text-base font-bold text-white/80">{text}</span>
                </div>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:block pt-4">
              <ShinyButton onClick={scrollToOferta} className="w-full sm:w-auto hover:scale-105 transition-all">
                LIBERAR ACESSO AGORA
              </ShinyButton>
            </div>
          </motion.div>

          {/* MOBILE KEY VIDEO - Ultra-compact on Mobile */}
          <div className="block lg:hidden w-full max-w-[240px] h-[100px] relative pointer-events-none opacity-90 order-2 -my-10 md:-my-12">
            <video
              autoPlay loop muted playsInline
              className="w-full h-full object-contain mix-blend-screen scale-150"
              style={{
                maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
              }}
            >
              <source src="/key.webm" type="video/webm" />
            </video>
          </div>

          {/* VIDEO DISPLAY (MOCKUP) */}
          <motion.div
            style={isClientMobile ? undefined : { rotateX: tiltX, rotateY: tiltY, perspective: 1000 }}
            className="relative w-full lg:w-[55%] flex justify-center mt-4 md:mt-0 order-3"
          >
            <div className="absolute inset-0 bg-purple-600/[0.05] md:bg-purple-600/20 blur-[60px] md:blur-[100px] rounded-full scale-75 animate-pulse" />

            <div className="hidden md:block relative z-20 w-full max-w-[700px]">
              <MacbookPro videoSrc="/plp.webm" posterSrc="/thumbs/1.webp" autoPlay loop muted className="w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]" />
            </div>

            <div className="block md:hidden w-full max-w-[320px] mx-auto relative z-20">
              <div className="relative bg-[#1a1a1a] rounded-[24px] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden">
                <div className="rounded-[18px] overflow-hidden bg-black">
                  <div className="h-6 bg-[#262626] flex items-center px-4 gap-1.5">
                    <div className="size-2 rounded-full bg-[#ff5f56]" />
                    <div className="size-2 rounded-full bg-[#ffbd2e]" />
                    <div className="size-2 rounded-full bg-[#27c93f]" />
                  </div>
                  <video autoPlay loop muted playsInline poster="/thumbs/1.webp" className="w-full h-auto object-cover">
                    <source src="/plp.webm" type="video/webm" />
                  </video>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[24px] bg-gradient-to-tr from-white/[0.02] to-transparent" />
            </div>
          </motion.div>

          {/* MOBILE CTA - Now after the video mockup */}
          <div className="block lg:hidden w-full max-w-xs mx-auto pt-6 order-4">
            <ShinyButton onClick={scrollToOferta} className="w-full hover:scale-105 transition-all">
              LIBERAR ACESSO AGORA
            </ShinyButton>
          </div>
        </div>
      </div>

      {/* =====================
          PIPELINE FLOW
      ====================== */}
      <div className="relative z-20 mt-20 md:mt-40 max-w-7xl mx-auto px-6 py-24 rounded-[40px] overflow-hidden border border-white/[0.03]">

        {/* BENTOBG.WEBP BACKGROUND FOR PIPELINE - INVERTED */}
        <div
          className="absolute inset-0 pointer-events-none opacity-80 z-0 scale-y-[-1]"
          style={{
            backgroundImage: 'url(/bentobg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-[1]" />

        {/* LIGHT BAR AT THE TOP */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-[3]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-purple-500/20 blur-[4px] z-[3]" />

        {/* GRADIENT FADES TOP & BOTTOM */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-[2]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 lg:gap-20">

          <div className="absolute top-[40px] left-0 w-full h-[2px] bg-white/5 hidden md:block pointer-events-none overflow-hidden z-10">
            <motion.div
              initial={{ left: "-20%" }}
              animate={{ left: "120%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-1/4 h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_20px_#a855f7]"
            />
          </div>

          {[
            {
              title: "Explore",
              desc: "Explore nossa biblioteca e encontre diversas Seções, Códigos CSS e Botões.",
              icon: Search
            },
            {
              title: "Clique em Copiar",
              desc: "Com um clique, copie qualquer seção ou bloco pronto que quiser usar.",
              icon: Copy
            },
            {
              title: "CTRL + V e pronto!",
              desc: "Cole no WordPress/Elementor, ajuste cores (se quiser) e pronto.",
              icon: Zap
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group flex flex-col items-center text-center z-20"
            >
              <div className="relative size-16 md:size-20 mb-8 md:mb-10 flex items-center justify-center bg-black border border-white/10 rounded-full group-hover:border-purple-500/50 transition-all duration-500 shadow-2xl">
                <div className="absolute inset-1 rounded-full bg-white/[0.03] group-hover:bg-purple-500/5 transition-colors" />
                <item.icon className="size-5 md:size-6 text-white group-hover:text-purple-400 transition-all" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 md:size-2.5 bg-purple-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_12px_#a855f7]" />
              </div>

              <div className="space-y-3 md:space-y-4 px-4">
                <h4 className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-purple-500 transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/30 text-xs md:text-sm font-medium leading-relaxed mx-auto max-w-[240px]">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 md:mt-8 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[7px] md:text-[8px] font-black text-white/20 uppercase tracking-[0.2em] group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all">
                ETAPA 0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

function CarouselCard({ src }: { src: string }) {
  return (
    <div className="relative w-[220px] h-[130px] md:w-[400px] md:h-[220px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group border border-white/5">
      <Image src={src} alt="Section Preview" fill sizes="(max-width: 768px) 220px, 400px" className="object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
    </div>
  );
}
