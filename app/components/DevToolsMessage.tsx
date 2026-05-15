"use client";

import { useEffect } from "react";

export function DevToolsMessage() {
  useEffect(() => {
    const message = `
%c 🚀 PACK LANDING PAGE %c

Design premium e performance extrema para quem não aceita o comum.

Gostou do que viu por baixo do capô? 
Garanta seu acesso agora e leve seus projetos para outro nível:
👉 https://packplp.com.br

`;

    const style1 = "color: #a855f7; font-size: 24px; font-weight: 800; font-family: sans-serif; text-shadow: 0 0 10px rgba(168,85,247,0.5); padding: 10px 0;";
    const style2 = "color: #888; font-size: 12px; font-weight: 500; font-family: sans-serif; line-height: 1.5;";

    console.log(message, style1, style2);
  }, []);

  return null;
}
