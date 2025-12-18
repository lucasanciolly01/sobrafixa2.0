import { Car, Plane, ShieldCheck, Target, Trophy } from "lucide-react";

// Dados simulados
const goals = [
  { id: 1, title: "Reserva de Emergência", current: 15000, target: 30000, deadline: "12/2024", icon: ShieldCheck, color: "bg-blue-100 text-blue-600", barColor: "bg-blue-600" },
  { id: 2, title: "Viagem para Europa", current: 5400, target: 12000, deadline: "07/2025", icon: Plane, color: "bg-purple-100 text-purple-600", barColor: "bg-purple-600" },
  { id: 3, title: "Trocar de Carro", current: 12000, target: 45000, deadline: "01/2026", icon: Car, color: "bg-green-100 text-green-600", barColor: "bg-green-600" },
  { id: 4, title: "PlayStation 6", current: 800, target: 5000, deadline: "11/2025", icon: Trophy, color: "bg-orange-100 text-orange-600", barColor: "bg-orange-600" },
];

export function GoalsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {goals.map((goal) => {
        const percentage = Math.min(100, Math.round((goal.current / goal.target) * 100));
        
        return (
          <div key={goal.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            {/* Cabeçalho do Card */}
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${goal.color}`}>
                <goal.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                Até {goal.deadline}
              </span>
            </div>

            {/* Título e Valores */}
            <div className="mb-4">
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">
                {goal.title}
              </h3>
              <div className="flex items-end gap-1 mt-1">
                <span className="text-2xl font-bold text-gray-900">
                  {goal.current.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                <span className="text-sm text-gray-500 mb-1">
                  de {goal.target.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
              </div>
            </div>

            {/* Barra de Progresso */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-gray-600">{percentage}% atingido</span>
                <span className={percentage >= 100 ? "text-green-600" : "text-gray-400"}>
                  {percentage >= 100 ? "Concluído! 🎉" : "Falta pouco"}
                </span>
              </div>
              <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${goal.barColor} transition-all duration-1000 ease-out`} 
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Card "Criar Nova Meta" */}
      {/* Correção aplicada aqui: min-h-[200px] -> min-h-50 */}
      <button className="flex flex-col items-center justify-center h-full min-h-50 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 hover:bg-gray-50 hover:border-purple-300 transition-all group">
        <div className="p-4 rounded-full bg-white shadow-sm mb-3 group-hover:scale-110 transition-transform">
          <Target className="w-6 h-6 text-purple-600" />
        </div>
        <span className="font-bold text-gray-700">Criar Nova Meta</span>
        <span className="text-xs text-gray-400 mt-1">Defina seu próximo sonho</span>
      </button>
    </div>
  );
}