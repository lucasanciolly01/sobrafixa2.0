import { Settings2 } from "lucide-react";
import { BudgetDistribution } from "../../../features/budget/components/BudgetDistribution";
import { BudgetList } from "../../../features/budget/components/BudgetList";

export default function BudgetPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orçamento Mensal</h1>
          <p className="text-gray-500">Defina limites e assuma o controle.</p>
        </div>
        <button type="button" className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
          <Settings2 className="w-4 h-4" />
          Ajustar Limites
        </button>
      </div>

      {/* Grid: Gráfico e Lista */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna da Esquerda (Lista) ocupa 2 espaços */}
        <div className="lg:col-span-2">
          <BudgetList />
        </div>
        
        {/* Coluna da Direita (Gráfico) ocupa 1 espaço */}
        <div className="lg:col-span-1">
          <BudgetDistribution />
        </div>
      </div>
    </div>
  );
}