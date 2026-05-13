"use client"

import type { SVGProps } from "react"
import { useEffect, useRef, useState } from "react"

export interface MacbookProProps extends SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  src?: string
  videoSrc?: string
  posterSrc?: string
  autoPlay?: boolean
  controls?: boolean
  loop?: boolean
  muted?: boolean
  lazyLoad?: boolean // Nova prop para controlar lazy load
  preload?: "none" | "metadata" | "auto"; // 👈 ADICIONE
}

export function MacbookPro({
  width = 650,
  height = 400,
  src,
  videoSrc,
  posterSrc,
  autoPlay = true,
  controls = false,
  loop = true,
  muted = true,
  lazyLoad = true, // Por padrão usa lazy load
  ...props
}: MacbookProProps) {
  // Coordenadas da tela do Macbook
  const screenX = 74.52
  const screenY = 21.32
  const screenWidth = 501.22
  const screenHeight = 323.85
  
  // State para lazy load do vídeo
  const [shouldLoadVideo, setShouldLoadVideo] = useState(!lazyLoad)
  const containerRef = useRef<SVGSVGElement>(null)
  
  // Intersection Observer para lazy load
  useEffect(() => {
    if (!lazyLoad || !containerRef.current || !videoSrc) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: "200px", // Começa a carregar 200px antes de entrar na viewport
        threshold: 0.1
      }
    )
    
    observer.observe(containerRef.current)
    
    return () => {
      observer.disconnect()
    }
  }, [lazyLoad, videoSrc])

  return (
    <svg
      ref={containerRef}
      width={width}
      height={height}
      viewBox={`0 0 650 400`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Estrutura do Macbook */}
      <path
        fill="#a4a5a7"
        d="M79.56,13.18h491.32c7.23,0,13.1,5.87,13.1,13.1v336.61H66.46V26.28c0-7.23,5.87-13.1,13.1-13.1Z"
      />

      <path
        fill="#222"
        d="M79.96,14.24h490.45c6.83,0,12.37,5.54,12.37,12.37v336.28H67.59V26.6c0-6.83,5.54-12.37,12.37-12.37Z"
      />

      <path
        fill="#000"
        d="M570.25,15.74H80.34c-6.12,0-11.08,4.96-11.08,11.08v336.07h512.08V26.82c0-6.12-4.96-11.08-11.08-11.08ZM575.74,345.17H74.52V27.31c0-3.31,2.68-5.99,5.99-5.99h489.24c3.31,0,5.99,2.68,5.99,5.99v317.86Z"
      />
      
      {/* Tela do Macbook */}
      <rect
        fill="currentColor"
        x={screenX}
        y={screenY}
        width={screenWidth}
        rx="5"
        ry="5"
        height={screenHeight}
      />
      
      {/* Conteúdo da tela com lazy load otimizado */}
      {videoSrc ? (
        shouldLoadVideo ? (
          // Carrega o vídeo quando estiver visível
          <foreignObject 
            x={screenX} 
            y={screenY} 
            width={screenWidth} 
            height={screenHeight} 
            clipPath="url(#roundedCorners)"
          >
            <div className="w-full h-full">
              <video
                className="w-full h-full object-cover rounded-[5px]"
                src={videoSrc}
                poster={posterSrc || src}
                autoPlay={autoPlay}
                controls={controls}
                loop={loop}
                muted={muted}
                playsInline
                preload="none" // Otimização importante
                // Removido: loading="lazy" - não existe para vídeo
              />
            </div>
          </foreignObject>
        ) : (
          // Placeholder enquanto não está visível
          <g clipPath="url(#roundedCorners)">
            <rect
              x={screenX}
              y={screenY}
              width={screenWidth}
              height={screenHeight}
              fill="#1a1a1a"
            />
            {posterSrc || src ? (
              <image
                href={posterSrc || src}
                x={screenX}
                y={screenY}
                width={screenWidth}
                height={screenHeight}
                preserveAspectRatio="xMidYMid slice"
              />
            ) : (
              <text
                x={screenX + screenWidth / 2}
                y={screenY + screenHeight / 2}
                fill="#666"
                fontSize="14"
                fontFamily="Arial, sans-serif"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                Carregando vídeo...
              </text>
            )}
          </g>
        )
      ) : src ? (
        // Fallback para imagem normal
        <image
          href={src}
          x={screenX}
          y={screenY}
          width={screenWidth}
          height={screenHeight}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedCorners)"
        />
      ) : null}

      {/* Base do Macbook */}
      <rect fill="#1d1d1d" x="69.09" y="350.51" width="512.11" height="12.48" />

      <path
        fill="#000"
        d="M298.14,21.02h54.07v6.5c0,1.56-1.27,2.82-2.82,2.82h-48.42c-1.56,0-2.82-1.27-2.82-2.82v-6.5h0Z"
      />
      <path
        fill="#acadaf"
        d="M19.04,362.77h611.92v10.39c0,5.95-4.83,10.79-10.79,10.79H29.83c-5.95,0-10.79-4.83-10.79-10.79v-10.39h0Z"
      />

      <path
        fill="#080d4c"
        d="M325.11,25.14c-1.99.03-1.99-3.09,0-3.06,1.99-.03,1.99,3.09,0,3.06Z"
      />

      <polygon
        fill="#b9b9bb"
        points="600.06 385.39 567.29 385.39 565.84 383.95 601.82 383.95 600.06 385.39"
      />
      <polygon
        fill="#292929"
        points="598.73 386.82 568.64 386.82 567.32 385.39 600.35 385.39 598.73 386.82"
      />
      <polygon
        fill="#b9b9bb"
        points="82.64 385.39 49.87 385.39 48.43 383.95 84.41 383.95 82.64 385.39"
      />
      <polygon
        fill="#292929"
        points="81.31 386.82 51.23 386.82 49.9 385.39 82.93 385.39 81.31 386.82"
      />
      <path
        fill="#8f9091"
        d="M278.11,362.6h94.05c0,3.63-2.95,6.58-6.58,6.58h-80.89c-3.63,0-6.58-2.95-6.58-6.58h0Z"
      />

      <defs>
        <clipPath id="roundedCorners">
          <rect
            fill="#ffffff"
            x={screenX}
            y={screenY}
            width={screenWidth}
            height={screenHeight}
            rx="5"
            ry="5"
          />
        </clipPath>
      </defs>
    </svg>
  )
}