import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../hooks/useLanguage';
import logo from '../assets/Blabber-logo.png';

interface NavLinkItem {
  to: string;
  label: string;
  isExternal?: boolean;
  isScroll?: boolean;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t, isRTL, isTransitioning } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLinkItem[] = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/support', label: t('nav.support') },
  ];

  const isHomePage = location.pathname === '/';

  const NavLinkComponent: React.FC<{ item: NavLinkItem }> = ({ item }) => {
    if (item.isScroll && isHomePage) {
      return (
        <ScrollLink
          to={item.to}
          smooth={true}
          duration={500}
          offset={-80}
          onClick={() => setIsMenuOpen(false)}
          className="relative font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-pointer group text-center"
        >
          <span className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-60' : 'opacity-100'}`}>
            {item.label}
          </span>
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>
      );
    }

    return (
      <Link
        to={item.to}
        onClick={() => setIsMenuOpen(false)}
        className="relative font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 group text-center"
      >
        <span className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-60' : 'opacity-100'}`}>
          {item.label}
        </span>
        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    );
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'shadow-xl bg-white/95 backdrop-blur-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    } ${isRTL ? 'rtl' : 'ltr'} pb-2 md:pb-4`}>
      <div className="container mx-auto px-3 md:px-4">
        <nav className="flex items-center justify-between h-16 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="Blabber Logo" 
                className="h-8 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
            </div>
          </Link>

          {/* Desktop Menu - Fully Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8 xl:mx-12">
            <div className="flex items-center justify-center space-x-8 xl:space-x-10">
              {navLinks.map((item, index) => (
                <NavLinkComponent key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            {/* Language Switcher - Fixed Width */}
            <div className="relative flex items-center bg-gray-100 rounded-full p-1 border border-gray-200 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 w-20 xl:w-24 justify-center">
              <button 
                onClick={() => setLanguage('en')} 
                className={`relative px-2 xl:px-3 py-1.5 xl:py-2 text-sm font-medium rounded-full transition-all duration-300 min-w-[36px] xl:min-w-[40px] text-center ${
                  language === 'en' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white'
                }`}
                disabled={isTransitioning}
              >
                <span className={`transition-opacity duration-200 ${isTransitioning && language !== 'en' ? 'opacity-50' : 'opacity-100'}`}>
                  EN
                </span>
              </button>
              <button 
                onClick={() => setLanguage('he')} 
                className={`relative px-2 xl:px-3 py-1.5 xl:py-2 text-sm font-medium rounded-full transition-all duration-300 min-w-[36px] xl:min-w-[40px] text-center ${
                  language === 'he' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white'
                }`}
                disabled={isTransitioning}
              >
                <span className={`transition-opacity duration-200 ${isTransitioning && language !== 'he' ? 'opacity-50' : 'opacity-100'}`}>
                  עב
                </span>
              </button>
            </div>

            {/* CTA Button */}
            {isHomePage ? (
              <ScrollLink 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 xl:py-3 px-4 xl:px-6 text-sm xl:text-base rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2 min-w-[120px] xl:min-w-[140px] justify-center"
              >
                <span className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
                  {t('nav.letsStart')}
                </span>
                <i className="fas fa-arrow-left group-hover:translate-x-1 transition-transform duration-300 text-xs xl:text-sm"></i>
              </ScrollLink>
            ) : (
              <Link 
                to="/#contact" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 xl:py-3 px-4 xl:px-6 text-sm xl:text-base rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2 min-w-[120px] xl:min-w-[140px] justify-center"
              >
                <span className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
                  {t('nav.letsStart')}
                </span>
                <i className="fas fa-arrow-left group-hover:translate-x-1 transition-transform duration-300 text-xs xl:text-sm"></i>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="relative w-8 md:w-10 h-8 md:h-10 bg-gray-100 rounded-lg flex flex-col items-center justify-center space-y-1 transition-all duration-300 hover:bg-blue-50 group"
              aria-label="Toggle menu"
            >
              <span className={`w-5 md:w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              } group-hover:bg-blue-600`}></span>
              <span className={`w-5 md:w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              } group-hover:bg-blue-600`}></span>
              <span className={`w-5 md:w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              } group-hover:bg-blue-600`}></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100 transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      }`}>
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex flex-col items-center space-y-3 md:space-y-4 py-6 md:py-8">
            {/* Mobile Navigation Links */}
            {navLinks.map((item, index) => (
              <div key={index} className="w-full text-center">
                <NavLinkComponent item={item} />
              </div>
            ))}
            
            {/* Mobile Language Switcher - Fixed Width */}
            <div className="flex items-center bg-gray-100 rounded-full p-1 mt-4 md:mt-6 w-24 md:w-32 justify-center">
              <button 
                onClick={() => setLanguage('en')} 
                className={`px-3 md:px-4 py-1.5 md:py-2 text-sm font-medium rounded-full transition-all duration-300 min-w-[40px] md:min-w-[50px] text-center ${
                  language === 'en' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                disabled={isTransitioning}
              >
                <span className={`transition-opacity duration-200 ${isTransitioning && language !== 'en' ? 'opacity-50' : 'opacity-100'}`}>
                  EN
                </span>
              </button>
              <button 
                onClick={() => setLanguage('he')} 
                className={`px-3 md:px-4 py-1.5 md:py-2 text-sm font-medium rounded-full transition-all duration-300 min-w-[40px] md:min-w-[50px] text-center ${
                  language === 'he' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                disabled={isTransitioning}
              >
                <span className={`transition-opacity duration-200 ${isTransitioning && language !== 'he' ? 'opacity-50' : 'opacity-100'}`}>
                  עב
                </span>
              </button>
            </div>

            {/* Mobile CTA Button */}
            {isHomePage ? (
              <ScrollLink 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2.5 md:py-3 px-6 md:px-8 text-sm md:text-base rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg transform hover:scale-105 cursor-pointer flex items-center gap-2 mt-2"
              >
                <span className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
                  {t('nav.letsStart')}
                </span>
                <i className="fas fa-arrow-left text-xs md:text-sm"></i>
              </ScrollLink>
            ) : (
              <Link 
                to="/#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2.5 md:py-3 px-6 md:px-8 text-sm md:text-base rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2 mt-2"
              >
                <span className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>
                  {t('nav.letsStart')}
                </span>
                <i className="fas fa-arrow-left text-xs md:text-sm"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 