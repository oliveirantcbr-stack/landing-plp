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
    <div className="bg-[#0a0a0a]">
      {/* PRIMEIRA SEÇÃO - PROBLEMAS (ÍCONES VERMELHOS) */}
      <section className="w-full py-12 md:py-20 relative overflow-hidden">
        {/* BLOB CENTRAL VERMELHO - REFINED */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[70vw] h-[70vw]
            md:w-[600px] md:h-[600px]
            bg-red-500/10
            rounded-full
            blur-[100px]
            -z-10
            opacity-50
            pointer-events-none
          "
        ></div>

        <div className="text-center px-4 mb-12 md:mb-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge - More refined */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                inline-flex items-center gap-2
                px-3 py-1
                rounded-full
                bg-white/[0.03]
                border border-white/10
                mb-6
              "
            >
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></div>
                <div className="absolute -inset-1 rounded-full bg-red-500 animate-ping opacity-20"></div>
              </div>
              <span className="text-[10px] text-white/60 font-black uppercase tracking-[0.2em]">
                O Cenário Atual
              </span>
            </motion.div>

            {/* Título mais elegante */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white 
              mb-4 leading-[1.1] tracking-tighter uppercase">
              <span className="text-white/30 italic">Sem o</span>{" "}
              <span className="text-red-500/90 line-through decoration-red-500/30">Pack Landing Page</span>
              <br />
              <span className="text-white">o caminho é mais lento.</span>
            </h2>

            <p className="text-white/40 text-sm md:text-base font-medium max-w-xl mx-auto">
              A ausência de ferramentas profissionais cria barreiras invisíveis no seu processo criativo.
            </p>
          </div>
        </div>

        {/* GRID BENTO REDESIGNED */}
        <ul
          className="
            max-w-6xl mx-auto px-4 
            grid grid-cols-1 gap-4 
            md:grid-cols-12
            relative z-10
          "
        >
          <GridItem
            area="md:col-span-4"
            icon={Clock}
            title="Desperdício de Tempo"
            description="Horas perdidas tentando estruturar páginas do zero sem um guia."
            iconColor="#ef4444"
          />

          <GridItem
            area="md:col-span-4"
            icon={Layers}
            title="Limitação Criativa"
            description="As barreiras do Elementor Free que impedem designs de alto nível."
            iconColor="#dc2626"
          />

          <GridItem
            area="md:col-span-4"
            icon={Frown}
            title="Estética Amadora"
            description="Dificuldade em atingir o acabamento premium que converte."
            iconColor="#ef4444"
          />

          <GridItem
            area="md:col-span-6"
            icon={AlertTriangle}
            title="Custos Ocultos"
            description="Gastos constantes com plugins individuais ou dependência de designers caros."
            iconColor="#dc2626"
          />

          <GridItem
            area="md:col-span-6"
            icon={Monitor}
            title="Inconsistência Visual"
            description="Falta de um padrão profissional que transmita autoridade e confiança."
            iconColor="#ef4444"
          />
        </ul>
      </section>

      {/* DIVIDER LINE */}
      <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4" />

      {/* SEGUNDA SEÇÃO - BENEFÍCIOS (ÍCONES VERDES) */}
      <section className="w-full py-16 md:py-24 relative overflow-hidden">
        {/* BLOB CENTRAL VERDE - REFINED */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[70vw] h-[70vw]
            md:w-[600px] md:h-[600px]
            bg-emerald-500/10
            rounded-full
            blur-[100px]
            -z-10
            opacity-50
            pointer-events-none
          "
        ></div>

        <div className="text-center px-4 mb-12 md:mb-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                inline-flex items-center gap-2
                px-3 py-1
                rounded-full
                bg-white/[0.03]
                border border-white/10
                mb-6
              "
            >
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
                <div className="absolute -inset-1 rounded-full bg-emerald-500 animate-ping opacity-20"></div>
              </div>
              <span className="text-[10px] text-white/60 font-black uppercase tracking-[0.2em]">
                A Solução Definitiva
              </span>
            </motion.div>

            {/* Título mais elegante */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white 
              mb-4 leading-[1.1] tracking-tighter uppercase">
              <span className="text-white/30 italic">Com o</span>{" "}
              <span className="text-emerald-500">Pack Landing Page</span>
              <br />
              <span className="text-white">a escala é inevitável.</span>
            </h2>

            <p className="text-white/40 text-sm md:text-base font-medium max-w-xl mx-auto">
              Tenha em mãos o ecossistema completo para dominar o mercado digital.
            </p>
          </div>
        </div>

        {/* GRID BENTO BENEFÍCIOS */}
        <ul
          className="
            max-w-6xl mx-auto px-4 
            grid grid-cols-1 gap-4
            md:grid-cols-12
            relative z-10
          "
        >
          <BenefitGridItem
            area="md:col-span-4"
            icon={FileText}
            title="Templates Prontos"
            description="LP's validadas para todos os nichos, prontas para importar."
            iconColor="#10b981"
          />

          <BenefitGridItem
            area="md:col-span-4"
            icon={Library}
            title="Biblioteca Elite"
            description="Seções premium com efeitos de alto nível visual."
            iconColor="#22c55e"
          />

          <BenefitGridItem
            area="md:col-span-4"
            icon={Video}
            title="Workshops Práticos"
            description="Domine a instalação e otimização em poucos minutos."
            iconColor="#10b981"
          />

          <BenefitGridItem
            area="md:col-span-6"
            icon={MessageCircle}
            title="Suporte Prioritário"
            description="Acesso direto ao time técnico para acelerar seus projetos."
            iconColor="#22c55e"
          />

          <BenefitGridItem
            area="md:col-span-6"
            icon={RefreshCw}
            title="Evolução Contínua"
            description="Atualizações semanais com o que há de mais novo no design."
            iconColor="#10b981"
          />
        </ul>
      </section>
    </div>
  );
}

// Componente para problemas (ícones vermelhos)
interface GridItemProps {
  area: string;
  icon: LucideIcon;
  title: string;
  description?: string;
  iconColor?: string;
}

const GridItem = ({ area, icon: Icon, title, description, iconColor = "#ef4444" }: GridItemProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-15, 15], [5, -5]);
  const rotateY = useTransform(x, [-15, 15], [-5, 5]);

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
    <li className={cn("min-h-[10rem] md:min-h-[12rem] list-none", area)}>
      <div className="relative h-full rounded-2xl border border-white/5 p-px group">
        <GlowingEffect
          spread={30}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="
            relative flex h-full flex-col justify-center gap-4
            rounded-2xl bg-zinc-950/80 backdrop-blur-sm overflow-hidden
            p-6 md:p-8 transition-colors group-hover:bg-zinc-900/80
          "
        >
          {/* Noise Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          <motion.div
            style={isMobile ? undefined : { rotateX, rotateY }}
            className="w-fit rounded-lg border border-white/5 bg-white/5 p-2"
          >
            <Icon className="h-5 w-5" style={{ color: iconColor }} />
          </motion.div>

          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-black text-white tracking-tight uppercase">
              {title}
            </h3>
            {description && (
              <p className="text-white/40 text-[11px] md:text-xs font-medium leading-relaxed">
                {description}
              </p>
            )}
          </div>
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-15, 15], [5, -5]);
  const rotateY = useTransform(x, [-15, 15], [-5, 5]);

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
    <li className={cn("min-h-[10rem] md:min-h-[12rem] list-none", area)}>
      <div className="relative h-full rounded-2xl border border-white/5 p-px group">
        <GlowingEffect
          spread={30}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="
            relative flex h-full flex-col justify-center gap-4
            rounded-2xl bg-zinc-950/80 backdrop-blur-sm overflow-hidden
            p-6 md:p-8 transition-colors group-hover:bg-zinc-900/80
          "
        >
          {/* Noise Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          <motion.div
            style={isMobile ? undefined : { rotateX, rotateY }}
            className="w-fit rounded-lg border border-white/5 bg-white/5 p-2"
          >
            <Icon className="h-5 w-5" style={{ color: iconColor }} />
          </motion.div>

          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-black text-white tracking-tight uppercase">
              {title}
            </h3>
            <p className="text-white/40 text-[11px] md:text-xs font-medium leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};