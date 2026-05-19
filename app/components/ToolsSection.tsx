"use client";

import React, { useRef } from "react";
import { LayoutTemplate, MousePointerClick, FileSignature } from "lucide-react";
import { motion, useInView } from "framer-motion";

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
    <div className="relative pt-24 pb-12 w-full overflow-hidden flex flex-col items-center justify-center bg-transparent z-20">
      {/* Background glow lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full" ref={ref}>
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm text-neutral-300 font-medium tracking-wide uppercase">
              Ferramentas Exclusivas
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4"
          >
            Acelere sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">produção</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 max-w-2xl text-lg"
          >
            Além dos templates, você recebe acesso a um ecossistema de geradores para otimizar o seu tempo e profissionalizar suas entregas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              className="group relative h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              <div className={`relative h-full flex flex-col p-8 rounded-3xl bg-[#111] border border-white/[0.05] ${tool.border} transition-colors duration-500 overflow-hidden`}>
                
                {/* Ícone com glow sutil no hover */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 blur-xl opacity-0 transition-opacity duration-500 rounded-full ${tool.glow}`} />
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                    {tool.icon}
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white mb-3">
                  {tool.title}
                </h3>
                
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {tool.description}
                </p>

                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 text-sm font-medium text-neutral-300">
                    Saber mais
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
