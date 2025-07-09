import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import VideoModal from './VideoModal';
import ContactModal from './ContactModal';
import GridMotion from './GridMotion';
import logo from '../assets/Blabber-logo.png';
import useWindowSize from '../hooks/useWindowSize';

// Import all grid images directly
import grid1 from '../assets/grid_photos/grid1.png';
import grid2 from '../assets/grid_photos/grid2.png';
import grid3 from '../assets/grid_photos/grid3.png';
import grid4 from '../assets/grid_photos/grid4.png';
import grid5 from '../assets/grid_photos/grid5.png';
import grid6 from '../assets/grid_photos/grid6.png';
import grid7 from '../assets/grid_photos/grid7.png';
import grid8 from '../assets/grid_photos/grid8.png';
import grid9 from '../assets/grid_photos/grid9.png';
import grid10 from '../assets/grid_photos/grid10.png';
import grid11 from '../assets/grid_photos/grid11.png';
import grid12 from '../assets/grid_photos/grid12.png';

const allGridImages = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9, grid10, grid11, grid12];

// Create a longer array for the grid animation to ensure variety
const gridItems = Array.from({ length: 28 }, (_, i) => allGridImages[i % allGridImages.length]);

const HeroSection: React.FC = () => {
    const { t } = useLanguage();
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const { width } = useWindowSize();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Determine row count based on screen size, but only on the client
    const rowCount = isClient && width && width < 768 ? 3 : 4; // 768px is md breakpoint

  return (
        <section 
            id="hero" 
            className="relative flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden min-h-screen py-4 px-4 sm:px-0"
        >
            {/* Background Animation */}
            <div className="absolute inset-0 z-0 opacity-40">
                <GridMotion items={gridItems} rowCount={rowCount} />
            </div>

            {/* Glassmorphism Content Panel */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
                <div className="bg-white/30 backdrop-blur-xl rounded-2xl sm:rounded-[3rem] border border-white/40 shadow-2xl p-4 sm:p-8 md:p-12 text-center w-full max-w-sm sm:max-w-3xl">
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
