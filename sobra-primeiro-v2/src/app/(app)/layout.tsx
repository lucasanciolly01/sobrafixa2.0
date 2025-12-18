"use client";

import { useState } from "react";
import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  LogOut,
  PieChart,
  Settings,
  Target,
  Wallet,
  Menu, // Ícone novo para mobile
  X,    // Ícone novo para fechar mobile
  User  // Ícone para o perfil
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Transações", href: "/transacoes", icon: CreditCard },
    { name: "Minhas Metas", href: "/metas", icon: Target },
    { name: "Orçamento", href: "/orcamento", icon: PieChart },
    { name: "Contas Bancárias", href: "/contas", icon: Wallet },
    { name: "Configurações", href: "/configuracoes", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
      {/* --- HEADER MOBILE (Apenas visível em telas pequenas) --- */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-2 text-purple-700 font-bold text-xl">
          <BarChart3 className="w-6 h-6" />
          <span>SobraPrimo</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* --- SIDEBAR (Menu Lateral) --- */}
      {/* A classe 'fixed' mantém o menu fixo. A lógica de 'translate' controla a animação no mobile */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 
          transform transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:h-screen md:flex md:flex-col
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo (Visível apenas em Desktop dentro da Sidebar) */}
        <div className="p-6 border-b border-gray-100 hidden md:block">
          <h1 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
            <BarChart3 className="w-8 h-8" />
            Sobra<span className="text-gray-900">Primo</span>
          </h1>
        </div>

        {/* Links de Navegação */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto mt-4 md:mt-0">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)} // Fecha o menu ao clicar num link (mobile)
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-purple-50 text-purple-700 shadow-sm border border-purple-100"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "text-purple-600" : "text-gray-400"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Rodapé da Sidebar (Perfil + Logout) */}
        <div className="p-4 border-t border-gray-100 space-y-2">
          {/* Mini Perfil */}
          <div className="flex items-center gap-3 px-4 py-2 mb-2 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
              <User className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Utilizador</p>
              <p className="text-xs text-gray-500 truncate">plano gratuito</p>
            </div>
          </div>

          <button className="flex items-center gap-3 px-4 py-2 w-full rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" />
            Sair do Sistema
          </button>
        </div>
      </aside>

      {/* --- OVERLAY PARA MOBILE (Fundo escuro quando menu abre) --- */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden glass"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* --- ÁREA DE CONTEÚDO PRINCIPAL --- */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto h-[calc(100vh-64px)] md:h-screen">
        <div className="max-w-7xl mx-auto">
           {children}
        </div>
      </main>
    </div>
  );
}