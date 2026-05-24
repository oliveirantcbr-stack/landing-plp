"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, ArrowRight, Zap, Trophy, Rocket } from "lucide-react";
import { Spotlight } from "@/components/spotlight-new";
import { cn } from "@/lib/utils";

const FEATURES = [
  "Elementor - PRO",
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
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 15, seconds: 0 });

  useEffect(() => {
    const savedTime = localStorage.getItem("pricing_countdown_target");
    let targetTime: number;

    if (savedTime) {
      targetTime = parseInt(savedTime, 10);
      if (Date.now() > targetTime) {
        targetTime = Date.now() + 15 * 60 * 1000;
        localStorage.setItem("pricing_countdown_target", targetTime.toString());
      }
    } else {
      targetTime = Date.now() + 15 * 60 * 1000;
      localStorage.setItem("pricing_countdown_target", targetTime.toString());
    }

    const calculateTimeLeft = () => {
      const difference = targetTime - Date.now();
      
      if (difference <= 0) {
        const newTarget = Date.now() + 15 * 60 * 1000;
        localStorage.setItem("pricing_countdown_target", newTarget.toString());
        return { hours: 0, minutes: 15, seconds: 0 };
      }

      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const initialTimer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 0);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#0a0a0a] overflow-hidden flex flex-col items-center">

      {/* 🔮 ULTRA PREMIUM BACKGROUND WITH GPU-ACCELERATED FLASH EFFECT */}
      <div className="absolute inset-0 z-0 luzpulsante">
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
                <span className="text-purple-400 text-[10px] sm:text-xs font-black uppercase tracking-widest leading-none mb-2 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-purple-500 animate-pulse" />
                  Assinatura Recorrente Trimestral
                </span>
                <div className="flex items-baseline flex-wrap gap-x-1.5 gap-y-1">
                  <span className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none drop-shadow-2xl">3x de</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-fuchsia-400 font-black tracking-tighter leading-none drop-shadow-[0_4px_20px_rgba(168,85,247,0.3)] text-4xl xs:text-5xl sm:text-6xl md:text-7xl">R$ 18,26</span>
                </div>
                <div className="mt-2.5 text-white/50 text-xs font-bold tracking-wide">
                  Ou apenas R$ 49,90 à vista por trimestre
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 py-2.5 px-4 bg-purple-500/10 border border-purple-500/20 rounded-xl w-fit">
                <Zap className="size-4 text-purple-400 fill-purple-400 animate-pulse" />
                <span className="text-purple-300 font-black text-[10px] md:text-xs tracking-wider uppercase">Cancele a qualquer momento • Sem multas</span>
              </div>
            </div>

            {/* ELITE FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 md:gap-y-4 gap-x-6 mb-10">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90 text-[12px] md:text-sm font-bold group/item">
                  <div className="size-5 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 shrink-0">
                    <Rocket className="size-2.5 text-purple-400" />
                  </div>
                  <span className={`truncate ${f === "Elementor - PRO" || f.includes("Biblioteca") || f === "e +++" ? "text-purple-300" : ""}`}>{f}</span>
                </div>
              ))}
            </div>

            {/* ⏳ URGENCY COUNTDOWN TIMER */}
            <div className="mt-8 mb-2 w-full bg-purple-500/5 border border-purple-500/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 tech-pixel-texture relative overflow-hidden">
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]" />
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]" />
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]" />
              <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]" />

              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0">
                  <span className="relative flex size-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                  </span>
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] md:text-xs font-black text-purple-300 uppercase tracking-widest leading-tight">Oferta por tempo limitado</span>
                  <span className="text-[9px] md:text-[10px] text-white/50 font-bold uppercase tracking-wider mt-0.5">Garanta seu desconto antes que expire</span>
                </div>
              </div>

              {/* Ticking Numbers */}
              <div className="flex items-center gap-2 font-mono shrink-0">
                <div className="flex flex-col items-center bg-black/40 border border-white/10 rounded-lg px-2.5 py-1 min-w-[36px]">
                  <span className="text-sm font-black text-white">{timeLeft.minutes.toString().padStart(2, "0")}</span>
                  <span className="text-[7px] text-white/40 font-black uppercase tracking-wider">MIN</span>
                </div>
                <span className="text-purple-400 font-bold animate-pulse">:</span>
                <div className="flex flex-col items-center bg-black/40 border border-white/10 rounded-lg px-2.5 py-1 min-w-[36px]">
                  <span className="text-sm font-black text-purple-400">{timeLeft.seconds.toString().padStart(2, "0")}</span>
                  <span className="text-[7px] text-white/40 font-black uppercase tracking-wider">SEG</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4 flex justify-center w-full">
              <button
                onClick={() => window.open('https://pay.cakto.com.br/87m3bxz_692614', '_blank')}
                className="w-full group relative flex items-stretch overflow-hidden border border-purple-500/40 bg-zinc-950/80 transition-all duration-300 active:scale-[0.98] focus:outline-none outline-none rounded-2xl cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_45px_rgba(168,85,247,0.45)] hover:border-purple-400"
              >
                {/* 🔮 Dynamic Liquid Gradient Background */}
                <div className="absolute inset-0 z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700" />
                  <div className="absolute top-[-30%] left-[-20%] size-[150%] bg-purple-400/20 blur-[30px] rounded-full animate-[pricing-liquid_8s_ease-in-out_infinite]" />
                  <div className="absolute bottom-[-30%] right-[-20%] size-[150%] bg-indigo-400/20 blur-[30px] rounded-full animate-[pricing-liquid_12s_ease-in-out_infinite_reverse]" />
                </div>

                {/* ⚡ High-tech Glass Overlay */}
                <div className="absolute inset-0 z-10 bg-white/[0.02] backdrop-blur-[1px] opacity-100 group-hover:bg-white/[0.06] transition-colors duration-500" />

                {/* 🌟 Shimmer Sweep Effect */}
                <div className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-pricing-shine pointer-events-none" />

                {/* Main Content Area */}
                <div className="relative z-30 flex-1 px-3 sm:px-6 py-4.5 flex items-center justify-center border-r border-white/10 overflow-hidden bg-white/[0.01]">
                  <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-black tracking-[0.15em] sm:tracking-[0.25em] text-white uppercase whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                    GARANTIR MINHA VAGA
                  </span>
                </div>

                {/* Right Side with Arrow Seta */}
                <div className="relative z-30 px-4 sm:px-5 flex items-center justify-center bg-black/25 group-hover:bg-black/40 transition-all duration-300">
                  <ArrowRight className="size-4 text-white/90 group-hover:text-white transition-all group-hover:translate-x-1 duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                </div>

                {/* Local Styles for Animate Blobs and Shimmer */}
                <style jsx global>{`
                  @keyframes pricing-liquid {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(6%, 10%) scale(1.1); }
                    66% { transform: translate(-6%, 6%) scale(0.95); }
                  }
                  @keyframes pricing-shine {
                    0% { transform: translateX(-100%) skewX(-15deg); }
                    100% { transform: translateX(200%) skewX(-15deg); }
                  }
                  .group:hover .group-hover\\:animate-pricing-shine {
                    animation: pricing-shine 1.8s ease-in-out infinite;
                  }
                `}</style>
              </button>
            </div>

            {/* Trust Badges under CTA */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-y-3.5 gap-x-5 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-400 shrink-0" />
                <span>7 dias de garantia incondicional</span>
              </div>
              <div className="hidden sm:block text-white/10">•</div>
              <div className="flex items-center gap-2">
                <Trophy className="size-4 text-purple-400 shrink-0" />
                <span>+1.000 membros ativos</span>
              </div>
              <div className="hidden sm:block text-white/10">•</div>
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-amber-400 shrink-0" />
                <span>Cancele quando quiser</span>
              </div>
            </div>

            {/* Formas de Pagamento */}
            <div className="mt-6 flex justify-center w-full">
              <Image
                src="/formaspagemento.webp"
                alt="Formas de Pagamento"
                width={320}
                height={40}
                className="h-auto w-auto max-w-[280px] md:max-w-[320px] opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
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
