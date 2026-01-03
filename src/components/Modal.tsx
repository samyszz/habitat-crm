import React from 'react';

type Props = {
  title?: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ title, open, onClose, children }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white rounded-2xl w-full max-w-2xl p-6 shadow-soft z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-display font-bold text-primary">{title}</h3>
          <button className="text-secondary hover:text-primary" onClick={onClose}>Fechar</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
