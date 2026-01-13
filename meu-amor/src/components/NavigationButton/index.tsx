import { ArrowLeft } from 'lucide-react';
import { NavigationButtonProps } from '../../types';

const NavigationButton = ({ icon: Icon, label, onClick, variant = "primary" }: NavigationButtonProps) => {
    const baseClasses = "w-full py-4 px-6 rounded-2xl flex items-center justify-between transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg group";

    const variants = {
        primary: "bg-white text-rose-900 border border-rose-100 hover:border-rose-300",
        spotify: "bg-[#1DB954] text-white hover:bg-[#1ed760] border-transparent"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]}`}
        >
            <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full ${variant === 'spotify' ? 'bg-white/20' : 'bg-rose-100 group-hover:bg-rose-200'} transition-colors`}>
                    <Icon size={24} className={variant === 'spotify' ? 'text-white' : 'text-rose-600'} />
                </div>
                <span className="font-medium text-lg font-serif">{label}</span>
            </div>
            <div className={`${variant === 'spotify' ? 'text-white/80' : 'text-rose-300 group-hover:text-rose-500'}`}>
                <ArrowLeft size={20} className="rotate-180" />
            </div>
        </button>
    );
};

export default NavigationButton;
