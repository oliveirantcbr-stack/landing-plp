"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { scrollToOferta } from "@/lib/scrollToOferta";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const UnicornBackground = dynamic(() => import("./UnicornBackground"), {
  ssr: false,
});

// 🧪 EXPERIMENTAL MOBILE BACKGROUND VIDEO TOGGLE
// Set to true to test the embedded Bunnynet presentation video card ("Como funciona o Pack") in the mobile Hero.
// Set to false to immediately revert/rollback to the LCP-optimized empty mockup center layout.
export const USE_VIDEO_BACKGROUND_MOBILE = true;

function HeroCtaButton({ onClick, isMobile = false }: { onClick: () => void; isMobile?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative flex items-stretch overflow-hidden
        border border-purple-400/30 bg-zinc-950/80 transition-all duration-300
        active:scale-[0.98] focus:outline-none outline-none rounded-none cursor-pointer
        shadow-[0_0_20px_rgba(168,85,247,0.25)]
        hover:shadow-[0_0_40px_rgba(192,132,252,0.6)]
        hover:border-purple-350/50
        ${isMobile ? "w-full max-w-[290px]" : "w-auto"}
      `}
    >
      {/* 🔮 Dynamic Light Purple Liquid/Mesh Layer */}
      <div className="absolute inset-0 z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
        {/* Soft Light Purple Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700/80 via-purple-500/80 to-fuchsia-600/80" />
        
        {/* Animated Moving Soft Blobs */}
        <div className="absolute top-[-30%] left-[-20%] size-[150%] bg-purple-300/35 blur-[30px] rounded-full animate-[hero-liquid_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-30%] right-[-20%] size-[150%] bg-fuchsia-300/35 blur-[30px] rounded-full animate-[hero-liquid_12s_ease-in-out_infinite_reverse]" />
      </div>

      {/* ⚡ High-tech Glass Overlay */}
      <div className="absolute inset-0 z-10 bg-white/[0.04] backdrop-blur-[2px] opacity-100 group-hover:bg-white/[0.08] transition-colors duration-500" />

      {/* 🌟 Shimmer Sweep Effect */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-hero-shine-periodic pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-30 flex-1 px-6 md:px-8 py-4 flex items-center justify-center border-r border-white/10 overflow-hidden bg-white/[0.02]">
        <span className="text-[10px] md:text-[12px] font-black tracking-[0.15em] text-white uppercase whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          EXPERIMENTE POR 7 DIAS
        </span>
      </div>

      {/* Squared Orb with Arrow Icon (Premium Dark Glassmorphism - Glass Escuro) */}
      <div className="relative z-30 px-5 flex items-center justify-center bg-black/75 backdrop-blur-xl border-l border-white/20 group-hover:bg-black/85 transition-all duration-300">
        <ArrowRight className="size-4 text-white/90 group-hover:text-white transition-all group-hover:translate-x-1 duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
      </div>

      {/* Keyframe Styling */}
      <style jsx global>{`
        @keyframes hero-liquid {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(8%, 12%) scale(1.15); }
          66% { transform: translate(-8%, 8%) scale(0.9); }
        }
        @keyframes hero-shine-periodic {
          0% { transform: translateX(-150%) skewX(-15deg); }
          20%, 100% { transform: translateX(250%) skewX(-15deg); }
        }
        @keyframes hero-shine-hover {
          0% { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(250%) skewX(-15deg); }
        }
        .animate-hero-shine-periodic {
          animation: hero-shine-periodic 4s ease-in-out infinite;
        }
        .group:hover .animate-hero-shine-periodic {
          animation: hero-shine-hover 1.2s linear infinite;
        }
      `}</style>
    </button>
  );
}

export function HeroSectionDemo() {
  const [isMobile, setIsMobile] = useState(true); // Assume mobile initially for performance
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check immediately on mount
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const ContainerTag = (isMobile ? "div" : motion.div) as React.ElementType;
  const containerProps = isMobile ? {} : {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen text-white flex flex-col items-center overflow-hidden select-none"
      style={{ background: 'transparent !important', maxWidth: '100vw' }}
    >
      {/* 0. Static Immediate Layer (LCP Optimized via Next.js Image Optimization) */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Desktop Background - Always active on desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="/bgpc.webp"
            alt="Hero Background Desktop"
            fill
            className="object-cover"
            style={{ pointerEvents: 'none' }}
            priority
          />
        </div>

        {/* Mobile Background */}
        <div className="block md:hidden absolute inset-0 w-full h-full bg-[#0a0a0a]">
          {USE_VIDEO_BACKGROUND_MOBILE ? (
            /* Premium Textured VSL Layout Background */
            <div className="absolute inset-0 w-full h-full">
              {/* Subtle ambient blur light behind the VSL video player (Roxo e Cinza) */}
              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-purple-600/15 blur-[90px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
              <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[240px] h-[240px] bg-zinc-700/10 blur-[80px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
            </div>
          ) : (
            <Image
              src="/bgfallmobile.webp"
              alt="Hero Background Mobile"
              fill
              className="object-cover"
              style={{ pointerEvents: 'none' }}
              priority
            />
          )}
        </div>
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

      {/* 🌌 Mobile-Only High-Fidelity Background Textures & Bottom Gradient */}
      <div className="block md:hidden absolute inset-0 pointer-events-none z-[3]">
        {/* Subtle Tech Grid overlay (exclusively mobile) */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />
        
        {/* Cinematic Film Grain Noise Texture (exclusively mobile) */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* 🌑 Deep Smooth Gradient to Black at the Bottom (degrade pro preto na parte inferior) */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black via-black/85 to-transparent" />
      </div>

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

      {/* Main Layout Container */}
      <ContainerTag
        {...containerProps}
        className="relative z-30 w-full min-h-screen flex flex-col items-center justify-between px-6 pt-24 pb-8 md:justify-end lg:justify-center lg:items-start lg:px-24 lg:py-0"
      >
        
        {/* ======================================================== */}
        {/* DESKTOP LAYOUT (Unified Card)                            */}
        {/* ======================================================== */}
        <div className="hidden md:flex flex-col items-center lg:items-start w-full md:max-w-2xl lg:max-w-lg bg-black/30 backdrop-blur-2xl border border-white/10 p-10 rounded-[40px] shadow-2xl animate-in fade-in duration-1000">
          
          {/* Version Badge - Technical Square */}
          <div className="relative mb-6 inline-flex group">
            <div className="relative px-3 py-1 bg-black/75 backdrop-blur-xl border border-white/20 flex items-center justify-center">
              {/* CORNER SQUARES */}
              <div className="absolute -top-[2px] -left-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
              <div className="absolute -top-[2px] -right-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
              <div className="absolute -bottom-[2px] -left-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
              <div className="absolute -bottom-[2px] -right-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />

              <span className="text-[8px] font-black tracking-[0.3em] text-white/80 uppercase">Versão 2.0</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="flex flex-col text-center lg:text-left font-black tracking-tighter leading-[0.85] mb-4 w-full">
            <span className="text-[42px] lg:text-[48px] text-white uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Entregue em Minutos.
            </span>
            <span className="text-[34px] lg:text-[40px] italic text-purple-400 mt-1 uppercase drop-shadow-[0_10px_20px_rgba(168,85,247,0.3)]">
              Cobre em Reais.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base text-zinc-200 leading-relaxed max-w-sm md:max-w-md font-medium text-center lg:text-left text-balance">
            Mais de <span className="text-purple-400 font-bold">250 seções prontas</span> para copiar e colar no Elementor.
            <span className="block mt-2 text-zinc-400 text-sm font-semibold">
              Sem saber código. Sem depender de designer.
            </span>
          </p>

          {/* CTA & Social proof */}
          <div className="flex flex-col items-center lg:items-start w-full mt-8 gap-8">
            <HeroCtaButton onClick={scrollToOferta} isMobile={false} />

            <div className="flex items-center gap-4 px-6 py-3 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md">
              <AvatarGroup avatars={[
                { src: "/thumbs/ab.webp" },
                { src: "/thumbs/cliente1.webp" },
                { src: "/thumbs/cliente2.webp" },
                { src: "/thumbs/cliente3.webp" }
              ]} />
              <span className="text-[10px] font-black text-white/40 tracking-widest uppercase">
                +1.000 MEMBROS ATIVOS
              </span>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE LAYOUT (Split to leave center clear for mockup)   */}
        {/* ======================================================== */}
        
        {/* MOBILE TOP GROUP: Headline, Badge, Tech Stack */}
        <div className="md:hidden flex flex-col items-center w-full gap-4 z-40">
          {/* Version Badge - Technical Square */}
          <div className="relative inline-flex group">
            <div className="relative px-2.5 py-1 bg-black/75 backdrop-blur-xl border border-white/20 flex items-center justify-center">
              {/* CORNER SQUARES */}
              <div className="absolute -top-[2px] -left-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
              <div className="absolute -top-[2px] -right-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
              <div className="absolute -bottom-[2px] -left-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
              <div className="absolute -bottom-[2px] -right-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />

              <span className="text-[7px] font-black tracking-[0.3em] text-white/80 uppercase">Versão 2.0</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="flex flex-col text-center font-black tracking-tighter leading-[0.95] w-full">
            <span className="text-[25px] xs:text-[30px] sm:text-4xl text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Entregue em Minutos.
            </span>
            <span className="text-[20px] xs:text-[24px] sm:text-3xl italic text-purple-400 mt-0.5 uppercase drop-shadow-[0_4px_10px_rgba(168,85,247,0.45)]">
              Cobre em Reais.
            </span>
          </h1>

          {/* 🛠️ TECH STACK HORIZONTAL (Mobile Only) */}
          <div className="flex justify-center w-full mt-1 animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-500 fill-mode-both">
            <div className="relative bg-black/75 backdrop-blur-xl border border-white/20 flex items-center">
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

        {/* MOBILE MIDDLE GROUP: Bunnynet Video Presentation (Vibe VSL) */}
        {USE_VIDEO_BACKGROUND_MOBILE && (
          <div className="md:hidden w-full max-w-[320px] xs:max-w-[340px] px-4 z-40 my-6">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/40 via-white/10 to-transparent shadow-[0_0_50px_rgba(168,85,247,0.2)] overflow-hidden">
              <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl" />
              
              <div className="relative rounded-[23px] overflow-hidden bg-black aspect-video w-full">
                {!isVideoPlaying ? (
                  <div 
                    className="absolute inset-0 w-full h-full z-20 cursor-pointer group/video bg-[#0a0a0a]"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <Image 
                      src="/APERTE O PLAY.webp" 
                      alt="Aperte o Play" 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover/video:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-colors duration-500" />
                    
                    {/* Glass Pulsing Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="size-14 rounded-full bg-purple-600/90 border border-purple-400/40 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_30px_rgba(168,85,247,0.6)] animate-pulse">
                        <svg className="size-6 text-white fill-current translate-x-[2px]" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe 
                    src="https://player.mediadelivery.net/play/652088/68d812a7-c226-4f41-8bd0-4bb2e2af6a1b?autoplay=true&loop=false&muted=false&preload=true&responsive=true" 
                    className="border-0 w-full h-full absolute top-0 left-0 z-10 bg-[#0a0a0a]" 
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        )}

        {/* MOBILE BOTTOM GROUP: Description, CTA, Members */}
        <div className="md:hidden flex flex-col items-center w-full gap-5 z-40 mt-auto">
          {/* Description */}
          <p className="text-[11px] xs:text-xs sm:text-sm text-zinc-200 leading-relaxed text-center max-w-[290px] xs:max-w-xs font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Mais de <span className="text-purple-400 font-bold">250 seções prontas</span> para copiar e colar no Elementor.
            <span className="block mt-1 text-zinc-400 font-semibold">
              Sem saber código. Sem depender de designer.
            </span>
          </p>

          {/* CTA & Social proof */}
          <div className="flex flex-col items-center w-full gap-4">
            <HeroCtaButton onClick={scrollToOferta} isMobile={true} />

            <div className="flex items-center gap-3 px-4 py-2 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md">
              <AvatarGroup avatars={[
                { src: "/thumbs/ab.webp" },
                { src: "/thumbs/cliente1.webp" },
                { src: "/thumbs/cliente2.webp" },
                { src: "/thumbs/cliente3.webp" }
              ]} />
              <span className="text-[8px] font-black text-white/50 tracking-[0.25em] uppercase">
                +1.000 MEMBROS ATIVOS
              </span>
            </div>
          </div>
        </div>

        {/* 🛠️ TECH STACK VERTICAL CARD (Desktop Only) */}
        <div className="hidden lg:flex absolute right-80 top-1/2 -translate-y-1/2 flex-col z-40 animate-in fade-in slide-in-from-right-5 duration-1000 delay-700 fill-mode-both">
          {/* Main Container - Square & Technical */}
          <div className="relative bg-black/75 backdrop-blur-xl border border-white/20 flex flex-col">

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

      </ContainerTag>
    </section>
  );
}
