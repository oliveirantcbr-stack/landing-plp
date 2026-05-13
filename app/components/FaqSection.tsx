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
    q: "O Elementor Pro já está incluso?",
    a: "Sim. Todos os planos incluem Elementor Pro para uso durante o período da assinatura.",
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
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold">Dúvidas frequentes</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tudo o que você precisa saber antes de entrar.
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = open === i;

            return (
              <motion.div
                key={i}
                layout="position" // 🔧 evita jump de layout
                className={`
                  relative rounded-xl transition-all
                  ${
                    isOpen
                      ? "border border-blue-500/30 bg-muted/50"
                      : "border border-border/40 bg-muted/30"
                  }
                `}
              >
                {/* GLOW ATIVO */}
                {isOpen && (
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 rounded-[inherit] bg-blue-500/10 blur-xl"
                  />
                )}

                {/* QUESTION */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="
                    w-full flex items-center justify-between gap-6
                    px-6 py-5 text-left
                  "
                >
                  <span className="font-medium text-base md:text-lg">
                    {item.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="
                      flex items-center justify-center size-8
                      rounded-full bg-muted/60
                    "
                  >
                    <ChevronDown className="size-4 text-blue-400" />
                  </motion.span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden" // 🔧 evita empurrão
                    >
                      <div className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
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
    </section>
  );
}
