"use client";

import { TestimonialStack } from "./TestimonialsStack";
import { testimonialsPLP } from "./testimonials-data";


export function TestimonialsSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4">
      
      {/* HEADER */}
      <div className="text-center mb-14">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
          bg-gray-900/60 border border-gray-800 mb-4">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-300 tracking-wide">
            O QUE DIZEM SOBRE O PLP
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Depoimentos reais de usuários
        </h2>

        {/* Linha tech */}
        <div className="w-24 sm:w-32 md:w-40 h-[2px] bg-white/20 mx-auto mt-6 rounded-full" />
      </div>

      {/* STACK */}
      <div className="max-w-xl mx-auto">
        <TestimonialStack testimonials={testimonialsPLP} visibleBehind={2} />
      </div>
    </section>
  );
}
