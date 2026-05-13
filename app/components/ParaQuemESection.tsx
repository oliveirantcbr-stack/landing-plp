"use client";

import {
  Clock,
  Layers,
  Frown,
  AlertTriangle,
  Monitor,
  FileText,
  Library,
  Video,
  MessageCircle,
  RefreshCw,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export function ParaQuemESection() {
  return (
    <>
      {/* PRIMEIRA SEÇÃO - PROBLEMAS (ÍCONES VERMELHOS) */}
      <section className="w-full py-16 sm:py-20 md:py-28 relative">
        {/* BLOB CENTRAL VERMELHO - ABSOLUTO E VISÍVEL */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[90vw] h-[90vw]
            sm:w-[70vw] sm:h-[70vw]
            md:w-[800px] md:h-[800px]
            md:top-[55%]
            bg-gradient-to-br from-red-500/15 to-red-600/10
            rounded-full
            blur-[70px]
            sm:blur-[90px]
            md:blur-[120px]
            -z-10
            opacity-80
            sm:opacity-70
            pointer-events-none
          "
        ></div>

        <div className="text-center px-4 mb-16 sm:mb-20 md:mb-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div
  className="
    inline-flex items-center gap-2.5
    px-4 py-2
    rounded-full
    bg-gray-900/80
    border border-gray-700
    mb-8
  "
>
              <div className="relative">
                {/* Dot vermelho pulsando */}
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_#ff0000]"></div>

                {/* Efeito ping vermelho */}
                <div className="absolute -inset-1 rounded-full bg-red-500 animate-ping opacity-30"></div>
              </div>

              <span className="text-xs sm:text-sm text-gray-200 font-medium tracking-wider">
                A VERDADE É QUE
              </span>
            </div>

            {/* Título direto */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white 
              mb-6 leading-tight">

              <span className="text-gray-500">Sem o</span>{' '}

              {/* Texto vermelho riscado */}
              <span className="text-red-500 line-through decoration-red-600/70 decoration-2">
                Pack Landing Page{' '}
              </span>

              <br className="hidden sm:block" />

              <span className="text-gray-400">
                você provavelmente enfrenta
              </span>

              <br />

              <span className="text-white">
                um destes problemas:
              </span>
            </h2>

            {/* Linha tech discreta — agora vermelha */}
            <div className="w-24 sm:w-32 md:w-40 h-0.5 
              bg-red-500 
              mx-auto mt-8 sm:mt-10 opacity-80"></div>

          </div>
        </div>

        {/* GRID BENTO ORIGINAL (5 cards) */}
        <ul
          className="
            max-w-6xl mx-auto px-4 
            grid grid-cols-1 gap-6 
            md:grid-cols-12 md:grid-rows-3
            xl:grid-cols-12 xl:grid-rows-2 xl:gap-6
            relative z-10
          "
        >
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={Clock}
            title="Horas perdidas tentando criar páginas do zero."
            iconColor="#ef4444"
          />

          <GridItem
            area="md:[grid-area:1/7/3/13] xl:[grid-area:1/5/3/9]"
            icon={Layers}
            title="Limitações do Elementor Free que travam sua criatividade."
            iconColor="#dc2626"
          />

          <GridItem
            area="md:[grid-area:1/13/2/19] xl:[grid-area:1/9/2/13]"
            icon={Frown}
            title="Dificuldade para deixar suas páginas bonitas e otimizadas."
            iconColor="#ef4444"
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:2/1/3/5]"
            icon={AlertTriangle}
            title="Gastos desnecessários com plugins pagos ou dependência de terceiros."
            iconColor="#dc2626"
          />

          <GridItem
            area="md:[grid-area:3/7/4/13] xl:[grid-area:2/9/3/13]"
            icon={Monitor}
            title="Falta de padronização visual nas páginas criadas."
            iconColor="#ef4444"
          />
        </ul>
      </section>

      {/* SEGUNDA SEÇÃO - BENEFÍCIOS (ÍCONES VERDES) */}
      <section className="w-full py-28 relative">
        {/* BLOB CENTRAL VERDE - ABSOLUTO E VISÍVEL */}
        <div 
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[90vw] h-[90vw]
            sm:w-[70vw] sm:h-[70vw]
            md:w-[800px] md:h-[800px]
            md:top-[58%]
            bg-gradient-to-br from-green-500/15 to-emerald-500/10
            rounded-full
            blur-[70px]
            sm:blur-[90px]
            md:blur-[120px]
            -z-10
            opacity-80
            sm:opacity-70
            pointer-events-none
          "
        ></div>
        
        <div className="text-center px-4 mb-16 sm:mb-20 md:mb-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div
  className="
    inline-flex items-center gap-2.5
    px-4 py-2
    rounded-full
    bg-gray-900/80
    border border-gray-700
    mb-8
  "
>
              <div className="relative">
                {/* Dot esmeralda pulsando */}
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10b981]"></div>

                {/* Ping esmeralda */}
                <div className="absolute -inset-1 rounded-full bg-emerald-500 animate-ping opacity-30"></div>
              </div>

              <span className="text-xs sm:text-sm text-gray-200 font-medium tracking-wider">
                MAS RELAXA...
              </span>
            </div>

            {/* Título direto */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white 
              mb-6 leading-tight">

              <span className="text-gray-500">No</span>{" "}

              {/* Texto verde esmeralda */}
              <span className="text-emerald-500">
                Pack Landing Page{" "}
              </span>

              <br className="hidden sm:block" />

              <span className="text-gray-400">
                você tem acesso a
              </span>

              <br />

              <span className="text-white">
                tudo isso:
              </span>
            </h2>

            {/* Linha tech discreta esmeralda */}
            <div
              className="
                w-24 sm:w-32 md:w-40 h-0.5 
                bg-emerald-500 
                mx-auto mt-8 sm:mt-10 opacity-80
              "
            ></div>

          </div>
        </div>

        {/* GRID BENTO - 5 cards com mesmas áreas */}
        <ul
          className="
            max-w-6xl mx-auto px-4 
            grid grid-cols-1 gap-6
            md:grid-cols-12 md:grid-rows-2
            xl:grid-cols-12 xl:grid-rows-2 xl:gap-6
            relative z-10
          "
        >
          {/* LINHA 1 - três cards iguais */}
          <BenefitGridItem
            area="md:[grid-area:1/1/2/5] xl:[grid-area:1/1/2/5]"
            icon={FileText}
            title="Templates Prontos"
            description="Landing Pages de todos os nichos — vendas, obrigado, webinar e muito mais."
            iconColor="#10b981"
          />

          <BenefitGridItem
            area="md:[grid-area:1/5/2/9] xl:[grid-area:1/5/2/9]"
            icon={Library}
            title="Biblioteca de Seções"
            description="Efeitos, botões e seções premium prontos para usar."
            iconColor="#22c55e"
          />

          <BenefitGridItem
            area="md:[grid-area:1/9/2/13] xl:[grid-area:1/9/2/13]"
            icon={Video}
            title="Tutoriais passo a passo"
            description="Aprenda a instalar, otimizar, personalizar e publicar com facilidade."
            iconColor="#10b981"
          />

          {/* LINHA 2 - dois cards maiores */}
          <BenefitGridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:2/1/3/7]"
            icon={MessageCircle}
            title="Suporte via WhatsApp"
            description="Tira-dúvidas direto com a equipe, rápido e prático."
            iconColor="#22c55e"
          />

          <BenefitGridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:2/7/3/13]"
            icon={RefreshCw}
            title="Atualizações Semanais"
            description="Novos templates, seções e recursos adicionados regularmente."
            iconColor="#10b981"
          />
        </ul>
      </section>
    </>
  );
}

