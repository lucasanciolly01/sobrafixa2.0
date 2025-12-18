import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "../../../lib/utils";

export function Pricing() {
  return (
    <section id="precos" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Planos simples</h2>
          <p className="text-lg text-gray-600">Comece grátis e turbine quando precisar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free */}
          <div className="rounded-3xl border border-gray-200 p-8 hover:border-purple-200 transition-colors">
            <h3 className="text-xl font-bold text-gray-900">Gratuito</h3>
            <div className="my-4"><span className="text-4xl font-bold">R$ 0</span>/mês</div>
            <ul className="space-y-3 mb-8 text-sm text-gray-600">
              {["Saldo livre em tempo real", "1 conta conectada", "Registro manual"].map(item => (
                <li key={item} className="flex gap-3"><Check className="text-green-500 w-5 h-5"/> {item}</li>
              ))}
            </ul>
            <Link href="/register" className="block w-full py-3 rounded-xl bg-gray-100 text-center font-bold text-gray-900 hover:bg-gray-200">Começar Grátis</Link>
          </div>

          {/* Premium */}
          <div className="relative rounded-3xl bg-gray-900 p-8 text-white shadow-2xl transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Mais Popular
            </div>
            <h3 className="text-xl font-bold">Premium</h3>
            <div className="my-4"><span className="text-4xl font-bold">R$ 19,90</span>/mês</div>
            <ul className="space-y-3 mb-8 text-sm text-gray-300">
              {["Tudo do Gratuito", "Contas ilimitadas", "IA de categorização", "Metas ilimitadas"].map(item => (
                <li key={item} className="flex gap-3"><Check className="text-[var(--color-secondary)] w-5 h-5"/> {item}</li>
              ))}
            </ul>
            <Link href="/register" className="block w-full py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-center font-bold hover:opacity-90">
              Testar Premium
            </Link>
          </div>

          {/* Business */}
          <div className="rounded-3xl border border-gray-200 p-8 hover:border-purple-200 transition-colors">
            <h3 className="text-xl font-bold text-gray-900">Business</h3>
            <div className="my-4"><span className="text-4xl font-bold">R$ 49,90</span>/mês</div>
            <ul className="space-y-3 mb-8 text-sm text-gray-600">
              {["Gestão PJ e PF", "Fluxo de caixa", "Relatórios contábeis"].map(item => (
                <li key={item} className="flex gap-3"><Check className="text-green-500 w-5 h-5"/> {item}</li>
              ))}
            </ul>
            <Link href="/contact" className="block w-full py-3 rounded-xl border-2 border-gray-100 text-center font-bold text-gray-900 hover:border-gray-200">Falar com Consultor</Link>
          </div>
        </div>
      </div>
    </section>
  );
}