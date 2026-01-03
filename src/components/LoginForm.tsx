import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function LoginForm({ onClose }: { onClose: () => void }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setError(null);
      await login(email, password);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login');
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {error && <div className="text-sm text-red-600">{error}</div>}
      <label className="block">
        <div className="text-sm font-bold text-secondary">Email</div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </label>

      <label className="block">
        <div className="text-sm font-bold text-secondary">Senha</div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
      </label>

      <div className="flex justify-end gap-3">
        <button type="submit" className="px-4 py-2 rounded-md bg-accent-yellow text-white">Entrar</button>
      </div>
    </form>
  );
}
