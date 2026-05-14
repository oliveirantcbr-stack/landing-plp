"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function TextureOverlay() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Only show the grid after the hero section (roughly 600px/80vh)
  const opacity = useTransform(scrollY, [0, 600], [0, 0.12]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div 
      style={{ opacity }}
      className="fixed inset-0 z-[1] pointer-events-none overflow-hidden"
    >
      {/* 🕸️ THE GRID */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Fades for smooth transitions */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </motion.div>
  );
}
