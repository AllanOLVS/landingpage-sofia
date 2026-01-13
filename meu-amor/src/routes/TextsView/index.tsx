import { useState } from 'react';
import { ArrowLeft, Calendar, Star, Heart } from 'lucide-react';
import Modal from '../../components/Modal';
import { TEXTS } from '../../data/texts';
import { TextItem } from '../../types';

interface TextsViewProps {
    onBack: () => void;
}

const TextsView = ({ onBack }: TextsViewProps) => {
    const [selectedText, setSelectedText] = useState<TextItem | null>(null);

    return (
        <div className="min-h-screen bg-rose-50/30">
            <div className="sticky top-0 z-20 bg-rose-50/80 backdrop-blur-md border-b border-rose-100 px-4 py-4 flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="p-2 hover:bg-rose-100 rounded-full text-rose-600 transition-colors"
                >
                    <ArrowLeft size={24} />
                </button>
                <h2 className="text-xl font-serif font-bold text-rose-900">Meus Textinhos</h2>
            </div>

            <div className="p-4 flex flex-col gap-4 max-w-2xl mx-auto pb-20">
                {TEXTS.map((text) => (
                    <div
                        key={text.id}
                        onClick={() => setSelectedText(text)}
                        className="bg-white p-6 rounded-3xl shadow-sm border border-rose-100 hover:shadow-md hover:border-rose-200 transition-all cursor-pointer group"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2 text-rose-400 text-sm font-medium">
                                <Calendar size={14} />
                                {text.date}
                            </div>
                            <div className="p-2 bg-rose-50 text-rose-300 rounded-full group-hover:bg-rose-100 group-hover:text-rose-500 transition-colors">
                                <Star size={16} />
                            </div>
                        </div>
                        <h3 className="text-xl font-serif font-bold text-stone-800 mb-2 group-hover:text-rose-600 transition-colors">
                            {text.title}
                        </h3>
                        <p className="text-stone-500 line-clamp-2 leading-relaxed">
                            {text.preview}
                        </p>
                    </div>
                ))}
            </div>

            {/* Modal de Leitura */}
            <Modal
                isOpen={!!selectedText}
                onClose={() => setSelectedText(null)}
                title={selectedText?.title || ''}
            >
                <div className="prose prose-rose max-w-none">
                    <p className="text-sm text-rose-400 font-medium mb-6 flex items-center gap-2">
                        <Calendar size={16} />
                        Escrito em {selectedText?.date}
                    </p>
                    <div className="text-stone-700 leading-loose whitespace-pre-wrap font-sans text-lg">
                        {selectedText?.content}
                    </div>
                    <div className="mt-8 pt-8 border-t border-rose-100 flex justify-center">
                        <Heart className="text-rose-400 fill-rose-400 animate-pulse" size={24} />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default TextsView;
