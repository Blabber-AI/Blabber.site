import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../hooks/useLanguage';
import VideoModal from './VideoModal';

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const endValue = end;
          const increment = endValue / (duration * 60); // 60 fps

          const counter = () => {
            start += increment;
            if (start < endValue) {
              setCount(Math.ceil(start));
              requestAnimationFrame(counter);
            } else {
              setCount(endValue);
            }
          };
          requestAnimationFrame(counter);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { count: studentCount, ref: studentRef } = useCountUp(500);
  const { count: schoolCount, ref: schoolRef } = useCountUp(5);
  const { count: satisfactionRate, ref: satisfactionRef } = useCountUp(98);

  const stats = [
    { count: studentCount, ref: studentRef, label: t('hero.stats.students'), suffix: '+' },
    { count: schoolCount, ref: schoolRef, label: t('hero.stats.schools'), suffix: '+' },
    { count: satisfactionRate, ref: satisfactionRef, label: t('hero.stats.satisfaction'), suffix: '%' },
  ];

  return (
    <section id="hero" className={`relative min-h-screen flex items-center overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Modern Floating Bubbles Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Educational Bubbles */}
          <motion.div
            className="absolute top-16 left-16 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center"
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <i className="fas fa-microphone text-blue-500 text-lg"></i>
          </motion.div>

          <motion.div
            className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-purple-400/25 to-pink-400/25 rounded-full backdrop-blur-sm border border-white/40 flex items-center justify-center"
            animate={{
              y: [0, 25, 0],
              x: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <i className="fas fa-brain text-purple-500 text-sm"></i>
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-12 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <i className="fas fa-graduation-cap text-green-500 text-lg"></i>
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-16 w-18 h-18 bg-gradient-to-br from-orange-400/25 to-red-400/25 rounded-full backdrop-blur-sm border border-white/40 flex items-center justify-center"
            animate={{
              y: [0, 15, 0],
              x: [0, -12, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <i className="fas fa-comments text-orange-500 text-sm"></i>
          </motion.div>

          {/* Medium Accent Bubbles */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full backdrop-blur-sm border border-white/50"
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />

          <motion.div
            className="absolute top-2/3 right-1/4 w-14 h-14 bg-gradient-to-br from-pink-400/25 to-purple-400/25 rounded-full backdrop-blur-sm border border-white/40"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          {/* Small Floating Particles */}
          <motion.div
            className="absolute top-1/2 left-20 w-8 h-8 bg-gradient-to-br from-yellow-400/40 to-orange-400/40 rounded-full backdrop-blur-sm border border-white/60 flex items-center justify-center"
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
          >
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-12 w-6 h-6 bg-gradient-to-br from-indigo-400/35 to-purple-400/35 rounded-full backdrop-blur-sm border border-white/50"
            animate={{
              y: [0, 12, 0],
              x: [0, -6, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.2
            }}
          />

          <motion.div
            className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-gradient-to-br from-emerald-400/30 to-green-400/30 rounded-full backdrop-blur-sm border border-white/45"
            animate={{
              y: [0, -18, 0],
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8
            }}
          />

          {/* Connecting Lines Animation */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 border border-blue-300/20 rounded-full"></div>
              <div className="absolute inset-2 border border-purple-300/15 rounded-full"></div>
              <div className="absolute inset-4 border border-pink-300/10 rounded-full"></div>
            </div>
          </motion.div>

          {/* Subtle Particle System */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
              style={{
                left: `${20 + (i * 60) % 80}%`,
                top: `${30 + (i * 40) % 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content with Background Card */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${isRTL ? 'lg:text-right' : 'lg:text-left'} text-center`}
          >
            {/* Background Card for Text */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 lg:p-8 shadow-xl border border-white/20">
              <motion.span 
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm px-3 py-1.5 rounded-full mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                {t('hero.subtitle')}
              </motion.span>
              
              <motion.h1 
                className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {t('hero.title')}
              </motion.h1>
              
              <motion.p 
                className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {t('hero.subtitle')}
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className={`flex flex-col sm:flex-row ${isRTL ? 'lg:justify-start' : 'lg:justify-start'} justify-center gap-3 mb-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <ScrollLink 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  offset={-80} 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer inline-flex items-center justify-center"
                >
                  <span>{t('hero.cta.primary')}</span>
                  <i className="fas fa-arrow-left ml-2 group-hover:translate-x-1 transition-transform"></i>
                </ScrollLink>
                
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group bg-white/80 backdrop-blur-sm text-gray-800 border-2 border-gray-200 font-bold py-3 px-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  <i className="fas fa-play ml-2 text-blue-600 group-hover:scale-110 transition-transform"></i>
                  <span>{t('hero.cta.secondary')}</span>
                </button>
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                className="flex justify-center lg:justify-start gap-6 pt-4 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div 
                      ref={stat.ref}
                      className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1"
                    >
                      {stat.count}{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dynamic Learning Interface */}
            <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 overflow-hidden min-h-[400px]">
              
              {/* Interactive Learning Dashboard */}
              <div className="grid grid-cols-2 gap-4 h-full">
                
                {/* Left Column - Audio Waveform Visualization */}
                <div className="space-y-4">
                  {/* Microphone Input Section */}
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-4 backdrop-blur-sm border border-blue-300/30"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <i className="fas fa-microphone text-white text-sm"></i>
                      </motion.div>
                      <span className="text-sm font-medium text-gray-700">Recording...</span>
                    </div>
                    
                    {/* Audio Waveform */}
                    <div className="flex items-end gap-1 h-12">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full"
                          style={{ width: '6px' }}
                          animate={{
                            height: [
                              `${20 + Math.sin(i * 0.5) * 15}%`,
                              `${40 + Math.sin(i * 0.8) * 25}%`,
                              `${20 + Math.sin(i * 0.3) * 15}%`
                            ]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* AI Analysis Section */}
                  <motion.div 
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-4 backdrop-blur-sm border border-purple-300/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <i className="fas fa-brain text-white text-sm"></i>
                      </motion.div>
                      <span className="text-sm font-medium text-gray-700">AI Analysis</span>
                    </div>
                    
                    {/* Progress Bars */}
                    <div className="space-y-2">
                      <div className="text-xs text-gray-600">Pronunciation: 92%</div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "92%" }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </div>
                      
                      <div className="text-xs text-gray-600">Fluency: 87%</div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "87%" }}
                          transition={{ duration: 2, delay: 1.5 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column - Interactive Learning Interface */}
                <div className="space-y-4">
                  {/* Vocabulary Challenge */}
                  <motion.div 
                    className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-4 backdrop-blur-sm border border-green-300/30"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <i className="fas fa-book text-white text-sm"></i>
                      </motion.div>
                      <span className="text-sm font-medium text-gray-700">Vocabulary</span>
                    </div>
                    
                    {/* Word Card */}
                    <div className="bg-white/60 rounded-xl p-3 text-center">
                      <motion.div 
                        className="text-lg font-bold text-gray-800"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        "Incredible"
                      </motion.div>
                      <div className="text-xs text-gray-600 mt-1">/ɪnˈkredɪbəl/</div>
                    </div>
                  </motion.div>

                  {/* Achievement Notification */}
                  <motion.div 
                    className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-4 backdrop-blur-sm border border-orange-300/30"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <i className="fas fa-star text-white text-sm"></i>
                      </motion.div>
                      <div>
                        <div className="text-sm font-medium text-gray-700">Level Up!</div>
                        <div className="text-xs text-gray-600">Beginner → Intermediate</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Chat Feedback */}
                  <motion.div 
                    className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-4 backdrop-blur-sm border border-cyan-300/30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.8, type: "spring" }}
                  >
                    <div className="flex items-start gap-3">
                      <motion.div 
                        className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <i className="fas fa-robot text-white text-sm"></i>
                      </motion.div>
                      <div className="bg-white/60 rounded-lg p-2 text-xs text-gray-700 leading-relaxed">
                        "Great job! Try to emphasize the 'cr' sound more clearly."
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Learning Icons */}
              <motion.div
                className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full backdrop-blur-sm border border-white/50 flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <i className="fas fa-graduation-cap text-indigo-600 text-sm"></i>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-pink-500/30 to-red-500/30 rounded-full backdrop-blur-sm border border-white/50 flex items-center justify-center"
                animate={{ 
                  x: [0, 8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <i className="fas fa-heart text-pink-600 text-xs"></i>
              </motion.div>

              {/* Background Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                    style={{
                      left: `${15 + (i * 70) % 85}%`,
                      top: `${10 + (i * 60) % 80}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 4 + (i % 2),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Enhanced Shadow and Glow */}
            <div className="absolute inset-0 -z-10 transform translate-x-2 translate-y-2">
              <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl backdrop-blur-sm"></div>
            </div>

            {/* Contextual Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/60"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <i className="fas fa-volume-up text-white text-lg"></i>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/60"
              animate={{ 
                y: [0, 10, 0],
                x: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <i className="fas fa-chart-line text-white text-lg"></i>
            </motion.div>

            {/* Success Indicator */}
            <motion.div
              className="absolute top-1/2 -right-8 w-16 h-8 bg-green-500/90 rounded-full flex items-center justify-center shadow-lg"
              initial={{ scale: 0, x: 20 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 2.5, type: "spring" }}
            >
              <i className="fas fa-check text-white text-sm mr-1"></i>
              <span className="text-white text-xs font-bold">98%</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection; 