import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import hiw1 from '../assets/HIW1.png';
import hiw2 from '../assets/HIW2.png';
import hiw3 from '../assets/HIW3.png';

const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      img: hiw1,
      title: t('hiw.step1.title'),
      description: [
        t('hiw.step1.desc1'),
        t('hiw.step1.desc2'),
        t('hiw.step1.desc3')
      ],
    },
    {
      img: hiw2,
      title: t('hiw.step2.title'),
      description: [t('hiw.step2.desc1')],
    },
    {
      img: hiw3,
      title: t('hiw.step3.title'),
      description: [
        t('hiw.step3.desc1'),
        t('hiw.step3.desc2'),
        t('hiw.step3.desc3')
      ],
    },
  ];

  // This effect will watch which step is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestStep = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((elem, index) => {
        if (elem) {
          const rect = elem.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestStep = index;
          }
        }
      });
      
      setActiveStep(closestStep);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), 
                                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)` 
             }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm px-3 py-1.5 rounded-full mb-3">
              {t('hiw.badge')}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
              {t('hiw.title')}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {t('hiw.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto" ref={containerRef}>
          {/* Vertical Timeline Line - Enhanced */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-200 via-purple-300 to-blue-200 h-full hidden lg:block">
            {/* Progress Indicator */}
            <motion.div
              className="w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full shadow-lg"
              initial={{ height: '0%' }}
              animate={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ marginLeft: '-1px' }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                ref={(el) => { stepRefs.current[index] = el; }}
                className="timeline-step relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-2 gap-8 items-center">
                  {/* Left Side - Content for odd steps, Image for even steps */}
                  {index % 2 === 0 ? (
                    <div className="relative">
                      {/* Content */}
                      <motion.div 
                        className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 relative"
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Step Number Badge */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                        <div className="space-y-3 text-gray-600 leading-relaxed">
                          {step.description.map((desc, i) => (
                            <p key={i} className="text-base">{desc}</p>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="relative flex justify-center">
                      {/* Image */}
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-4 shadow-xl">
                          <div className="flex justify-center">
                            <div style={{ width: '224px', height: '320px' }}>
                              <img 
                                src={step.img} 
                                alt={step.title} 
                                className="w-full h-full object-cover rounded-xl shadow-lg"
                                style={{ aspectRatio: '896/1280' }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* Right Side - Image for odd steps, Content for even steps */}
                  {index % 2 === 0 ? (
                    <div className="relative flex justify-center">
                      {/* Image */}
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-4 shadow-xl">
                          <div className="flex justify-center">
                            <div style={{ width: '224px', height: '320px' }}>
                              <img 
                                src={step.img} 
                                alt={step.title} 
                                className="w-full h-full object-cover rounded-xl shadow-lg"
                                style={{ aspectRatio: '896/1280' }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="relative">
                      {/* Content */}
                      <motion.div 
                        className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 relative"
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Step Number Badge */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                        <div className="space-y-3 text-gray-600 leading-relaxed">
                          {step.description.map((desc, i) => (
                            <p key={i} className="text-base">{desc}</p>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Enhanced Timeline Node (center) */}
                <motion.div 
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 rounded-full shadow-2xl z-20 hidden lg:block"
                  animate={{ 
                    scale: activeStep === index ? 1.3 : 1,
                    borderColor: activeStep === index ? '#3b82f6' : '#e5e7eb',
                    boxShadow: activeStep === index ? 
                      '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)' : 
                      '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className={`w-full h-full rounded-full transition-colors duration-300 ${
                    activeStep === index ? 'bg-blue-500' : 'bg-gray-200'
                  }`}></div>
                </motion.div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <motion.div 
                    className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100 relative mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 left-5 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg">
                      {index + 1}
                    </div>
                    
                    <div className="pt-4">
                      <div className="flex justify-center mb-4">
                        <div style={{ width: '168px', height: '240px' }}>
                          <img 
                            src={step.img} 
                            alt={step.title} 
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                            style={{ aspectRatio: '896/1280' }}
                          />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                      <div className="space-y-2 text-gray-600">
                        {step.description.map((desc, i) => (
                          <p key={i} className="text-sm leading-relaxed">{desc}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 