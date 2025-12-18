import { Check } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-linear-to-br from-primary to-secondary pt-20 pb-32 lg:pt-32 lg:pb-40"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto e CTA */}
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-tight">
              Guarde dinheiro <br className="hidden lg:block" />
              <span className="text-purple-200">sem esforço</span>
            </h1>
            <p className="text-lg text-purple-100 mb-8 leading-relaxed max-w-lg">
              O app que separa a sobra automaticamente antes de você gastar.
              Simples, inteligente e eficaz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary shadow-xl hover:bg-purple-50 transition-all active:scale-95"
              >
                Começar Agora
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-transparent px-8 py-4 text-lg font-bold text-white hover:bg-white/10 transition-all"
              >
                Ver Como Funciona
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-purple-100 font-medium">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-white/20 p-1">
                  <Check size={12} className="text-white" />
                </div>
                Gratuito para começar
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-white/20 p-1">
                  <Check size={12} className="text-white" />
                </div>
                Sem cartão de crédito
              </div>
            </div>
          </div>

          {/* Widget Visual (O Card do Dashboard) */}
          <div className="relative mt-12 lg:mt-0 hidden md:block perspective-1000">
            <div className="relative rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-gray-900/10 rotate-3 transition-transform hover:rotate-0 duration-500 ease-out">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Saldo Livre
                  </p>
                  <h3 className="text-4xl font-bold text-gray-900 mt-1">
                    R$ 847,50
                  </h3>
                </div>
                <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700 ring-1 ring-inset ring-green-600/20">
                  ✓ No ritmo
                </span>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">
                      Sobra Garantida
                    </span>
                    <span className="font-bold text-green-600">R$ 600,00</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-green-100">
                    <div className="h-2.5 w-full rounded-full bg-green-500" />
                  </div>
                </div>
                {/* ... outros progress bars ... */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">
                      Contas Fixas
                    </span>
                    <span className="font-bold text-blue-600">R$ 1.200,00</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-blue-100">
                    <div className="h-2.5 w-full rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
              <p className="mt-6 text-xs text-center text-gray-400">
                Atualizado em tempo real via Open Finance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
