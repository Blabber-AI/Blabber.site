import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../hooks/useLanguage';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isTransitioning } = useLanguage();

  return (
    <div className={`bg-white min-h-screen flex flex-col language-transition ${isTransitioning ? 'language-switching' : ''}`}>
      <Navbar />
      <main className={`flex-1 language-transition-text ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
