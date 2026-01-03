import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

export default function AcolhidoForm({ onClose }: { onClose: () => void }) {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('Cachorro');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'acolhidos'), {
        name,
        age,
        type,
        createdBy: user?.uid ?? null,
        createdAt: serverTimestamp(),
      });
      alert('Acolhido registrado!');
      onClose();
    } catch (err) {
      console.error(err);
      alert('Erro ao registrar acolhido');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <div className="text-sm font-bold text-secondary">Nome</div>
        <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </label>

      <label className="block">
        <div className="text-sm font-bold text-secondary">Idade</div>
        <input value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </label>

      <label className="block">
        <div className="text-sm font-bold text-secondary">Tipo</div>
        <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2">
          <option>Cachorro</option>
          <option>Gato</option>
        </select>
      </label>

      <div className="flex justify-end gap-3">
        <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancelar</button>
        <button type="submit" className="px-4 py-2 rounded-md bg-accent-yellow text-white">Registrar</button>
      </div>
    </form>
  );
}
