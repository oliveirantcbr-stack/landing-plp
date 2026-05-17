// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import FloatingCTA from "@/app/components/FloatingCTA";
import ScrollLockOnLoad from "@/app/components/ScrollLockOnLoad";

import { DevToolsMessage } from "@/app/components/DevToolsMessage";

/* ============================
   FONTE INTER (AUTO-HOSPEDADA)
============================ */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

/* ============================
   METADATA
============================ */
export const metadata: Metadata = {
  title: "Pack Landing Page",
  description: "Landing Pages Premium",
  icons: {
    icon: "/logoplpnew.svg",
    apple: "/logoplpnew.svg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.className} overflow-x-hidden`}>
      <head>
        <link rel="preconnect" href="https://api6.ipify.org" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" />
      </head>
      <body className="bg-black text-white min-h-screen overflow-x-hidden w-full relative">
        {/* =================================================
            🔥 UTMIFY – CAPTURA DE UTMs
        ================================================= */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="lazyOnload"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
        />

        {/* =================================================
            🔥 UTMIFY – META PIXEL
            (Integra corretamente com Cakto)
        ================================================= */}
        <Script
          id="utmify-meta-pixel"
          strategy="worker"
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "68d474d381056b37956c018d";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />



        {/* 🔒 FIX DEFINITIVO DO AUTO-SCROLL MOBILE */}
        <ScrollLockOnLoad />

        {/* 🕵️ MENSAGEM PARA CURIOSOS NO CONSOLE */}
        <DevToolsMessage />

        {/* =================================================
            GRID GLOBAL FIXO (não afeta LCP)
        ================================================= */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          <div className="absolute inset-0 bg-black" />
          <div
            className="absolute inset-0"
            style={{
              opacity: 0.15,
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' stroke='rgb(255 255 255 / 0.04)' fill='none'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
          />
        </div>

        {/* =================================================
            CONTEÚDO
        ================================================= */}
        <main className="relative z-10">
          {children}
          <FloatingCTA />
        </main>
      </body>
    </html>
  );
}
