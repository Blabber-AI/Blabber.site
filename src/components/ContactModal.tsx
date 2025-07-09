import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useForm, ValidationError } from '@formspree/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
    if (!formData.schoolName.trim()) newErrors.schoolName = 'נדרש';
    if (!formData.contactName.trim()) newErrors.contactName = 'נדרש';
    if (!formData.email.trim()) {
      newErrors.email = 'אימייל נדרש';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'אימייל לא תקין';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'טלפון נדרש';
    } else if (!/^[\d\-+() \s]+$/.test(formData.phone)) {
      newErrors.phone = 'טלפון לא תקין';
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
    handleSubmit(e);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative ${isRTL ? 'rtl' : 'ltr'}`}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>

            <div className="p-6 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Side - Features */}
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`text-white ${isRTL ? 'lg:text-right' : 'lg:text-left'} text-center`}
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-2xl sm:text-3xl lg:text-4xl mb-6 leading-tight"
                  >
                    {t('contact.mainTitle1')}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg text-indigo-200 max-w-2xl mx-auto lg:mx-0 mb-8"
                  >
                    {t('contact.subtitle')}
                  </motion.p>
                    
                  <div className="space-y-6 text-left rtl:text-right max-w-md mx-auto lg:mx-0">
                    <motion.div
                      initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
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
                      animate={{ opacity: 1, x: 0 }}
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
                      animate={{ opacity: 1, x: 0 }}
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

                {/* Right Side - Form */}
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
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
                            placeholder={t('contact.messagePlaceholder')}
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={`w-full bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-300 placeholder-indigo-300/70 text-sm resize-none
                              ${errors.message 
                                ? 'border-red-500/50 ring-red-500/30' 
                                : 'border-white/20 hover:border-white/40 focus:border-blue-400 focus:ring-blue-500/40'}`
                            }
                          />
                          {errors.message && <p className="text-red-400 text-xs mt-1 absolute">{errors.message}</p>}
                            </div>
                          </div>
                          <motion.button 
                            type="submit" 
                            disabled={state.submitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                          >
                            {state.submitting ? t('contact.submitting') : t('contact.submitButton')}
                          </motion.button>
                        </motion.form>
                  )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal; 