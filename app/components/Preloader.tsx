"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Garantir que o scroll esteja travado enquanto carrega
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const finishLoading = () => {
      // Delay suave para a transição
      setTimeout(() => setIsLoading(false), 800);
    };

    // Segurança: Timeout máximo de 3 segundos
    const safetyTimeout = setTimeout(finishLoading, 3000);

    const handleLoad = () => {
      clearTimeout(safetyTimeout);
      finishLoading();
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(safetyTimeout);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Liberar scroll após a animação de saída começar
      const timer = setTimeout(() => {
        document.body.style.overflow = "";
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Ambient Background Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            className="absolute inset-0 bg-purple-600/20 blur-[120px] rounded-full"
          />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <Image
                src="/logoplpnew.svg"
                alt="Pack PLP Logo"
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                priority
              />

              {/* Progress Line - Ultra Clean */}
              <div className="mt-10 w-32 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
