"use client";

import { useEffect } from "react";

export default function ScrollLockOnLoad() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Desativa restauração automática
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. TRAVA o scroll temporariamente
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 3. Força topo imediatamente
    window.scrollTo(0, 0);

    // 4. Libera scroll APÓS layout estabilizar
    const unlock = setTimeout(() => {
      document.body.style.overflow = originalStyle || "";
      window.scrollTo(0, 0);
    }, 200); // 🔥 TEMPO CRÍTICO

    return () => clearTimeout(unlock);
  }, []);

  return null;
}
