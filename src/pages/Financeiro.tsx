import { DollarSign, TrendingUp, PieChart } from 'lucide-react';

export default function Financeiro() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card Principal */}
        <div className="col-span-1 md:col-span-2 bg-primary text-white p-8 rounded-3xl shadow-soft relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-secondary/80 font-bold mb-1">Saldo em Caixa</h2>
            <div className="text-5xl font-display font-bold mb-6">R$ 4.250,00</div>
            <div className="flex gap-4">
              <button className="bg-accent-orange px-6 py-2 rounded-full font-bold text-sm hover:bg-orange-500 transition">Nova Doação</button>
              <button className="bg-white/10 px-6 py-2 rounded-full font-bold text-sm hover:bg-white/20 transition">Registrar Gasto</button>
            </div>
          </div>
          <DollarSign className="absolute right-[-20px] bottom-[-20px] text-white/5 w-64 h-64" />
        </div>

        {/* Card Secundário */}
        <div className="bg-white p-6 rounded-3xl shadow-soft flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
            <TrendingUp size={32} />
          </div>
          <div className="text-3xl font-bold text-primary">+15%</div>
          <div className="text-sm text-secondary">Arrecadação vs. Mês passado</div>
        </div>
      </div>

      {/* Lista de Transações Recentes */}
      <div className="bg-white p-6 rounded-3xl shadow-soft">
        <h3 className="font-bold text-lg text-primary mb-4">Últimas Movimentações</h3>
        <div className="space-y-4">
          {[
            { tipo: 'entrada', desc: 'Doação - Campanha Instagram', valor: '+ R$ 150,00' },
            { tipo: 'saida', desc: 'Compra de Ração (20kg)', valor: '- R$ 240,00' },
            { tipo: 'entrada', desc: 'Apadrinhamento Mensal', valor: '+ R$ 50,00' },
          ].map((t, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${t.tipo === 'entrada' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  <DollarSign size={16} />
                </div>
                <span className="font-bold text-primary">{t.desc}</span>
              </div>
              <span className={`font-bold ${t.tipo === 'entrada' ? 'text-green-600' : 'text-red-500'}`}>{t.valor}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}