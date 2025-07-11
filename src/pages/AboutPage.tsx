import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const AboutPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={`bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section id="hero" className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
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
                <i className="fas fa-rocket text-white text-lg"></i>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight font-extrabold tracking-wide">
              {t('about.title')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 md:gap-12"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Mission Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-md">
                  <i className="fas fa-bullseye text-3xl text-white"></i>
                </div>
              </div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 tracking-wide">{t('about.mission.title')}</h2>
              <p className="text-lg text-gray-600 leading-7 md:leading-8">
                {t('about.mission.description')}
              </p>
            </motion.div>
            
            {/* Vision Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl shadow-md">
                  <i className="fas fa-eye text-3xl text-white"></i>
                </div>
              </div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4 tracking-wide">{t('about.vision.title')}</h2>
              <p className="text-lg text-gray-600 leading-7 md:leading-8">
                {t('about.vision.description')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 md:py-20 lg:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-2 tracking-wide">{t('about.stats.title')}</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            {[
              { icon: 'fa-users', number: '500+', label: t('hero.stats.students'), color: 'text-green-500', bg: 'bg-green-100' },
              { icon: 'fa-school', number: '5+', label: t('hero.stats.schools'), color: 'text-blue-500', bg: 'bg-blue-100' },
              { icon: 'fa-heart', number: '98%', label: t('hero.stats.satisfaction'), color: 'text-rose-500', bg: 'bg-rose-100' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300"
                variants={fadeInUp}
              >
                <div className={`w-12 h-12 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <i className={`fas ${stat.icon} ${stat.color} text-xl`}></i>
                </div>
                <p className="text-2xl font-bold text-gray-800 mb-1 leading-tight">{stat.number}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section id="technology" className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 tracking-wide">{t('about.technology.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-5 leading-7 md:leading-8">
              {t('about.technology.subtitle')}
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { 
                icon: 'fa-microphone-alt', 
                title: t('about.technology.ai.title'), 
                description: t('about.technology.ai.description'),
                color: 'text-purple-500'
              },
              { 
                icon: 'fa-wave-square', 
                title: t('about.technology.audio.title'), 
                description: t('about.technology.audio.description'),
                color: 'text-blue-500'
              },
              { 
                icon: 'fa-chart-pie', 
                title: t('about.technology.analytics.title'), 
                description: t('about.technology.analytics.description'),
                color: 'text-green-500'
              },
              { 
                icon: 'fa-universal-access', 
                title: t('about.technology.accessibility.title'), 
                description: t('about.technology.accessibility.description'),
                color: 'text-orange-500'
              },
            ].map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-white transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="mb-5">
                  <i className={`fas ${tech.icon} ${tech.color} text-4xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 tracking-wide">{tech.title}</h3>
                <p className="text-gray-600 leading-7 md:leading-8">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 
