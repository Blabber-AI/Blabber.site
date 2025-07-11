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
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, setLanguage, t, isRTL, isTransitioning } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
          className="relative font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 cursor-pointer group text-center text-base md:text-lg font-sans"
        >
          <span className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-60' : 'opacity-100'}`}>{item.label}</span>
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </ScrollLink>
      );
    }
    return (
      <Link 
        to={item.to} 
        onClick={() => setIsMenuOpen(false)} 
        className={`relative font-bold transition-all duration-300 group text-center text-base md:text-lg font-sans ${location.pathname === item.to ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
      >
        <span className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-60' : 'opacity-100'}`}>{item.label}</span>
        <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${location.pathname === item.to ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
      </Link>
    );
  };

  const CtaButton = () => {
    const buttonClasses = "group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 xl:py-3 px-4 xl:px-6 text-sm xl:text-base rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2 min-w-[120px] xl:min-w-[140px] justify-center font-sans";
    const content = (
      <>
        <span className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}>{t('nav.letsStart')}</span>
        <i className="fas fa-arrow-left group-hover:translate-x-1 transition-transform duration-300 text-xs xl:text-sm"></i>
      </>
    );

    if (isHomePage) {
      return <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className={buttonClasses}>{content}</ScrollLink>;
    }
    return <Link to="/#contact" className={buttonClasses}>{content}</Link>;
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-transform duration-300 ${isRTL ? 'rtl' : 'ltr'} ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'} lg:p-2 lg:p-4 font-sans`}>
        <div className="container mx-auto px-4 lg:px-3 lg:px-4 lg:rounded-2xl lg:rounded-full lg:bg-white/60 lg:backdrop-blur-xl lg:border lg:border-white/30 lg:shadow-lg transition-all duration-300 bg-white border-b border-gray-200 font-sans">
          <nav className="relative flex items-center justify-between h-16">
            {/* Left Side */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center space-x-2 group font-sans">
                <img src={logo} alt="Blabber Logo" className="h-8 w-auto" />
              </Link>
            </div>

            {/* Centered Nav Links for Desktop */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center space-x-8 font-sans">
                {navLinks.map((item) => <NavLinkComponent key={item.to} item={item} />)}
            </div>
          </div>

            {/* Right Side */}
            <div className="flex items-center">
          <div className="hidden lg:flex items-center space-x-4 font-sans">
                <CtaButton />
                <div className="relative flex items-center bg-gray-100/70 rounded-full p-1 border border-gray-200/50 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 w-20 xl:w-24 justify-center font-sans">
                  <button onClick={() => setLanguage('en')} className={`relative px-2 xl:px-3 py-1.5 xl:py-2 text-sm font-medium rounded-full transition-all duration-300 min-w-[36px] xl:min-w-[40px] text-center ${language === 'en' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' : 'text-gray-600 hover:text-blue-600 hover:bg-white'}`} disabled={isTransitioning}>
                    <span>EN</span>
              </button>
                  <button onClick={() => setLanguage('he')} className={`relative px-2 xl:px-3 py-1.5 xl:py-2 text-sm font-medium rounded-full transition-all duration-300 min-w-[36px] xl:min-w-[40px] text-center ${language === 'he' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' : 'text-gray-600 hover:text-blue-600 hover:bg-white'}`} disabled={isTransitioning}>
                    <span>עב</span>
              </button>
            </div>
          </div>

          <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative w-10 h-10 flex items-center justify-center" aria-label="Toggle menu">
                  <div className="space-y-1.5">
                    <span className="block w-6 h-0.5 bg-gray-600 rounded-full"></span>
                    <span className="block w-6 h-0.5 bg-gray-600 rounded-full"></span>
                    <span className="block w-6 h-0.5 bg-gray-600 rounded-full"></span>
                  </div>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-white transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } font-sans`}
      >
        <div className="container mx-auto px-4 h-full flex flex-col">
          <div className="flex items-center justify-between h-16 border-b border-gray-200">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src={logo} alt="Blabber Logo" className="h-8 w-auto" />
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="relative w-10 h-10 flex items-center justify-center" aria-label="Close menu">
              <span className="absolute w-6 h-0.5 bg-gray-800 transform rotate-45"></span>
              <span className="absolute w-6 h-0.5 bg-gray-800 transform -rotate-45"></span>
            </button>
      </div>

          <div className="flex-grow flex flex-col items-center justify-center space-y-8 text-center">
            {navLinks.map((item) => (
              <div key={item.to} className="w-full">
                <Link 
                  to={item.to} 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`relative font-bold transition-all duration-300 group text-center text-base md:text-lg font-sans ${location.pathname === item.to ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'}`}
                >
                  <span className={`transition-opacity duration-200 ${isTransitioning ? 'opacity-60' : 'opacity-100'}`}>{item.label}</span>
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${location.pathname === item.to ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              </div>
            ))}
            
            <div className="flex items-center bg-gray-100 rounded-full p-1 w-32 justify-center">
              <button onClick={() => setLanguage('en')} className={`flex-1 py-2 text-base font-bold rounded-full transition-all duration-300 ${language === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700'}`} disabled={isTransitioning}>
                  EN
              </button>
              <button onClick={() => setLanguage('he')} className={`flex-1 py-2 text-base font-bold rounded-full transition-all duration-300 ${language === 'he' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-700'}`} disabled={isTransitioning}>
                  עב
              </button>
            </div>

            <div className="w-full max-w-xs pt-4">
              <CtaButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 
