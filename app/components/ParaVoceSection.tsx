"use client";

import React from "react";
import Image from "next/image";
import { Users, Palette, Laptop, ArrowUpRight } from "lucide-react";
import { scrollToOferta } from "@/lib/scrollToOferta";

export function ParaVoceSection() {
   return (
      <section className="relative w-full py-16 md:py-24 bg-[#0a0a0a] border-t border-white/5 overflow-visible">
         {/* 🔮 AI TRIANGLE DIVIDER (Transition from S2) */}
         <div className="absolute top-0 left-0 right-0 z-40 flex flex-col items-center pointer-events-none translate-y-0">
            
            {/* VIBRANT PURPLE GRADIENT LINE */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent relative shadow-[0_0_15px_rgba(168,85,247,0.4)]">
               {/* THE AI TRIANGLE - Centered and shifted 1px up */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+1px)] flex flex-col items-center">
                  {/* Massive Glow Background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-600/40 blur-[45px] rounded-full animate-pulse" />
                  
                  {/* The Triangle Icon */}
                  <div className="relative z-10 scale-110">
                     <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-purple-400 fill-purple-500/20 drop-shadow-[0_0_15px_#a855f7]"
                     >
                        <path d="M12 3L2 21H22L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M12 8L5 20H19L12 8Z" fill="currentColor" fillOpacity="0.4" />
                     </svg>
                  </div>
               </div>
            </div>

            {/* Shadow Link for S3 content */}
            <div className="w-1/2 h-20 bg-gradient-to-b from-purple-500/20 to-transparent blur-[50px] -mt-2" />
         </div>

         <div className="max-w-6xl mx-auto px-6">

            {/* COMPACT HEADER */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
               <div className="space-y-4">
                  <div className="text-[10px] font-black tracking-[0.3em] uppercase text-purple-500">O Pack // Landing Page é</div>
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase">
                     PROJETADO PARA <br />
                     <span className="text-zinc-500">ALTA PERFORMANCE.</span>
                  </h2>
               </div>
               <p className="text-zinc-500 text-sm font-medium max-w-[300px] leading-tight">
                  Uma estrutura técnica pensada para quem exige o máximo de conversão e design.
               </p>
            </div>

            {/* MINIMALIST BENTO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-2xl">

               {/* MAIN CARD (Spans 2 columns on desktop) */}
               <div className="md:col-span-2 relative bg-zinc-950/40 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-between group overflow-hidden border border-white/5">
                  {/* Background Image */}
                  <div className="absolute inset-0 -z-10">
                     <Image
                        src="/bgcard.webp"
                        alt="Card Background"
                        fill
                        className="object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" />
                  </div>

                  <div className="relative z-10">
                     <div className="inline-flex items-center gap-2 text-purple-500 mb-8">
                        <div className="size-1.5 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Destaque Principal</span>
                     </div>
                     <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
                        Feito para quem precisa de páginas rápidas, modernas e profissionais.
                     </h3>
                  </div>

                  <div className="relative z-10 flex items-center gap-6 pt-12 border-t border-white/5">
                     <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Tecnologias:</div>
                     <div className="flex gap-4">
                        {["Elementor", "WordPress"].map((tech) => (
                           <span key={tech} className="text-[10px] font-black text-zinc-400">{tech}</span>
                        ))}
                     </div>
                  </div>
               </div>

               {/* CARD 1: AFILIADOS */}
               <div className="bg-[#050505] p-8 flex flex-col justify-between group hover:bg-zinc-900/40 transition-colors">
                  <div className="flex justify-between items-start">
                     <Users className="size-5 text-purple-500" />
                     <ArrowUpRight className="size-4 text-zinc-700 group-hover:text-white transition-colors" />
                  </div>
                  <div className="mt-16">
                     <h4 className="text-lg font-black text-white uppercase mb-3 tracking-tighter leading-tight">Afiliados e Info Produtores</h4>
                     <p className="text-zinc-500 text-xs font-medium leading-relaxed">
                        Páginas prontas e validadas para conversão imediata, sem complicação.
                     </p>
                  </div>
               </div>

               {/* CARD 2: DESIGNERS */}
               <div className="bg-[#050505] p-8 flex flex-col justify-between group hover:bg-zinc-900/40 transition-colors">
                  <div className="flex justify-between items-start">
                     <Palette className="size-5 text-purple-500" />
                     <ArrowUpRight className="size-4 text-zinc-700 group-hover:text-white transition-colors" />
                  </div>
                  <div className="mt-16">
                     <h4 className="text-lg font-black text-white uppercase mb-3 tracking-tighter leading-tight">Designers e Web Designers</h4>
                     <p className="text-zinc-500 text-xs font-medium leading-relaxed">
                        Transforme seu talento visual em páginas que realmente convertem.
                     </p>
                  </div>
               </div>

               {/* CARD 3: INICIANTES */}
               <div className="bg-[#050505] p-8 flex flex-col justify-between group hover:bg-zinc-900/40 transition-colors">
                  <div className="flex justify-between items-start">
                     <Laptop className="size-5 text-purple-500" />
                     <ArrowUpRight className="size-4 text-zinc-700 group-hover:text-white transition-colors" />
                  </div>
                  <div className="mt-16">
                     <h4 className="text-lg font-black text-white uppercase mb-3 tracking-tighter leading-tight">Iniciantes no WordPress</h4>
                     <p className="text-zinc-500 text-xs font-medium leading-relaxed">
                        Para quem não entende de código, mas quer páginas funcionais.
                     </p>
                  </div>
               </div>

               {/* COMPACT CTA BLOCK */}
               <div
                  onClick={scrollToOferta}
                  className="bg-purple-600 p-8 flex items-center justify-between group cursor-pointer hover:bg-purple-500 transition-colors"
               >
                  <span className="text-sm font-black text-white uppercase tracking-[0.2em]">Começar agora</span>
                  <div className="size-10 rounded-full bg-white/10 flex items-center justify-center">
                     <ArrowUpRight className="size-5 text-white" />
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}