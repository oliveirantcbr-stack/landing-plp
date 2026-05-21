"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck, ArrowRight, Zap, Trophy, Rocket } from "lucide-react";
import { ShinyButton } from "@/components/shiny-button";
import { Spotlight } from "@/components/spotlight-new";
import { cn } from "@/lib/utils";

const FEATURES = [
  "PRO",
  "Pacote de Landing Pages",
  "Acesso a Biblioteca de Seções",
  "Codigos CSS",
  "Botões",
  "Gerador de Landing Page",
  "Gerador de Contrato",
  "Aulas de Personalização",
  "Aulas de Otimização",
  "Suporte via Whats App",
  "Atualizações Semanais",
  "e +++"
];

/* 🛠️ REFINED TECHNICAL BADGE */
function TechBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative px-4 py-1.5 bg-zinc-900 border border-white/20 flex items-center justify-center", className)}>
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />

      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90">
        {children}
      </span>
    </div>
  );
}

export function PremiumPricingSection() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-[#0a0a0a] overflow-hidden flex flex-col items-center">

      {/* 🔮 ULTRA PREMIUM BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bglogin.webp"
          alt="Luxury Texture"
          fill
          className="object-cover opacity-70 mix-blend-screen"
          priority
        />

        {/* Seamless background glows to match TestimonialsSection - Below texture */}
        <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-purple-500/20 blur-[150px] rounded-full" />
        </div>

        {/* ⚡ FLASH EFFECT - Animated subtle flash every 5 seconds */}
        <motion.div
          animate={{
            opacity: [0, 0.15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-purple-500/10 pointer-events-none"
        />

        {/* Subtle center overlay */}
        <div className="absolute inset-0 bg-[#0a0a0a]/40" />

        {/* 🏔️ TOP GRADIENT TRANSITION - SEAMLESS MATCH WITH CTA */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-transparent z-10" />

        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 100%, 60%, .12) 0, hsla(270, 100%, 50%, .04) 50%, transparent 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 60%, .08) 0, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 60%, .06) 0, transparent 100%)"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center">

        {/* EDITORIAL HEADER */}
        <div className="text-center mb-12 md:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <TechBadge className="bg-purple-500/10 border-purple-500/20 px-6 py-2 w-fit mx-auto">
              <div className="flex items-center gap-2">
                <Sparkles className="size-3 text-purple-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Acesso Exclusivo</span>
              </div>
            </TechBadge>
          </motion.div>

          <h2 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-4 md:mb-6">
            INVISTA NO SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 italic">DOMÍNIO.</span>
          </h2>

          <p className="text-white/40 max-w-xl mx-auto font-medium text-sm md:text-base leading-relaxed">
            Tenha as ferramentas da elite na palma da sua mão. Garanta seu acesso completo agora mesmo.
          </p>
        </div>

        {/* ⚡ THE "VAULT" LAYOUT */}
        <div className="relative w-full max-w-2xl flex flex-col items-center justify-center">

          {/* PLAN CARD - THE CENTERPIECE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full bg-zinc-900 border-2 border-purple-500/40 p-8 md:p-12 rounded-[30px] md:rounded-[40px] relative z-20 shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(147,51,234,0.1)] flex flex-col tech-pixel-texture"
          >
            {/* Top Badge - Solid White Technical Block */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30">
              <div className="relative bg-white border border-white px-8 py-3 shadow-[0_20px_40px_rgba(255,255,255,0.15)] flex items-center justify-center">
                {/* TECHNICAL CORNER SQUARES */}
                <div className="absolute -top-[2px] -left-[2px] size-1.5 bg-white shadow-[0_0_8px_#fff]" />
                <div className="absolute -top-[2px] -right-[2px] size-1.5 bg-white shadow-[0_0_8px_#fff]" />
                <div className="absolute -bottom-[2px] -left-[2px] size-1.5 bg-white shadow-[0_0_8px_#fff]" />
                <div className="absolute -bottom-[2px] -right-[2px] size-1.5 bg-white shadow-[0_0_8px_#fff]" />
                
                <span className="tracking-[0.2em] md:tracking-[0.3em] text-black font-black text-[10px] md:text-[11px] whitespace-nowrap">OFERTA ESPECIAL</span>
              </div>
            </div>

            {/* TOP HEADER AREA */}
            <div className="flex flex-col items-start gap-4 mb-8 mt-4 md:mt-0">
              <div className="flex items-center justify-between w-full">
                {/* Subtle Plan Badge */}
                <div className="px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-[9px] font-black text-purple-400 uppercase tracking-widest">
                  Acesso Completo
                </div>
                <Trophy className="size-8 text-purple-500/60" />
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                PLANO PRO
              </h3>
            </div>

            {/* PRICING AREA */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <div className="size-1 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Acesso Imediato</span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-white/40 text-xs font-black uppercase tracking-widest leading-none mb-2">Apenas 3x de</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-none drop-shadow-2xl">R$ 24,52</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 py-2 px-4 bg-white/[0.03] border border-white/5 rounded-full w-fit">
                <Zap className="size-4 text-purple-400 fill-purple-400" />
                <span className="text-white/60 font-black text-[10px] md:text-xs tracking-widest uppercase">Ou R$ 67,00 à vista</span>
              </div>
            </div>

            {/* ELITE FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 md:gap-y-4 gap-x-6 mb-10">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90 text-[12px] md:text-sm font-bold group/item">
                  <div className="size-5 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
                    <Rocket className="size-2.5 text-purple-400" />
                  </div>
                  <span className={`truncate ${f === "PRO" || f.includes("Biblioteca") || f === "e +++" ? "text-purple-300" : ""}`}>{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center w-full">
              <ShinyButton
                onClick={() => window.open('https://pay.cakto.com.br/87m3bxz_692614', '_blank')}
                style={{ "--padding": "1.1rem 2.5rem", "--font-size": "12px" } as React.CSSProperties}
                className="w-full bg-purple-600 border-purple-400 hover:bg-purple-500 text-white font-black tracking-widest uppercase shadow-xl group"
              >
                <div className="flex items-center justify-center gap-2">
                  GARANTIR MINHA VAGA
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </ShinyButton>
            </div>
          </motion.div>

        </div>

        {/* TRUST BAR */}
        <div className="mt-12 md:mt-20 flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-16 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest">
            <ShieldCheck className="size-4 text-emerald-500" /> 7 dias de garantia
          </div>
          <div className="h-4 w-px bg-white/20 hidden md:block" />
          <Image src="/pagamentos.webp" alt="Payments" width={140} height={28} className="h-5 w-auto" />
          <div className="h-4 w-px bg-white/20 hidden md:block" />
          <div className="text-white font-black text-[10px] uppercase tracking-widest">+1000 MEMBROS ATIVOS</div>
        </div>

      </div>

    </section>
  );
}
