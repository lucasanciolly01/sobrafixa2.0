import { Navbar } from "../../features/landing-page/components/Navbar";
import { Footer } from "../../features/landing-page/components/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar fixa no topo */}
      <Navbar />
      
      {/* Conteúdo principal (Hero, Features, etc) */}
      <main className="flex-1">{children}</main>
      
      {/* Rodapé comum */}
      <Footer />
    </div>
  );
}