"use client";

import { 
  BarChart3, 
  CreditCard, 
  LayoutDashboard, 
  LogOut, 
  PieChart, 
  Settings, 
  Target, 
  Wallet 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Transações", href: "/transacoes", icon: CreditCard },
    { name: "Minhas Metas", href: "/metas", icon: Target },
    { name: "Orçamento", href: "/orcamento", icon: PieChart },
    { name: "Contas Bancárias", href: "/contas", icon: Wallet },
    { name: "Configurações", href: "/configuracoes", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar (Menu Lateral) */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
            <BarChart3 className="w-8 h-8" />
            Sobra<span className="text-gray-900">Primo</span>
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-purple-50 text-purple-700 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "text-purple-600" : "text-gray-400"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" />
            Sair do Sistema
          </button>
        </div>
      </aside>

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 md:ml-64 p-4 md:p-0">
        {children}
      </main>
    </div>
  );
}