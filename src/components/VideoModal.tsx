import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose, 
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", 
  title = "Blabber Demo Video" 
}) => {
  const { t, isRTL } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm" />
          
          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            className={`relative bg-white rounded-2xl shadow-2xl mx-4 w-full max-w-4xl max-h-[90vh] overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}
            variants={modalVariants}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <i className="fas fa-play text-white"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-gray">{title}</h3>
                  <p className="text-sm text-medium-gray">
                    {t('common.loading')}...
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label={t('common.close')}
              >
                <i className="fas fa-times text-gray-600"></i>
              </button>
            </div>

            {/* Video Container */}
            <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-medium-gray">
                    רוצים לראות יותר? בואו נקבע הדגמה אישית עבור בית הספר שלכם
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-medium-gray hover:text-dark-gray transition-colors"
                  >
                    {t('common.close')}
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      // Scroll to contact section
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                  >
                    קבעו הדגמה
                  </button>
                </div>
              </div>
            </div>

            {/* Loading Animation Overlay */}
            <motion.div
              className="absolute inset-0 bg-white flex items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{ pointerEvents: 'none' }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-16 h-16 border-4 border-primary-light border-t-primary rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="mt-4 text-medium-gray">{t('common.loading')}...</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal; 