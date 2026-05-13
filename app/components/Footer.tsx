"use client";

import Image from "next/image";
import { ShieldCheck, Lock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">

          {/* MARCA */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-160.webp"
                alt="Pack Landing Page"
                width={140}
                height={40}
                className="opacity-90"
                priority
              />
            </div>

            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Pack Landing Page é uma biblioteca profissional de seções,
              códigos e botões prontos para Elementor.
              Mais velocidade, menos retrabalho.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h2 className="text-sm font-medium text-white">
  Links úteis
</h2>


            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <a href="#planos" className="hover:text-white transition">
                  Planos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  Dúvidas frequentes
                </a>
              </li>
              <li>
                <a href="#garantia" className="hover:text-white transition">
                  Garantia
                </a>
              </li>
              <li>
                <a href="/termos" className="hover:text-white transition">
                  Termos de uso
                </a>
              </li>
              <li>
                <a href="/privacidade" className="hover:text-white transition">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* CONFIANÇA */}
          <div>
            <h4 className="text-sm font-medium text-white">
              Segurança & suporte
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-400" />
                Garantia incondicional de 7 dias
              </li>

              <li className="flex items-center gap-2">
                <Lock className="size-4 text-blue-400" />
                Pagamento 100% seguro
              </li>

              <li className="flex items-center gap-2">
                <Mail className="size-4 text-yellow-400" />
                Suporte via WhatsApp
              </li>
            </ul>
          </div>

        </div>

        {/* DIVISÓRIA */}
        <div className="my-10 h-px bg-white/10" />

        {/* COPYRIGHT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Pack Landing Page — Hypersoft. Todos os direitos reservados.
          </p>

          <p>
            Desenvolvido para designers, freelancers e agências.
          </p>
        </div>
      </div>
    </footer>
  );
}
