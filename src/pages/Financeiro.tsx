import React from 'react';

export default function Financeiro() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-display font-bold text-primary">Financeiro</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="text-sm text-secondary">Saldo atual</div>
          <div className="text-3xl font-display font-bold text-primary">R$ 12.450,00</div>
        </div>

        <div className="card">
          <div className="text-sm text-secondary">Despesas do mês</div>
          <div className="text-3xl font-display font-bold text-primary">R$ 4.250,00</div>
        </div>

        <div className="card">
          <div className="text-sm text-secondary">Doações</div>
          <div className="text-3xl font-display font-bold text-primary">R$ 7.200,00</div>
        </div>
      </div>

      <div className="mt-6 card">
        <div className="text-sm text-secondary">Lançamentos recentes</div>
        <ul className="mt-2 divide-y">
          <li className="py-2">Entrada • Doação • R$ 200 • 2025-12-10</li>
          <li className="py-2">Saída • Vet • R$ 150 • 2025-12-08</li>
        </ul>
      </div>
    </div>
  );
}
