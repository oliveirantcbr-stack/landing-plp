"use client"

import type React from "react"
import { ExternalLink } from "lucide-react"

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export function ShinyButton({ 
  children, 
  onClick, 
  className = "", 
  style = {},
}: ShinyButtonProps) {
  return (
    <button 
      className={`group relative flex items-stretch overflow-hidden border border-white/20 bg-slate-950 transition-all active:scale-[0.98] ${className}`}
      onClick={onClick}
      style={style}
    >
      {/* 🔮 Sophisticated 'Midnight' Liquid Layer (GPU-Accelerated) */}
      <div className="absolute inset-0 z-0 opacity-90 group-hover:opacity-100 transition-opacity">
        {/* Deep Midnight Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950" />
        
        {/* Elegant Moving Silk Blobs */}
        <div className="absolute top-[-20%] left-[-10%] size-[120%] bg-purple-600/20 blur-[50px] rounded-full animate-[liquid_7s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] right-[-10%] size-[120%] bg-indigo-500/20 blur-[50px] rounded-full animate-[liquid_10s_ease-in-out_infinite_reverse]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 px-8 py-4 flex items-center justify-center border-r border-white/10 overflow-hidden bg-white/[0.02] backdrop-blur-md">
        {/* Shimmer Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine-slow pointer-events-none"
        />
        
        <span className="text-sm md:text-base font-black tracking-[0.2em] text-white uppercase whitespace-nowrap drop-shadow-lg">
          {children}
        </span>
      </div>

      {/* Icon Area (Split Design) */}
      <div className="relative z-10 px-4 flex items-center justify-center bg-white/[0.03] group-hover:bg-white/[0.1] transition-colors">
        <ExternalLink className="size-4 text-white/60 group-hover:text-white transition-all group-hover:scale-110 drop-shadow-lg" />
      </div>

      <style jsx global>{`
        @keyframes liquid {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(5%, 10%) scale(1.1); }
          66% { transform: translate(-5%, 5%) scale(0.9); }
        }
        @keyframes shine-slow {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(150%) skewX(-15deg); }
        }
        .animate-shine-slow {
          animation: shine-slow 2s ease-in-out infinite;
        }
      `}</style>
    </button>
  )
}
