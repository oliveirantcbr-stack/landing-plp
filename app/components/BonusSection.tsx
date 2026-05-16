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
      title: "PRO",
      desc: "Recursos premium para criar páginas profissionais.",
    },
    {
      icon: Zap,
      title: "Gerador de Landing Page",
      desc: "Gere paginas inteiras em poucos cliques",
      exclusive: true,
    },
    {
      icon: Settings,
      title: "Customização",
      desc: "Domine ajustes visuais e estilização avançada.",
    },
    {
      icon: Sparkles,
      title: "Otimização",
      desc: "Melhore performance e carregamento das suas páginas.",
    },
    {
      icon: Package,
      title: "Pack Designer",
      desc: "Elementos exclusivos para elevar o design das páginas.",
    },
    {
      icon: Layers,
      title: "Plugin Clonador",
      desc: "Clone páginas inteiras com um clique no WordPress.",
    },
    {
      icon: Gift,
      title: "Kit Digital",
      desc: "Materiais e ferramentas essenciais para o dia a dia.",
    },
    {
      icon: Bot,
      title: "Assistente IA",
      desc: "Gere ideias, textos e otimizações automaticamente.",
    },
    {
      icon: Puzzle,
      title: "Plugins Elite",
      desc: "Ferramentas selecionadas para aumentar produtividade.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 relative overflow-hidden bg-[#0a0a0a]">
      {/* HEADER */}
      <div className="text-center px-4 mb-10 md:mb-14 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)] animate-pulse" />
            <span className="text-[10px] text-white/60 font-black uppercase tracking-[0.2em]">
              Ecossistema Elite
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-4">
            Bônus que aceleram seu <span className="text-white/40 italic">Sucesso.</span>
          </h2>

          <p className="text-white/30 text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
            Ferramentas exclusivas integradas para elevar seu nível de entrega e produtividade.
          </p>
        </div>
      </div>

      {/* GRID DE BÔNUS */}
      <div
        className="
          max-w-6xl mx-auto px-4
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
          relative z-10
        "
      >
        {bonuses.map((b, i) => {
          const Icon = b.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <div className="rounded-2xl bg-zinc-950/40 p-6 border border-white/10 hover:border-purple-500/30 hover:bg-zinc-900/60 transition-all duration-500 h-full flex flex-col gap-4 relative overflow-hidden backdrop-blur-xl shadow-2xl">
                {/* Subtle Inner Highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
                
                {/* Noise Texture Overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
                <div className="w-fit rounded-lg border border-white/5 bg-white/5 p-2 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-white/90" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-tight">
                      {b.title}
                    </h3>
                    {b.exclusive && (
                      <span className="text-[7px] font-black bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded-sm border border-purple-500/30 animate-pulse">
                        EXCLUSIVO
                      </span>
                    )}
                  </div>
                  <p className="text-white/40 text-[11px] md:text-xs font-medium leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA FINAL */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-14 flex flex-col items-center text-center relative z-10 max-w-xl mx-auto px-4"
      >
        <p className="text-white/40 text-[12px] md:text-sm font-medium mb-8 leading-relaxed uppercase tracking-wider">
          Domine o mercado com o arsenal completo.
        </p>

        <ShinyButton
          onClick={scrollToOferta}
          highlightColor="#a855f7"
          style={{ "--padding": "1.1rem 2.5rem", "--font-size": "12px" } as React.CSSProperties}
          className="w-full md:w-auto max-w-[280px] md:max-w-none font-black tracking-widest uppercase shadow-2xl shadow-purple-500/10"
        >
          QUERO MEU ACESSO AGORA
        </ShinyButton>
      </motion.div>
    </section>
  );
}
