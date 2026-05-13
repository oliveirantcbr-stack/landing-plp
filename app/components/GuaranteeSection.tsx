"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ShinyButton } from "@/components/shiny-button";
import { scrollToOferta } from "@/lib/scrollToOferta";


export default function GuaranteeSection() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative grid items-center gap-10 rounded-2xl border bg-muted/40 backdrop-blur-xl p-8 md:grid-cols-2 md:p-12">

          {/* COLUNA DA IMAGEM */}
          <div className="relative flex items-center justify-center">
            {/* BLOB AZULADO SUAVE */}
            <div
              aria-hidden
              className="
                absolute
                h-80 w-80
                rounded-full
                bg-blue-400/20
                blur-[90px]
                opacity-70
                animate-pulse
              "
            />

            {/* IMAGEM */}
            <div className="relative w-full max-w-[320px] aspect-square">
              <Image
                src="/garantia.png"
                alt="Garantia de 7 dias"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* COLUNA DO TEXTO */}
          <div>
            <h3 className="text-3xl font-semibold">
              Garantia Incondicional de 7 Dias
            </h3>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Teste a biblioteca sem risco.
              Se não fizer sentido para você, basta cancelar que a Cakto te Reembolsa{" "}
              <strong className="text-foreground">
                100% do valor de volta
              </strong>.
            </p>

            <p className="mt-2 font-medium text-foreground">
              Sem perguntas. Sem burocracia. Simples assim.
            </p>

            {/* LISTA */}
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-blue-400" />
                Acesso completo durante o período de teste
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-blue-400" />
                Cancelamento rápido e direto
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-blue-400" />
                Compra 100% Segura via Cakto
              </li>
            </ul>

            {/* CTA FINAL */}
            <div className="mt-8">
              <ShinyButton
  onClick={scrollToOferta}
  aria-label="Experimentar o Pack Landing Page por 7 dias"
  className="
    transition-transform duration-300 ease-out 
    hover:scale-105
  "
>
  QUERO COMEÇAR AGORA
</ShinyButton>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
