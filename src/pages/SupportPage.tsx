import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const SupportPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('basics');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const toggleFAQ = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqCategories = [
    {
      id: 'basics',
      title: t('support.faq.categories.basics'),
      icon: 'fa-info-circle',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      textColor: 'text-blue-600',
      questions: [
        { q: t('support.faq.basics.q1'), a: t('support.faq.basics.a1') },
        { q: t('support.faq.basics.q2'), a: t('support.faq.basics.a2') },
        { q: t('support.faq.basics.q3'), a: t('support.faq.basics.a3') },
        { q: t('support.faq.basics.q4'), a: t('support.faq.basics.a4') },
      ]
    },
    {
      id: 'implementation',
      title: t('support.faq.categories.implementation'),
      icon: 'fa-rocket',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      textColor: 'text-purple-600',
      questions: [
        { q: t('support.faq.implementation.q1'), a: t('support.faq.implementation.a1') },
        { q: t('support.faq.implementation.q2'), a: t('support.faq.implementation.a2') },
        { q: t('support.faq.implementation.q3'), a: t('support.faq.implementation.a3') },
        { q: t('support.faq.implementation.q4'), a: t('support.faq.implementation.a4') },
      ]
    },
    {
      id: 'support',
      title: t('support.faq.categories.support'),
      icon: 'fa-headset',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      textColor: 'text-green-600',
      questions: [
        { q: t('support.faq.support.q1'), a: t('support.faq.support.a1') },
        { q: t('support.faq.support.q2'), a: t('support.faq.support.a2') },
        { q: t('support.faq.support.q3'), a: t('support.faq.support.a3') },
        { q: t('support.faq.support.q4'), a: t('support.faq.support.a4') },
        { q: t('support.faq.support.q5'), a: t('support.faq.support.a5') },
      ]
    },
  ];

  return (
    <div className={`py-8 md:py-16 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section - Mobile Responsive */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-blue-900 to-cyan-800"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 md:w-56 h-32 md:h-56 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-40 md:w-64 h-40 md:h-64 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
          <div className="absolute -bottom-8 left-40 w-36 md:w-60 h-36 md:h-60 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '30px 30px md:50px md:50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Floating Icon */}
            <motion.div 
              className="w-16 md:w-20 h-16 md:h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 border border-white/20 shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <i className="fas fa-headset text-white text-sm md:text-lg"></i>
              </div>
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              {t('support.title')}
            </h1>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/90 font-light max-w-3xl mx-auto mb-4 md:mb-6 px-4">
              {t('support.subtitle')}
            </p>
            
            {/* Floating Action Dots */}
            <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
              <motion.div 
                className="w-2 md:w-3 h-2 md:h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <motion.div 
                className="w-1.5 md:w-2 h-1.5 md:h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              ></motion.div>
              <motion.div 
                className="w-2 md:w-3 h-2 md:h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section - Mobile Responsive */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 md:w-12 h-10 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <i className="fas fa-phone text-primary text-base md:text-lg"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">דרכי יצירת קשר מהירות</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              צרו איתנו קשר בדרך הנוחה לכם ביותר - אנחנו כאן לעזור
            </p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 md:mt-4"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
            variants={{
              animate: { transition: { staggerChildren: 0.2 } }
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-blue-100 group"
              variants={fadeInUp}
            >
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <i className="fas fa-phone text-white text-base md:text-lg"></i>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">תמיכה טלפונית</h3>
              <p className="text-gray-600 text-sm mb-3">שירות מהיר ואישי בשעות העבודה</p>
              <a href="tel:+972-50-123-4567" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm md:text-base">
                050-123-4567
              </a>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-purple-100 group"
              variants={fadeInUp}
            >
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <i className="fas fa-envelope text-white text-base md:text-lg"></i>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">תמיכה באימייל</h3>
              <p className="text-gray-600 text-sm mb-3">מענה מפורט תוך 24 שעות</p>
              <a href="mailto:support@blabber.site" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors text-sm md:text-base">
                support@blabber.site
              </a>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-green-100 group"
              variants={fadeInUp}
            >
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <i className="fas fa-comments text-white text-base md:text-lg"></i>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">צ'אט חי</h3>
              <p className="text-gray-600 text-sm mb-3">שירות מיידי בשעות העבודה</p>
              <button className="text-green-600 font-semibold hover:text-green-700 transition-colors text-sm md:text-base">
                התחל צ'אט
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Redesigned FAQ Section */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* FAQ Header */}
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 md:w-12 h-10 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <i className="fas fa-question-circle text-primary text-base md:text-lg"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{t('support.faq.title')}</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4 md:mb-6 px-4">
              {t('support.faq.subtitle')}
            </p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          {/* FAQ Categories - Redesigned for 3 categories */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 text-center mb-4 md:mb-6">בחרו נושא</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
              {faqCategories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`p-4 md:p-6 rounded-xl font-semibold transition-all duration-300 border-2 text-center group ${
                      isActive
                        ? `${category.bgColor} border-gray-300 shadow-lg transform scale-105`
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-12 md:w-16 h-12 md:h-16 ${isActive ? category.iconBg : 'bg-gray-100'} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                      <i className={`fas ${category.icon} text-lg md:text-xl ${isActive ? category.textColor : 'text-gray-500'}`}></i>
                    </div>
                    <div className={`text-sm md:text-base font-medium ${isActive ? 'text-gray-800' : 'text-gray-600'}`}>
                      {category.title}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* FAQ Content */}
          <motion.div 
            className="max-w-4xl mx-auto"
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 md:mb-8">
              {faqCategories
                .find(cat => cat.id === activeCategory)
                && (
                  <div className="text-center">
                    <div className={`w-14 md:w-16 h-14 md:h-16 bg-gradient-to-r ${faqCategories.find(cat => cat.id === activeCategory)?.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                      <i className={`fas ${faqCategories.find(cat => cat.id === activeCategory)?.icon} text-white text-xl md:text-2xl`}></i>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                      {faqCategories.find(cat => cat.id === activeCategory)?.title}
                    </h3>
                    <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                  </div>
                )}
            </div>

            {faqCategories
              .find(cat => cat.id === activeCategory)
              ?.questions.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg mb-3 md:mb-4 overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 flex items-center group-hover:text-primary transition-colors pr-4">
                      <div className="w-6 md:w-8 h-6 md:h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:bg-primary/20 transition-colors">
                        <i className="fas fa-question text-primary text-xs md:text-sm"></i>
                      </div>
                      {faq.q}
                    </h3>
                    <span className={`text-primary text-lg md:text-xl transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`}>
                      <i className="fas fa-chevron-down"></i>
                    </span>
                  </button>
                  {openFaq === index && (
                    <motion.div 
                      className="px-4 md:px-6 pb-4 md:pb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-gray-600 leading-relaxed border-t pt-3 md:pt-4 pl-8 md:pl-12 text-sm md:text-base">
                        <div className="w-5 md:w-6 h-5 md:h-6 bg-secondary/10 rounded-full flex items-center justify-center float-left mr-2 md:mr-3 mt-1">
                          <i className="fas fa-lightbulb text-secondary text-xs"></i>
                        </div>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Mobile Responsive */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 md:w-12 h-10 md:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <i className="fas fa-paper-plane text-primary text-base md:text-lg"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">עדיין יש שאלות?</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              שלחו לנו הודעה ונחזור אליכם בהקדם האפשרי
            </p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 md:mt-4"></div>
          </motion.div>

          <motion.div 
            className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2 text-sm md:text-base">שם מלא</label>
                  <input 
                    type="text" 
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="השם המלא שלכם"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-2 text-sm md:text-base">אימייל</label>
                  <input 
                    type="email" 
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="example@school.edu"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-800 font-semibold mb-2 text-sm md:text-base">בית ספר</label>
                <input 
                  type="text" 
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="שם בית הספר שלכם"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2 text-sm md:text-base">נושא הפנייה</label>
                <select className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all">
                  <option>שאלה כללית</option>
                  <option>תמיכה טכנית</option>
                  <option>בעיה במערכת</option>
                  <option>ניהול חשבון</option>
                  <option>אחר</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2 text-sm md:text-base">הודעה</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="פרטו את שאלתכם או בקשתכם..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 md:py-4 px-6 md:px-8 text-sm md:text-base rounded-lg hover:shadow-lg transition-all transform hover:scale-105 shadow-md border-2 border-transparent hover:border-primary/20"
              >
                <i className="fas fa-paper-plane mr-2 text-white"></i>
                <span>שלח הודעה</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage; 