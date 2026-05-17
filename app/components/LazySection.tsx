"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  fallbackHeight?: string;
  rootMargin?: string;
}

export function LazySection({ 
  children, 
  fallbackHeight = "50vh",
  rootMargin = "800px 0px" // Gradual loading well before it enters viewport
}: LazySectionProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  if (inView) {
    return (
      <Suspense fallback={<div style={{ minHeight: fallbackHeight }} />}>
        {children}
      </Suspense>
    );
  }

  return <div ref={ref} style={{ minHeight: fallbackHeight }} />;
}
