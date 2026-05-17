"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringCoordsRef = useRef({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // 1. Detect if touch device or mobile screen
    const isMobile = () => {
      if (typeof window === "undefined") return true;
      return (
        window.innerWidth < 768 ||
        navigator.maxTouchPoints > 0 ||
        ("ontouchstart" in window)
      );
    };

    if (isMobile()) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovered(!!isInteractive);
    };

    const onMouseLeaveWindow = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onMouseEnterWindow = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    // 2. High-performance Animation Loop (lerp)
    let animationFrameId: number;
    
    const updatePosition = () => {
      const mouse = mouseRef.current;
      const ring = ringCoordsRef.current;
      
      // Outer ring lerp formula (elastic follow)
      ring.x += (mouse.x - ring.x) * 0.15;
      ring.y += (mouse.y - ring.y) * 0.15;
      
      // Update DOM elements directly for 0ms lag & 60+ FPS
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* 🔴 Inner Dot (Follows mouse position instantly) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-purple-500 rounded-full pointer-events-none z-[9999] transition-opacity duration-300 pointer-events-none mix-blend-screen"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          willChange: "transform",
        }}
      />
      
      {/* ⭕ Outer Circle (Follows mouse position with dynamic lerp delay) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-purple-500/50 pointer-events-none z-[9998] transition-all duration-300 will-change-transform mix-blend-screen ${
          isHovered 
            ? "bg-purple-500/10 border-purple-400 scale-150 shadow-[0_0_15px_rgba(168,85,247,0.3)]" 
            : "bg-transparent border-purple-500/50 scale-100"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          willChange: "transform",
        }}
      />
    </>
  );
}
