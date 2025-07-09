import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import VideoModal from './VideoModal';
import ContactModal from './ContactModal';
import GridMotion from './GridMotion';
import logo from '../assets/Blabber-logo.png';

const gridItems = Array.from({ length: 28 }, (_, i) => {
  const imagePath = `../assets/grid_photos/grid${(i % 12) + 1}.png`;
  return new URL(imagePath, import.meta.url).href;
});

const HeroSection: React.FC = () => {
    const { t } = useLanguage();
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
        <section 
            id="hero" 
            className="relative flex items-start sm:items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden min-h-screen py-4"
        >
            {/* Background Animation */}
            <div className="absolute inset-0 z-0 opacity-40">
                <GridMotion items={gridItems} />
            </div>

            {/* Glassmorphism Content Panel */}
            <div className="relative z-10 flex items-start sm:items-center justify-center w-full h-full min-h-screen pt-8 sm:pt-0">
                <div className="bg-white/30 backdrop-blur-xl rounded-2xl sm:rounded-[3rem] border border-white/40 shadow-2xl p-4 sm:p-8 md:p-12 text-center w-full max-w-sm sm:max-w-3xl mx-auto">
                    {/* Main Title */}
                    <h1 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-slate-800 font-extrabold leading-tight"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
                        dangerouslySetInnerHTML={{ 
                            __html: t('hero.title').replace('Blabber', '<span style="text-shadow: 0 4px 15px rgba(0,0,0,0.25), 0 8px 30px rgba(0,0,0,0.15); font-weight: 900; display: inline-block; transform: scale(1.05);">Blabber</span>')
                        }}
                    />
                    
                    {/* Subtitle with Logo */}
                    <div className="flex items-center justify-center gap-1 mb-8">
                        <h2 
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-pulse"
                            style={{ 
                                textShadow: '0 4px 20px rgba(79, 70, 229, 0.4), 0 0 40px rgba(147, 51, 234, 0.2)',
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                            }}
                        >
                            {t('hero.subtitle2')}
                        </h2>
                        <img 
                            src={logo} 
                            alt="Blabber Logo" 
                            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto drop-shadow-lg"
                        />
                    </div>
                    
                    {/* Description Text */}
                    <p 
                        className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-bold"
                        dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
                    />
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
                        <button 
                            onClick={() => setIsContactModalOpen(true)}
                            className="w-full sm:w-auto text-lg text-white px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105
                                       bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                                       shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
                        >
                            {t('hero.cta.primary')}
                        </button>
                        <button 
                            onClick={() => setIsVideoModalOpen(true)}
                            className="w-full sm:w-auto text-lg px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105
                                       bg-white/50 hover:bg-white/80 backdrop-blur-sm
                                       text-slate-800 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-200"
                        >
                            {t('hero.cta.secondary')}
                        </button>
                    </div>
                </div>
            </div>
            
            <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </section>
  );
};

export default HeroSection; 
