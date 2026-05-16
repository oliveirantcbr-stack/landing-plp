"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ShinyButton } from "@/components/shiny-button";
import { scrollToOferta } from "@/lib/scrollToOferta";


export default function GuaranteeSection() {
  return (
    <section id="garantia" className="relative py-20 md:py-32 overflow-visible bg-[#0a0a0a]">
      {/* 🔮 AI TRIANGLE DIVIDER (Transition from Offer) */}
      <div className="absolute top-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none translate-y-0">
        {/* VIBRANT PURPLE GRADIENT LINE */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent relative shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          {/* THE AI TRIANGLE - Centered on the line */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+1px)] flex flex-col items-center">
            {/* Massive Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-600/40 blur-[45px] rounded-full animate-pulse" />
            {/* The Triangle Icon */}
            <div className="relative z-10 scale-110">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400 fill-purple-500/20 drop-shadow-[0_0_15px_#a855f7]">
                <path d="M12 3L2 21H22L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 8L5 20H19L12 8Z" fill="currentColor" fillOpacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
        {/* Shadow Link */}
        <div className="w-1/2 h-20 bg-gradient-to-b from-purple-500/20 to-transparent blur-[50px] -mt-2" />
      </div>

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        {/* CARD CONTAINER */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/5 bg-zinc-950/40 backdrop-blur-3xl px-8 py-12 md:px-20 md:py-24 text-center shadow-2xl tech-pixel-texture grid items-center gap-12 md:grid-cols-2 md:text-left">
          
          {/* DECORATIVE LIGHTS */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] -ml-32 -mb-32" />

          {/* COLUNA DA IMAGEM */}
          <div className="relative flex items-center justify-center order-2 md:order-1">
            {/* CENTRAL PURPLE GLOW */}
            <div
              aria-hidden
              className="
                absolute
                h-64 w-64
                rounded-full
                bg-purple-500/20
                blur-[80px]
                opacity-60
                animate-pulse
              "
            />

            {/* IMAGEM COM MÁSCARA / SHADOW */}
            <div className="relative w-full max-w-[340px] aspect-square drop-shadow-[0_0_50px_rgba(168,85,247,0.2)]">
              <Image
                src="/garantia.png"
                alt="Garantia de 7 dias"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* COLUNA DO TEXTO */}
          <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Segurança & Confiança</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter uppercase">
              RISCO ZERO <br />
              <span className="text-purple-500 italic">GARANTIDO.</span>
            </h3>

            <p className="mt-6 text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
              Teste a biblioteca sem compromisso. Se você não ficar satisfeito nos primeiros 7 dias, devolvemos seu dinheiro integralmente.
              <span className="block mt-4 font-bold text-white uppercase tracking-widest text-xs">Sem burocracia. Sem perguntas.</span>
            </p>

            {/* LISTA PREMIUM */}
            <div className="mt-10 space-y-4 w-full">
              {[
                "Acesso total a todos os códigos e botões",
                "Suporte prioritário via WhatsApp incluso",
                "Compra protegida e segura via Cakto"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-xs font-bold text-white/70 uppercase tracking-tight group">
                  <div className="size-6 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                    <CheckCircle2 className="size-3 text-purple-500" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* CTA FINAL */}
            <div className="mt-12 w-full flex justify-center md:justify-start">
              <ShinyButton
                onClick={scrollToOferta}
                style={{ "--padding": "1.1rem 2.5rem", "--font-size": "12px" } as React.CSSProperties}
                className="w-full md:w-auto max-w-[280px] md:max-w-none font-black tracking-widest uppercase shadow-xl shadow-purple-500/10"
              >
                ACESSO IMEDIATO
              </ShinyButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
