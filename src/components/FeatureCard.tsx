import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  iconClass: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconClass, title, description }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
      whileHover={{ y: -5 }}
    >
      <div className="bg-primary-light text-primary rounded-full p-4 mb-4">
        <i className={`fas ${iconClass} fa-2x`}></i>
      </div>
      <h3 className="text-lg font-bold text-primary-dark mb-2">{title}</h3>
      <p className="text-medium-gray text-sm">{description}</p>
    </motion.div>
  );
};

export default FeatureCard; 