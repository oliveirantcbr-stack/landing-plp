"use client";

import AnimatedCard from "@/components/dynamic-border-animations-card"; // Ajuste o caminho

export function ParaVoceSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Grid BG */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' stroke='rgb(255 255 255 / 0.04)' fill='none'%3e %3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`
        }}
      />
      <div className="relative z-10">
        <AnimatedCard />
      </div>
    </section>
  );
}