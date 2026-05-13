// lib/isMobile.ts
export const isMobile =
  typeof window !== "undefined" && window.innerWidth < 768;
