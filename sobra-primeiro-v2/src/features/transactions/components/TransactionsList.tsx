import { ArrowDownLeft, ArrowUpRight, Calendar, Filter, Search } from "lucide-react";

// Dados simulados (depois virão do banco de dados)
const transactions = [
  { id: 1, title: "Salário Mensal", category: "Receita", date: "05/10/2023", amount: 4500.00, type: "income", status: "Confirmado" },
  { id: 2, title: "Supermercado Extra", category: "Alimentação", date: "08/10/2023", amount: -450.00, type: "expense", status: "Confirmado" },
  { id: 3, title: "Netflix", category: "Assinaturas", date: "10/10/2023", amount: -55.90, type: "expense", status: "Agendado" },
  { id: 4, title: "Freela Design", category: "Extra", date: "12/10/2023", amount: 850.00, type: "income", status: "Pendente" },
  { id: 5, title: "Posto Shell", category: "Transporte", date: "15/10/2023", amount: -200.00, type: "expense", status: "Confirmado" },
  { id: 6, title: "Academia Smart", category: "Saúde", date: "15/10/2023", amount: -120.00, type: "expense", status: "Confirmado" },
  { id: 7, title: "Burger King", category: "Lazer", date: "16/10/2023", amount: -45.50, type: "expense", status: "Confirmado" },
];

export function TransactionsList() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Barra de Ferramentas */}
      <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Buscar transação..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          <button type="button" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
          <button type="button" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
            <Calendar className="w-4 h-4" />
            Este Mês
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 font-medium">
            <tr>
              <th className="px-6 py-4">Descrição</th>
              <th className="px-6 py-4">Categoria</th>
              <th className="px-6 py-4">Data</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Valor</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${t.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {t.type === 'income' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                    </div>
                    <span className="font-semibold text-gray-900">{t.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{t.category}</td>
                <td className="px-6 py-4 text-gray-500">{t.date}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${t.status === 'Confirmado' ? 'bg-green-100 text-green-700' : 
                      t.status === 'Pendente' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-gray-100 text-gray-700'}`}>
                    {t.status}
                  </span>
                </td>
                <td className={`px-6 py-4 text-right font-bold ${t.type === 'income' ? 'text-green-600' : 'text-gray-900'}`}>
                  {t.type === 'expense' ? '- ' : '+ '}
                  {Math.abs(t.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Paginação Simples */}
      <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
        <span>Mostrando 7 de 45 transações</span>
        <div className="flex gap-2">
          <button type="button" className="px-3 py-1 border rounded hover:bg-gray-50" disabled>Anterior</button>
          <button type="button" className="px-3 py-1 border rounded hover:bg-gray-50">Próximo</button>
        </div>
      </div>
    </div>
  );
}