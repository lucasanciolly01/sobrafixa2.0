import { ArrowDown, ArrowUp, Wallet } from "lucide-react";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Saldo Livre (Destaque) */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-purple-200 transform hover:-translate-y-1 transition-transform">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full">
            Em tempo real
          </span>
        </div>
        <p className="text-purple-100 text-sm font-medium">Saldo Livre</p>
        <h3 className="text-3xl font-bold mt-1">R$ 847,50</h3>
        <p className="text-xs text-purple-200 mt-4">
          Disponível para gastar hoje
        </p>
      </div>

      {/* Sobra Garantida */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-green-100 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-green-50 rounded-lg">
            <ArrowUp className="w-6 h-6 text-green-600" />
          </div>
          <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
            +12% meta
          </span>
        </div>
        <p className="text-gray-500 text-sm font-medium">Sobra Garantida</p>
        <h3 className="text-3xl font-bold text-gray-900 mt-1">R$ 600,00</h3>
        <p className="text-xs text-gray-400 mt-4">
          Já separado na sua conta
        </p>
      </div>

      {/* Gastos do Mês */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-red-100 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-red-50 rounded-lg">
            <ArrowDown className="w-6 h-6 text-red-600" />
          </div>
          <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            Faturas
          </span>
        </div>
        <p className="text-gray-500 text-sm font-medium">Gastos Totais</p>
        <h3 className="text-3xl font-bold text-gray-900 mt-1">R$ 2.450,00</h3>
        <p className="text-xs text-gray-400 mt-4">
          R$ 1.200 em contas fixas
        </p>
      </div>
    </div>
  );
}