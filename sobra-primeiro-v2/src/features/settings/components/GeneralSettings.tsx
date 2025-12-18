import { Bell, Lock, LogOut, Moon, Shield } from "lucide-react";

export function GeneralSettings() {
  return (
    <div className="space-y-6">
      {/* Notificações */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
          <Bell className="w-5 h-5 text-purple-600" />
          Preferências
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            <div>
              <p className="font-medium text-gray-900">Resumo Semanal</p>
              <p className="text-sm text-gray-500">Receber e-mail com gastos da semana</p>
            </div>
            <div className="w-11 h-6 bg-purple-600 rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm" />
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            <div>
              <p className="font-medium text-gray-900">Alertas de Orçamento</p>
              <p className="text-sm text-gray-500">Avisar quando atingir 80% do limite</p>
            </div>
            <div className="w-11 h-6 bg-purple-600 rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm" />
            </div>
          </div>

          <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
            <div>
              <p className="font-medium text-gray-900">Modo Escuro</p>
              <p className="text-sm text-gray-500">Alterar aparência do app</p>
            </div>
            <div className="w-11 h-6 bg-gray-200 rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Zona de Perigo */}
      <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-6">
        <h3 className="font-bold text-red-600 text-lg mb-6 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Segurança
        </h3>
        
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-3 text-left hover:bg-red-50 rounded-lg transition-colors group">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-400 group-hover:text-red-500" />
              <span className="font-medium text-gray-700 group-hover:text-red-700">Alterar Senha</span>
            </div>
            <span className="text-sm text-gray-400">Última alteração há 3 meses</span>
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600 font-medium">
            <LogOut className="w-5 h-5" />
            Sair da Conta
          </button>
        </div>
      </div>
    </div>
  );
}