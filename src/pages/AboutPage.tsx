import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const AboutPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className={`py-16 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section - Modern Innovative Design */}
      <section className="relative py-20 overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-800"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-56 h-56 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-rose-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
          <div className="absolute -bottom-8 left-40 w-60 h-60 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
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
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-lg"></i>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 font-light max-w-3xl mx-auto mb-6">
              {t('about.subtitle')}
            </p>
            
            {/* Floating Action Dots */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <motion.div 
                className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              ></motion.div>
              <motion.div 
                className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-bullseye text-white text-lg"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('about.mission.title')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-eye text-white text-lg"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('about.vision.title')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('about.vision.description')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
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
              <i className="fas fa-chart-line text-primary text-lg"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('about.stats.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: 'fa-users', number: '500+', label: t('hero.stats.students'), color: 'from-green-500 to-emerald-600' },
              { icon: 'fa-school', number: '5+', label: t('hero.stats.schools'), color: 'from-blue-500 to-indigo-600' },
              { icon: 'fa-chart-line', number: '98%', label: t('hero.stats.satisfaction'), color: 'from-purple-500 to-pink-600' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                variants={fadeInUp}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${stat.icon} text-white text-lg`}></i>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-cogs text-primary text-lg"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('about.technology.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.technology.subtitle')}
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4"></div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: 'fa-brain', 
                title: t('about.technology.ai.title'), 
                description: t('about.technology.ai.description'),
                color: 'from-purple-500 to-indigo-600'
              },
              { 
                icon: 'fa-volume-up', 
                title: t('about.technology.audio.title'), 
                description: t('about.technology.audio.description'),
                color: 'from-blue-500 to-cyan-600'
              },
              { 
                icon: 'fa-chart-bar', 
                title: t('about.technology.analytics.title'), 
                description: t('about.technology.analytics.description'),
                color: 'from-green-500 to-emerald-600'
              },
              { 
                icon: 'fa-universal-access', 
                title: t('about.technology.accessibility.title'), 
                description: t('about.technology.accessibility.description'),
                color: 'from-orange-500 to-red-600'
              },
            ].map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center"
                variants={fadeInUp}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${tech.icon} text-white text-lg`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{tech.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 