import { Image as ImageIcon, Music, BookOpen } from 'lucide-react';
import Header from '../../components/Header';
import InfiniteCarousel from '../../components/InfiniteCarousel';
import NavigationButton from '../../components/NavigationButton';
import Footer from '../../components/Footer';
import { SPOTIFY_LINK, CONFIG } from '../../data/config';
import { ViewType } from '../../types';

interface HomePageProps {
    onNavigate: (view: ViewType) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => (
    <div className="flex flex-col min-h-screen">
        <Header
            title={`Para o meu\ngrande amor`}
            subtitle={CONFIG.subtitle}
        />

        {/* Infinite Carousel */}
        <div className="mb-12">
            <InfiniteCarousel />
        </div>

        {/* Menu */}
        <main className="flex-1 px-6 pb-12 max-w-md mx-auto w-full flex flex-col gap-4">
            <NavigationButton
                icon={ImageIcon}
                label="Nossas Fotos"
                onClick={() => onNavigate('gallery')}
            />
            <NavigationButton
                icon={BookOpen}
                label="Meus Textinhos"
                onClick={() => onNavigate('texts')}
            />
            <a
                href={SPOTIFY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
            >
                <NavigationButton
                    icon={Music}
                    label="Nossa Playlist"
                    variant="primary"
                    onClick={() => { }}
                />
            </a>
        </main>

        <Footer message={CONFIG.footerMessage} />
    </div>
);

export default HomePage;
