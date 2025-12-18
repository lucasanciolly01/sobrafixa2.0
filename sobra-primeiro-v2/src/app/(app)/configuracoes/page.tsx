import { GeneralSettings } from "../../../features/settings/components/GeneralSettings";
import { ProfileSettings } from "../../../features/settings/components/ProfileSettings";

export default function SettingsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-500">Gerencie seus dados e preferências.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna da Esquerda (Perfil) - Ocupa 2 espaços */}
        <div className="lg:col-span-2">
          <ProfileSettings />
        </div>

        {/* Coluna da Direita (Geral) - Ocupa 1 espaço */}
        <div className="lg:col-span-1">
          <GeneralSettings />
        </div>
      </div>
    </div>
  );
}