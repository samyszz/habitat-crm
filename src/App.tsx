import { useState } from 'react';
import DogPng from './assets/dog.png';
import LogoPng from './assets/logo.png';
import { 
  LayoutDashboard, 
  PawPrint, 
  Heart, 
  Stethoscope, 
  Calendar, 
  Search, 
  Bell, 
  Plus,
  Home
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import Acolhidos from './pages/Acolhidos';
import Adotantes from './pages/Adotantes';

// Dados simulados para o gráfico de ondas
const chartData = [
  { name: 'Jan', entrada: 30, saida: 20 },
  { name: 'Fev', entrada: 45, saida: 25 },
  { name: 'Mar', entrada: 35, saida: 40 },
  { name: 'Abr', entrada: 50, saida: 30 },
  { name: 'Mai', entrada: 40, saida: 55 },
  { name: 'Jun', entrada: 60, saida: 45 },
  { name: 'Jul', entrada: 55, saida: 60 },
];

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-background p-6 md:p-8 font-sans selection:bg-accent-orange selection:text-white">
      
      {/* 1. TOP NAV (Menu Superior Flutuante) */}
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={LogoPng} alt="Habitat logo" className="w-36 h-auto object-contain" />
        </div>

        {/* Menu Pílula */}
        <div className="flex flex-wrap justify-center gap-2 bg-white/60 backdrop-blur-sm p-2 rounded-full shadow-sm border border-white/50">
          {['Dashboard', 'Acolhidos', 'Adotantes', 'Vet & Saúde', 'Financeiro'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-pill text-sm font-bold transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-accent-yellow text-white shadow-md transform scale-105' 
                  : 'text-secondary hover:bg-white hover:text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Perfil & Notificação */}
        <div className="flex items-center gap-4">
          <button className="relative p-2.5 bg-white rounded-full text-secondary hover:text-accent-orange transition-colors shadow-sm">
            <Bell size={24} strokeWidth={2.5} />
            <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-status-red rounded-full border-2 border-white"></span>
          </button>
          <div className="w-12 h-12 rounded-full border-[3px] border-accent-lightOrange p-0.5 cursor-pointer hover:scale-105 transition-transform">
             {/* Placeholder para Avatar */}
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" 
              alt="Avatar" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto space-y-8">
        {activeTab === 'Dashboard' && (
          <>
            {/* BLOCO 1: HERO CARD (Boas Vindas) */}
            <div className="hero-card flex flex-col md:flex-row items-center justify-between">
              <div className="decor-blob" aria-hidden="true"></div>

              <div className="z-10 max-w-lg space-y-6 text-center md:text-left">
                <div>
                  <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    Bom dia, Samyra!
                  </h1>
                  <p className="text-secondary text-lg font-medium">
                    Temos <strong className="text-accent-orange underline decoration-2 underline-offset-2">3 novos amigos</strong> precisando de cadastro.
                  </p>
                </div>
                
                <button className="pill-btn bg-accent-orange hover:bg-orange-600 text-white text-lg shadow-lg hover:shadow-hover transition-all transform hover:-translate-y-1 active:scale-95 mx-auto md:mx-0">
                  <Plus size={24} strokeWidth={3} />
                  Registrar Novo Resgate
                </button>
              </div>

              {/* Ilustração (Imagem do cachorrinho) */}
              <div className="relative mt-6 md:mt-0 z-10">
                <img 
                  src={DogPng} 
                  alt="Ilustração de um cachorrinho" 
                  className="w-48 md:w-64 drop-shadow-2xl"
                />
              </div>
            </div>

            {/* BLOCO 2: KPI STRIP (Indicadores) */}
            <div className="kpi-strip grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Acolhidos', value: '124', icon: Home, color: 'text-accent-yellow' },
                { label: 'Adotados (Mês)', value: '15', icon: Heart, color: 'text-accent-orange' },
                { label: 'Em Tratamento', value: '28', icon: Stethoscope, color: 'text-status-red' },
              ].map((kpi, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-inset-soft">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${kpi.color} bg-white/80 drop-shadow-sm`}>
                    <kpi.icon size={28} strokeWidth={2.5} />
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-display font-bold text-primary">{kpi.value}</div>
                    <div className="text-sm font-bold text-secondary uppercase tracking-wider">{kpi.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* BLOCO 3: GRÁFICO DE ONDAS (Entradas vs Saídas) */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft h-[300px] relative">
              <div className="flex justify-between items-center mb-4 px-2">
                <span className="text-sm font-bold text-secondary">Entradas</span>
                <span className="text-sm font-bold text-secondary">Saídas</span>
              </div>
              
              <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorEntrada" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F2A65A" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#F2A65A" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSaida" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E67817" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#E67817" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area 
                    type="monotone" 
                    dataKey="entrada" 
                    stroke="#F2A65A" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorEntrada)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="saida" 
                    stroke="#E67817" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorSaida)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* BLOCO 4: BOTÕES DE AÇÃO (Shortcuts) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: 'Ver Todos os Animais', icon: PawPrint, bg: 'bg-accent-yellow', border: 'border-b-8 border-yellow-600/20' },
                { label: 'Urgências Veterinárias', icon: Plus, bg: 'bg-accent-orange', border: 'border-b-8 border-orange-700/20' },
                { label: 'Agenda de Adoção', icon: Calendar, bg: 'bg-status-green', border: 'border-b-8 border-green-700/20' },
                { label: 'Relatórios', icon: Search, bg: 'bg-status-blue', border: 'border-b-8 border-blue-700/20' },
              ].map((btn, idx) => (
                <button 
                  key={idx}
                  className={`${btn.bg} ${btn.border} action-bento group transform-gpu hover:scale-[1.02]`}
                >
                  <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                    <btn.icon size={36} strokeWidth={3} />
                  </div>
                  <span className="font-display font-bold text-lg leading-tight text-center">
                    {btn.label}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}

        {activeTab === 'Acolhidos' && (
          <Acolhidos />
        )}

        {activeTab === 'Adotantes' && (
          <Adotantes />
        )}
      </main>
    </div>
  );
}

export default App;