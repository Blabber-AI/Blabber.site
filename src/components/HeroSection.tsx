import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import VideoModal from './VideoModal';
import GridMotion from './GridMotion';
import { Link as ScrollLink } from 'react-scroll';

const gridItems = Array.from({ length: 28 }, (_, i) => {
  const imagePath = `../assets/grid_photos/grid${(i % 12) + 1}.png`;
  return new URL(imagePath, import.meta.url).href;
});

const HeroSection: React.FC = () => {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
        <section 
            id="hero" 
            className="relative flex items-center justify-center bg-slate-50 overflow-hidden min-h-[60vh] md:py-40 font-assistant"
        >
            {/* Background Animation */}
            <div className="absolute inset-0 z-0 opacity-40">
                <GridMotion items={gridItems} />
            </div>

            {/* Glassmorphism Content Panel */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                <div className="bg-white/30 backdrop-blur-xl rounded-2xl sm:rounded-[3rem] border border-white/40 shadow-2xl p-6 sm:p-12 md:p-16 text-center w-full max-w-lg sm:max-w-5xl">
                    <h1 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-slate-800 font-assistant font-extrabold"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
              >
                {t('hero.title')}
                    </h1>
                    <p 
                        className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-10 max-w-3xl mx-auto font-assistant"
              >
                {t('hero.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
                <ScrollLink 
                  to="contact" 
                  smooth={true} 
                            duration={800}
                  offset={-80} 
                            className="w-full sm:w-auto text-lg text-white px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105
                                       bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                                       shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer font-assistant font-semibold"
                >
                            {t('hero.cta.primary')}
                </ScrollLink>
                <button 
                            onClick={() => setIsModalOpen(true)}
                            className="w-full sm:w-auto text-lg px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105
                                       bg-white/50 hover:bg-white/80 backdrop-blur-sm
                                       text-slate-800 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-200 font-assistant font-semibold"
                        >
                            {t('hero.cta.secondary')}
                </button>
                    </div>
              </div>
            </div>
            
            <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" />
    </section>
  );
};

export default HeroSection; 