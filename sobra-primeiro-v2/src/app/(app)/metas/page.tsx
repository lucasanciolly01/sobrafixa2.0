import { Plus } from "lucide-react";
import { GoalsList } from "../../../features/goals/components/GoalsList";

export default function GoalsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Minhas Metas</h1>
          <p className="text-gray-500">Acompanhe a evolução dos seus sonhos.</p>
        </div>
        <button type="button" className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-md shadow-purple-200">
          <Plus className="w-5 h-5" />
          Nova Meta
        </button>
      </div>

      {/* Lista de Metas */}
      <GoalsList />
    </div>
  );
}