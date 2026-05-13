"use client";

import React, { useState, useRef, useEffect, CSSProperties } from "react";

export type Testimonial = {
  id: number;
  initials: string;
  name: string;
  role: string;
  quote: string;
  stats: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text: string;
  }[];
  tags: { text: string; type: "featured" | "default" }[];
  avatarGradient: string;
};

export interface TestimonialStackProps {
  testimonials: Testimonial[];
  visibleBehind?: number;
}

export const TestimonialStack = ({
  testimonials,
  visibleBehind = 3,
}: TestimonialStackProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const total = testimonials.length;
  const startX = useRef(0);

  const startDrag = (
    e: React.MouseEvent | React.TouchEvent,
    index: number
  ) => {
    if (index !== activeIndex) return;

    setIsDragging(true);
    setDragOffset(0);

    startX.current =
      "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX =
        "touches" in e
          ? e.touches[0].clientX
          : (e as MouseEvent).clientX;

      setDragOffset(clientX - startX.current);
    };

    const handleEnd = () => {
      if (Math.abs(dragOffset) > 60) {
        setActiveIndex((prev) =>
          (prev + (dragOffset < 0 ? 1 : -1) + total) % total
        );
      }

      setIsDragging(false);
      setDragOffset(0);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, dragOffset, total]);

  return (
    <div className="relative w-full flex justify-center py-10 overflow-x-hidden">
      <div className="relative w-full max-w-[440px] h-[420px] sm:h-[450px] mx-auto">
        {testimonials.map((t, i) => {
          const order = (i - activeIndex + total) % total;
          if (order > visibleBehind) return null;

          const isActive = order === 0;
          const scale = isActive ? 1 : 1 - order * 0.06;
          const offsetY = isActive ? 0 : order * -18;
          const opacity = isActive ? 1 : 0.75 - order * 0.2;

          const style: CSSProperties = {
            transform: isActive
              ? `translateX(${dragOffset}px)`
              : `scale(${scale}) translateY(${offsetY}px)`,
            opacity,
            zIndex: 100 - order,
          };

          return (
            <div
              key={t.id}
              className="
                absolute w-full max-w-[440px]
                left-1/2 -translate-x-1/2
                transition-all duration-300
                rounded-2xl
                cursor-grab active:cursor-grabbing
              "
              style={style}
              onMouseDown={(e) => startDrag(e, i)}
              onTouchStart={(e) => startDrag(e, i)}
            >
              <div
                className={`
                  rounded-2xl p-6 sm:p-8
                  ${
                    isActive
                      ? "bg-black/80 border border-white/10"
                      : "bg-black/90 border border-white/5"
                  }
                `}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold"
                    style={{ background: t.avatarGradient }}
                  >
                    {t.initials}
                  </div>

                  <div>
                    <p className="font-medium text-lg text-white">
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>

                <blockquote className="text-base sm:text-lg text-gray-200 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex gap-2 mt-6 flex-wrap">
                  {t.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`
                        px-2 py-1 text-xs rounded-md
                        ${
                          tag.type === "featured"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-white/10 text-gray-300"
                        }
                      `}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* INDICADORES – ACESSÍVEIS */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className="
                flex items-center justify-center
                w-8 h-8
                rounded-full
                transition
              "
            >
              <span
                className={`
                  block w-2 h-2 rounded-full transition-all
                  ${
                    i === activeIndex
                      ? "bg-white"
                      : "bg-white/30 hover:bg-white/60"
                  }
                `}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
