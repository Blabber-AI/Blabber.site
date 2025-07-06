import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import logo from '../assets/Blabber-logo.png';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden font-assistant">
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
            style={{ backgroundSize: '300% 300%' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <div className={`flex items-center mb-4 ${isRTL ? 'rtl:space-x-reverse' : 'space-x-3'}`}>
                <img src={logo} alt="Blabber Logo" className="h-10 w-auto" />
                  <span className={`text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-assistant font-bold ${isRTL ? 'rtl:mr-3' : ''}`}>
                  Blabber
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm font-assistant">
                {t('footer.description')}
              </p>
              <div className="flex space-x-3 rtl:space-x-reverse">
                  <motion.a href="https://www.linkedin.com/company/blabber" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300 group" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <i className="fab fa-linkedin-in text-sm group-hover:text-white"></i>
                </motion.a>
                  <motion.a href="https://www.instagram.com/blabber" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 group" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <i className="fab fa-instagram text-sm group-hover:text-white"></i>
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <h3 className="text-lg mb-4 text-white font-assistant font-bold">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm font-assistant"><i className="fas fa-chevron-left ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>{t('nav.home')}</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm font-assistant"><i className="fas fa-chevron-left ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>{t('nav.about')}</Link></li>
                  <li><Link to="/support" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm font-assistant"><i className="fas fa-chevron-left ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>{t('nav.support')}</Link></li>
                  <li><Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group text-sm font-assistant"><i className="fas fa-chevron-left ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>{t('nav.privacy')}</Link></li>
              </ul>
            </motion.div>

            {/* Contact Info */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <h3 className="text-lg mb-4 text-white font-assistant font-bold">{t('footer.contact')}</h3>
              <div className="space-y-3">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0"><i className="fas fa-envelope text-white text-xs"></i></div>
                  <div>
                    <p className="text-gray-400 text-xs font-assistant">{t('footer.email')}</p>
                      <a href="mailto:contact@blabber.site" className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-assistant">contact@blabber.site</a>
                </div>
                  </div>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0"><i className="fas fa-phone text-white text-xs"></i></div>
                  <div>
                    <p className="text-gray-400 text-xs font-assistant">{t('footer.phone')}</p>
                      <a href="tel:0524278042" className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-assistant">0524278042</a>
                </div>
                  </div>
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0"><i className="fas fa-map-marker-alt text-white text-xs"></i></div>
                  <div>
                    <p className="text-gray-400 text-xs font-assistant">{t('footer.address')}</p>
                    <p className="text-white text-sm font-assistant">{t('footer.location')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* App Download */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                <h3 className="text-lg mb-4 text-white font-assistant font-bold">{t('footer.downloadApp')}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed font-assistant">{t('footer.appDescription')}</p>
              <div className="space-y-2">
                  <motion.a href="#" target="_blank" rel="noopener noreferrer" className="block w-full bg-black rounded-lg p-2 hover:bg-gray-800 transition-all duration-300 group" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <i className="fab fa-apple text-white text-lg"></i>
                    <div>
                      <p className="text-xs text-gray-400 font-assistant">{t('footer.downloadFrom')}</p>
                        <p className="text-white text-sm group-hover:text-blue-400 transition-colors font-assistant">App Store</p>
                    </div>
                  </div>
                </motion.a>
                  <motion.a href="#" target="_blank" rel="noopener noreferrer" className="block w-full bg-black rounded-lg p-2 hover:bg-gray-800 transition-all duration-300 group" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <i className="fab fa-google-play text-white text-lg"></i>
                    <div>
                      <p className="text-xs text-gray-400 font-assistant">{t('footer.downloadFrom')}</p>
                        <p className="text-white text-sm group-hover:text-blue-400 transition-colors font-assistant">Google Play</p>
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

          {/* Newsletter Section */}
          <motion.div className="py-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
          <div className="max-w-2xl mx-auto text-center">
               <h3 className="text-lg text-white mb-2 font-assistant font-bold">{t('footer.newsletterTitle')}</h3>
               <p className="text-gray-300 text-sm mb-4 max-w-lg mx-auto leading-relaxed font-assistant">
                 {t('footer.newsletterDescription')}
            </p>
               <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                   className="flex-grow bg-white/10 text-white placeholder-gray-400 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm font-assistant"
              />
                 <button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-assistant">
                {t('footer.subscribe')}
                 </button>
               </form>
          </div>
        </motion.div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-8 py-6 text-center text-sm">
            <motion.p className="text-gray-400 font-assistant" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              © 2025 Blabber. {t('footer.rights')}
            </motion.p>
          </div>
      </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-lg"></i>
        </motion.button>
      )}
    </>
  );
};

export default Footer; 