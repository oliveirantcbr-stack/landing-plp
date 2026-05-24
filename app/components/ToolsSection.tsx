"use client";

import React, { useRef } from "react";
import { LayoutTemplate, MousePointerClick, FileSignature } from "lucide-react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const tools = [
  {
    title: "Gerador de Landing Page",
    description: "Monte sua landing page em minutos, selecione os blocos, e em 3 passos, a estrutura completa está montada.",
    icon: <LayoutTemplate className="w-8 h-8 text-neutral-300" />,
    gradient: "from-blue-500/10 to-transparent",
    border: "group-hover:border-blue-500/50",
    glow: "group-hover:bg-blue-500/20",
  },
  {
    title: "Gerador de Botões",
    description: "Desenvolva botões CTA (Call-to-Action) altamente atrativos com design premium. Exporte o código limpo (HTML/CSS/React) e aumente drasticamente o CTR de qualquer página.",
    icon: <MousePointerClick className="w-8 h-8 text-neutral-300" />,
    gradient: "from-purple-500/10 to-transparent",
    border: "group-hover:border-purple-500/50",
    glow: "group-hover:bg-purple-500/20",
  },
  {
    title: "Gerador de Contratos",
    description: "Proteja seus negócios com contratos profissionais. Gere acordos de prestação de serviço em minutos, com cláusulas de proteção blindadas por advogados especializados no mercado digital.",
    icon: <FileSignature className="w-8 h-8 text-neutral-300" />,
    gradient: "from-emerald-500/10 to-transparent",
    border: "group-hover:border-emerald-500/50",
    glow: "group-hover:bg-emerald-500/20",
  },
];

export function ToolsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative pt-12 pb-6 md:pt-24 md:pb-12 w-full overflow-hidden flex flex-col items-center justify-center bg-transparent z-20">
      {/* Background glow lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full" ref={ref}>
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <div
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4 md:mb-6 transition-all duration-700 transform ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] md:text-sm text-neutral-300 font-medium tracking-wide uppercase">
              Ferramentas Exclusivas
            </span>
          </div>
          
          <h2 
            className={cn(
              "text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white mb-3 md:mb-4 uppercase transition-all duration-700 transform ease-out delay-75",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Acelere sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-400">produção</span>
          </h2>

          <p 
            className={cn(
              "text-neutral-400 max-w-xl text-xs sm:text-sm md:text-lg leading-relaxed transition-all duration-700 transform ease-out delay-150",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Além dos templates, você recebe acesso a um ecossistema de geradores para otimizar o seu tempo e profissionalizar suas entregas.
          </p>
        </div>

        {/* 🛠️ SINGLE UNIFIED HIGH-TECH GRID BLOCK (Colados, sem "Acessar Ferramenta") */}
        <div className="relative bg-black/75 backdrop-blur-xl border border-white/20 rounded-none shadow-2xl w-full">
          
          {/* 🌟 FOUR OUTERMOST GLOWING CORNER SQUARES */}
          <div className="absolute -top-[3px] -left-[3px] size-1.5 bg-white shadow-[0_0_8px_#fff] z-30" />
          <div className="absolute -top-[3px] -right-[3px] size-1.5 bg-white shadow-[0_0_8px_#fff] z-30" />
          <div className="absolute -bottom-[3px] -left-[3px] size-1.5 bg-white shadow-[0_0_8px_#fff] z-30" />
          <div className="absolute -bottom-[3px] -right-[3px] size-1.5 bg-white shadow-[0_0_8px_#fff] z-30" />

          {/* Grid Layout with automatic responsive dividers (Colados) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {tools.map((tool, idx) => (
              <div
                key={idx}
                className={cn(
                  "group relative flex flex-col overflow-hidden transition-all duration-700 transform ease-out",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                {/* 🔮 Top Icon Block (Segmented with border-b) */}
                <div className="p-6 border-b border-white/10 flex items-center justify-center bg-white/[0.01] relative overflow-hidden group-hover:bg-white/[0.03] transition-colors duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-b ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 w-14 h-14 rounded-none bg-black border border-white/15 flex items-center justify-center shadow-[inset_0_1px_4px_rgba(255,255,255,0.05)] group-hover:border-purple-500/50 transition-all duration-500">
                    <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-purple-500/10 rounded-full" />
                    <div className="relative z-10 text-white brightness-0 invert group-hover:scale-110 transition-transform duration-500">
                      {tool.icon}
                    </div>
                  </div>
                </div>

                {/* 📝 Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-start space-y-3 bg-transparent">
                  <h3 className="text-base md:text-lg font-black text-white tracking-tight uppercase group-hover:text-purple-400 transition-colors duration-500">
                    {tool.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed text-xs md:text-sm font-medium">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
