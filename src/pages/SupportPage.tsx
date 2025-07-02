import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const SupportPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('getting-started');
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
      id: 'getting-started',
      title: t('support.faq.categories.gettingStarted'),
      icon: 'fa-rocket',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      questions: [
        { q: t('support.faq.gettingStarted.q1'), a: t('support.faq.gettingStarted.a1') },
        { q: t('support.faq.gettingStarted.q2'), a: t('support.faq.gettingStarted.a2') },
      ]
    },
    {
      id: 'schools-teachers',
      title: t('support.faq.categories.schoolsTeachers'),
      icon: 'fa-graduation-cap',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      questions: [
        { q: t('support.faq.schoolsTeachers.q1'), a: t('support.faq.schoolsTeachers.a1') },
        { q: t('support.faq.schoolsTeachers.q2'), a: t('support.faq.schoolsTeachers.a2') },
        { q: t('support.faq.schoolsTeachers.q3'), a: t('support.faq.schoolsTeachers.a3') },
      ]
    },
    {
      id: 'students',
      title: t('support.faq.categories.students'),
      icon: 'fa-user-graduate',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      questions: [
        { q: t('support.faq.students.q1'), a: t('support.faq.students.a1') },
        { q: t('support.faq.students.q2'), a: t('support.faq.students.a2') },
        { q: t('support.faq.students.q3'), a: t('support.faq.students.a3') },
      ]
    },
    {
      id: 'payments',
      title: t('support.faq.categories.payments'),
      icon: 'fa-credit-card',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      questions: [
        { q: t('support.faq.payments.q1'), a: t('support.faq.payments.a1') },
        { q: t('support.faq.payments.q2'), a: t('support.faq.payments.a2') },
        { q: t('support.faq.payments.q3'), a: t('support.faq.payments.a3') },
      ]
    },
    {
      id: 'technical',
      title: t('support.faq.categories.technical'),
      icon: 'fa-tools',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-cyan-50',
      iconBg: 'bg-cyan-100',
      questions: [
        { q: t('support.faq.technical.q1'), a: t('support.faq.technical.a1') },
        { q: t('support.faq.technical.q2'), a: t('support.faq.technical.a2') },
        { q: t('support.faq.technical.q3'), a: t('support.faq.technical.a3') },
      ]
    },
    {
      id: 'privacy',
      title: t('support.faq.categories.privacy'),
      icon: 'fa-shield-alt',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-indigo-100',
      questions: [
        { q: t('support.faq.privacy.q1'), a: t('support.faq.privacy.a1') },
        { q: t('support.faq.privacy.q2'), a: t('support.faq.privacy.a2') },
      ]
    },
  ];

  return (
    <div className={`py-16 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section - Modern Innovative Design */}
      <section className="relative py-20 overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-blue-900 to-cyan-800"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-56 h-56 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
          <div className="absolute -bottom-8 left-40 w-60 h-60 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
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
              className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <i className="fas fa-headset text-white text-lg"></i>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              {t('support.title')}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 font-light max-w-3xl mx-auto mb-6">
              {t('support.subtitle')}
            </p>
            
            {/* Floating Action Dots */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <motion.div 
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              ></motion.div>
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section - Moved Higher */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-phone text-primary text-lg"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('support.contact.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('support.contact.subtitle')}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={{
              animate: { transition: { staggerChildren: 0.2 } }
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-blue-100 group"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <i className="fas fa-phone text-white text-lg"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{t('support.contact.phone.title')}</h3>
              <p className="text-gray-600 text-sm mb-3">{t('support.contact.phone.description')}</p>
              <a href="tel:+972-50-123-4567" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                050-123-4567
              </a>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-purple-100 group"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <i className="fas fa-envelope text-white text-lg"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{t('support.contact.email.title')}</h3>
              <p className="text-gray-600 text-sm mb-3">{t('support.contact.email.description')}</p>
              <a href="mailto:support@blabber.site" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                support@blabber.site
              </a>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-green-100 group"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <i className="fas fa-comments text-white text-lg"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{t('support.contact.chat.title')}</h3>
              <p className="text-gray-600 text-sm mb-3">{t('support.contact.chat.description')}</p>
              <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                {t('support.contact.chat.button')}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* FAQ Header - Redesigned */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-question-circle text-primary text-lg"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3">{t('support.faq.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              {t('support.faq.subtitle')}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          {/* FAQ Categories - Completely Redesigned */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 text-center mb-6">Choose a Category</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
              {faqCategories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`p-3 rounded-lg font-semibold transition-all duration-300 border-2 text-center group ${
                      isActive
                        ? `${category.bgColor} border-gray-300 shadow-lg transform scale-105`
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-10 h-10 ${isActive ? category.iconBg : 'bg-gray-100'} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                      <i className={`fas ${category.icon} text-lg ${isActive ? 'text-gray-700' : 'text-gray-500'}`}></i>
                    </div>
                    <div className={`text-xs font-medium ${isActive ? 'text-gray-800' : 'text-gray-600'}`}>
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
            <div className="mb-8">
              {faqCategories
                .find(cat => cat.id === activeCategory)
                && (
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${faqCategories.find(cat => cat.id === activeCategory)?.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <i className={`fas ${faqCategories.find(cat => cat.id === activeCategory)?.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {faqCategories.find(cat => cat.id === activeCategory)?.title}
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                  </div>
                )}
            </div>

            {faqCategories
              .find(cat => cat.id === activeCategory)
              ?.questions.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg mb-4 overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center group-hover:text-primary transition-colors">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                        <i className="fas fa-question text-primary text-sm"></i>
                      </div>
                      {faq.q}
                    </h3>
                    <span className={`text-primary text-xl transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`}>
                      <i className="fas fa-chevron-down"></i>
                    </span>
                  </button>
                  {openFaq === index && (
                    <motion.div 
                      className="px-6 pb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-gray-600 leading-relaxed border-t pt-4 pl-12">
                        <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center float-left mr-3 mt-1">
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

      {/* Contact Form Section - Added back after FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-paper-plane text-primary text-lg"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('support.contact.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('support.contact.subtitle')}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
          </motion.div>

          <motion.div 
            className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">{t('support.contact.fullName')}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder={t('support.contact.fullNamePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder={t('support.contact.emailPlaceholder')}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-800 font-semibold mb-2">{t('support.contact.school')}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder={t('support.contact.schoolPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">{t('support.contact.category')}</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all">
                  <option>{t('support.contact.categoryGeneral')}</option>
                  <option>{t('support.contact.categoryTechnical')}</option>
                  <option>{t('support.contact.categoryProblem')}</option>
                  <option>{t('support.contact.categoryAccount')}</option>
                  <option>{t('support.contact.categoryOther')}</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">{t('support.contact.messageLabel')}</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder={t('support.contact.messagePlaceholder')}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 shadow-md border-2 border-primary hover:bg-primary hover:text-white"
              >
                <i className="fas fa-paper-plane mr-2 text-primary"></i>
                <span className="text-primary">{t('support.contact.submit')}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage; 