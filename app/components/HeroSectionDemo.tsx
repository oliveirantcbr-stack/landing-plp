"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { ShinyButton } from "@/components/shiny-button";
import { scrollToOferta } from "@/lib/scrollToOferta";
import { Puzzle, Zap } from "lucide-react";
import UnicornBackground from "./UnicornBackground";

export function HeroSectionDemo() {
  const words = ["Minutos.", "Horas.", "Segundos."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen text-white flex flex-col items-center overflow-hidden select-none"
      style={{ background: 'transparent !important', maxWidth: '100vw' }}
    >
      {/* 1. Unicorn Studio Animation (Background Layer) */}
      <UnicornBackground
        scenePath="/bguni.json"
        className="absolute inset-0 pointer-events-none opacity-80"
        scale={0.8}
      />

      {/* 🌑 Premium Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/95 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none z-[1]" />

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
      <div className="relative z-30 w-full min-h-screen flex flex-col items-center justify-between pt-32 pb-12 md:justify-center md:items-start md:px-24 md:pt-0 md:pb-0">
        
        {/* TOP GROUP: Headline & Typing Effect */}
        <div className="flex flex-col items-center md:items-start w-full md:max-w-md lg:max-w-lg md:bg-black/30 md:backdrop-blur-3xl md:border md:border-white/10 md:p-10 md:rounded-[40px] md:shadow-2xl">
          
          {/* Version Badge - Animated Purple Border ONLY */}
          <div className="relative p-[1px] rounded-full overflow-hidden mb-6 hidden md:inline-flex group">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#a855f7_180deg,transparent_210deg,transparent_360deg)] opacity-100"
             />
             <div className="relative px-3 py-1 rounded-full bg-black/90 flex items-center justify-center">
                <span className="text-[8px] font-black tracking-[0.3em] text-purple-500 uppercase">Versão 2.0</span>
             </div>
          </div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start w-full"
          >
            <h1 className="flex flex-col text-center md:text-left font-black tracking-tighter leading-[0.85] mb-4 w-full">
              <span className="text-3xl sm:text-5xl md:text-[42px] lg:text-[48px] text-white uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                Landing Pages
              </span>
              <span className="text-2xl sm:text-4xl md:text-[34px] lg:text-[40px] italic text-white/95 mt-1 uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                Que Vendem.
              </span>
            </h1>

            {/* Cycling Effect - Purple Color */}
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2 h-6">
              <p className="text-xs sm:text-sm md:text-base text-white/60 font-bold tracking-tight">
                Pronta em
              </p>
              <div className="min-w-[80px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs sm:text-sm md:text-base text-purple-500 italic font-black block"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Desktop Content Only (Social Proof) */}
          <div className="hidden md:flex flex-col items-start mt-10 gap-8">
            <p className="text-sm text-white/40 leading-relaxed max-w-sm font-medium">
              A união perfeita entre a velocidade do template e a exclusividade do design premium. 
              Crie experiências que convertem visitas em vendas reais.
            </p>
            
            <div className="flex flex-col items-start gap-8">
              <ShinyButton
                onClick={scrollToOferta}
                highlightColor="#a855f7"
                highlightSubtleColor="#c084fc"
                style={{ "--padding": "1.25rem 2.5rem", "--font-size": "11px" } as any}
                className="font-black tracking-[0.2em] uppercase rounded-full border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300"
              >
                EXPERIMENTE POR 7 DIAS
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
        <div className="md:hidden flex flex-col items-center w-full px-8 gap-10 mt-20">
          <p className="text-[11px] text-white/40 leading-relaxed text-center font-medium">
            A união perfeita entre a velocidade do template e a exclusividade do design premium. 
            Crie experiências que convertem visitas em vendas reais.
          </p>
          
          <div className="flex flex-col items-center gap-6 w-full">
            <ShinyButton
              onClick={scrollToOferta}
              highlightColor="#a855f7"
              highlightSubtleColor="#c084fc"
              style={{ "--padding": "1.1rem 2.5rem", "--font-size": "12px" } as any}
              className="w-full max-w-[280px] font-black tracking-[0.1em] uppercase rounded-full border border-purple-500/20 bg-purple-500/5 whitespace-nowrap"
            >
              EXPERIMENTE POR 7 DIAS
            </ShinyButton>

            <div className="flex items-center gap-3 px-5 py-2.5 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md">
              <AvatarGroup avatars={[
                { src: "/thumbs/ab.webp" },
                { src: "/thumbs/cliente1.webp" },
                { src: "/thumbs/cliente2.webp" },
                { src: "/thumbs/cliente3.webp" }
              ]} />
              <span className="text-[9px] font-black text-white/20 tracking-[0.3em] uppercase">+1000 MEMBROS ATIVOS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
