"use client";

import React from "react";
import { InfiniteSlider } from "@/components/infinite-slider-horizontal";
import { testimonialsPLP } from "./testimonials-data";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "./TestimonialsStack";

export function TestimonialsSection() {
  const row1 = testimonialsPLP.slice(0, 3);
  const row2 = testimonialsPLP.slice(3, 6);

  return (
    <section id="depoimentos" className="relative w-full py-24 md:py-32 overflow-visible bg-[#0a0a0a]">

      {/* Background is now clean #0a0a0a with continuous grid from parent */}

      {/* HEADER */}
      <div className="relative z-20 text-center mb-16 md:mb-24 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
          bg-white/[0.03] border border-white/10 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase font-black">
            Prova Social
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tighter uppercase">
          RESULTADOS QUE <span className="text-purple-500 italic">FALAM.</span>
        </h2>
        <p className="text-white/40 mt-4 max-w-lg mx-auto font-medium text-sm md:text-base">
          Junte-se a centenas de profissionais que transformaram sua velocidade de entrega com o Pack PLP.
        </p>
      </div>

      {/* CAROUSELS - Using CSS Mask instead of opaque overlays to preserve background texture */}
      <div 
        className="relative z-20 flex flex-col gap-6 md:gap-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        {/* Row 1: Forward */}
        <InfiniteSlider duration={40} gap={24} className="py-4">
          {row1.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </InfiniteSlider>

        {/* Row 2: Reverse */}
        <InfiniteSlider duration={50} gap={24} reverse className="py-4">
          {row2.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="w-[300px] md:w-[400px] p-6 md:p-8 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-sm flex flex-col gap-6 hover:bg-white/[0.04] transition-all duration-300 group tech-pixel-texture">
      {/* Stars & Quote Icon */}
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-purple-500 text-purple-500" />
          ))}
        </div>
        <Quote className="text-white/10 group-hover:text-purple-500/20 transition-colors" size={24} />
      </div>

      <p className="text-sm md:text-base text-white/80 leading-relaxed font-medium italic">
        &quot;{testimonial.quote}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 mt-auto">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-black/60 backdrop-blur-md border border-purple-500/50 shadow-lg shadow-purple-500/10"
        >
          {testimonial.initials}
        </div>
        <div className="flex flex-col">
          <span className="text-white font-black text-sm uppercase tracking-tight">
            {testimonial.name}
          </span>
          <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">
            {testimonial.role}
          </span>
        </div>
      </div>
    </div>
  );
}
