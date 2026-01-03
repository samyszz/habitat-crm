import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

export default function RescueForm({ onClose }: { onClose: () => void }) {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'rescues'), {
        name,
        location,
        notes,
        createdBy: user?.uid ?? null,
        createdAt: serverTimestamp(),
      });
      alert('Resgate registrado!');
      onClose();
    } catch (err) {
      console.error(err);
      alert('Erro ao registrar resgate');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <div className="text-sm font-bold text-secondary">Nome do animal</div>
        <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </label>

      <label className="block">
        <div className="text-sm font-bold text-secondary">Local</div>
        <input value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </label>

      <label className="block">
        <div className="text-sm font-bold text-secondary">Observações</div>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </label>

      <div className="flex justify-end gap-3">
        <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancelar</button>
        <button type="submit" className="px-4 py-2 rounded-md bg-accent-orange text-white">Registrar</button>
      </div>
    </form>
  );
}
