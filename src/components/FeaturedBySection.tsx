import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

import gimnasiaLogo from '../assets/schools/gimnasia_logo.png';
import rashiLogo from '../assets/schools/logo_rashi.png';
import mekifVavLogo from '../assets/schools/mekif_vav_logo.png';
import ragerLogo from '../assets/schools/rager_logo.png';
import yatzivLogo from '../assets/schools/yatziv_logo.png';

const FeaturedBySection: React.FC = () => {
  const { t } = useLanguage();

  const logos = [
    { src: gimnasiaLogo, alt: 'Gimnasia Logo', name: 'גימנסיה באר שבע' },
    { src: rashiLogo, alt: 'Rashi Logo', name: 'קרן רש"י' },
    { src: mekifVavLogo, alt: 'Mekif Vav Logo', name: 'מקיף ו\' באר שבע' },
    { src: ragerLogo, alt: 'Rager Logo', name: 'תיכון מקיף רגר' },
    { src: yatzivLogo, alt: 'Yatziv Logo', name: 'בית יציב' },
  ];

  return (
    <motion.section
      className="py-8 sm:py-12 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 font-sans">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs px-3 py-1 rounded-full mb-3 shadow-md font-sans">
            {t('featured.badge')}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-sans font-extrabold">
            {t('featured.title')}
          </h3>
        </motion.div>

        {/* Static Logos Grid */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-10 max-w-5xl mx-auto overflow-x-auto pb-4">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              className="group flex flex-col items-center flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-blue-200 group-hover:bg-blue-50">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-10 md:h-12 w-auto mx-auto transition-all duration-300"
                />
              </div>
              
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                <p className="text-xs font-medium text-gray-600 whitespace-nowrap font-sans">
                  {logo.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedBySection; 
