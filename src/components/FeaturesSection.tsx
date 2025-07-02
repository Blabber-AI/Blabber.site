import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    { iconClass: 'fa-user-graduate', title: 'תרגול מותאם אישית', description: 'כל תלמיד מתקדם בקצב שלו עם תרגילים שמתאימים לרמתו.' },
    { iconClass: 'fa-microphone-alt', title: 'הקלטה וניתוח קול', description: 'התלמידים מקליטים את עצמם ומקבלים משוב מיידי על ההגייה והשטף.' },
    { iconClass: 'fa-chalkboard-teacher', title: 'אינטגרציה עם חומרי הלימוד', description: 'התאימו את התרגול לחומר הנלמד בכיתה בקלות.' },
    { iconClass: 'fa-chart-line', title: 'דוחות התקדמות', description: 'עקבו אחר ההתקדמות של כל תלמיד וזהו אזורים לשיפור.' },
    { iconClass: 'fa-cogs', title: 'הגדרה וניהול פשוטים', description: 'ממשק נוח למורים להגדרת כיתות, ניהול תלמידים והעלאת תכנים.' },
    { iconClass: 'fa-shield-alt', title: 'סביבה בטוחה ומבוקרת', description: 'סביבה סגורה ובטוחה, מותאמת לשימוש בבתי ספר.' },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-3">
            חקרו את היכולות של Blabber
          </h2>
          <p className="text-base text-medium-gray max-w-2xl mx-auto mb-8">
            כלים עוצמתיים למורים, חוויה מהנה לתלמידים.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 