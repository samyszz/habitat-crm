import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Upload, X, Loader2 } from 'lucide-react';

// Suas chaves configuradas
const CLOUDINARY_PRESET = "habitat-crm"; 
const CLOUDINARY_CLOUD_NAME = "dssih4h24";

export default function AcolhidoForm({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    tipo: 'Cachorro',
    sexo: 'Macho'
  });
  const [foto, setFoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    if (!foto) return null;

    const data = new FormData();
    data.append("file", foto);
    data.append("upload_preset", CLOUDINARY_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: data
      });
      const file = await res.json();
      return file.secure_url;
    } catch (error) {
      console.error("Erro no upload:", error);
      throw new Error("Falha ao subir imagem");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let fotoUrl = "";
      if (foto) {
        fotoUrl = await uploadImage();
      }

      await addDoc(collection(db, 'acolhidos'), {
        ...formData,
        fotoUrl: fotoUrl,
        createdAt: serverTimestamp(),
        status: 'disponivel'
      });

      alert('Acolhido registrado com sucesso!');
      onClose();
      window.location.reload(); 
    } catch (err) {
      console.error(err);
      alert('Erro ao registrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex justify-center mb-6">
        <label className="relative cursor-pointer group">
          <div className={`w-32 h-32 rounded-full border-4 border-dashed border-orange-200 flex items-center justify-center overflow-hidden bg-orange-50 transition-colors group-hover:border-accent-orange ${preview ? 'border-solid' : ''}`}>
            {preview ? (
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-2 text-secondary group-hover:text-accent-orange">
                <Upload className="mx-auto mb-1" size={24} />
                <span className="text-xs font-bold">Adicionar Foto</span>
              </div>
            )}
          </div>
          <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
          {preview && (
            <button 
              type="button" 
              onClick={(e) => { e.preventDefault(); setFoto(null); setPreview(null); }}
              className="absolute bottom-0 right-0 bg-red-500 text-white p-1.5 rounded-full shadow-md hover:bg-red-600"
            >
              <X size={14} />
            </button>
          )}
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <label className="block">
          <div className="text-sm font-bold text-secondary mb-1">Nome</div>
          <input 
            required
            value={formData.nome} 
            onChange={(e) => setFormData({...formData, nome: e.target.value})} 
            className="w-full rounded-xl border-2 border-orange-100 p-3 focus:border-accent-orange outline-none bg-background" 
            placeholder="Ex: Paçoca"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <div className="text-sm font-bold text-secondary mb-1">Idade</div>
            <input 
              value={formData.idade} 
              onChange={(e) => setFormData({...formData, idade: e.target.value})} 
              className="w-full rounded-xl border-2 border-orange-100 p-3 outline-none" 
              placeholder="Ex: 2 anos"
            />
          </label>
          <label className="block">
            <div className="text-sm font-bold text-secondary mb-1">Sexo</div>
            <select 
              value={formData.sexo} 
              onChange={(e) => setFormData({...formData, sexo: e.target.value})} 
              className="w-full rounded-xl border-2 border-orange-100 p-3 outline-none"
            >
              <option>Macho</option>
              <option>Fêmea</option>
            </select>
          </label>
        </div>

        <label className="block">
          <div className="text-sm font-bold text-secondary mb-1">Tipo</div>
          <div className="flex gap-3">
             {['Cachorro', 'Gato'].map(type => (
               <button
                 key={type}
                 type="button"
                 onClick={() => setFormData({...formData, tipo: type})}
                 className={`flex-1 py-2 rounded-lg font-bold border-2 transition-all ${
                   formData.tipo === type 
                   ? 'border-accent-orange bg-orange-100 text-accent-orange' 
                   : 'border-gray-100 text-gray-400'
                 }`}
               >
                 {type}
               </button>
             ))}
          </div>
        </label>
      </div>

      <div className="flex gap-3 pt-4">
        <button type="button" onClick={onClose} className="flex-1 py-3 rounded-xl border-2 border-gray-200 font-bold text-secondary hover:bg-gray-50">Cancelar</button>
        <button 
          type="submit" 
          disabled={loading}
          className="flex-1 py-3 rounded-xl bg-accent-orange text-white font-bold shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin" /> : "Salvar Acolhido"}
        </button>
      </div>
    </form>
  );
}