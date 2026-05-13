import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface GridBackgroundProps {
  description: string
  badgeText?: string
  className?: string
}

export function GridBackground({
  description,
  badgeText = "Veja como funciona",
  className,
}: GridBackgroundProps) {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl">
      {/* Fundo otimizado */}
      <div className="absolute inset-0 bg-black/40 -z-10" />
      
      {/* Card principal */}
      <div 
        className={cn(
          'relative mx-auto max-w-4xl px-6 py-10 md:px-8 md:py-14',
          'bg-black/95 border border-white/10',
          'shadow-xl shadow-black/50',
          className
        )}
      >
        {/* Dot superior centralizado com animação */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <div className="relative">
            {/* Glow reduzido com animação */}
            <div className="absolute -inset-0.5 bg-white/20 rounded-full blur-[2px] animate-[pulse-glow_2s_ease-in-out_infinite]" />
            {/* Dot principal com animação */}
            <div className="relative w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_1px_rgba(255,255,255,0.4)] animate-[gentle-pulse_2s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Borda sutil */}
        <div className="absolute inset-0 border border-white/10" />

        {/* Conteúdo */}
        <div className="relative z-10 text-center px-4 md:px-0 space-y-8 md:space-y-10">
          {/* Descrição principal */}
          <p className='text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed max-w-2xl mx-auto'>
            {description}
          </p>

          {/* Badge Glass */}
          <div className="group inline-block">
            <div className="inline-flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-xl bg-black/70 border border-white/15 hover:border-white/30 transition-all duration-200 cursor-pointer active:scale-[0.98]">
              <span className="text-sm md:text-base text-white font-medium">
                {badgeText}
              </span>
              <div className="relative w-5 h-5 md:w-6 md:h-6">
                <ChevronDown className="w-full h-full text-white/90 group-hover:text-white transition-colors duration-200" />
              </div>
            </div>
          </div>
        </div>

        {/* Glow otimizado e reduzido */}
        <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-white/2 to-transparent blur-md -z-10 pointer-events-none opacity-25" />
      </div>
    </div>
  )
}