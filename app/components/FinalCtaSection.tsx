"use client";

import { ShieldCheck, Zap, RefreshCw } from "lucide-react";
import { ShinyButton } from "@/components/shiny-button";
import { scrollToOferta } from "@/lib/scrollToOferta";

export default function FinalCtaSection() {
  return (
    <section className="relative py-24 md:py-40 bg-[#0a0a0a] overflow-visible">
      {/* 🔮 OVERLAPPING PURPLE BLOB (Bleeds to section above) */}
      <div
        aria-hidden
        className="
          absolute
          -top-32
          left-1/2
          -translate-x-1/2
          w-full
          max-w-4xl
          h-80
          bg-purple-600/15
          rounded-full
          blur-[130px]
          pointer-events-none
          z-0
        "
      />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        {/* CARD */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border border-white/5
            bg-zinc-950/40
            backdrop-blur-3xl
            px-8 py-20
            md:px-20
            text-center
            shadow-2xl
            tech-pixel-texture
          "
        >
          {/* INTERIOR DECORATION */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[100px] -mr-32 -mt-32" />
          
          {/* CONTEÚDO */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-8">
               <div className="size-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Passo Final</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-none text-white uppercase tracking-tighter">
              ACELERE SEUS <br />
              <span className="text-purple-500 italic">PROJETOS AGORA.</span>
            </h2>

            <p className="mt-8 text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
              Tenha acesso imediato à biblioteca completa de seções, códigos e botões
              com Elementor Pro, IA e atualizações semanais. O domínio técnico que você precisa está a um clique.
            </p>

            <div className="mt-12 flex justify-center w-full">
              <ShinyButton
                onClick={scrollToOferta}
                style={{ "--padding": "1.1rem 2.5rem", "--font-size": "12px" } as React.CSSProperties}
                className="w-full md:w-auto max-w-[280px] md:max-w-none font-black tracking-widest uppercase shadow-2xl shadow-purple-500/20"
              >
                <span className="hidden md:inline">ULTIMA OPORTUNIDADE!</span>
                <span className="inline md:hidden">Garantir Agora</span>
              </ShinyButton>
            </div>

            {/* TRUST BAR */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black text-white/30 uppercase tracking-widest border-t border-white/5 pt-10 w-full">
              <div className="flex items-center gap-3 group hover:text-white/60 transition-colors">
                <ShieldCheck className="size-4 text-emerald-500/50 group-hover:text-emerald-500" />
                Garantia de 7 dias
              </div>

              <div className="flex items-center gap-3 group hover:text-white/60 transition-colors">
                <RefreshCw className="size-4 text-purple-500/50 group-hover:text-purple-500" />
                Cancelamento Simples
              </div>

              <div className="flex items-center gap-3 group hover:text-white/60 transition-colors">
                <Zap className="size-4 text-yellow-500/50 group-hover:text-yellow-500" />
                Acesso Imediato
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
