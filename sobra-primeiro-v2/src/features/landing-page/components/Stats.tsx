export function Stats() {
  const stats = [
    { value: "10K+", label: "Usuários ativos" },
    { value: "R$ 1.8K", label: "Sobra média em 6 meses" },
    { value: "78%", label: "Conseguem guardar no 1º mês" },
    { value: "4.8★", label: "Avaliação dos usuários" },
  ];

  return (
    <section className="w-full border-y border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group cursor-default">
              <div className="text-4xl font-extrabold md:text-5xl">
                <span className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-500 group-hover:text-[var(--color-primary)] transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}