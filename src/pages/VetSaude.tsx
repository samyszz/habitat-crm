import React from 'react';
import { Stethoscope, Heart } from 'lucide-react';

export default function VetSaude() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-display font-bold text-primary">Vet & Saúde</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="text-sm text-secondary">Animais em tratamento</div>
          <div className="text-3xl font-display font-bold text-primary">28</div>
        </div>

        <div className="card">
          <div className="text-sm text-secondary">Vacinas pendentes</div>
          <div className="text-3xl font-display font-bold text-primary">12</div>
        </div>

        <div className="card">
          <div className="text-sm text-secondary">Urgências ativas</div>
          <div className="text-3xl font-display font-bold text-primary">3</div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-primary mb-3">Prontuário do Animal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <div className="text-sm text-secondary">Resumo de Saúde</div>
            <div className="mt-2">Peso: 6.3kg • Última consulta: 2025-12-03</div>
            <div className="mt-2">Vacinas: <span className="text-green-600">✔</span> / <span className="text-orange-500">⏳</span></div>
          </div>

          <div className="card">
            <div className="text-sm text-secondary">Consultas</div>
            <ul className="mt-2 space-y-2">
              <li>2025-12-03 — Dr. Fulano — Revisão</li>
              <li>2025-09-10 — Dr. Beltrano — Vacinação</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
