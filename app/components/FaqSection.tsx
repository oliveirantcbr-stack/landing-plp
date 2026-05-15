"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Sou iniciante, é para mim?",
    a: "Sim. A biblioteca foi pensada para iniciantes e profissionais. Você terá seções prontas, códigos reutilizáveis e aulas de personalização que facilitam o uso mesmo sem experiência avançada.",
  },
  {
    q: "Preciso ter hospedagem?",
    a: "Sim. Para usar a biblioteca você precisa de uma hospedagem e um site WordPress. Porém, membros da plataforma têm acesso a descontos exclusivos em serviços de hospedagem.",
  },
  {
    q: "O acesso é vitalício?",
    a: "Não. O acesso funciona por assinatura, garantindo atualizações constantes, novos códigos, seções e melhorias contínuas.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Você pode cancelar a qualquer momento, direto pela plataforma, sem burocracia.",
  },
  {
    q: "Como funciona a garantia de 7 dias?",
    a: "Você pode testar tudo sem risco. Se não fizer sentido, basta cancelar em até 7 dias e receber 100% do valor de volta.",
  },
  {
    q: "Recebo novas seções e códigos?",
    a: "Sim. A biblioteca é atualizada semanalmente com novos conteúdos e melhorias.",
  },
  {
    q: "Posso usar em projetos de clientes?",
    a: "Sim. Você pode usar os códigos, seções e botões em projetos próprios e de clientes.",
  },
  {
    q: "O suporte é realmente via WhatsApp?",
    a: "Sim. Nos planos Trimestral e Anual você tem suporte direto via WhatsApp.",
  },
];

export default function FaqSection() {
  // 🔧 FIX: começa tudo fechado (evita scroll automático)
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-32 bg-[#0a0a0a]">
      <div className="mx-auto max-w-5xl px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
             <div className="size-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Base de Conhecimento</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            DÚVIDAS <span className="text-zinc-500">FREQUENTES.</span>
          </h2>
        </div>

        {/* LIST - 2 Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {FAQS.map((item, i) => {
            const isOpen = open === i;

            return (
              <motion.div
                key={i}
                layout="position"
                className={`
                  relative rounded-2xl overflow-hidden transition-all duration-500 h-fit
                  ${
                    isOpen
                      ? "border border-purple-500/30 bg-white/[0.05]"
                      : "border border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"
                  }
                `}
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="
                    w-full flex items-center justify-between gap-6
                    px-6 py-5 text-left
                  "
                >
                  <span className={`text-sm md:text-base font-bold uppercase tracking-tight transition-colors ${isOpen ? "text-purple-400" : "text-white/70"}`}>
                    {item.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                    className={`
                      flex items-center justify-center size-8
                      rounded-full transition-colors shrink-0
                      ${isOpen ? "bg-purple-500/20" : "bg-white/5"}
                    `}
                  >
                    <ChevronDown className={`size-4 ${isOpen ? "text-purple-400" : "text-white/30"}`} />
                  </motion.span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-zinc-500 font-medium leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SUBTLE BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full bg-purple-600/5 blur-[120px] pointer-events-none -z-10" />
    </section>
  );
}
