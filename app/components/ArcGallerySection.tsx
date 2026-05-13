"use client";

import { ArcGalleryHero } from "@/components/arc-gallery-hero-component";

export function ArcGallerySection() {
  const galleryImages = [
    "/thumbs/1.webp",
    "/thumbs/2.webp",
    "/thumbs/3.webp",
    "/thumbs/4.webp",
    "/thumbs/5.webp",
    "/thumbs/6.webp",
    "/thumbs/7.webp",
    "/thumbs/8.webp",
    "/thumbs/9.webp",
    "/thumbs/10.webp",
    "/thumbs/11.webp",
    "/thumbs/12.webp",
    "/thumbs/13.webp",
    "/thumbs/14.webp",
    "/thumbs/15.webp",
    "/thumbs/16.webp",
    "/thumbs/17.webp",
    "/thumbs/18.webp",
    "/thumbs/19.webp",
    "/thumbs/20.webp",
    "/thumbs/21.webp",
    "/thumbs/22.webp",
    "/thumbs/23.webp",
  ];

  return (
    <section
      id="gallery"
      className="
        relative
        overflow-hidden
        scroll-mt-0
      "
      style={{
        // 🚫 DESATIVA SCROLL ANCHORING (CAUSA DO BUG NO MOBILE)
        overflowAnchor: "none",
      }}
    >
      <ArcGalleryHero
        images={galleryImages}
        className="bg-transparent text-white"
      />
    </section>
  );
}
