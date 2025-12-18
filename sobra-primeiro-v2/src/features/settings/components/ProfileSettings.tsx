import { Camera, User } from "lucide-react";

export function ProfileSettings() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <h3 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
        <User className="w-5 h-5 text-purple-600" />
        Dados do Perfil
      </h3>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Avatar */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white shadow-sm relative overflow-hidden group cursor-pointer">
            <User className="w-10 h-10 text-gray-400" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
          <button className="text-sm text-purple-600 font-semibold hover:underline">
            Alterar foto
          </button>
        </div>

        {/* Formulário */}
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Nome Completo</label>
            <input 
              type="text" 
              defaultValue="Lucas Anciolly" 
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">E-mail</label>
            <input 
              type="email" 
              defaultValue="lucas@exemplo.com" 
              disabled
              className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Telefone</label>
            <input 
              type="tel" 
              defaultValue="(11) 99999-9999" 
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Profissão</label>
            <input 
              type="text" 
              defaultValue="Desenvolvedor" 
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-end">
        <button className="px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-purple-200">
          Salvar Alterações
        </button>
      </div>
    </div>
  );
}