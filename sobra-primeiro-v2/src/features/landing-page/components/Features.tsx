import { Target, Zap, BarChart3 } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Target,
      title: "Automático",
      description: "O sistema separa a sobra assim que o dinheiro entra. Você não precisa fazer nada manualmente."
    },
    {
      icon: Zap,
      title: "Tempo Real",
      description: "Saiba exatamente quanto pode gastar agora, antes de tomar a decisão errada de compra."
    },
    {
      icon: BarChart3,
      title: "Inteligente",
      description: "IA aprende seus padrões e categoriza gastos sozinha. Você só valida o que for necessário."
    }
  ];

  return (
    <section id="recursos" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Por que escolher o Sobra Primeiro?
          </h2>
          <p className="text-lg text-gray-600">
            Chega de promessas. É hora de resultados reais com tecnologia de ponta.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="card-hover bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 text-primary">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}