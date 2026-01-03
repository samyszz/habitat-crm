import { Search, Phone, Mail } from 'lucide-react';

export default function Adotantes() {
  const adotantes = [
    { id: 1, nome: "Ana Clara", status: "Em processo", animal: "Pipoca", contato: "(11) 9999-9999" },
    { id: 2, nome: "Jorge Silva", status: "Aprovado", animal: "-", contato: "(21) 8888-8888" },
    { id: 3, nome: "Mariana Luz", status: "Adotou", animal: "Thor", contato: "mari@email.com" },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Bento */}
      <div className="bg-white p-6 rounded-3xl shadow-soft flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
           <h2 className="text-2xl font-display font-bold text-primary">Famílias & Adotantes ❤️</h2>
           <p className="text-secondary font-medium">Quem está pronto para dar amor?</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/40" size={20} />
          <input 
            type="text" 
            placeholder="Buscar adotante..." 
            className="w-full pl-10 pr-4 py-3 rounded-full bg-background border-none focus:ring-2 focus:ring-accent-orange/20 font-medium" 
          />
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adotantes.map((pessoa) => (
          <div key={pessoa.id} className="bg-white p-6 rounded-3xl shadow-soft hover:shadow-hover transition-all group border border-transparent hover:border-orange-100">
            <div className="flex justify-between items-start mb-4">
              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-accent-orange font-display font-bold text-2xl group-hover:scale-110 transition-transform">
                {pessoa.nome.charAt(0)}
              </div>
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide ${
                pessoa.status === 'Adotou' ? 'bg-status-green text-white' : 
                pessoa.status === 'Aprovado' ? 'bg-status-blue text-white' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {pessoa.status.toUpperCase()}
              </span>
            </div>
            
            <h3 className="font-display font-bold text-xl text-primary">{pessoa.nome}</h3>
            <p className="text-secondary font-medium mb-6 flex items-center gap-1">
              Interesse: <span className="text-accent-orange">{pessoa.animal}</span>
            </p>

            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <button className="flex-1 py-2.5 rounded-xl bg-background hover:bg-orange-100 text-secondary hover:text-accent-orange transition-colors flex justify-center items-center gap-2 font-bold text-sm">
                <Phone size={18} /> Ligar
              </button>
              <button className="flex-1 py-2.5 rounded-xl bg-background hover:bg-orange-100 text-secondary hover:text-accent-orange transition-colors flex justify-center items-center gap-2 font-bold text-sm">
                <Mail size={18} /> Email
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}