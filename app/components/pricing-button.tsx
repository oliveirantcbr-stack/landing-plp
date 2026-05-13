type ButtonColor = "white" | "blue" | "orange";

export function PricingButton({
  children,
  color,
  disabled = false,
  onClick,
}: {
  children: React.ReactNode;
  color: ButtonColor;
  disabled?: boolean;
  onClick?: () => void;
}) {
  const COLOR_CONFIG: Record<
    ButtonColor,
    { 
      outline: string;
      glow: string;
      text?: string;
    }
  > = {
    white: {
      outline: "rgba(255,255,255,0.9)",
      glow: "rgba(255,255,255,0.4)",
      text: "text-white",
    },
    blue: {
      outline: "rgba(59,130,246,0.95)",
      glow: "rgba(59,130,246,0.4)",
      text: "text-white",
    },
    orange: {
      outline: "rgba(249,115,22,0.95)",
      glow: "rgba(249,115,22,0.4)",
      text: "text-white",
    },
  };

  const config = COLOR_CONFIG[color];

  return (
    <button
      className={`
        group relative
        w-full mt-6
        rounded-xl
        px-6 py-4
        text-base font-semibold
        bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-xl
        border border-white/10
        transition-all duration-300
        hover:scale-[1.02]
        active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
        overflow-hidden
        ${config.text || "text-white"}
        ${disabled ? "" : "animate-border-pulse"}
      `}
      style={{
        outline: `2px solid ${config.outline}`,
        outlineOffset: "2px",
        boxShadow: `
          inset 0 1px 0 0 rgba(255,255,255,0.1),
          0 0 0 1px ${config.outline},
          0 8px 32px ${config.glow},
          0 2px 8px rgba(0,0,0,0.3)
        `,
      }}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {/* Efeito de brilho no hover */}
      <div className="
        absolute inset-0 
        bg-gradient-to-r from-transparent via-white/5 to-transparent 
        translate-x-[-100%] group-hover:translate-x-[100%] 
        transition-transform duration-700
      "/>
      
      {/* Conteúdo do botão */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
      
      {/* Efeito de brilho na borda */}
      <div className="
        absolute inset-0 rounded-xl
        pointer-events-none
        border border-transparent
        group-hover:border-white/20
        transition-all duration-300
      "/>
    </button>
  );
}
