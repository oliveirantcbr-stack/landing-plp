"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PremiumCTAProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function PremiumCTA({
  children = "EXPERIMENTE POR 7 DIAS",
  className = "",
  onClick,
}: PremiumCTAProps) {
  return (
    <div className={cn("rgb-wrapper rounded-xl", className)}>
      <button
        onClick={onClick}
        className={cn(
          "relative px-10 py-4 rounded-xl font-semibold text-white tracking-wide overflow-hidden group",
          "bg-black/90 backdrop-blur-xl border border-white/20",
          "transition-all duration-300 btn-glow btn-shine"
        )}
      >
        {/* Shine Layer */}
        <span className="relative z-10">{children}</span>
      </button>
    </div>
  );
}
