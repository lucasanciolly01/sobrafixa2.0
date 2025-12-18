import { formatCurrency } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

const categories = [
  { id: 1, name: "Moradia", spent: 1200, limit: 1200, color: "bg-purple-600", bg: "bg-purple-100" },
  { id: 2, name: "Alimentação", spent: 800, limit: 1000, color: "bg-green-600", bg: "bg-green-100" },
  { id: 3, name: "Transporte", spent: 400, limit: 350, color: "bg-orange-500", bg: "bg-orange-100" }, // Estourou
  { id: 4, name: "Lazer", spent: 300, limit: 500, color: "bg-pink-500", bg: "bg-pink-100" },
];

export function BudgetList() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <h3 className="font-bold text-gray-900 text-lg mb-6">Limites por Categoria</h3>
      
      <div className="space-y-6">
        {categories.map((cat) => {
          const percentage = Math.min(100, Math.round((cat.spent / cat.limit) * 100));
          const isOverLimit = cat.spent > cat.limit;

          return (
            <div key={cat.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">{cat.name}</span>
                  {isOverLimit && (
                    <span className="flex items-center gap-1 text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full font-bold">
                      <AlertCircle className="w-3 h-3" /> Estourou
                    </span>
                  )}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-gray-900">
                    {formatCurrency(cat.spent)}
                  </span>
                  <span className="text-gray-400"> / {formatCurrency(cat.limit)}</span>
                </div>
              </div>

              {/* Barra de Progresso */}
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${isOverLimit ? 'bg-red-500' : cat.color} transition-all duration-1000`} 
                  style={{ width: `${percentage}%` }}
                />
              </div>
              
              <p className="text-xs text-gray-500 text-right">
                {isOverLimit 
                  ? `Ultrapassou ${formatCurrency(Math.abs(cat.limit - cat.spent))}` 
                  : `Restam ${formatCurrency(cat.limit - cat.spent)}`
                }
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}