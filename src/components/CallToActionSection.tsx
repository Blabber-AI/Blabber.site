import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  const { t } = useLanguage();
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
    
    // Clear error when user starts typing
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        schoolName: '',
        contactName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-16 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
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
          className="absolute top-40 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-lg"
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
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-300/15 rounded-full blur-2xl"
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
          className="absolute bottom-32 right-10 w-20 h-20 bg-indigo-300/25 rounded-lg blur-lg"
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="bg-white/20 backdrop-blur-sm text-white font-semibold text-sm px-4 py-2 rounded-full border border-white/30 mb-6 inline-block">
                  {t('contact.badge')}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                {t('contact.mainTitle1')}
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  {t('contact.mainTitle2')}
                </span>
              </motion.h2>

              {/* Description with more spacing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6 mb-12"
              >
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
                  {t('contact.readyDesc')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                    <p className="text-lg text-blue-100">{t('contact.feature1')}</p>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                    <p className="text-lg text-blue-100">{t('contact.feature2')}</p>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                    <p className="text-lg text-blue-100">{t('contact.feature3')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information with increased spacing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">{t('contact.directContact')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-envelope text-white text-lg"></i>
                    </div>
                    <div>
                      <p className="text-sm text-blue-100 mb-1">{t('footer.email')}</p>
                      <a href="mailto:hello@blabber.co.il" className="text-lg font-semibold hover:text-yellow-300 transition-colors">
                        hello@blabber.co.il
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-phone text-white text-lg"></i>
                    </div>
                    <div>
                      <p className="text-sm text-blue-100 mb-1">{t('footer.phone')}</p>
                      <a href="tel:+972-50-123-4567" className="text-lg font-semibold hover:text-yellow-300 transition-colors">
                        050-123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <i className="fas fa-check text-white text-2xl"></i>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('contact.form.successTitle')}</h3>
                  <p className="text-gray-600 mb-6">{t('contact.form.successMessage')}</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    {t('contact.form.sendAnother')}
                  </button>
                </motion.div>
              ) : (
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2 text-center">{t('contact.title')}</h3>
                  <p className="text-gray-600 text-center mb-8">{t('contact.subtitle')}</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="schoolName" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('contact.form.schoolName')} *
                        </label>
                        <input
                          type="text"
                          id="schoolName"
                          name="schoolName"
                          value={formData.schoolName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                            errors.schoolName 
                              ? 'border-red-300 focus:border-red-500 bg-red-50' 
                              : 'border-gray-200 focus:border-blue-500 bg-white'
                          }`}
                          placeholder={t('contact.form.schoolNamePlaceholder')}
                        />
                        {errors.schoolName && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.schoolName}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('contact.form.contactName')} *
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                            errors.contactName 
                              ? 'border-red-300 focus:border-red-500 bg-red-50' 
                              : 'border-gray-200 focus:border-blue-500 bg-white'
                          }`}
                          placeholder={t('contact.form.contactNamePlaceholder')}
                        />
                        {errors.contactName && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.contactName}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('contact.form.email')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                            errors.email 
                              ? 'border-red-300 focus:border-red-500 bg-red-50' 
                              : 'border-gray-200 focus:border-blue-500 bg-white'
                          }`}
                          placeholder={t('contact.form.emailPlaceholder')}
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          {t('contact.form.phone')} *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                            errors.phone 
                              ? 'border-red-300 focus:border-red-500 bg-red-50' 
                              : 'border-gray-200 focus:border-blue-500 bg-white'
                          }`}
                          placeholder={t('contact.form.phonePlaceholder')}
                        />
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {errors.phone}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.message')} ({t('common.optional')})
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-white transition-all duration-300 resize-none"
                        placeholder={t('contact.messagePlaceholder')}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      } text-white flex items-center justify-center space-x-2 rtl:space-x-reverse`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                          <span>{t('contact.form.submitting')}</span>
                        </>
                      ) : (
                        <>
                          <span>{t('contact.form.submitButton')}</span>
                          <i className="fas fa-arrow-left"></i>
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection; 