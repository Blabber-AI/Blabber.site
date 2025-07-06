import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

import gimnasiaLogo from '../assets/schools/gimnasia_logo.png';
import rashiLogo from '../assets/schools/logo_rashi.png';
import mekifVavLogo from '../assets/schools/mekif_vav_logo.png';
import ragerLogo from '../assets/schools/rager_logo.png';
import yatzivLogo from '../assets/schools/yatziv_logo.png';

const FeaturedBySection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const logos = [
    { src: gimnasiaLogo, alt: 'Gimnasia Logo', name: 'גימנסיה באר שבע' },
    { src: rashiLogo, alt: 'Rashi Logo', name: 'רש"י נתיבות' },
    { src: mekifVavLogo, alt: 'Mekif Vav Logo', name: 'מקיף ו\' אשדוד' },
    { src: ragerLogo, alt: 'Rager Logo', name: 'רגר מתקדמים' },
    { src: yatzivLogo, alt: 'Yatziv Logo', name: 'יציב שדרות' },
  ];

  // Duplicate logos for seamless loop - increased duplication
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <motion.section
      className={`py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 font-assistant">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm px-4 py-2 rounded-full mb-4 shadow-lg font-assistant">
            {t('featured.badge')}
          </span>
          <h3 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-assistant font-extrabold text-center ${isRTL ? 'direction-rtl' : 'direction-ltr'}`}>
            {t('featured.title')}
          </h3>
          <p className={`text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-assistant text-center ${isRTL ? 'direction-rtl' : 'direction-ltr'}`}>
            {t('featured.subtitle')}
          </p>
        </motion.div>

        {/* Moving Carousel */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          {/* Moving Container */}
          <motion.div
            className="flex items-center space-x-10 md:space-x-16"
            animate={{ x: [0, -100 * logos.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{ width: `${100 * duplicatedLogos.length}%` }}
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`${logo.alt}-${index}`}
                className="group flex-shrink-0 flex flex-col items-center"
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                <div className="bg-white rounded-2xl p-4 md:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 sm:h-12 md:h-14 w-auto mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  <p className={`text-sm font-medium text-gray-600 whitespace-nowrap font-assistant ${isRTL ? 'text-right direction-rtl' : 'text-left direction-ltr'}`}>
                    {logo.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedBySection; 