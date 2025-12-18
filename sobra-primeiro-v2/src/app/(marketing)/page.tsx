import { Hero } from "../../features/landing-page/components/Hero";

export default function LandingPage() {
  return (
    <>
      <Hero />
      
      {/* Placeholders para as próximas seções (implementaremos na sequência) */}
      <section id="stats" className="py-20 bg-white">
        <div className="container mx-auto text-center text-gray-500">
          [Componente de Estatísticas virá aqui]
        </div>
      </section>

      <section id="como-funciona" className="py-20 bg-gray-50">
         <div className="container mx-auto text-center text-gray-500">
          [Componente Como Funciona virá aqui]
        </div>
      </section>
    </>
  );
}