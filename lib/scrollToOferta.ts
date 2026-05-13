// lib/scrollToOferta.ts
export function scrollToOferta() {
  const el = document.getElementById("oferta");
  if (!el) return;

  // posição absoluta do elemento
  const y =
    el.getBoundingClientRect().top +
    window.pageYOffset;

  // offset opcional (ex: header fixo)
  const OFFSET = 0;

  window.scrollTo({
    top: y - OFFSET,
    behavior: "smooth",
  });
}
