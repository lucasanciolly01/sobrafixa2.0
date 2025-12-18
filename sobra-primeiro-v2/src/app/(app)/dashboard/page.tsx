import { CashFlowChart } from "../../../features/dashboard/components/CashFlowChart";
import { DashboardStats } from "../../../features/dashboard/components/DashboardStats";
import { RecentTransactions } from "../../../features/dashboard/components/RecentTransactions";

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Olá, Lucas 👋</h1>
          <p className="text-gray-500">Aqui está o resumo financeiro de hoje.</p>
        </div>
        <div className="flex gap-3">
          <button type="button" className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            Filtrar
          </button>
          <button type="button" className="px-4 py-2 bg-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-purple-200">
            + Nova Transação
          </button>
        </div>
      </div>

      {/* Seção de Estatísticas */}
      <DashboardStats />

      {/* Grid de Conteúdo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentTransactions />
        
        {/* Gráfico Real */}
        <CashFlowChart />
      </div>
    </div>
  );
}