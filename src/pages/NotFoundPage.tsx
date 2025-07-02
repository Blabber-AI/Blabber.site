import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const NotFoundPage: React.FC = () => {
  const { isRTL } = useLanguage();

  const quickLinks = [
    { to: '/', icon: 'fa-home', title: 'דף הבית', desc: 'חזרו לעמוד הראשי' },
    { to: '/about', icon: 'fa-info-circle', title: 'אודות', desc: 'למדו עלינו יותר' },
    { to: '/support', icon: 'fa-life-ring', title: 'תמיכה', desc: 'קבלו עזרה מהצוות' },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-light-gray to-offwhite flex items-center justify-center ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* 404 Animation */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="text-9xl font-bold text-primary mb-4"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.div>
            <div className="w-32 h-32 mx-auto mb-8">
              <motion.div 
                className="relative"
                animate={{
                  rotate: [0, 10, -10, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                  <i className="fas fa-search text-white text-4xl"></i>
                </div>
                <motion.div 
                  className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <i className="fas fa-question text-white text-sm"></i>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
              אופס! הדף לא נמצא
            </h1>
            <p className="text-xl text-medium-gray leading-relaxed max-w-2xl mx-auto mb-8">
              נראה שהדף שחיפשתם לא קיים יותר או שהכתובת שגויה. 
              אל תדאגו, אנחנו כאן כדי לעזור לכם למצוא את מה שאתם מחפשים.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <Link to={link.to} className="block">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${link.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-dark-gray mb-2">{link.title}</h3>
                  <p className="text-medium-gray">{link.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Search Suggestion */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-lightbulb text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-dark-gray">הצעות לחיפוש</h3>
            </div>
            <p className="text-medium-gray mb-6">
              אולי תוכלו למצוא את מה שאתם מחפשים באחד מהמקומות הבאים:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'איך זה עובד',
                'עדויות והמלצות',
                'צור קשר',
                'תמיכה',
                'מדיניות פרטיות',
                'בתי ספר שותפים'
              ].map((term, index) => (
                <span
                  key={index}
                  className="bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {term}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              to="/"
              className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-home mr-2"></i>
              חזרה לדף הבית
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-white text-primary border-2 border-primary font-semibold py-3 px-8 rounded-lg hover:bg-primary hover:text-white transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-arrow-right mr-2"></i>
              חזרה לדף הקודם
            </button>
          </motion.div>

          {/* Fun Fact */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p className="text-medium-gray">
              <i className="fas fa-robot text-primary mr-2"></i>
              עובדה מעניינת: אפילו הבינה המלאכותית שלנו לפעמים "מתבלבלת" - זה נורמלי! 😊
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 