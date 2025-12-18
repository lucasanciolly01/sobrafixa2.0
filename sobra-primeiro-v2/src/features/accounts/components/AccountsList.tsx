import { formatCurrency } from "@/lib/utils";
import { Building2, CreditCard, Landmark, MoreHorizontal, Wallet } from "lucide-react";

const accounts = [
  { id: 1, name: "Nubank", type: "Conta Corrente", balance: 1450.80, color: "bg-purple-600", icon: Building2, lastSync: "Hoje, 10:30" },
  { id: 2, name: "Itaú Personalité", type: "Conta Principal", balance: 4200.00, color: "bg-orange-600", icon: Landmark, lastSync: "Hoje, 09:15" },
  { id: 3, name: "XP Investimentos", type: "Corretora", balance: 12500.00, color: "bg-black", icon: Wallet, lastSync: "Ontem" },
  { id: 4, name: "Inter", type: "Reserva", balance: 500.00, color: "bg-orange-500", icon: Building2, lastSync: "Ontem" },
];

export function AccountsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {accounts.map((account) => (
        <div key={account.id} className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
          {/* Faixa Colorida Decorativa */}
          <div className={`h-2 w-full ${account.color}`} />
          
          <div className="p-6">
            {/* Cabeçalho do Card */}
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-xl bg-gray-50 text-gray-700`}>
                <account.icon className="w-6 h-6" />
              </div>
              <button className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-50 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Informações da Conta */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-500 mb-1">{account.type}</p>
              <h3 className="text-xl font-bold text-gray-900">{account.name}</h3>
            </div>

            {/* Saldo e Rodapé */}
            <div className="flex items-end justify-between pt-4 border-t border-gray-50">
              <div>
                <p className="text-xs text-gray-400 mb-1">Saldo Atual</p>
                <span className="text-2xl font-bold text-gray-900">
                  {formatCurrency(account.balance)}
                </span>
              </div>
              
              <div className="text-right">
                <span className="flex items-center gap-1 text-[10px] font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Sincronizado
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Card de Adicionar Nova Conta */}
      <button className="flex flex-col items-center justify-center h-full min-h-60 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 hover:bg-gray-50 hover:border-purple-300 transition-all group">
        <div className="p-4 rounded-full bg-white shadow-sm mb-3 group-hover:scale-110 transition-transform">
          <CreditCard className="w-6 h-6 text-purple-600" />
        </div>
        <span className="font-bold text-gray-700">Conectar Novo Banco</span>
        <span className="text-xs text-gray-400 mt-1">Via Open Finance ou Manual</span>
      </button>
    </div>
  );
}