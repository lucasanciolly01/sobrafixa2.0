"use client";

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Moradia", value: 1200, color: "#8B5CF6" }, // Roxo
  { name: "Alimentação", value: 800, color: "#10B981" }, // Verde
  { name: "Transporte", value: 400, color: "#F59E0B" }, // Laranja
  { name: "Lazer", value: 300, color: "#EC4899" }, // Rosa
  { name: "Outros", value: 200, color: "#6B7280" }, // Cinza
];

export function BudgetDistribution() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col h-96">
      <h3 className="font-bold text-gray-900 text-lg mb-2">Distribuição</h3>
      <p className="text-sm text-gray-500 mb-4">Onde você gasta seu dinheiro.</p>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => `R$ ${value}`}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}