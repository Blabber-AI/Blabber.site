import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useForm, ValidationError } from '@formspree/react';

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

interface InputFieldProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const InputField = ({ id, name, type = 'text', placeholder, value, error, onChange, label }: InputFieldProps) => (
  <div className="relative">
    <label htmlFor={id} className={`block text-sm mb-2 transition-colors duration-300 ${error ? 'text-red-400' : 'text-indigo-200'}`}>
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-300 placeholder-indigo-300/70 text-sm
        ${error 
          ? 'border-red-500/50 ring-red-500/30' 
          : 'border-white/20 hover:border-white/40 focus:border-blue-400 focus:ring-blue-500/40'}`
      }
    />
    {error && <p className="text-red-400 text-xs mt-1 absolute">{error}</p>}
  </div>
);

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
  const [state, handleSubmit] = useForm("mrbbgydr");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.schoolName.trim()) newErrors.schoolName = t('common.required');
    if (!formData.contactName.trim()) newErrors.contactName = t('common.required');
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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    handleSubmit(e.currentTarget);
  };

  return (
    <section 
      id="contact" 
      className={`py-16 sm:py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute top-20 left-10 w-20 md:w-32 h-20 md:h-32 bg-white/10 rounded-full blur-xl" animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-40 right-20 w-16 md:w-24 h-16 md:h-24 bg-blue-300/20 rounded-full blur-lg" animate={{ y: [0, 15, 0], x: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <motion.div className="absolute bottom-20 left-1/4 w-24 md:w-40 h-24 md:h-40 bg-purple-300/15 rounded-full blur-2xl" animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        <motion.div className="absolute bottom-32 right-10 w-12 md:w-20 h-12 md:h-20 bg-indigo-300/25 rounded-lg blur-lg" animate={{ rotate: [0, 45, 0], y: [0, -25, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-blue-900/90 to-purple-900/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-white ${isRTL ? 'lg:text-right' : 'lg:text-left'} text-center`}
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight"
              >
                {t('contact.mainTitle1')}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto lg:mx-0 mb-8"
              >
                {t('contact.subtitle')}
              </motion.p>
                
              <div className="space-y-6 text-left rtl:text-right max-w-md mx-auto lg:mx-0">
                <motion.div 
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-comments text-white text-2xl"></i>
                  </div>
                  </div>
                  <div>
                      <h4 className="text-lg text-white mb-1 font-bold">{t('contact.feature1.title')}</h4>
                      <p className="text-indigo-200 text-sm leading-relaxed">{t('contact.feature1.desc')}</p>
                </div>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-rocket text-white text-2xl"></i>
                    </div>
                  </div>
                  <div>
                      <h4 className="text-lg text-white mb-1 font-bold">{t('contact.feature2.title')}</h4>
                      <p className="text-indigo-200 text-sm leading-relaxed">{t('contact.feature2.desc')}</p>
                    </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="fas fa-headset text-white text-2xl"></i>
                    </div>
                  </div>
                  <div>
                      <h4 className="text-lg text-white mb-1 font-bold">{t('contact.feature3.title')}</h4>
                      <p className="text-indigo-200 text-sm leading-relaxed">{t('contact.feature3.desc')}</p>
                </div>
              </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center text-white py-8"
                >
                      <div className="mb-6">
                        <div className="w-20 h-20 bg-green-500/30 rounded-full flex items-center justify-center mx-auto ring-4 ring-green-500/40">
                          <i className="fas fa-check-circle text-green-300 text-5xl"></i>
                        </div>
                      </div>
                      <h3 className="text-2xl mb-2">{t('contact.successTitle')}</h3>
                      <p className="text-indigo-200 mb-6">{t('contact.successMessage')}</p>
                  <button
                    onClick={() => window.location.reload()}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
                  >
                        {t('contact.sendAnother')}
                  </button>
                </motion.div>
              ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleFormSubmit} 
                      className="space-y-6" 
                      noValidate
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                        <InputField id="schoolName" name="schoolName" placeholder={t('contact.schoolNamePlaceholder')} value={formData.schoolName} error={errors.schoolName} onChange={handleChange} label={t('contact.schoolName')} />
                        <InputField id="contactName" name="contactName" placeholder={t('contact.contactNamePlaceholder')} value={formData.contactName} error={errors.contactName} onChange={handleChange} label={t('contact.contactName')} />
                        <InputField id="email" name="email" type="email" placeholder={t('contact.emailPlaceholder')} value={formData.email} error={errors.email} onChange={handleChange} label={t('contact.email')} />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                        <InputField id="phone" name="phone" type="tel" placeholder={t('contact.phonePlaceholder')} value={formData.phone} error={errors.phone} onChange={handleChange} label={t('contact.phone')} />
                        <div className="relative sm:col-span-2">
                          <label htmlFor="message" className={`block text-sm mb-2 transition-colors duration-300 ${errors.message ? 'text-red-400' : 'text-indigo-200'}`}>
                            {t('contact.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                            rows={4}
                            placeholder={t('contact.messagePlaceholder')}
                        value={formData.message}
                        onChange={handleChange}
                            className={`w-full bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-300 placeholder-indigo-300/70 text-sm
                              ${errors.message 
                                ? 'border-red-500/50 ring-red-500/30' 
                                : 'border-white/20 hover:border-white/40 focus:border-blue-400 focus:ring-blue-500/40'}`
                            }
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                    </div>

                      <div className="text-center pt-2">
                        <button
                      type="submit"
                      disabled={state.submitting}
                          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-3 px-6 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? (
                            <div className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              {t('contact.submitting')}
                            </div>
                      ) : (
                            t('contact.submitButton')
                      )}
                        </button>
                </div>
                    </motion.form>
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
