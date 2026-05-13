
export function CallToAction() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {/* Container principal com efeito de fundo preto e opacidade */}
      <div className="relative flex flex-col justify-between gap-y-6 border border-gray-800 px-6 py-10 rounded-xl bg-black/50 backdrop-blur-lg">

        {/* Pontos nos cantos com brilho branco (glow) */}
        <div className="absolute top-[-6px] left-[-6px] w-3 h-3 rounded-full bg-white/70 shadow-lg" />
        <div className="absolute top-[-6px] right-[-6px] w-3 h-3 rounded-full bg-white/70 shadow-lg" />
        <div className="absolute bottom-[-6px] left-[-6px] w-3 h-3 rounded-full bg-white/70 shadow-lg" />
        <div className="absolute bottom-[-6px] right-[-6px] w-3 h-3 rounded-full bg-white/70 shadow-lg" />

        {/* Linhas divisórias sutis */}
        <div className="absolute inset-y-4 left-4 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
        <div className="absolute inset-y-4 right-4 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
        <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        <div className="absolute inset-x-4 bottom-4 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Conteúdo */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
           Uma Plataforma de{' '}
            <span className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
              Seções
            </span>
            ,{' '}
            <span className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
              Códigos
            </span>{' '}
            e Botões.
          </h2>
          <p className="text-base text-gray-400 md:text-xl leading-relaxed max-w-2xl mx-auto">
            Mais de 250 Itens para você copiar e colar no seu Elementor. Botões, Códigos CSS e Seções, em um só lugar!
          </p>
        </div>

        {/* Efeitos de luz branca sutil */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      </div>
    </div>
  );
}
