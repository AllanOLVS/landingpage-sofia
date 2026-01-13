import { useState } from 'react';
import HomePage from './routes/HomePage';
import GalleryView from './routes/GalleryView';
import TextsView from './routes/TextsView';
import { ViewType } from './types';
import './App.css';

function App() {
    const [currentView, setCurrentView] = useState<ViewType>('home');

    return (
        <div className="min-h-screen bg-rose-50 text-stone-800 font-sans selection:bg-rose-200">
            {currentView === 'home' && <HomePage onNavigate={setCurrentView} />}
            {currentView === 'gallery' && <GalleryView onBack={() => setCurrentView('home')} />}
            {currentView === 'texts' && <TextsView onBack={() => setCurrentView('home')} />}
        </div>
    );
}

export default App;
