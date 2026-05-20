"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { ShinyButton } from "@/components/shiny-button";
import { scrollToOferta } from "@/lib/scrollToOferta";
import dynamic from "next/dynamic";

const UnicornBackground = dynamic(() => import("./UnicornBackground"), {
  ssr: false,
});

export function HeroSectionDemo() {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [isMobile, setIsMobile] = useState(true); // Assume mobile initially for performance

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check immediately on mount
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const words = ["Minutos.", "Segundos.", "Horas."];
    const handleTyping = () => {
      const fullText = words[wordIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(150);

        if (currentText === fullText) {
          setIsDeleting(true);
          setSpeed(2000); // Pause at end
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(100);

        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setSpeed(500); // Pause before next word
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, speed]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen text-white flex flex-col items-center overflow-hidden select-none"
      style={{ background: 'transparent !important', maxWidth: '100vw' }}
    >
      {/* 0. Static Immediate Layer (LCP Optimized) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bgpc.webp"
          alt="Hero Background Desktop"
          fill
          priority
          unoptimized
          fetchPriority="high"
          className="hidden md:block object-cover"
        />
        <Image
          src="/bgfallmobile.webp"
          alt="Hero Background Mobile"
          fill
          priority
          unoptimized
          fetchPriority="high"
          className="block md:hidden object-cover"
        />
      </div>

      {/* 1. Unicorn Studio Animation (Background Layer) - Loaded Dynamically (Only Desktop) */}
      {!isMobile && (
        <UnicornBackground
          scenePath="/bguni.json"
          className="absolute inset-0 pointer-events-none z-[1]"
          scale={0.8}
        />
      )}

      {/* 🌑 Premium Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/95 pointer-events-none z-[2]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none z-[2]" />

      {/* 🏷️ LOGO (Desktop) - Restored with opacity-0 as requested */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[50] hidden md:block opacity-0 pointer-events-none">
        <Image
          src="/logo-160.webp"
          alt="Pack LP Logo"
          width={130}
          height={22}
          className="h-5 w-auto"
          priority
        />
      </div>

      {/* Main Layout Container - pt-32 on mobile to lower the headline */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30 w-full min-h-screen flex flex-col items-center justify-between md:justify-end lg:justify-center lg:items-start lg:px-24 pt-32 pb-12 lg:pt-0 lg:pb-0"
      >

        {/* TOP GROUP: Headline & Typing Effect */}
        <div className="flex flex-col items-center lg:items-start w-full md:max-w-2xl lg:max-w-lg md:bg-black/30 md:backdrop-blur-2xl md:border md:border-white/10 md:p-10 md:rounded-[40px] md:shadow-2xl">

          {/* Version Badge - Technical Square */}
          <div className="relative mb-6 hidden md:inline-flex group">
            <div className="relative px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
              {/* CORNER SQUARES */}
              <div className="absolute -top-[2px] -left-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
              <div className="absolute -top-[2px] -right-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
              <div className="absolute -bottom-[2px] -left-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
              <div className="absolute -bottom-[2px] -right-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />

              <span className="text-[8px] font-black tracking-[0.3em] text-white/80 uppercase">Versão 2.0</span>
            </div>
          </div>

          {/* Headline */}
          <div className="flex flex-col items-center lg:items-start w-full animate-in fade-in slide-in-from-bottom-5 duration-1000 fill-mode-both">
            <h1 className="flex flex-col text-center lg:text-left font-black tracking-tighter leading-[0.85] mb-2 w-full">
              <span className="text-3xl sm:text-5xl md:text-[42px] lg:text-[48px] text-white uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                Landing Pages
              </span>
              <span className="text-2xl sm:text-4xl md:text-[34px] lg:text-[40px] italic text-white/95 mt-1 uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                Que Vendem.
              </span>
            </h1>

            {/* Cycling Effect - Purple Color */}
            <div className="flex items-center justify-center lg:justify-start gap-1 mt-1 h-6">
              <p className="text-xs sm:text-sm md:text-base text-white/60 font-bold tracking-tight">
                Pronta em
              </p>
              <div className="min-w-[80px]">
                <span className="text-xs sm:text-sm md:text-base text-purple-500 italic font-black block text-center lg:text-left min-h-[1.5em] flex items-center justify-center lg:justify-start">
                  {currentText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-[2px] h-[1em] bg-purple-500 ml-1"
                  />
                </span>
              </div>
            </div>

            {/* 🛠️ TECH STACK HORIZONTAL (Mobile Only) */}
            <div className="flex md:hidden mt-1 mb-2 justify-center w-full animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-500 fill-mode-both">
              <div className="relative bg-black/60 backdrop-blur-2xl border border-white/20 flex items-center">
                {/* CORNER SQUARES */}
                <div className="absolute -top-[3px] -left-[3px] size-1 bg-white shadow-[0_0_5px_#fff]" />
                <div className="absolute -top-[3px] -right-[3px] size-1 bg-white shadow-[0_0_5px_#fff]" />
                <div className="absolute -bottom-[3px] -left-[3px] size-1 bg-white shadow-[0_0_5px_#fff]" />
                <div className="absolute -bottom-[3px] -right-[3px] size-1 bg-white shadow-[0_0_5px_#fff]" />

                {/* ELEMENTOR */}
                <div className="size-8 border-r border-white/10 flex items-center justify-center">
                  <Image src="/elementor.svg" alt="Elementor" width={12} height={12} className="brightness-0 invert opacity-60" />
                </div>

                {/* WORDPRESS */}
                <div className="size-8 border-r border-white/10 flex items-center justify-center">
                  <Image src="/wordpress.svg" alt="WordPress" width={12} height={12} className="brightness-0 invert opacity-60" />
                </div>

                {/* ITEMS COUNT */}
                <div className="px-2 h-8 flex flex-col items-center justify-center">
                  <span className="text-white font-black text-[9px] tracking-tighter">+250</span>
                  <span className="text-white/40 font-black text-[4px] uppercase tracking-[0.2em]">Itens</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Content Only (Social Proof) */}
          <div className="hidden md:flex flex-col items-center lg:items-start mt-10 gap-8">
            <p className="text-base text-zinc-200 leading-relaxed max-w-sm font-medium text-balance">
              Crie Landing Pages em Minutos, usando nossa biblioteca exclusiva de seções, códigos css e botões.
              <span className="block mt-3 text-purple-400 font-black uppercase tracking-widest text-xs">
                + de 250 itens para você copiar e colar no seu Elementor
              </span>
            </p>

            <div className="flex flex-col items-start gap-8">
              <ShinyButton
                onClick={scrollToOferta}
                style={{ "--padding": "1.25rem 2.5rem", "--font-size": "11px" } as React.CSSProperties}
                className="font-black tracking-[0.2em] uppercase rounded-full border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300"
              >
                ACESSO IMEDIATO
              </ShinyButton>

              <div className="flex items-center gap-4 px-6 py-3 bg-white/[0.02] border border-white/5 rounded-2xl">
                <AvatarGroup avatars={[
                  { src: "/thumbs/ab.webp" },
                  { src: "/thumbs/cliente1.webp" },
                  { src: "/thumbs/cliente2.webp" },
                  { src: "/thumbs/cliente3.webp" }
                ]} />
                <span className="text-[10px] font-black text-white/40 tracking-widest uppercase">+1.000 MEMBROS</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM GROUP (Mobile Only) */}
        <div className="md:hidden flex flex-col items-center w-full px-8 gap-4 mt-32">
          <p className="text-[11px] text-zinc-200 leading-relaxed text-center font-medium text-balance">
            Crie Landing Pages em Minutos, usando nossa biblioteca exclusiva de seções, códigos css e botões.
            <span className="block mt-3 text-purple-400 font-black uppercase tracking-[0.2em] text-[10px]">
              + de 250 itens para você copiar e colar no seu Elementor
            </span>
          </p>

          <div className="flex flex-col items-center gap-6 w-full">
            <ShinyButton
              onClick={scrollToOferta}
              style={{ "--padding": "1.1rem 2.5rem", "--font-size": "12px" } as React.CSSProperties}
              className="w-full max-w-[280px] font-black tracking-[0.1em] uppercase rounded-full border border-purple-500/20 bg-purple-500/5 whitespace-nowrap"
            >
              ACESSO IMEDIATO
            </ShinyButton>

            <div className="flex items-center gap-3 px-5 py-2.5 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md">
              <AvatarGroup avatars={[
                { src: "/thumbs/ab.webp" },
                { src: "/thumbs/cliente1.webp" },
                { src: "/thumbs/cliente2.webp" },
                { src: "/thumbs/cliente3.webp" }
              ]} />
              <span className="text-[9px] font-black text-white tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">+1000 MEMBROS ATIVOS</span>
            </div>
          </div>
        </div>

        {/* 🛠️ TECH STACK VERTICAL CARD (Desktop Only) */}
        <div className="hidden lg:flex absolute right-80 top-1/2 -translate-y-1/2 flex-col z-40 animate-in fade-in slide-in-from-right-5 duration-1000 delay-700 fill-mode-both">
          {/* Main Container - Square & Technical */}
          <div className="relative bg-black/60 backdrop-blur-2xl border border-white/20 flex flex-col">

            {/* CORNER SQUARES */}
            <div className="absolute -top-[3px] -left-[3px] size-1.5 bg-white shadow-[0_0_10px_#fff]" />
            <div className="absolute -top-[3px] -right-[3px] size-1.5 bg-white shadow-[0_0_10px_#fff]" />
            <div className="absolute -bottom-[3px] -left-[3px] size-1.5 bg-white shadow-[0_0_10px_#fff]" />
            <div className="absolute -bottom-[3px] -right-[3px] size-1.5 bg-white shadow-[0_0_10px_#fff]" />

            {/* ELEMENTOR */}
            <div className="size-20 border-b border-white/10 flex items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
              <Image
                src="/elementor.svg"
                alt="Elementor"
                width={32}
                height={32}
                className="brightness-0 invert opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* WORDPRESS */}
            <div className="size-20 border-b border-white/10 flex items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
              <Image
                src="/wordpress.svg"
                alt="WordPress"
                width={32}
                height={32}
                className="brightness-0 invert opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* ITEMS COUNT */}
            <div className="size-20 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
              <span className="text-white font-black text-lg tracking-tighter">+250</span>
              <span className="text-white/40 font-black text-[7px] uppercase tracking-[0.2em] group-hover:text-purple-400 transition-colors">Itens</span>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
