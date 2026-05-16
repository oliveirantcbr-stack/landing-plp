"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface UnicornBackgroundProps {
  scenePath: string;
  className?: string;
  scale?: number;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    UnicornStudio: any;
  }
}

// Armazena a instância global para evitar múltiplas inicializações
let globalPlayerInstance: any = null;

export default function UnicornBackground({
  scenePath,
  className = "",
  scale = 1,
}: UnicornBackgroundProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const UNICORN_ID = "unicorn-scene-canvas";

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const initScene = () => {
      // Verifica se o SDK e o container estão prontos
      if (!window.UnicornStudio || !containerRef.current) {
        timeoutId = setTimeout(initScene, 50);
        return;
      }

      // Limpeza de instância anterior
      if (globalPlayerInstance) {
        if (globalPlayerInstance.destroy) globalPlayerInstance.destroy();
        globalPlayerInstance = null;
      }

      try {
        const absolutePath = scenePath.startsWith('/') ? scenePath : `/${scenePath}`;
        const isMobile = typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches;
        
        // DPI 1 como padrão (original) para evitar problemas de compatibilidade
        // No mobile, limitamos a 2 se o device permitir, mas o padrão do pack era 1
        const targetDpi = isMobile ? Math.min(window.devicePixelRatio, 2) : 1;

        window.UnicornStudio.addScene({
          elementId: UNICORN_ID, 
          filePath: absolutePath, 
          production: false,
          lazyLoad: false,
          fps: isMobile ? 30 : 60, 
          scale: scale,
          dpi: targetDpi,
          antialias: !isMobile 
        }).then((scene: any) => {
          console.log("WebGL Scene Loaded");
          globalPlayerInstance = scene;
          if (scene && scene.play) scene.play();
          
          // Ativa a visibilidade com um pequeno delay para evitar flashes
          setTimeout(() => setIsReady(true), 200);
        }).catch((err: any) => {
          console.error('Erro no addScene:', err);
          // Fallback: mostra o container mesmo se houver erro (pode estar renderizando algo parcial)
          setIsReady(true);
        });
      } catch (err) {
        console.error("Erro crítico na inicialização do WebGL:", err);
        setIsReady(true);
      }
    };

    if (scriptLoaded) {
      initScene();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [scriptLoaded, scenePath, scale]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.12/dist/unicornStudio.umd.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      
      <div
        id={UNICORN_ID}
        ref={containerRef}
        className={className}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 1, // Garantindo que fique acima do background estático
          pointerEvents: 'none',
          opacity: isReady ? 1 : 0,
          transition: 'opacity 1.5s ease-in-out',
          visibility: isReady ? 'visible' : 'hidden' // Garante que não interfira se não estiver pronto
        }}
      />
    </>
  );
}


