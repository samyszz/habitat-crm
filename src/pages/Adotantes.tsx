import React from 'react';
import { Heart } from 'lucide-react';

const sampleAdopters = [
  { id: 1, name: 'Mariana', city: 'Curitiba' },
  { id: 2, name: 'Carlos', city: 'São Paulo' },
  { id: 3, name: 'Ana', city: 'Recife' },
];

export default function Adotantes({ onNewAdotante }: { onNewAdotante?: () => void }) {
  const [openProfile, setOpenProfile] = React.useState(false);
  const [selected, setSelected] = React.useState<number | null>(null);

  function openFor(id: number) {
    setSelected(id);
    setOpenProfile(true);
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-display font-bold text-primary">Adotantes</h2>
        <div className="flex items-center gap-3">
          <button onClick={onNewAdotante} className="pill-btn bg-accent-green text-white">Novo Adotante</button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleAdopters.map((a) => (
          <div key={a.id} className="card flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-yellow/30 flex items-center justify-center">
              <Heart size={20} className="text-accent-orange" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-primary">{a.name}</div>
              <div className="text-sm text-secondary">{a.city}</div>
              <div className="mt-2 text-xs uppercase font-bold tracking-wide">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 block"></span>
                  Em análise
                </span>
              </div>
            </div>
            <div className="ml-auto flex flex-col items-end gap-2">
              <button onClick={() => openFor(a.id)} className="text-sm font-bold text-accent-orange">Ver Cadastro</button>
              <div className="text-sm text-secondary">#{a.id}</div>
            </div>
          </div>
        ))}
      </div>

      {openProfile && selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpenProfile(false)} />
          <div className="relative bg-white rounded-2xl w-full max-w-2xl p-6 shadow-soft z-10">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-accent-yellow/30 flex items-center justify-center">A</div>
              <div>
                <h3 className="text-xl font-display font-bold text-primary">{sampleAdopters.find(s => s.id === selected)?.name}</h3>
                <div className="text-sm text-secondary">{sampleAdopters.find(s => s.id === selected)?.city}</div>

                <div className="mt-4 space-y-3">
                  <div>
                    <div className="text-sm font-bold text-secondary">Dados Pessoais</div>
                    <div className="mt-1">Endereço fictício • contato@exemplo.com • (41) 99999-0000</div>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-secondary">Questionário</div>
                    <div className="mt-1">Possui experiência com animais: Sim • Tipo de moradia: Casa</div>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-secondary">Histórico de Adoções</div>
                    <div className="mt-1">Nenhum registro</div>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-secondary">Status do Processo</div>
                    <div className="mt-1">Em análise</div>
                  </div>
                </div>

                <div className="mt-4 flex gap-3 justify-end">
                  <button onClick={() => setOpenProfile(false)} className="px-4 py-2 rounded-md border">Fechar</button>
                  <button className="px-4 py-2 rounded-md bg-accent-green text-white">Aprovar</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}