import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const PrivacyPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for sticky header
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    { id: 'section1', title: t('privacy.section1.title'), icon: 'fa-database', content: [t('privacy.section1.p1'), t('privacy.section1.p2'), t('privacy.section1.p3')] },
    { id: 'section2', title: t('privacy.section2.title'), icon: 'fa-cogs', content: [t('privacy.section2.p1'), t('privacy.section2.p2'), t('privacy.section2.p3')] },
    { id: 'section3', title: t('privacy.section3.title'), icon: 'fa-share-alt', content: [t('privacy.section3.p1'), t('privacy.section3.p2'), t('privacy.section3.p3')] },
    { id: 'section4', title: t('privacy.section4.title'), icon: 'fa-shield-alt', content: [t('privacy.section4.p1'), t('privacy.section4.p2'), t('privacy.section4.p3')] },
    { id: 'section5', title: t('privacy.section5.title'), icon: 'fa-user-check', content: [t('privacy.section5.p1'), t('privacy.section5.p2')] },
    { id: 'section6', title: t('privacy.section6.title'), icon: 'fa-history', content: [t('privacy.section6.p1')] },
    { id: 'section7', title: t('privacy.section7.title'), icon: 'fa-cookie-bite', content: [t('privacy.section7.p1')] },
    { id: 'section8', title: t('privacy.section8.title'), icon: 'fa-sync-alt', content: [t('privacy.section8.p1')] },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  return (
    <div className={`bg-gray-50 font-sans ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <motion.section 
        className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-white/30">
              <i className="fas fa-user-secret text-white text-4xl"></i>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{t('privacy.title')}</h1>
            <p className="text-lg md:text-xl text-blue-200 leading-relaxed mb-6 max-w-3xl mx-auto">
              {t('privacy.hero.subtitle')}
            </p>
            <div className="bg-white/10 rounded-lg p-3 inline-block backdrop-blur-sm border border-white/20">
              <p className="text-base">
                <i className={`fas fa-calendar-alt ${isRTL ? 'ml-2' : 'mr-2'}`}></i>
                {t('privacy.lastUpdated')}: July 08, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Sticky Table of Contents */}
          <aside className="lg:w-1/4 lg:sticky top-24 self-start">
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-gray-100">{t('privacy.toc.title')}</h2>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a 
                      href={`#${section.id}`} 
                      onClick={(e) => handleTocClick(e, section.id)}
                      className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors group text-sm"
                    >
                      <span className={`w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'} group-hover:bg-blue-100 group-hover:text-blue-600 transition-all`}>
                        <i className={`fas ${section.icon} text-xs`}></i>
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleTocClick(e, 'contact')}
                    className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors group text-sm"
                  >
                    <span className={`w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'} group-hover:bg-blue-100 group-hover:text-blue-600 transition-all`}>
                      <i className="fas fa-envelope text-xs"></i>
                    </span>
                    {t('privacy.contact.title')}
                  </a>
                </li>
              </ul>
            </motion.div>
          </aside>

          {/* Policy Sections */}
          <main className="lg:w-3/4">
            <motion.div 
              className="space-y-12"
              variants={{
                animate: { transition: { staggerChildren: 0.2 } }
              }}
              initial="initial"
              animate="animate"
            >
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 scroll-mt-24"
                  variants={fadeInUp}
                >
                  <div className={`flex items-center mb-6 pb-4 border-b border-gray-200 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'}`}>
                      <i className={`fas ${section.icon} text-white text-xl`}></i>
                    </div>
                    <h2 className={`flex-1 text-xl md:text-2xl font-bold text-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>{section.title}</h2>
                  </div>

                  <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
                    {section.content.map((paragraph, pIndex) => (
                      <div key={pIndex} className={`flex items-start ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                        <i className={`fas fa-check-circle text-blue-500 ${isRTL ? 'ml-3' : 'mr-3'} mt-1.5 flex-shrink-0`}></i>
                        <p className={`flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>{paragraph}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Contact Section */}
              <motion.div
                id="contact"
                className="bg-gradient-to-br from-gray-800 to-black p-6 md:p-8 rounded-2xl shadow-2xl text-white scroll-mt-24"
                variants={fadeInUp}
              >
                <div className={`flex items-center mb-6 pb-4 border-b border-white/20 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'}`}>
                    <i className="fas fa-headset text-white text-xl"></i>
                  </div>
                  <h2 className={`flex-1 text-xl md:text-2xl font-bold ${isRTL ? 'text-right' : 'text-left'}`}>{t('privacy.contact.title')}</h2>
                </div>
                <div className={`prose prose-lg max-w-none text-gray-300 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p>{t('privacy.contact.p1')}</p>
                  <p>
                    <a 
                      href={`mailto:${t('privacy.contact.email')}`} 
                      className="text-green-400 font-bold hover:text-green-300 transition-colors break-all"
                    >
                      {t('privacy.contact.email')}
                    </a>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage; 
