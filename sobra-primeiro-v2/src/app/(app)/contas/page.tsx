import { PlusCircle } from "lucide-react";
import { AccountsList } from "../../../features/accounts/components/AccountsList";

export default function AccountsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Minhas Contas</h1>
          <p className="text-gray-500">Gerencie seus saldos e integrações bancárias.</p>
        </div>
        <button type="button" className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-md shadow-purple-200">
          <PlusCircle className="w-5 h-5" />
          Adicionar Conta
        </button>
      </div>

      {/* Lista de Contas */}
      <AccountsList />
    </div>
  );
}