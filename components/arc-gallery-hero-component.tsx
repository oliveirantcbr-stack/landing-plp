"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type ArcGalleryHeroProps = {
  images: string[];
  startAngle?: number;
  endAngle?: number;
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  className?: string;
};

export const ArcGalleryHero: React.FC<ArcGalleryHeroProps> = ({
  images,
  startAngle = 20,
  endAngle = 160,
  radiusLg = 480,
  radiusMd = 360,
  radiusSm = 260,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = "",
}) => {
  /**
   * MOBILE-FIRST
   * Evita layout shift inicial no Safari
   */
  const [dimensions, setDimensions] = useState({
    radius: radiusSm,
    cardSize: cardSizeSm,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [
    radiusLg,
    radiusMd,
    radiusSm,
    cardSizeLg,
    cardSizeMd,
    cardSizeSm,
  ]);

  const count = Math.max(images.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section
      className={`
        relative
  overflow-hidden
  text-white
  pt-24 md:pt-32
  pb-20 md:pb-24
        bg-transparent
        ${className}
      `}
    >
      {/* =====================
          ARC IMAGE LAYOUT
      ====================== */}
      <div
        className="relative mx-auto"
        style={{
          width: "100%",
          height: dimensions.radius * 1.2,
          contain: "layout paint", // 🔒 trava recalculo do Safari
        }}
      >
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {images.map((src, i) => {
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;

            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;

            return (
              <div
                key={i}
                className="absolute opacity-0 animate-fade-in-up"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: "translate(-50%, 50%)",
                  animationDelay: `${i * 90}ms`,
                  animationFillMode: "forwards",
                  zIndex: count - i,
                  pointerEvents: "none", // 🔒 evita foco/scroll
                }}
              >
                <div
                  className="
                    w-full h-full
                    rounded-2xl
                    overflow-hidden
                    ring-1 ring-white/10
                    bg-white/5
                    backdrop-blur-sm
                    shadow-lg
                    transition-transform
                  "
                  style={{ transform: `rotate(${angle / 4}deg)` }}
                >
                  <Image
                    src={src}
                    alt={`Preview ${i + 1}`}
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================
          TEXTO
      ====================== */}
      <div className="relative z-10 flex justify-center px-6 mt-[-80px] md:mt-[-120px]">
        <div
          className="text-center max-w-3xl opacity-0 animate-fade-in"
          style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            PARE DE PERDER TEMPO TENTANDO CRIAR DO ZERO
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            Comece a usar o{" "}
            <span className="text-blue-400 font-semibold">
              Pack Landing Page
            </span>{" "}
            agora mesmo e construa páginas modernas, profissionais e de alta
            conversão.
          </p>
        </div>
      </div>

      {/* =====================
          ANIMAÇÕES
      ====================== */}
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translate(-50%, 60%); }
            to { opacity: 1; transform: translate(-50%, 50%); }
          }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.7s ease-out forwards;
          }

          .animate-fade-in {
            animation: fade-in 0.7s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};
