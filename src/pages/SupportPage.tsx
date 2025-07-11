import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useForm, ValidationError } from '@formspree/react';

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
      ]
    },
  ];

  const [formState, handleFormSubmit] = useForm("mrbbgydr");

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section - Mobile Responsive */}
      <section id="hero" className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
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
              className="w-16 md:w-20 h-16 md:h-20 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 border border-white/20 shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <i className="fas fa-headset text-white text-sm md:text-lg"></i>
              </div>
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent leading-tight tracking-wide">
              {t('support.title')}
            </h1>
            
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
      <section id="contact" className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
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
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-3 md:mb-4 tracking-wide">{t('support.contact.title')}</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-7 md:leading-8 px-4">
              {t('support.contact.subtitle')}
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
              <h3 className="text-base md:text-lg text-gray-800 mb-2 tracking-wide">{t('support.contact.phoneTitle')}</h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{t('support.contact.phoneDesc')}</p>
              <a href="tel:0524278042" className="text-blue-600 hover:text-blue-700 transition-colors text-sm md:text-base">
                052-427-8042
              </a>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-purple-100 group"
              variants={fadeInUp}
            >
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <i className="fas fa-envelope text-white text-base md:text-lg"></i>
              </div>
              <h3 className="text-base md:text-lg text-gray-800 mb-2 tracking-wide">{t('support.contact.emailTitle')}</h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{t('support.contact.emailDesc')}</p>
              <a href="mailto:contact@blabber.site" className="text-purple-600 hover:text-purple-700 transition-colors text-sm md:text-base">
                contact@blabber.site
              </a>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-green-100 group"
              variants={fadeInUp}
            >
              <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <i className="fab fa-whatsapp text-white text-base md:text-lg"></i>
              </div>
              <h3 className="text-base md:text-lg text-gray-800 mb-2 tracking-wide">{t('support.contact.chatTitle')}</h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{t('support.contact.chatDesc')}</p>
              <a href="https://wa.me/972524278042" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors text-sm md:text-base">
                {t('support.contact.chatButton')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Redesigned FAQ Section */}
      <section id="faq" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container max-w-7xl mx-auto px-4">
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
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-3 tracking-wide">{t('support.faq.title')}</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-7 md:leading-8 mb-4 md:mb-6 px-4">
              {t('support.faq.subtitle')}
            </p>
            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          {/* FAQ Categories - Redesigned for 3 categories */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl text-gray-800 text-center mb-4 md:mb-6 tracking-wide">{t('support.faq.selectTopic')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
              {faqCategories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`p-4 md:p-6 rounded-xl transition-all duration-300 border-2 text-center group ${
                      isActive
                        ? `${category.bgColor} border-gray-300 shadow-lg transform scale-105`
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                    whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 md:w-12 md:h-12 ${isActive ? category.iconBg : 'bg-gray-100'} rounded-lg flex items-center justify-center mb-3 transition-all duration-300`}>
                        <i className={`fas ${category.icon} text-base md:text-lg ${isActive ? category.textColor : 'text-gray-500'}`}></i>
                    </div>
                      <span className={`text-sm md:text-base transition-colors duration-300 ${isActive ? category.textColor : 'text-gray-700'}`}>{category.title}</span>
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
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 tracking-wide">
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
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 flex items-center group-hover:text-primary transition-colors pr-4 tracking-wide">
                      <div className="w-6 md:w-8 h-6 md:h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 md:mr-4 group-hover:bg-primary/20 transition-colors">
                        <i className="fas fa-circle text-primary text-xs" style={{ fontSize: '0.5rem' }}></i>
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
                      <div className="text-gray-600 leading-7 md:leading-8 border-t pt-3 md:pt-4 pl-8 md:pl-12 text-sm md:text-base">
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
      <section id="form" className="py-12 md:py-20 lg:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl text-gray-800 mb-4 tracking-wide">{t('support.form.title')}</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-7 md:leading-8 px-4">
              {t('support.form.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {formState.succeeded ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-green-500/30 rounded-full flex items-center justify-center mx-auto ring-4 ring-green-500/40">
                      <i className="fas fa-check-circle text-green-300 text-5xl"></i>
                    </div>
                  </div>
                  <h3 className="text-2xl mb-2 text-gray-800 leading-tight tracking-wide">{t('contact.successTitle')}</h3>
                  <p className="text-indigo-200 mb-6 text-gray-600 leading-relaxed">{t('contact.successMessage')}</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleFormSubmit}
                  className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100"
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-gray-800 font-semibold mb-2 text-sm md:text-base rtl:text-right">{t('support.form.fullName')}</label>
                      <input 
                        id="fullName"
                        type="text" 
                        name="fullName"
                        placeholder={t('support.form.fullNamePlaceholder')}
                        className="w-full p-3 md:p-4 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base rtl:text-right"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-gray-800 font-semibold mb-2 text-sm md:text-base rtl:text-right">{t('support.form.email')}</label>
                      <input 
                        id="email"
                        type="email" 
                        name="email"
                        placeholder={t('support.form.emailPlaceholder')}
                        className="w-full p-3 md:p-4 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base rtl:text-right"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                    {/* School Name */}
                    <div>
                      <label htmlFor="schoolName" className="block text-gray-800 font-semibold mb-2 text-sm md:text-base rtl:text-right">{t('support.form.schoolName')}</label>
                      <input 
                        id="schoolName"
                        type="text" 
                        name="schoolName"
                        placeholder={t('support.form.schoolNamePlaceholder')}
                        className="w-full p-3 md:p-4 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base rtl:text-right"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-gray-800 font-semibold mb-2 text-sm md:text-base rtl:text-right font-sans">{t('support.form.subject')}</label>
                      <select 
                        id="subject" 
                        name="subject"
                        className="w-full p-3 md:p-4 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base rtl:text-right font-sans"
                      >
                        <option className="font-sans">{t('support.form.subjectGeneral')}</option>
                        <option className="font-sans">{t('support.form.subjectTechnical')}</option>
                        <option className="font-sans">{t('support.form.subjectBilling')}</option>
                        <option className="font-sans">{t('support.form.subjectFeedback')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-4 md:mb-6">
                    <label htmlFor="message" className="block text-gray-800 font-semibold mb-2 text-sm md:text-base rtl:text-right">{t('support.form.message')}</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={6}
                      placeholder={t('support.form.messagePlaceholder')}
                      className="w-full p-3 md:p-4 bg-gray-100 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base rtl:text-right"
                    ></textarea>
                     <ValidationError prefix="Message" field="message" errors={formState.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button 
                      type="submit"
                      disabled={formState.submitting}
                      className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState.submitting ? t('contact.submitting') : t('support.form.submitButton')}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage; 
