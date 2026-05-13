"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { GlassButton } from "@/app/components/floating-cta-button";
import { scrollToOferta } from "@/lib/scrollToOferta";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            fixed bottom-0 left-0 right-0 z-[9999]
            p-3
            sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 sm:w-auto
            pointer-events-none
          "
        >
          <div
            className="
              pointer-events-auto
              flex items-center gap-3
              max-w-max mx-auto
              p-1.5 sm:p-2
              rounded-full
              bg-black/80 backdrop-blur-lg
              border border-white/10
              shadow-xl
            "
          >
            {/* LOGO */}
            <Image
              src="/logo-160.webp"
              alt="Pack Landing Page"
              width={48}
              height={48}
            />

            {/* CTA PRINCIPAL */}
<GlassButton
  onClick={scrollToOferta}
  aria-label="Iniciar teste gratuito de 7 dias"
>
  INICIAR 7 DIAS DE TESTE
</GlassButton>


            {/* ORB WHATSAPP (ANIMAÇÃO SUTIL) */}
            <motion.a
              href="https://wa.me/5531992369175?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20Pack%20Landing%20Page."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com suporte no WhatsApp"
              className="
                w-11 h-11
                rounded-full
                flex items-center justify-center
                bg-black
                border border-white/70
                shadow-lg shadow-black/40
                hover:border-white
              "
              animate={{
                y: [0, -3, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 18,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 0,
              }}
            >
              <Image
                src="/wpp.svg"
                alt="WhatsApp"
                width={22}
                height={22}
                className="pointer-events-none"
              />
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
