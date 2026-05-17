export function CallToAction() {
  return (
    <div className="relative mx-auto w-full max-w-3xl px-4">
      {/* Main Container - Technical Square Aesthetic */}
      <div className="relative flex flex-col justify-between gap-y-8 border border-white/20 px-8 py-14 md:py-20 bg-black/40 backdrop-blur-3xl overflow-hidden">
        
        {/* GLOW INFERIOR INTERNO CENTRADO */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-24 bg-purple-600/20 rounded-full blur-[60px] pointer-events-none z-0" />

        {/* CORNER ACCENTS - TECHNICAL SQUARES */}
        <div className="absolute -top-[3px] -left-[3px] size-1.5 bg-white shadow-[0_0_10px_#fff]" />
        <div className="absolute -top-[3px] -right-[3px] size-1.5 bg-white shadow-[0_0_10px_#fff]" />
        <div className="absolute -bottom-[3px] -left-[3px] size-1.5 bg-white shadow-[0_0_10px_#fff]" />
        <div className="absolute -bottom-[3px] -right-[3px] size-1.5 bg-white shadow-[0_0_10px_#fff]" />

        {/* SUBTLE INNER BORDERS */}
        <div className="absolute inset-x-6 top-6 h-px bg-white/5" />
        <div className="absolute inset-x-6 bottom-6 h-px bg-white/5" />
        <div className="absolute inset-y-6 left-6 w-px bg-white/5" />
        <div className="absolute inset-y-6 right-6 w-px bg-white/5" />

        {/* CONTENT */}
        <div className="space-y-6 text-center relative z-10">
          <h2 className="text-3xl font-black tracking-tighter text-white sm:text-5xl md:text-6xl uppercase leading-[0.95] flex flex-col">
           <span>Uma Plataforma de</span>
           <span className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent pb-2">
            Seções, Códigos e Botões.
           </span>
          </h2>
          
          <p className="text-sm md:text-lg text-white/40 font-medium leading-relaxed max-w-xl mx-auto uppercase tracking-widest">
            Mais de 250 Itens para você copiar e colar no seu Elementor. Botões, Códigos CSS e Seções, em um só lugar!
          </p>
        </div>

        {/* PREMIUM BACKGROUND GLOWS */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </div>
  );
}
