import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import hiw1 from '../assets/HIW1.png';
import hiw2 from '../assets/HIW2.png';
import hiw3 from '../assets/HIW3.png';

const HowItWorksSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      number: '01',
      img: hiw1,
      title: t('hiw.step1.title'),
      description: [
        t('hiw.step1.desc1'),
        t('hiw.step1.desc2'),
        t('hiw.step1.desc3')
      ],
      color: 'blue',
      bgColor: 'from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600',
      numberBg: 'bg-blue-600'
    },
    {
      number: '02',
      img: hiw2,
      title: t('hiw.step2.title'),
      description: [t('hiw.step2.desc1')],
      color: 'purple',
      bgColor: 'from-purple-50 to-pink-50',
      iconColor: 'text-purple-600',
      numberBg: 'bg-purple-600'
    },
    {
      number: '03',
      img: hiw3,
      title: t('hiw.step3.title'),
      description: [
        t('hiw.step3.desc1'),
        t('hiw.step3.desc2'),
        t('hiw.step3.desc3')
      ],
      color: 'green',
      bgColor: 'from-green-50 to-emerald-50',
      iconColor: 'text-green-600',
      numberBg: 'bg-green-600'
    },
  ];

  const icons = [
    // Lesson Building Icon
    <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>,
    // Speaking Icon
    <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>,
    // Analytics Icon
    <svg className="w-6 md:w-8 h-6 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ];
  
  return (
    <section id="how-it-works" className={`py-6 md:py-10 lg:py-14 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Clean Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-6 md:mb-10"
          >
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-xs mb-2 md:mb-3 font-sans">
            <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
              {t('hiw.badge')}
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-1 md:mb-2 font-sans font-extrabold">
              {t('hiw.title')}
            </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-sans">
              {t('hiw.subtitle')}
            </p>
          </motion.div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                    <div className={`w-10 h-10 md:w-12 md:h-12 ${step.numberBg} rounded-full flex items-center justify-center text-white text-base md:text-lg shadow-lg`}>
                      {step.number}
                    </div>
                            </div>

                  {/* Visual Section */}
                  <div className={`bg-gradient-to-br ${step.bgColor} p-4 md:p-6 relative flex flex-col items-center justify-center`}>
                    {/* Icon */}
                    <div className={`w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center ${step.iconColor} shadow-lg mb-4`}>
                      {icons[index]}
                    </div>

                    {/* Mobile Image */}
                    <div className="flex justify-center items-center mt-4 h-56">
                              <img 
                                src={step.img} 
                                alt={step.title} 
                        className="w-auto h-full object-contain"
                              />
                    </div>
                        </div>
                        
                  {/* Content Section */}
                  <div className="p-4 md:p-6 flex-grow">
                    <h3 className="text-lg md:text-xl text-gray-900 mb-1 font-sans font-bold">
                      {step.title}
                    </h3>
                    
                    <div className="space-y-1">
                        {step.description.map((desc, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed text-sm md:text-base font-sans">
                          {desc}
                        </p>
                        ))}
                      </div>
                    </div>

                  {/* Bottom Accent */}
                  <div className={`h-1 bg-gradient-to-r ${step.bgColor}`}></div>
                </div>

                {/* Connection Line (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gray-200"></div>
                    <div className={`w-3 h-3 bg-gray-300 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2`}></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 md:mt-10 text-center"
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 bg-indigo-100 hover:bg-indigo-200/80 border border-transparent rounded-full px-3 py-1.5 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <i className="fas fa-rocket"></i>
            <span>{t('hiw.transformCta')}</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 
