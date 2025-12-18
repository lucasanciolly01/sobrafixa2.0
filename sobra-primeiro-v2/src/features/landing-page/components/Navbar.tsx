"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "../../../lib/utils";

const navLinks = [
  { name: "Início", href: "#home" },
  { name: "Como Funciona", href: "#como-funciona" },
  { name: "Recursos", href: "#recursos" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Preços", href: "#precos" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary text-white font-bold text-xl shadow-lg transition-transform group-hover:scale-105">
            S
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Sobra Primeiro
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-linear-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:opacity-90 transition-opacity"
          >
            Começar Grátis
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden animate-in slide-in-from-top-5">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-gray-100" />
            <Link 
              href="/login"
              className="w-full text-center py-3 text-primary font-bold"
            >
              Entrar
            </Link>
            <Link
              href="/register"
              className="w-full text-center py-3 rounded-xl bg-primary text-white font-bold"
            >
              Criar Conta Gratuita
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}