import { Syringe, AlertCircle, CheckCircle, Clock, CalendarDays, Stethoscope } from 'lucide-react';

export default function VetSaude() {
  // Dados simulados para preencher a tela (depois podemos conectar no Firebase)
  const agenda = [
    { id: 1, animal: "Rex", proc: "Vacina V10", data: "Hoje 14:00", urgente: true },
    { id: 2, animal: "Luna", proc: "Castração", data: "Amanhã 09:00", urgente: false },
    { id: 3, animal: "Bob", proc: "Check-up", data: "12/10 10:30", urgente: false },
    { id: 4, animal: "Thor", proc: "Raio-X Pata", data: "14/10 11:00", urgente: true },
  ];

  return (
    <div className="space-y-8 animate-fadeIn pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 bg-white p-6 rounded-3xl shadow-soft">
        <div>
          <h2 className="text-3xl font-display font-bold text-primary flex items-center gap-3">
            <Stethoscope className="text-accent-orange" size={32} />
            Vet & Saúde
          </h2>
          <p className="text-secondary font-medium mt-1">Controle clínico e agendamentos.</p>
        </div>
        <button className="bg-status-red hover:bg-red-600 text-white px-8 py-3 rounded-pill font-bold shadow-lg shadow-red-200 transition-all flex items-center gap-2 transform hover:-translate-y-1">
          <AlertCircle size={20} /> 
          Registrar Emergência
        </button>
      </div>

      {/* Grid Bento Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Bloco Grande: Status Geral */}
        <div className="lg:col-span-2 bg-gradient-to-br from-accent-orange to-orange-600 text-white p-8 rounded-3xl shadow-soft relative overflow-hidden flex flex-col justify-center">
           <div className="relative z-10">
             <div className="flex items-center gap-3 mb-2 opacity-90">
               <CheckCircle size={24} />
               <span className="font-bold uppercase tracking-wide text-sm">Status Geral</span>
             </div>
             <div className="text-5xl font-display font-black mb-2">98%</div>
             <p className="font-medium opacity-90 max-w-sm">
               Dos animais estão saudáveis e com vacinas em dia. Excelente trabalho!
             </p>
           </div>
           <Stethoscope className="absolute -right-10 -bottom-10 w-48 h-48 text-white opacity-10 rotate-12" />
        </div>

        {/* Bloco: Vacinas Pendentes */}
        <div className="bg-white p-6 rounded-3xl shadow-soft border-b-4 border-yellow-400 flex flex-col justify-between group hover:shadow-hover transition-all">
          <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-600 mb-4 group-hover:scale-110 transition-transform">
            <Syringe size={24} />
          </div>
          <div>
            <div className="text-4xl font-display font-bold text-primary">12</div>
            <div className="text-secondary font-bold text-sm uppercase mt-1">Vacinas Pendentes</div>
          </div>
        </div>

        {/* Bloco: Tratamentos Ativos */}
        <div className="bg-white p-6 rounded-3xl shadow-soft border-b-4 border-blue-400 flex flex-col justify-between group hover:shadow-hover transition-all">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
            <Clock size={24} />
          </div>
          <div>
            <div className="text-4xl font-display font-bold text-primary">28</div>
            <div className="text-secondary font-bold text-sm uppercase mt-1">Em Tratamento</div>
          </div>
        </div>
      </div>

      {/* Agenda e Avisos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Lista de Agenda */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-soft">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display font-bold text-xl text-primary flex items-center gap-2">
              <CalendarDays className="text-accent-orange" /> Agenda Veterinária
            </h3>
            <button className="text-sm font-bold text-accent-orange hover:underline">Ver Calendário</button>
          </div>
          
          <div className="space-y-3">
            {agenda.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-background border border-transparent hover:border-orange-200 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-1.5 h-10 rounded-full ${item.urgente ? 'bg-status-red' : 'bg-status-green'}`}></div>
                  <div>
                    <div className="font-bold text-lg text-primary">{item.animal}</div>
                    <div className="text-sm text-secondary font-medium flex items-center gap-2">
                      {item.proc}
                      {item.urgente && <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full font-bold">URGENTE</span>}
                    </div>
                  </div>
                </div>
                <div className="text-right bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 font-bold text-primary text-sm">
                   {item.data}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card de Aviso */}
        <div className="bg-primary text-background p-8 rounded-3xl shadow-soft flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-accent-yellow mb-6">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-2">Campanha de Raiva</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A próxima campanha de vacinação começa em 15 dias. Verifique o estoque de vacinas.
            </p>
          </div>
          <button className="w-full py-3 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors">
            Gerenciar Estoque
          </button>
        </div>
      </div>
    </div>
  );
}