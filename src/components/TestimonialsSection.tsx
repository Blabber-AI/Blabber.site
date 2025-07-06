import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

import person1 from '../assets/people/people1.png';
import person2 from '../assets/people/people2.png';
import person3 from '../assets/people/people3.png';

const TestimonialsSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.person1.name'),
      role: t('testimonials.person1.role'),
      content: t('testimonials.person1.content'),
      image: person1,
      rating: 5,
    },
    {
      id: 2,
      name: t('testimonials.person2.name'),
      role: t('testimonials.person2.role'),
      content: t('testimonials.person2.content'),
      image: person2,
      rating: 5,
    },
    {
      id: 3,
      name: t('testimonials.person3.name'),
      role: t('testimonials.person3.role'),
      content: t('testimonials.person3.content'),
      image: person3,
      rating: 5,
    },
  ];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentData = testimonials[currentTestimonial];

  return (
    <section 
      id="testimonials" 
      className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          style={{ 
            backgroundSize: '200% 200%' 
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 font-assistant">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-2 rounded-full mb-4 shadow-lg font-assistant font-semibold">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4 font-assistant font-extrabold">
            {t('testimonials.title')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-assistant">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Main Testimonial Card */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-100/50 relative mx-auto max-w-3xl">
                {/* Quote Icon */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <i className="fas fa-quote-right text-white text-xl"></i>
                  </div>
                </div>

                {/* Stars Rating */}
                <div className="flex justify-center mb-6 pt-8 sm:pt-0">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <motion.i
                      key={i}
                      className="fas fa-star text-yellow-400 text-xl mx-1"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic font-assistant">
                  "{currentData.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse">
                  <div className="relative">
                    <img
                      src={currentData.image}
                      alt={currentData.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <div className="text-center sm:text-left rtl:sm:text-right">
                    <h4 className="text-gray-800 text-xl font-assistant font-bold">{currentData.name}</h4>
                    <p className="text-gray-600 text-base font-assistant">{currentData.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-blue-600 group"
              aria-label="Previous testimonial"
            >
              <i className={`fas ${isRTL ? 'fa-chevron-right' : 'fa-chevron-left'} group-hover:scale-110 transition-transform`}></i>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-blue-600 group"
              aria-label="Next testimonial"
            >
              <i className={`fas ${isRTL ? 'fa-chevron-left' : 'fa-chevron-right'} group-hover:scale-110 transition-transform`}></i>
            </button>
          </div>

          {/* Preview Thumbnails */}
          <div className="hidden sm:flex justify-center mt-8 space-x-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentTestimonial(index)}
                className={`relative transition-all duration-300 rounded-full ${
                  currentTestimonial === index ? 'scale-110 ring-2 ring-blue-500 ring-offset-2 ring-offset-blue-50' : 'scale-95 opacity-60 hover:opacity-100 hover:scale-100'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md"
                />
                <div className={`absolute inset-0 bg-white/30 rounded-full transition-opacity duration-300 ${currentTestimonial === index ? 'opacity-0' : 'opacity-100'}`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 