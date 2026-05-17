"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShinyButton } from "@/components/shiny-button";
import { scrollToOferta } from "@/lib/scrollToOferta";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Recursos", href: "#beneficios" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Oferta", href: "#oferta" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-2" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`relative flex items-center justify-between px-5 md:px-8 py-3 transition-all duration-500 border border-white/20 ${
          scrolled 
            ? "bg-black/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
            : "bg-black/20 backdrop-blur-md"
        }`}>
          {/* CORNER SQUARES */}
          <div className="absolute -top-[3px] -left-[3px] size-1.5 bg-white shadow-[0_0_8px_#fff]" />
          <div className="absolute -top-[3px] -right-[3px] size-1.5 bg-white shadow-[0_0_8px_#fff]" />
          <div className="absolute -bottom-[3px] -left-[3px] size-1.5 bg-white shadow-[0_0_8px_#fff]" />
          <div className="absolute -bottom-[3px] -right-[3px] size-1.5 bg-white shadow-[0_0_8px_#fff]" />
          
          {/* LOGO with INTENSE PURPLE GLOW */}
          <div className="relative group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* Base constant glow */}
            <div className="absolute inset-0 bg-purple-600/30 blur-xl rounded-full scale-125 opacity-100" />
            {/* Interactive inner glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-md rounded-full scale-110 opacity-100 group-hover:bg-purple-400/40 transition-all duration-500" />
            
            <Image
              src="/logoplpnew.svg"
              alt="Pack PLP Logo"
              width={110}
              height={28}
              className="relative z-10 h-5 md:h-7 w-auto drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              priority
            />
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-purple-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            {/* Botão de Login Roxo (Desktop) */}
            <div className="hidden sm:block">
              <button
                onClick={() => window.open("https://app.packlp.com", "_blank")}
                className="relative px-5 py-2 bg-purple-600 text-white hover:bg-purple-500 text-[10px] font-black tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] border border-purple-500/50"
              >
                {/* BUTTON CORNER SQUARES */}
                <div className="absolute -top-[2px] -left-[2px] size-1 bg-purple-400 shadow-[0_0_5px_#c084fc]" />
                <div className="absolute -top-[2px] -right-[2px] size-1 bg-purple-400 shadow-[0_0_5px_#c084fc]" />
                <div className="absolute -bottom-[2px] -left-[2px] size-1 bg-purple-400 shadow-[0_0_5px_#c084fc]" />
                <div className="absolute -bottom-[2px] -right-[2px] size-1 bg-purple-400 shadow-[0_0_5px_#c084fc]" />
                
                LOGIN
              </button>
            </div>

            <div className="hidden sm:block">
              <button
                onClick={scrollToOferta}
                className="relative px-6 py-2 bg-white text-black text-[10px] font-black tracking-widest uppercase hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                {/* BUTTON CORNER SQUARES */}
                <div className="absolute -top-[2px] -left-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
                <div className="absolute -top-[2px] -right-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
                <div className="absolute -bottom-[2px] -left-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
                <div className="absolute -bottom-[2px] -right-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
                
                COMEÇAR AGORA
              </button>
            </div>
            
            <button 
              className={`md:hidden p-2 rounded-xl transition-all ${mobileMenuOpen ? 'bg-purple-600/20 text-purple-400' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - More compact and refined */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-[92%] max-w-sm mt-3 md:hidden z-50"
          >
            <div className="bg-zinc-950/95 backdrop-blur-3xl border border-white/10 rounded-[32px] p-6 flex flex-col gap-5 shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
              <div className="grid grid-cols-2 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center py-4 px-2 rounded-2xl bg-white/[0.03] border border-white/5 text-[11px] font-black uppercase tracking-widest text-white/60 hover:text-purple-400 active:scale-95 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="h-px bg-white/5 w-full" />
              
              <div className="grid grid-cols-2 gap-3 w-full">
                {/* Botão Começar Agora (Mobile) */}
                <button
                  onClick={() => {
                    scrollToOferta();
                    setMobileMenuOpen(false);
                  }}
                  className="relative w-full py-3.5 bg-white text-black text-[9px] font-black tracking-widest uppercase hover:bg-zinc-200 transition-all shadow-[0_5px_15px_rgba(255,255,255,0.1)] flex items-center justify-center"
                >
                  {/* BUTTON CORNER SQUARES */}
                  <div className="absolute -top-[2px] -left-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
                  <div className="absolute -top-[2px] -right-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
                  <div className="absolute -bottom-[2px] -left-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
                  <div className="absolute -bottom-[2px] -right-[2px] size-1 bg-white shadow-[0_0_5px_#fff]" />
                  
                  COMEÇAR AGORA
                </button>

                {/* Botão Login (Mobile) */}
                <button
                  onClick={() => {
                    window.open("https://app.packlp.com", "_blank");
                    setMobileMenuOpen(false);
                  }}
                  className="relative w-full py-3.5 bg-purple-600 text-white hover:bg-purple-500 text-[9px] font-black tracking-widest uppercase transition-all shadow-[0_5px_15px_rgba(168,85,247,0.2)] border border-purple-500/50 flex items-center justify-center"
                >
                  {/* BUTTON CORNER SQUARES */}
                  <div className="absolute -top-[2px] -left-[2px] size-1 bg-purple-400 shadow-[0_0_5px_#c084fc]" />
                  <div className="absolute -top-[2px] -right-[2px] size-1 bg-purple-400 shadow-[0_0_5px_#c084fc]" />
                  <div className="absolute -bottom-[2px] -left-[2px] size-1 bg-purple-400 shadow-[0_0_5px_#c084fc]" />
                  <div className="absolute -bottom-[2px] -right-[2px] size-1 bg-purple-400 shadow-[0_0_5px_#c084fc]" />
                  
                  LOGIN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
