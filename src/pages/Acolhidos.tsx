import React from 'react';
import { PawPrint, Heart } from 'lucide-react';

const samplePets = [
  { id: 1, name: 'Tico', age: '2 anos', type: 'Cachorro' },
  { id: 2, name: 'Luna', age: '1 ano', type: 'Gata' },
  { id: 3, name: 'Pipoca', age: '3 meses', type: 'Cachorro' },
  { id: 4, name: 'Milu', age: '4 anos', type: 'Gato' },
];

export default function Acolhidos({ onOpenAcolhido }: { onOpenAcolhido?: () => void }) {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h2 className="text-2xl font-display font-bold text-primary">Acolhidos</h2>
        <button onClick={onOpenAcolhido} className="pill-btn bg-accent-yellow text-white">Registrar Acolhido</button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {samplePets.map((pet) => (
          <div key={pet.id} className="card flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl bg-accent-lightOrange/30 flex items-center justify-center">
              <PawPrint size={28} className="text-accent-orange" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-primary">{pet.name}</div>
              <div className="text-sm text-secondary">{pet.type} • {pet.age}</div>
            </div>
            <div className="ml-auto text-sm text-secondary">#00{pet.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}