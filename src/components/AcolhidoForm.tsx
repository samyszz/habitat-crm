import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Dog, Cat, Save } from 'lucide-react';

export default function AcolhidoForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    tipo: 'cao',
    sexo: 'macho',
    status: 'disponivel'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "acolhidos"), {
        ...formData,
        dataEntrada: new Date().toISOString()
      });
      alert("Animal cadastrado com sucesso!");
      onSuccess();
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar animal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold text-secondary mb-1">Nome do Pet</label>
        <input 
          required
          type="text" 
          className="w-full rounded-xl border-2 border-orange-100 p-3 focus:border-accent-orange focus:outline-none bg-background font-medium"
          placeholder="Ex: Paçoca"
          value={formData.nome}
          onChange={e => setFormData({...formData, nome: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-secondary mb-1">Idade (anos)</label>
          <input 
            required
            type="number" 
            className="w-full rounded-xl border-2 border-orange-100 p-3 focus:border-accent-orange outline-none bg-background"
            value={formData.idade}
            onChange={e => setFormData({...formData, idade: e.target.value})}
          />
        </div>
        <div>
           <label className="block text-sm font-bold text-secondary mb-1">Sexo</label>
           <select 
             className="w-full rounded-xl border-2 border-orange-100 p-3 focus:border-accent-orange outline-none bg-background"
             value={formData.sexo}
             onChange={e => setFormData({...formData, sexo: e.target.value})}
           >
             <option value="macho">Macho</option>
             <option value="femea">Fêmea</option>
           </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-secondary mb-2">Tipo</label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setFormData({...formData, tipo: 'cao'})}
            className={`flex-1 py-3 rounded-xl border-2 flex items-center justify-center gap-2 font-bold transition-all ${formData.tipo === 'cao' ? 'border-accent-yellow bg-yellow-50 text-accent-yellow' : 'border-gray-100 text-gray-400'}`}
          >
            <Dog size={20} /> Cão
          </button>
          <button
            type="button"
            onClick={() => setFormData({...formData, tipo: 'gato'})}
            className={`flex-1 py-3 rounded-xl border-2 flex items-center justify-center gap-2 font-bold transition-all ${formData.tipo === 'gato' ? 'border-accent-orange bg-orange-50 text-accent-orange' : 'border-gray-100 text-gray-400'}`}
          >
            <Cat size={20} /> Gato
          </button>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-accent-orange hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4"
      >
        {loading ? "Salvando..." : <><Save size={20} /> Salvar Focinho</>}
      </button>
    </form>
  );
}