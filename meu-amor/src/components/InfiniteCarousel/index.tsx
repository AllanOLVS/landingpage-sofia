import { PHOTOS } from '../../data/photos';

const InfiniteCarousel = () => {
    return (
        <div className="w-full overflow-hidden py-8 bg-white/50 backdrop-blur-sm relative group">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-rose-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-rose-50 to-transparent z-10"></div>

            {/* Container da animação */}
            <div className="flex animate-scroll hover:pause-animation">
                {/* Duplicamos a lista para criar o efeito infinito */}
                {[...PHOTOS, ...PHOTOS, ...PHOTOS].map((src, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-48 h-64 mx-3 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-4 border-white"
                    >
                        <img src={src} alt="Nós" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteCarousel;
