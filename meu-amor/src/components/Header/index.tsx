import { Heart } from 'lucide-react';
import { HeaderProps } from '../../types';

const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <header className="pt-12 pb-6 px-6 text-center">
            <div className="inline-block p-3 rounded-full bg-rose-100 mb-4 animate-bounce-slow">
                <Heart className="text-rose-500 fill-rose-500" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-900 mb-2 leading-tight">
                {title.split('\n').map((line, i) => (
                    <span key={i}>
                        {line}
                        {i < title.split('\n').length - 1 && <br />}
                    </span>
                ))}
            </h1>
            <p className="text-stone-600 max-w-md mx-auto">
                {subtitle}
            </p>
        </header>
    );
};

export default Header;
