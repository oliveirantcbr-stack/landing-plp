import React, { useState, useRef, useEffect, useCallback, CSSProperties } from "react";

// --- Interfaces ---
export interface Testimonial {
  id: string | number;
  initials: string;
  name: string;
  role: string;
  quote: string;
  tags: { text: string; type: "featured" | "default" }[];
  stats?: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text: string;
  }[];
  avatarGradient: string;
}

export interface TestimonialStackProps {
  testimonials: Testimonial[];
  visibleBehind?: number;
}

// --- Component ---
export const TestimonialStack = ({
  testimonials,
  visibleBehind = 2,
}: TestimonialStackProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const dragStartRef = useRef(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalCards = testimonials.length;

  const navigate = useCallback((index: number) => {
    setActiveIndex((index + totalCards) % totalCards);
  }, [totalCards]);

  const handleDragStart = (
    e: React.MouseEvent | React.TouchEvent,
    index: number
  ) => {
    if (index !== activeIndex) return;

    setIsDragging(true);
    const clientX =
      "touches" in e ? e.touches[0].clientX : e.clientX;

    dragStartRef.current = clientX;
    cardRefs.current[activeIndex]?.classList.add("is-dragging");
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX =
        "touches" in e
          ? e.touches[0].clientX
          : (e as MouseEvent).clientX;

      setDragOffset(clientX - dragStartRef.current);
    };

    const handleEnd = () => {
      cardRefs.current[activeIndex]?.classList.remove("is-dragging");

      if (Math.abs(dragOffset) > 50) {
        navigate(activeIndex + (dragOffset < 0 ? 1 : -1));
      }

      setIsDragging(false);
      setDragOffset(0);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, dragOffset, activeIndex, totalCards, navigate]);

  if (!testimonials.length) return null;

  return (
    <section className="testimonials-stack relative pb-10">
      {testimonials.map((t, i) => {
        const order = (i - activeIndex + totalCards) % totalCards;

        const style: CSSProperties = {};
        if (order === 0) {
          style.transform = `translateX(${dragOffset}px)`;
          style.zIndex = totalCards;
        } else if (order <= visibleBehind) {
          style.transform = `scale(${1 - 0.05 * order}) translateY(${-2 * order}rem)`;
          style.opacity = 1 - 0.2 * order;
          style.zIndex = totalCards - order;
        } else {
          style.opacity = 0;
          style.transform = "scale(0)";
        }

        return (
          <div
            key={t.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="testimonial-card glass-effect backdrop-blur-xl"
            style={style}
            onMouseDown={(e) => handleDragStart(e, i)}
            onTouchStart={(e) => handleDragStart(e, i)}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-medium">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>

              <blockquote className="mt-4 text-lg">
                &quot;{t.quote}&quot;
              </blockquote>
            </div>
          </div>
        );
      })}
    </section>
  );
};
