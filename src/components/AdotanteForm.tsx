import React, { useState } from 'react';

export default function AdotanteForm({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Novo adotante', { name, contact, address });
    alert('Adotante registrado! (simulado)');
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <div className="text-sm font-bold text-secondary">Nome completo</div>
        <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </label>

      <label className="block">
        <div className="text-sm font-bold text-secondary">Contato</div>
        <input value={contact} onChange={(e) => setContact(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </label>

      <label className="block">
        <div className="text-sm font-bold text-secondary">Endereço</div>
        <input value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </label>

      <div className="flex justify-end gap-3">
        <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border">Cancelar</button>
        <button type="submit" className="px-4 py-2 rounded-md bg-accent-green text-white">Registrar</button>
      </div>
    </form>
  );
}
