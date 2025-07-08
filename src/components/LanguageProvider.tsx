import React, { useState, useEffect } from 'react';
import { LanguageContext, type Language } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('blabber-language');

    // Check if a valid language preference is saved in local storage
    if (savedLanguage === 'en' || savedLanguage === 'he') {
      return savedLanguage;
    }

    // Otherwise, default to Hebrew
    return 'he';
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLanguageChange = (newLanguage: Language) => {
    if (newLanguage === language) return;
    
    setIsTransitioning(true);
    
    // Small delay for smoother transition
    setTimeout(() => {
      setLanguage(newLanguage);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 100);
  };

  useEffect(() => {
    localStorage.setItem('blabber-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  const isRTL = language === 'he';

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleLanguageChange, 
      t, 
      isRTL,
      isTransitioning 
    }}>
      <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}; 
