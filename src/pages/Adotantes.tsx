import { Search, Heart, Phone, Mail } from 'lucide-react';

export default function Adotantes() {
  const adotantes = [
    { id: 1, nome: "Ana Clara", status: "Em processo", animal: "Pipoca", contato: "(11) 9999-9999" },
    { id: 2, nome: "Jorge Silva", status: "Aprovado", animal: "-", contato: "(21) 8888-8888" },
    { id: 3, nome: "Mariana Luz", status: "Adotou", animal: "Thor", contato: "mari@email.com" },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-3xl shadow-soft">
        <h2 className="text-2xl font-display font-bold text-primary pl-2">Famílias & Adotantes ❤️</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input type="text" placeholder="Buscar..." className="pl-10 pr-4 py-2 rounded-full bg-background border-none focus:ring-2 focus:ring-accent-orange/50" />
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adotantes.map((pessoa) => (
          <div key={pessoa.id} className="bg-white p-6 rounded-3xl shadow-soft hover:shadow-hover transition-all border border-transparent hover:border-accent-yellow/30">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-accent-orange font-bold text-xl">
                {pessoa.nome.charAt(0)}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                pessoa.status === 'Adotou' ? 'bg-status-green text-white' : 
                pessoa.status === 'Aprovado' ? 'bg-status-blue text-white' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {pessoa.status.toUpperCase()}
              </span>
            </div>
            
            <h3 className="font-bold text-lg text-primary">{pessoa.nome}</h3>
            <p className="text-sm text-secondary mb-4 flex items-center gap-1">
              Interesse: <span className="font-bold text-accent-orange">{pessoa.animal}</span>
            </p>

            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
              <button className="flex-1 py-2 rounded-xl bg-background hover:bg-orange-50 text-secondary hover:text-accent-orange transition-colors flex justify-center">
                <Phone size={18} />
              </button>
              <button className="flex-1 py-2 rounded-xl bg-background hover:bg-orange-50 text-secondary hover:text-accent-orange transition-colors flex justify-center">
                <Mail size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}