// Componente para problemas (ícones vermelhos)
interface GridItemProps {
  area: string;
  icon: LucideIcon;
  title: string;
  iconColor?: string;
}

const GridItem = ({ area, icon: Icon, title, iconColor = "#ef4444" }: GridItemProps) => {
  // Detectar se é dispositivo móvel
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Parallax values (sempre criados, mas só usados se não for mobile)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-20, 20], [6, -6]);
  const rotateY = useTransform(x, [-20, 20], [-6, 6]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isMobile) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  }

  function handleLeave() {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  }

  return (
    <li className={cn("min-h-[16rem] list-none", area)}>
      <div
        className="
          relative h-full rounded-2xl border border-white/10 
          p-3 md:p-4
        "
      >
        {/* GlowingEffect sempre ativo, mas com parâmetros otimizados para mobile */}
        <GlowingEffect
          spread={isMobile ? 30 : 40}
          glow={true}
          disabled={false}
          proximity={isMobile ? 40 : 64}
          inactiveZone={0.01}
          borderWidth={isMobile ? 2 : 3}
        />

        {/* Card interno */}
        <div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="
            relative flex h-full flex-col justify-between gap-8 
            rounded-2xl bg-black/80
            p-8
          "
        >
          {/* SEMPRE usar motion.div - a animação só acontece se não for mobile */}
          <motion.div
            style={isMobile ? undefined : { rotateX, rotateY }}
            className="w-fit rounded-xl border border-white/10 bg-black/60 p-3"
          >
            <Icon className="h-7 w-7" style={{ color: iconColor }} />
          </motion.div>

          <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </li>
  );
};

// Componente para benefícios (ícones verdes)
interface BenefitGridItemProps {
  area: string;
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

const BenefitGridItem = ({ area, icon: Icon, title, description, iconColor = "#10b981" }: BenefitGridItemProps) => {
  // Detectar se é dispositivo móvel
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Parallax values (sempre criados, mas só usados se não for mobile)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-20, 20], [6, -6]);
  const rotateY = useTransform(x, [-20, 20], [-6, 6]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (isMobile) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  }

  function handleLeave() {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  }

  return (
    <li className={cn("min-h-[16rem] list-none", area)}>
      <div
        className="
          relative h-full rounded-2xl border border-white/10 
          p-3 md:p-4
        "
      >
        {/* GlowingEffect sempre ativo, mas com parâmetros otimizados para mobile */}
        <GlowingEffect
          spread={isMobile ? 30 : 40}
          glow={true}
          disabled={false}
          proximity={isMobile ? 40 : 64}
          inactiveZone={0.01}
          borderWidth={isMobile ? 2 : 3}
        />

        {/* Card interno */}
        <div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="
            relative flex h-full flex-col justify-between gap-8 
            rounded-2xl bg-black/80
            p-8
          "
        >
          {/* SEMPRE usar motion.div - a animação só acontece se não for mobile */}
          <motion.div
            style={isMobile ? undefined : { rotateX, rotateY }}
            className="w-fit rounded-xl border border-white/10 bg-black/60 p-3"
          >
            <Icon className="h-7 w-7" style={{ color: iconColor }} />
          </motion.div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug">
              {title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};