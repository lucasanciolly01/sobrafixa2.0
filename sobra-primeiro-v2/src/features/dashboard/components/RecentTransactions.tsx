import { Car, Coffee, Home, ShoppingBag } from "lucide-react";

const transactions = [
  { id: 1, title: "Supermercado Extra", category: "Essencial", value: -450.00, date: "Hoje, 14:30", icon: ShoppingBag, color: "bg-blue-50 text-blue-600" },
  { id: 2, title: "Uber Viagem", category: "Transporte", value: -24.90, date: "Hoje, 09:15", icon: Car, color: "bg-orange-50 text-orange-600" },
  { id: 3, title: "Cafeteria Central", category: "Lazer", value: -18.50, date: "Ontem", icon: Coffee, color: "bg-purple-50 text-purple-600" },
  { id: 4, title: "Aluguel", category: "Moradia", value: -1200.00, date: "05/12", icon: Home, color: "bg-red-50 text-red-600" },
];

export function RecentTransactions() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-gray-900 text-lg">Últimas Transações</h3>
        <button type="button" className="text-sm font-semibold text-primary hover:text-primary-dark">
          Ver todas
        </button>
      </div>

      <div className="space-y-4">
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group">
            <div className="flex items-center gap-4">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center ${t.color}`}>
                <t.icon size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900 group-hover:text-primary transition-colors">{t.title}</p>
                <p className="text-xs text-gray-500">{t.category} • {t.date}</p>
              </div>
            </div>
            <span className="font-bold text-gray-900">
              {t.value < 0 ? "-" : "+"}
              {Math.abs(t.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}