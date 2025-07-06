import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import hiw1 from '../assets/HIW1.png';
import hiw2 from '../assets/HIW2.png';
import hiw3 from '../assets/HIW3.png';
import { Link } from 'react-scroll';

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
    <section id="how-it-works" className={`py-12 sm:py-16 bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Clean Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-assistant">
        {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
          >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm mb-4 md:mb-6 font-assistant">
            <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
              {t('hiw.badge')}
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 md:mb-6 font-assistant font-extrabold">
              {t('hiw.title')}
            </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-assistant">
              {t('hiw.subtitle')}
            </p>
          </motion.div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  <div className={`bg-gradient-to-br ${step.bgColor} p-6 relative flex flex-col items-center justify-center`}>
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
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl md:text-2xl text-gray-900 mb-4 font-assistant font-bold">
                      {step.title}
                    </h3>
                    
                    <div className="space-y-3">
                        {step.description.map((desc, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed text-base md:text-lg font-assistant">
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-20"
        >
          <Link 
            to="contact" 
            smooth={true} 
            duration={800} 
            offset={-80} 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <span className="text-gray-700 text-base font-assistant">Ready to transform your classroom?</span>
            <svg className="w-5 h-5 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 