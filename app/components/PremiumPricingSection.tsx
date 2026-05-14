"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Sparkles, ShieldCheck, ArrowRight, Zap, Trophy, Rocket } from "lucide-react";
import { ShinyButton } from "@/components/shiny-button";
import { Spotlight } from "@/components/spotlight-new";

const SHARED_FEATURES = [
  "Gerador Landing Page ( exclusivo )",
  "PRO Incluso",
  "Biblioteca de Seções 2.0",
  "Aulas de Personalização",
  "Aulas de Otimização",
  "Suporte Via WhatsApp",
  "Pack Do Designer ( NOVO )",
  "Plugin Clonador ( NOVO )",
  "Kit do Digital ( NOVO )",
  "Assistente IA ( NOVO )",
  "Extensão Google Chrome"
];

/* 🛠️ REFINED TECHNICAL BADGE */
function TechBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative inline-flex items-center px-4 py-1.5 bg-white/[0.03] border border-white/10 whitespace-nowrap ${className}`}>
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
    <section id="oferta" className="relative w-full py-16 md:py-32 overflow-hidden bg-black flex flex-col items-center">
      
      {/* 🔮 ULTRA PREMIUM BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bglogin.webp"
          alt="Luxury Texture"
          fill
          className="object-cover opacity-70 mix-blend-screen"
          priority
        />
        
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

        {/* Superior and Inferior Gradients */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        
        {/* Subtle center overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
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
            <TechBadge className="bg-purple-500/10 border-purple-500/20 px-6 py-2">
              <div className="flex items-center gap-2">
                <Sparkles className="size-3 text-purple-400" />
                Exclusive Access
              </div>
            </TechBadge>
          </motion.div>

          <h2 className="text-3xl md:text-6xl font-black text-white leading-tight tracking-tighter uppercase mb-4 md:mb-6">
            INVISTA NO SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 italic">DOMÍNIO.</span>
          </h2>
          
          <p className="text-white/40 max-w-xl mx-auto font-medium text-sm md:text-base leading-relaxed">
            Tenha as ferramentas da elite na palma da sua mão. Escolha o plano ideal para o seu momento.
          </p>
        </div>

        {/* ⚡ THE "VAULT" LAYOUT */}
        <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
          
          {/* TRIMESTRAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-[45%] bg-zinc-950 border border-white/5 p-6 md:p-10 rounded-[24px] md:rounded-[32px] md:-mr-8 relative z-10 group hover:border-white/10 transition-all shadow-2xl"
          >
            <div className="mb-6 md:mb-8 flex flex-col items-start gap-3">
              <TechBadge>Entrada</TechBadge>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter">TRIMESTRAL</h3>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-white text-3xl md:text-4xl font-black tracking-tighter">R$29</span>
                <span className="text-white/40 text-sm">/ mês</span>
              </div>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-1">Ou R$ 87 à vista</p>
            </div>

            {/* FEATURES LIST */}
            <div className="grid grid-cols-1 gap-y-3 mb-8 md:mb-10">
              {SHARED_FEATURES.slice(0, 7).map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-white/50 text-[12px] font-medium">
                  <Check className="size-3 text-purple-500 shrink-0" /> <span className="truncate">{f}</span>
                </div>
              ))}
              <div className="text-purple-500/50 text-[10px] font-bold uppercase tracking-widest pl-6">+ E muito mais</div>
            </div>

            <button 
              onClick={() => window.open('https://pay.cakto.com.br/35azrwr', '_blank')}
              className="w-full py-3.5 rounded-xl border border-white/10 bg-white/5 text-white text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              Começar agora
            </button>
          </motion.div>

          {/* ANUAL - THE CENTERPIECE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-[60%] bg-zinc-900 border-2 border-purple-500/40 p-8 md:p-12 rounded-[30px] md:rounded-[40px] relative z-20 shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(147,51,234,0.1)] flex flex-col"
          >
            {/* Top Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
              <TechBadge className="bg-purple-600 border-white/20 py-2.5 px-4 shadow-xl shadow-purple-600/20">
                <span className="tracking-[0.15em] md:tracking-[0.3em]">MELHOR CUSTO-BENEFÍCIO</span>
              </TechBadge>
            </div>

            <div className="flex justify-between items-start mb-8 md:mb-10 mt-4 md:mt-0">
              <div className="flex flex-col items-start gap-3">
                <TechBadge>Pro</TechBadge>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mt-1">ANUAL</h3>
              </div>
              <Trophy className="size-8 text-purple-500 hidden sm:block" />
            </div>

            {/* BIG PRICE */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-3 mb-2">
                 <TechBadge className="border-emerald-500/30 bg-emerald-500/5 px-2 py-0.5">
                   <span className="text-emerald-400 text-[8px]">Economia Real</span>
                 </TechBadge>
                 <span className="text-white/20 text-base font-bold line-through">R$ 468</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-none">R$19</span>
                <span className="text-white/40 text-xl font-black uppercase tracking-widest leading-none">/ mês</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Zap className="size-4 text-purple-500 fill-purple-500" />
                <span className="text-white font-black text-base md:text-lg tracking-tight uppercase">Apenas R$ 228 à vista</span>
              </div>
            </div>

            {/* ELITE FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 md:gap-y-4 gap-x-6 mb-10">
              {SHARED_FEATURES.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90 text-[12px] md:text-sm font-bold group/item">
                  <div className="size-5 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
                    <Rocket className="size-2.5 text-purple-400" />
                  </div>
                  <span className={`truncate ${f.includes("exclusivo") || f.includes("NOVO") || f === "PRO Incluso" ? "text-purple-300" : ""}`}>{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <ShinyButton
              onClick={() => window.open('https://pay.cakto.com.br/yzbek9g', '_blank')}
              highlightColor="#a855f7"
              highlightSubtleColor="#c084fc"
              style={{ "--padding": "1.25rem 2rem", "--font-size": "13px" } as any}
              className="w-full bg-purple-600 border-purple-400 hover:bg-purple-500 text-white font-black tracking-[0.2em] md:tracking-[0.3em] uppercase rounded-xl md:rounded-[24px] shadow-xl group"
            >
              <div className="flex items-center justify-center gap-2">
                ACESSO ELITE
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </ShinyButton>
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
