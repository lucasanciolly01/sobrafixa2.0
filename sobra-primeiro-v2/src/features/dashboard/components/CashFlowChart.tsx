"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", entradas: 4000, saidas: 2400 },
  { name: "Fev", entradas: 3000, saidas: 1398 },
  { name: "Mar", entradas: 2000, saidas: 9800 },
  { name: "Abr", entradas: 2780, saidas: 3908 },
  { name: "Mai", entradas: 1890, saidas: 4800 },
  { name: "Jun", entradas: 2390, saidas: 3800 },
];

export function CashFlowChart() {
  return (
    // Correção: h-[400px] alterado para h-100
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col h-100">
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 text-lg">Fluxo de Caixa</h3>
        <p className="text-sm text-gray-500">
          Comparativo de entradas e saídas dos últimos 6 meses.
        </p>
      </div>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickFormatter={(value) => `R$ ${value}`}
            />
            <Tooltip 
              cursor={{ fill: '#F3F4F6' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar 
              dataKey="entradas" 
              name="Entradas" 
              fill="#10B981" 
              radius={[4, 4, 0, 0]} 
              barSize={30}
            />
            <Bar 
              dataKey="saidas" 
              name="Saídas" 
              fill="#EF4444" 
              radius={[4, 4, 0, 0]} 
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}