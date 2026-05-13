"use client";

import { ShieldCheck, Zap, RefreshCw } from "lucide-react";
import { ShinyButton } from "@/components/shiny-button";
import { scrollToOferta } from "@/lib/scrollToOferta";

export default function FinalCtaSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* CARD */}
        <div
          className="
            relative
            overflow-visible
            rounded-3xl
            border border-white/10
            bg-black/40
            backdrop-blur-2xl
            px-8 py-16
            md:px-16
            text-center
          "
        >
          {/* 🔵 BLOB AZUL — CANTO SUPERIOR ESQUERDO DO CARD */}
          <div
            aria-hidden
            className="
              absolute
              -top-20
              -left-20
              w-60 h-60
              bg-blue-500/25
              rounded-full
              blur-[110px]
              pointer-events-none
            "
          />

          {/* 🟠 BLOB LARANJA — CANTO INFERIOR DIREITO DO CARD */}
          <div
            aria-hidden
            className="
              absolute
              -bottom-20
              -right-20
              w-60 h-60
              bg-orange-500/25
              rounded-full
              blur-[110px]
              pointer-events-none
            "
          />

          {/* REFLEXO GLASS */}
          <div
            aria-hidden
            className="
              absolute inset-0
              rounded-3xl
              bg-gradient-to-b
              from-white/10
              via-white/5
              to-transparent
              pointer-events-none
            "
          />

          {/* CONTEÚDO */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
              Comece agora e acelere seus projetos
            </h2>

            <p className="mt-6 text-white/70 max-w-2xl mx-auto text-lg">
              Tenha acesso imediato à biblioteca completa de seções, códigos e botões
              com Elementor Pro, IA e atualizações semanais.
            </p>

            <div className="mt-12 flex justify-center">
              <ShinyButton
  onClick={scrollToOferta}
  aria-label="Experimentar o Pack Landing Page por 7 dias"
  className="
    transition-transform duration-300 ease-out 
    hover:scale-105
  "
>
  QUERO COMEÇAR AGORA MESMO
</ShinyButton>

            </div>

            {/* TRUST */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-400" />
                Garantia incondicional de 7 dias
              </div>

              <div className="flex items-center gap-2">
                <RefreshCw className="size-4 text-blue-400" />
                Cancelamento simples
              </div>

              <div className="flex items-center gap-2">
                <Zap className="size-4 text-yellow-400" />
                Acesso imediato
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
