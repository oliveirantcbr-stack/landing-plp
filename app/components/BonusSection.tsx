"use client";

import {
  Gift,
  Sparkles,
  Crown,
  Layers,
  Settings,
  Package,
  Bot,
  Puzzle,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { ShinyButton } from "@/components/shiny-button";
import { scrollToOferta } from "@/lib/scrollToOferta";

export function BonusSection() {
  const bonuses = [
    {
      icon: Crown,
      title: "Elementor Pro",
      desc: "Tenha acesso a recursos premium para criar páginas profissionais.",
    },
    {
      icon: Settings,
      title: "Aulas de Personalização",
      desc: "Domine ajustes visuais e estilização avançada no Elementor.",
    },
    {
      icon: Sparkles,
      title: "Aulas de Otimização",
      desc: "Melhore performance, carregamento e usabilidade das páginas.",
    },
    {
      icon: Package,
      title: "Pack do Designer (NOVO)",
      desc: "Elementos e estilos exclusivos para elevar o design das suas páginas.",
    },
    {
      icon: Layers,
      title: "Plugin Clonador de Página (NOVO)",
      desc: "Clone páginas inteiras com um clique e acelere seu workflow.",
    },
    {
      icon: Gift,
      title: "Kit do Digital (NOVO)",
      desc: "Materiais, ferramentas e utilitários essenciais para o dia a dia.",
    },
    {
      icon: Bot,
      title: "Assistente IA (NOVO)",
      desc: "Gere ideias, textos e otimizações automaticamente.",
    },
    {
      icon: Zap,
      title: "LP Generator (NOVO)",
      desc: "Gere páginas completas em poucos cliques diretamente no Elementor.",
    },
    {
      icon: Puzzle,
      title: "Diversos Plugins Úteis",
      desc: "Ferramentas selecionadas para aumentar produtividade no WordPress.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-28">
      {/* HEADER */}
      <div className="text-center px-4 mb-12 sm:mb-14 md:mb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900/60 border border-gray-800 mb-5">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-300 tracking-wide">
              BÔNUS INCLUÍDOS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Tudo que você precisa para criar páginas de alto nível
          </h2>

          <div className="w-24 sm:w-32 md:w-40 h-[2px] bg-white/30 mx-auto mt-6 sm:mt-8 rounded-full" />

          <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Recursos exclusivos que aumentam sua produtividade e aceleram seus
            resultados.
          </p>
        </div>
      </div>

      {/* GRID DE BÔNUS */}
      <div
        className="
          max-w-6xl mx-auto px-4
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
          relative z-10
        "
      >
        {bonuses.map((b, i) => {
          const Icon = b.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
              className="p-[2px] rounded-2xl bg-gradient-to-br from-white/15 via-transparent to-transparent"
            >
              <div className="rounded-2xl bg-black/70 p-6 border border-white/10 backdrop-blur-xl h-full">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    filter:
                      "drop-shadow(0 0 12px rgba(255,255,255,0.45))",
                  }}
                  transition={{ duration: 0.25 }}
                  className="mb-4 w-fit"
                >
                  <Icon className="h-8 w-8 text-white/85" />
                </motion.div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {b.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA FINAL */}
      <div className="mt-16 flex flex-col items-center text-center relative z-10 max-w-xl mx-auto px-4">
        <p className="text-gray-300 text-base mb-6">
          Não perca tempo no design, foque no que importa: conversão.
          <br />
          Experimente o Pack Landing Page hoje.
        </p>

        <ShinyButton
          onClick={scrollToOferta}
          aria-label="Experimentar o Pack Landing Page por 7 dias"
          className="
    transition-transform duration-300 ease-out 
    hover:scale-105
  "
        >
          QUERO COMEÇAR AGORA MESMO
        </ShinyButton>

      </div>
    </section>
  );
}
