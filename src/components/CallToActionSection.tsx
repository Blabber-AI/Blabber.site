import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

interface FormData {
  schoolName: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  schoolName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const CallToActionSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    schoolName: '',
    contactName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = t('common.required');
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName = t('common.required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('common.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('common.emailInvalid');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('common.phoneRequired');
    } else if (!/^[\d\-+() \s]+$/.test(formData.phone)) {
      newErrors.phone = t('common.phoneInvalid');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ schoolName: '', contactName: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className={`py-16 sm:py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 md:w-32 h-20 md:h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 md:w-24 h-16 md:h-24 bg-blue-300/20 rounded-full blur-lg"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 md:w-40 h-24 md:h-40 bg-purple-300/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-32 right-10 w-12 md:w-20 h-12 md:h-20 bg-indigo-300/25 rounded-lg blur-lg"
          animate={{
            rotate: [0, 45, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-blue-900/90 to-purple-900/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-white ${isRTL ? 'lg:text-right' : 'lg:text-left'} text-center`}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="bg-white/20 backdrop-blur-sm text-white font-semibold text-sm px-4 py-2 rounded-full border border-white/30 mb-6 shadow-lg">
                  {t('contact.badge')}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                {t('contact.mainTitle1')}
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  {t('contact.mainTitle2')}
                </span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto lg:mx-0 mb-8"
              >
                {t('contact.subtitle')}
              </motion.p>

              {/* Bullet Points / Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'} max-w-md mx-auto lg:mx-0`}
              >
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg mt-1">
                    <i className="fas fa-chalkboard-teacher text-white text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{t('contact.feature1.title')}</h4>
                    <p className="text-indigo-200 text-sm">{t('contact.feature1.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center shadow-lg mt-1">
                    <i className="fas fa-rocket text-white text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{t('contact.feature2.title')}</h4>
                    <p className="text-indigo-200 text-sm">{t('contact.feature2.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg mt-1">
                    <i className="fas fa-headset text-white text-base"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{t('contact.feature3.title')}</h4>
                    <p className="text-indigo-200 text-sm">{t('contact.feature3.desc')}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl relative">
                <AnimatePresence>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center text-white py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 10, delay: 0.2 }}
                        className="w-20 h-20 bg-green-500/90 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                      >
                        <i className="fas fa-check text-white text-4xl"></i>
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">{t('contact.successTitle')}</h3>
                      <p className="text-indigo-200">{t('contact.successMessage')}</p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                      >
                        {t('contact.sendAnother')}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="schoolName" className="text-white text-sm font-medium mb-2 block">{t('contact.schoolName')}</label>
                          <input
                            type="text"
                            name="schoolName"
                            id="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            className={`w-full bg-white/10 text-white placeholder-indigo-300 border ${errors.schoolName ? 'border-red-400' : 'border-white/20'} rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
                            placeholder={t('contact.schoolNamePlaceholder')}
                          />
                          {errors.schoolName && <p className="text-red-400 text-xs mt-1">{errors.schoolName}</p>}
                        </div>
                        <div>
                          <label htmlFor="contactName" className="text-white text-sm font-medium mb-2 block">{t('contact.contactName')}</label>
                          <input
                            type="text"
                            name="contactName"
                            id="contactName"
                            value={formData.contactName}
                            onChange={handleChange}
                            className={`w-full bg-white/10 text-white placeholder-indigo-300 border ${errors.contactName ? 'border-red-400' : 'border-white/20'} rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
                            placeholder={t('contact.contactNamePlaceholder')}
                          />
                          {errors.contactName && <p className="text-red-400 text-xs mt-1">{errors.contactName}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="text-white text-sm font-medium mb-2 block">{t('contact.email')}</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-white/10 text-white placeholder-indigo-300 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
                          placeholder={t('contact.emailPlaceholder')}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="text-white text-sm font-medium mb-2 block">{t('contact.phone')}</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full bg-white/10 text-white placeholder-indigo-300 border ${errors.phone ? 'border-red-400' : 'border-white/20'} rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
                          placeholder={t('contact.phonePlaceholder')}
                        />
                        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="message" className="text-white text-sm font-medium mb-2 block">{t('contact.message')}</label>
                        <textarea
                          name="message"
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-white/10 text-white placeholder-indigo-300 border border-white/20 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                          placeholder={t('contact.messagePlaceholder')}
                        ></textarea>
                      </div>
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-indigo-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              {t('contact.submitting')}
                            </>
                          ) : (
                            t('contact.submitButton')
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection; 