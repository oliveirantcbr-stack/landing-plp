"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import {
  Card,
  Header,
  Plan,
  PlanName,
  Badge,
  Description,
  Price,
  MainPrice,
  Period,
  OriginalPrice,
  Body,
  List,
  ListItem,
} from "@/components/pricing-card";

import {
  CheckCircle2,
  RefreshCw,
  FolderOpen,
  MessageCircle,
  Bot,
  Sparkles,
  Wand2,
  Zap,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   BOTÃO PERSONALIZADO
========================================================= */

type ButtonColor = "white" | "blue" | "orange";

function PricingButton({
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
        disabled:opacity-50 disabled:cursor-not-allowed
        overflow-hidden
        ${config.text}
      `}
      style={{
        outline: `2px solid ${config.outline}`,
        outlineOffset: "2px",
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,0.1),
          0 0 0 1px ${config.outline},
          0 8px 32px ${config.glow}
        `,
      }}
      disabled={disabled}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
    </button>
  );
}

/* =========================================================
   TIPOS
========================================================= */

type PlanType = "mensal" | "trimestral" | "anual";

/* =========================================================
   DADOS
========================================================= */

const PRICES: Record<
  PlanType,
  {
    price: number;
    period: string;
    original?: number;
    color: ButtonColor;
  }
> = {
  mensal: {
    price: 39,
    period: "/ mês",
    color: "white",
  },
  trimestral: {
    price: 87,
    period: "/ 3 meses",
    original: 117,
    color: "blue",
  },
  anual: {
    price: 289,
    period: "/ ano",
    original: 468,
    color: "orange",
  },
};

const CHECKOUT_LINKS: Record<PlanType, string> = {
  mensal: "https://pay.cakto.com.br/35azrwr",
  trimestral: "https://pay.cakto.com.br/87m3bxz",
  anual: "https://pay.cakto.com.br/yzbek9g",
};

/* =========================================================
   SEÇÃO PRINCIPAL (SOLUÇÃO 1 APLICADA)
========================================================= */

