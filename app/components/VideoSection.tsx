"use client";

import React, { useState } from "react";
import Image from "next/image";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full py-16 md:py-24 bg-black overflow-hidden">
      {/* Background Image matching the 'Com o Pack Landing Page Você' section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/bgcardcta.webp"
          alt="Video Section Background"
          fill
          className="object-cover opacity-20"
        />
        {/* Stronger fade over the image so it blends perfectly with the black hero above */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent" />
      </div>

      {/* 🌑 TOP GRADIENT MASK FOR SEAMLESS TRANSITION - Ensures the top edge is pure black */}
      <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

      {/* 🌑 BOTTOM GRADIENT OVERLAYS FOR DEPTH - Fades to black to match the next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* Background glow for the video */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[1000px] h-64 bg-purple-600/20 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Subtle Title Above */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-purple-500 mb-4">
            <div className="size-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">Veja na Prática</span>
            <div className="size-1.5 rounded-full bg-purple-500 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
            Como funciona o <span className="text-purple-500">Pack</span>
          </h2>
        </div>

        {/* Video Card Wrapper with Intense Glow */}
        <div className="relative w-full group/card mt-8">
          {/* Permanent Glow Behind the Card (intensifies on hover) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 via-purple-400/20 to-blue-600/50 blur-[60px] rounded-[40px] opacity-60 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* Premium Video Container */}
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/40 via-white/10 to-transparent shadow-[0_0_80px_rgba(168,85,247,0.15)] overflow-hidden">
            {/* Glass background */}
            <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl" />
            
            <div className="relative rounded-[23px] overflow-hidden bg-black aspect-video w-full cursor-pointer group/video" onClick={() => setIsPlaying(true)}>
              {!isPlaying ? (
                <div className="absolute inset-0 w-full h-full z-10">
                  <Image 
                    src="/APERTE O PLAY.webp" 
                    alt="Aperte o Play" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover/video:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-colors duration-500" />
                </div>
              ) : (
                <iframe 
                  src="https://player.mediadelivery.net/play/652088/68d812a7-c226-4f41-8bd0-4bb2e2af6a1b?autoplay=true&loop=false&muted=false&preload=true&responsive=true" 
                  loading="lazy" 
                  className="border-0 w-full h-full absolute top-0 left-0 z-10" 
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                  allowFullScreen={true}
                ></iframe>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
