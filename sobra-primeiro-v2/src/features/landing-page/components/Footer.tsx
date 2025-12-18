import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 pt-16 pb-8 text-gray-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 mb-12">
          {/* Coluna da Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* CORREÇÃO AQUI: bg-linear-to-br e cores diretas */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-primary to-secondary text-white font-bold text-xl">
                S
              </div>
              <span className="text-xl font-bold text-white">
                Sobra Primeiro
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              A sobra vem primeiro. O resto é o que você pode viver. Simples,
              inteligente e automático.
            </p>
          </div>

          {/* Links... (O restante do código permanece igual) */}
          <div>
            <h4 className="mb-4 font-bold text-white">Produto</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#como-funciona"
                  className="hover:text-white transition-colors"
                >
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link
                  href="#recursos"
                  className="hover:text-white transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="#precos"
                  className="hover:text-white transition-colors"
                >
                  Preços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/carreiras"
                  className="hover:text-white transition-colors"
                >
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-white">Suporte</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contato"
                  className="hover:text-white transition-colors"
                >
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="hover:text-white transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="hover:text-white transition-colors"
                >
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {currentYear} Sobra Primeiro. Todos os direitos reservados.
            <br />
            Não somos uma instituição financeira.
          </p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
