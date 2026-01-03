import React, { useState } from 'react';
import Modal from './Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function AuthModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tab, setTab] = useState<'login' | 'register'>('login');

  return (
    <Modal open={open} onClose={onClose} title={tab === 'login' ? 'Entrar' : 'Criar conta'}>
      <div className="flex gap-3 mb-4">
        <button className={`px-3 py-1 rounded-md ${tab === 'login' ? 'bg-accent-yellow text-white' : 'bg-white border'}`} onClick={() => setTab('login')}>Entrar</button>
        <button className={`px-3 py-1 rounded-md ${tab === 'register' ? 'bg-accent-green text-white' : 'bg-white border'}`} onClick={() => setTab('register')}>Criar conta</button>
      </div>

      {tab === 'login' ? <LoginForm onClose={onClose} /> : <RegisterForm onClose={onClose} />}
    </Modal>
  );
}
