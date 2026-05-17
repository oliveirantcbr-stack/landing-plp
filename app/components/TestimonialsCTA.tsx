"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function TestimonialsCTA() {
  return (
    <section className="relative w-full py-12 md:py-24 bg-[#0a0a0a] overflow-hidden flex flex-col items-center">
      <div className="mx-auto max-w-5xl px-6 relative z-10 w-full">
        
        {/* THE TECHNICAL CARD WITH FLASH ANIMATION (SAME AS BENTO/PIPELINE) */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-zinc-950/50 luzpulsante tech-pixel-texture shadow-2xl">
          
          {/* CARD CONTENT - REFORCED CENTERING */}
          <div className="relative overflow-hidden px-8 py-16 md:px-20 md:py-28 flex flex-col items-center justify-center text-center min-h-[400px]">
              
              {/* 🖼️ STATIC BACKGROUND IMAGE */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                  src="/bgcardcta.webp"
                  alt="Card Background"
                  fill
                  className="object-cover opacity-20"
                />
              </div>

              {/* 🔮 PURPLE ANIMATED GLOW - INTERIOR */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
              </div>

              <div className="relative z-10 space-y-8 w-full max-w-2xl">
                {/* SUBTLE LINE DECORATION - NOW PURPLE */}
                <div className="flex items-center justify-center gap-4 opacity-40">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
                  <div className="size-1 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                    PROJETADO PARA QUEM <br />
                    <span className="text-zinc-500 italic">NÃO ACEITA O COMUM.</span>
                  </h2>

                  <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] max-w-lg mx-auto">
                    Abaixo, escolha seu plano e <br />
                    <span className="text-white">destrave o seu potencial.</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
