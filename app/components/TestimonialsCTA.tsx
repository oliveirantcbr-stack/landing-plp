"use client";

import React from "react";
import { motion } from "framer-motion";

export function TestimonialsCTA() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-[#0a0a0a] overflow-hidden flex flex-col items-center">

      {/* 🔮 CONNECTING GRADIENTS */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-zinc-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-full bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none z-[5]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">

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

          <p className="text-zinc-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] max-w-lg mx-auto">
            Abaixo, escolha seu plano e <br />
            <span className="text-white">destrave o seu potencial.</span>
          </p>
        </motion.div>

        {/* CONNECTING ARROW / INDICATOR */}
        <div className="pt-8 flex flex-col items-center gap-2 animate-bounce opacity-30">
          <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
