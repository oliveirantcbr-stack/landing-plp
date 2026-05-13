"use client";

import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface UnicornBackgroundProps {
  scenePath: string;
  className?: string;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    UnicornStudio: any;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let globalPlayerInstance: any = null;

export default function UnicornBackground({
  scenePath,
  className = "",
}: UnicornBackgroundProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const UNICORN_ID = "unicorn-scene-canvas";

  useEffect(() => {
    if (scriptLoaded && window.UnicornStudio && containerRef.current) {
      if (globalPlayerInstance) {
        if (globalPlayerInstance.destroy) globalPlayerInstance.destroy();
        globalPlayerInstance = null;
      }

      try {
        const absolutePath = scenePath.startsWith('/') ? scenePath : `/${scenePath}`;
        console.log('Iniciando addScene via elementId e filePath...');
        
        // v2.1.12 exige elementId como string para localizar o container
        window.UnicornStudio.addScene({
          elementId: UNICORN_ID, 
          filePath: absolutePath, 
          production: false,
          lazyLoad: false,
          fps: 60,
          scale: 1,
          dpi: 1
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }).then((scene: any) => {
          console.log('🚀 SUCESSO: Player inicializado via elementId!');
          globalPlayerInstance = scene;
          if (scene && scene.play) scene.play();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }).catch((err: any) => {
          console.error('Erro no addScene:', err);
        });

      } catch (err) {
        console.error("Erro crítico:", err);
      }
    }
  }, [scriptLoaded, scenePath]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.12/dist/unicornStudio.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          setScriptLoaded(true);
        }}
      />
      
      <div
        id={UNICORN_ID} // ID obrigatório para o SDK v2
        ref={containerRef}
        className={className}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: -1, 
          pointerEvents: 'none',
          background: 'transparent'
        }}
      />
    </>
  );
}
