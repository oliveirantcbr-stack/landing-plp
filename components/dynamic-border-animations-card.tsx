"use client";

import React, { useEffect, useRef } from "react";
import { Users, Palette, Laptop } from "lucide-react";

const AnimatedCard = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateBorder = () => {
      const now = Date.now() / 1000;
      const speed = 0.5;

      const topX = Math.sin(now * speed) * 100;
      const rightY = Math.cos(now * speed) * 100;
      const bottomX = Math.sin(now * speed + Math.PI) * 100;
      const leftY = Math.cos(now * speed + Math.PI) * 100;

      if (topRef.current) {
        topRef.current.style.transform = `translateX(${topX}%)`;
      }
      if (rightRef.current) {
        rightRef.current.style.transform = `translateY(${rightY}%)`;
      }
      if (bottomRef.current) {
        bottomRef.current.style.transform = `translateX(${bottomX}%)`;
      }
      if (leftRef.current) {
        leftRef.current.style.transform = `translateY(${leftY}%)`;
      }

      requestAnimationFrame(animateBorder);
    };

    const animationId = requestAnimationFrame(animateBorder);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative w-full max-w-4xl mx-auto bg-black/95 border border-gray-800 rounded-2xl p-8 md:p-12 overflow-hidden">
      {/* BORDAS ANIMADAS */}
      <div className="absolute top-0 left-0 w-full h-0.5 overflow-hidden" aria-hidden="true">
        <div
          ref={topRef}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
        />
      </div>

      <div className="absolute top-0 right-0 w-0.5 h-full overflow-hidden" aria-hidden="true">
        <div
          ref={rightRef}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden" aria-hidden="true">
        <div
          ref={bottomRef}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
        />
      </div>

      <div className="absolute top-0 left-0 w-0.5 h-full overflow-hidden" aria-hidden="true">
        <div
          ref={leftRef}
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10">
        {/* 🔧 h2 (hierarquia correta) */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white leading-tight">
          Feito para quem precisa de páginas
          <br className="hidden md:block" />
          <span className="text-[#4682ff]">
            {" "}
            rápidas, modernas e profissionais
          </span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-black/80 rounded-xl p-6 border border-gray-800/50 hover:border-[#4682ff]/50 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4682ff]/10 to-black flex items-center justify-center mb-4 border border-[#4682ff]/30">
                <Users className="h-7 w-7 text-[#78a6ff]" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-white text-xl mb-3">
                Afiliados e Info Produtores
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Afiliados e Info Produtores que precisam de páginas prontas,
                modernas e otimizadas para conversão, sem complicação.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-black/80 rounded-xl p-6 border border-gray-800/50 hover:border-[#4682ff]/50 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4682ff]/10 to-black flex items-center justify-center mb-4 border border-[#4682ff]/30">
                <Palette className="h-7 w-7 text-[#78a6ff]" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-white text-xl mb-3">
                Designers e Web Designers
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Transforme seu talento visual em páginas que realmente
                convertem, sem precisar começar do zero.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-black/80 rounded-xl p-6 border border-gray-800/50 hover:border-[#4682ff]/50 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4682ff]/10 to-black flex items-center justify-center mb-4 border border-[#4682ff]/30">
                <Laptop className="h-7 w-7 text-[#78a6ff]" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-white text-xl mb-3">
                Iniciantes no WordPress
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Para quem não entende de código, mas quer páginas modernas,
                funcionais e prontas para vender.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DOTS DECORATIVOS */}
      <div
        aria-hidden="true"
        className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/80 animate-pulse"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/80 animate-pulse"
      />
    </section>
  );
};

export default AnimatedCard;
