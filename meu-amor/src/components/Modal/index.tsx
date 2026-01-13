import { X } from 'lucide-react';
import { ModalProps } from '../../types';

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>
            <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl z-10 flex flex-col animate-fadeInUp">
                <div className="p-6 border-b border-rose-100 flex justify-between items-center bg-rose-50/50">
                    <h2 className="text-2xl font-serif font-bold text-rose-900 flex items-center gap-2">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-rose-100 rounded-full text-rose-400 hover:text-rose-600 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="overflow-y-auto p-6 custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
