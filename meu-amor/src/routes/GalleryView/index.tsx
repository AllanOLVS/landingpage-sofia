import { ArrowLeft, Heart } from 'lucide-react';
import { PHOTOS } from '../../data/photos';

interface GalleryViewProps {
    onBack: () => void;
}

const GalleryView = ({ onBack }: GalleryViewProps) => (
    <div className="min-h-screen bg-rose-50/30">
        <div className="sticky top-0 z-20 bg-rose-50/80 backdrop-blur-md border-b border-rose-100 px-4 py-4 flex items-center gap-4">
            <button
                onClick={onBack}
                className="p-2 hover:bg-rose-100 rounded-full text-rose-600 transition-colors"
            >
                <ArrowLeft size={24} />
            </button>
            <h2 className="text-xl font-serif font-bold text-rose-900">Nossa Galeria</h2>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-20">
            {PHOTOS.map((src, i) => (
                <div key={i} className="group relative break-inside-avoid">
                    <div className="bg-white p-4 pb-12 rounded-lg shadow-md border border-stone-100 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:z-10 cursor-pointer">
                        <div className="aspect-[3/4] overflow-hidden rounded-sm bg-stone-100 relative">
                            <img
                                src={src}
                                alt={`Momento ${i}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        {/* Elemento decorativo */}
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <Heart className="w-4 h-4 text-rose-300 fill-rose-100 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default GalleryView;