export default function PricingSection() {
  const [active, setActive] = useState<PlanType>("trimestral");

  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<PlanType, HTMLDivElement | null>>({
    mensal: null,
    trimestral: null,
    anual: null,
  });

  // 🔒 SÓ PERMITE SCROLL APÓS INTERAÇÃO REAL
  const userInteractedRef = useRef(false);

  useEffect(() => {
    if (!userInteractedRef.current) return;

    const card = cardRefs.current[active];
    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  const handleSelectPlan = (plan: PlanType) => {
    userInteractedRef.current = true; // 🔑 CHAVE DA SOLUÇÃO
    setActive(plan);
  };

  const handleButtonClick = (plan: PlanType) => {
    window.open(CHECKOUT_LINKS[plan], "_blank", "noopener,noreferrer");
  };

  return (
    <section id="oferta" className="relative py-16 md:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold">
            Tudo pronto para você parar de criar do zero
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Seções, códigos e botões profissionais para copiar, colar e publicar no Elementor, com IA e atualizações semanais.
          </p>
        </div>

        {/* TOGGLE */}
        <div className="mb-12 flex justify-center">
          <div className="flex rounded-full border bg-muted/50 p-1">
            {(Object.keys(PRICES) as PlanType[]).map((p) => (
              <button
                key={p}
                onClick={() => handleSelectPlan(p)}
                className={`px-6 py-2 rounded-full text-sm transition ${
                  active === p
                    ? "bg-blue-600 text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p === "mensal"
                  ? "Mensal"
                  : p === "trimestral"
                  ? "Trimestral"
                  : "Anual"}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 px-[calc(50vw-170px)] overflow-x-auto snap-x snap-mandatory scroll-smooth pb-20"
          >
            {(Object.keys(PRICES) as PlanType[]).map((plan) => (
              <div
                key={plan}
                ref={(el) => {
  cardRefs.current[plan] = el;
}}

                className="snap-center w-[85vw] max-w-sm shrink-0 flex justify-center"
                onClick={() => handleSelectPlan(plan)}
              >
                <PricingCard
                  plan={plan}
                  data={PRICES[plan]}
                  isActive={plan === active}
                  onButtonClick={() => handleButtonClick(plan)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {(Object.keys(PRICES) as PlanType[]).map((plan) => (
            <div
              key={plan}
              className="flex justify-center"
              onClick={() => handleSelectPlan(plan)}
            >
              <PricingCard
                plan={plan}
                data={PRICES[plan]}
                isActive={plan === active}
                onButtonClick={() => handleButtonClick(plan)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CARD
========================================================= */

function PricingCard({
  plan,
  data,
  isActive,
  onButtonClick,
}: {
  plan: PlanType;
  data: (typeof PRICES)[PlanType];
  isActive: boolean;
  onButtonClick: () => void;
}) {
  const getButtonText = () => {
    if (isActive) return "Continuar";
    if (plan === "trimestral") return "Escolher Plano";
    return "Selecionar plano";
  };

  return (
    <Card className="relative overflow-visible transition-all">
      <Header>
        <Plan>
          <PlanName>
            {plan.toUpperCase()}

            {plan === "trimestral" && !isActive && (
              <Badge className="border-emerald-400 text-emerald-300">
                Mais escolhido
              </Badge>
            )}

            {isActive && (
              <Badge className="border-blue-400 text-blue-300">
                Selecionado
              </Badge>
            )}
          </PlanName>
        </Plan>

        <Description>Acesso completo enquanto ativo</Description>

        <Price>
          <MainPrice>R${data.price}</MainPrice>
          <Period>{data.period}</Period>
          {data.original && (
            <OriginalPrice>R${data.original}</OriginalPrice>
          )}
        </Price>
      </Header>

      <Body>
  <List>
    <ListItem>
      <Wand2 className="size-4 text-purple-400" />
      Elementor Pro incluso
    </ListItem>

    <ListItem>
      <CheckCircle2 className="size-4 text-emerald-400" />
      Biblioteca de seções, códigos e botões
    </ListItem>

    <ListItem>
      <RefreshCw className="size-4 text-blue-400" />
      Atualizações semanais
    </ListItem>

    <ListItem>
      <FolderOpen className="size-4 text-blue-400" />
      Drive com Landing Pages
    </ListItem>

    <ListItem>
      <Bot className="size-4 text-cyan-400" />
      Assistente IA
    </ListItem>

    {/* 🔥 EXTRAS — TRIMESTRAL E ANUAL */}
    {plan !== "mensal" && (
      <>
        <ListItem>
          <Sparkles className="size-4 text-purple-400" />
          Pack de Plugins Premium
        </ListItem>

        <ListItem>
          <Zap className="size-4 text-yellow-400" />
          WP Rocket – Plugin Otimizador
        </ListItem>

        <ListItem>
          <MessageCircle className="size-4 text-blue-400" />
          Suporte exclusivo no WhatsApp
        </ListItem>
      </>
    )}

    {/* 🔥 DESTAQUE ANUAL */}
    {plan === "anual" && (
      <ListItem>
        <Sparkles className="size-4 text-orange-400" />
        Maior desconto disponível
      </ListItem>
    )}
  </List>

  <PricingButton color={data.color} onClick={onButtonClick}>
    {getButtonText()}
  </PricingButton>

  {isActive && (
  <div className="mt-4 flex flex-col items-center gap-3">
    {/* FORMAS DE PAGAMENTO – GLASS ESCURO */}
    <div className="
      rounded-xl
      bg-black/40
      backdrop-blur-md
      border border-white/10
      px-4 py-3
    ">
      <Image
        src="/pagamentos.webp"
        alt="Formas de pagamento"
        width={220}
        height={80}
        className="w-full max-w-[220px] h-auto opacity-90"
      />
    </div>

    {/* BADGE DE GARANTIA */}
    <div className="flex items-center justify-center gap-2 text-xs text-emerald-300 border border-emerald-400/30 bg-emerald-500/10 rounded-full px-4 py-2 backdrop-blur">
      <ShieldCheck className="size-4" />
      Garantia Incondicional de 7 Dias
    </div>
  </div>
)}

</Body>

    </Card>
  );
}
