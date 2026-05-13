"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AvatarGroup } from "@/components/ui/avatar-group";
import { ShinyButton } from "@/components/shiny-button";
import { scrollToOferta } from "@/lib/scrollToOferta";
import { Puzzle, Zap } from "lucide-react";
import UnicornBackground from "./UnicornBackground";

export function HeroSectionDemo() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen text-white flex flex-col items-center justify-center px-4 pt-28 sm:pt-80 overflow-hidden select-none"
      style={{ background: 'transparent !important', maxWidth: '100vw' }}
    >
      {/* 1. Unicorn Studio Animation (Background Layer) */}
      <UnicornBackground
        scenePath="/bguni.json"
        className="pointer-events-none opacity-80"
      />

      {/* 🌑 Premium Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-[2]" />

      {/* 🏷️ LOGO NO TOPO */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 z-[40]"
      >
        <Image
          src="/logo-160.webp"
          alt="Pack LP Logo"
          width={160}
          height={28}
          className="h-7 w-auto opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          priority
        />
      </motion.div>

      {/* Floating Badges (Desktop Only) */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden xl:block">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] left-[10%] flex items-center gap-3 px-4 py-2.5 bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-xl"
        >
          <div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <Zap size={14} className="text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">LP GENERATOR (NOVO)</span>
            <span className="text-xs font-bold text-white/80 tracking-tight">Gere páginas completas</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[40%] right-[10%] flex items-center gap-3 px-4 py-2.5 bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-xl"
        >
          <div className="p-1.5 bg-green-500/10 rounded-lg border border-green-500/20">
            <Puzzle size={14} className="text-green-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Plugins</span>
            <span className="text-xs font-bold text-white/80 tracking-tight">WordPress Pro</span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-30 w-full max-w-6xl mx-auto text-center px-4">
        {/* Superior Technical Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/10 mb-8 backdrop-blur-xl"
        >
          <div className="flex gap-1.5">
            <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            <div className="w-1 h-1 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white/60">
            NOVA VERSÃO 2.0
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full"
        >
          <h1 className="flex flex-col items-center justify-center font-black tracking-tighter leading-[0.85] mb-6 w-full text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-x-4 text-5xl sm:text-7xl md:text-[80px] sm:whitespace-nowrap">
              <span className="text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">LANDING</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl">
                PAGES
              </span>
            </div>
            
            <div className="relative mt-2 sm:mt-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
              />
              <span className="text-3xl sm:text-5xl md:text-7xl italic text-white/95 drop-shadow-[0_0_25px_rgba(59,130,246,0.2)] whitespace-nowrap">
                QUE VENDEM.
              </span>
            </div>
          </h1>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 space-y-6"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-6 sm:w-10 bg-white/10" />
            <p className="text-base sm:text-xl text-white font-medium tracking-tight">
              Pronta em <span className="text-blue-400 italic font-bold">Minutos.</span>
            </p>
            <div className="h-[1px] w-6 sm:w-10 bg-white/10" />
          </div>

          <p className="text-xs sm:text-base text-white/60 leading-relaxed max-w-xl mx-auto font-medium px-4">
            A união perfeita entre a velocidade do template e a exclusividade do design premium.
            Crie experiências que convertem visitas em vendas reais.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-10"
        >
          <div className="relative group w-full max-w-[280px] sm:max-w-md">
            {/* Soft Ambient Glow */}
            <div className="absolute -inset-10 bg-blue-500/5 blur-[100px] pointer-events-none" />

            <ShinyButton
              onClick={scrollToOferta}
              className="
                w-full
                relative
                whitespace-nowrap
                px-4 py-4 
                sm:px-12 sm:py-6 
                text-[9px] sm:text-xs 
                font-black tracking-tighter sm:tracking-[0.2em] 
                uppercase 
                rounded-full
                border border-white/10 
                bg-white/[0.03]
                hover:bg-white/10
                transition-all duration-300
              "
            >
              EXPERIMENTE POR 7 DIAS
            </ShinyButton>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-6 pb-20">
            <div className="flex items-center gap-3 px-8 py-2.5 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md">
              <AvatarGroup
                avatars={[
                  { src: "/thumbs/ab.webp" },
                  { src: "/thumbs/cliente1.webp" },
                  { src: "/thumbs/cliente2.webp" },
                  { src: "/thumbs/cliente3.webp" },
                ]}
              />
              <span className="text-[9px] font-black text-white/40 tracking-widest uppercase">
                + DE 1000 MEMBROS ATIVOS
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
