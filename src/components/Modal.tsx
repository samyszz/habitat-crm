import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fadeIn">
        <div className="px-6 py-4 border-b border-orange-100 flex justify-between items-center bg-orange-50/50">
          <h3 className="font-display font-bold text-xl text-primary">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors text-secondary hover:text-red-500">
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}