"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Wallet, 
  Target, 
  PieChart, 
  Landmark, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Wallet, label: "Transações", href: "/transacoes" },
  { icon: Target, label: "Minhas Metas", href: "/metas" },
  { icon: PieChart, label: "Orçamento", href: "/orcamento" },
  { icon: Landmark, label: "Contas Bancárias", href: "/contas" },
  { icon: Settings, label: "Configurações", href: "/configuracoes" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">S</div>
          <span className="font-bold text-gray-900">Sobra Primeiro</span>
        </div>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:h-screen",
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          
          {/* Logo Area */}
          <div className="hidden lg:flex items-center gap-3 p-6 border-b border-gray-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary text-white font-bold text-xl">
              S
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Sobra Primeiro</h1>
              <p className="text-xs text-gray-500">Painel do Usuário</p>
            </div>
          </div>

          {/* Saldo Rápido */}
          <div className="p-4">
            <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Saldo Livre</span>
                <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full">✓ No ritmo</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">R$ 847,50</div>
              <p className="text-xs text-gray-500">Disponível para gastar</p>
            </div>
          </div>

          {/* Navegação */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-purple-50 text-primary font-semibold" 
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon size={20} className={isActive ? "text-primary" : "text-gray-400"} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                U
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">Usuário Demo</p>
                <p className="text-xs text-gray-500 truncate">usuario@email.com</p>
              </div>
            </div>
            <button className="flex items-center gap-2 w-full px-2 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut size={16} />
              Sair
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}