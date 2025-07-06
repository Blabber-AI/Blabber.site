import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const PrivacyPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const sections = [
    {
      title: 'איסוף מידע',
      icon: 'fa-database',
      content: [
        'אנו אוספים מידע שאתם מספקים לנו ישירות, כגון שם, כתובת דואר אלקטרוני, ושם בית הספר.',
        'מידע על השימוש באפליקציה, כולל הקלטות קוליות לצורך ניתוח וחיזוי.',
        'מידע טכני כגון כתובת IP, סוג דפדפן, ונתוני השימוש באתר.',
        'המידע נאסף בהסכמתכם המפורשת ובהתאם לחוקי הגנת הפרטיות הישראליים והבינלאומיים.'
      ]
    },
    {
      title: 'שימוש במידע',
      icon: 'fa-cogs',
      content: [
        'מידע אישי משמש לצורך מתן השירות, יצירת קשר, ושיפור החוויה האישית.',
        'הקלטות קוליות מנותחות באמצעות בינה מלאכותית לצורך מתן משוב על הגייה ושטף דיבור.',
        'נתונים מצטברים ואנונימיים משמשים לצורך מחקר ופיתוח המוצר.',
        'לא נשתף מידע אישי עם צדדים שלישיים ללא הסכמתכם המפורשת.'
      ]
    },
    {
      title: 'אבטחת מידע',
      icon: 'fa-shield-alt',
      content: [
        'אנו משתמשים בטכנולוגיות הצפנה מתקדמות להגנה על המידע שלכם.',
        'השרתים שלנו ממוקמים במרכזי נתונים מאובטחים עם הגנות פיזיות ודיגיטליות.',
        'גישה למידע מוגבלת לעובדים מורשים בלבד ובהתאם לצורך תפקידי.',
        'אנו מבצעים ביקורות אבטחה קבועות ומעדכנים את הגנותינו.'
      ]
    },
    {
      title: 'זכויותיכם',
      icon: 'fa-user-shield',
      content: [
        'זכות עיון במידע האישי השמור עליכם במערכות שלנו.',
        'זכות לתיקון או עדכון של מידע לא מדויק.',
        'זכות למחיקת המידע שלכם (זכות להיותר זכות).',
        'זכות להגבלת עיבוד המידע או התנגדות לעיבוד מסוים.',
        'זכות לקבלת העתק של המידע שלכם בפורמט נגיש.'
      ]
    },
    {
      title: 'קבצי Cookie',
      icon: 'fa-cookie-bite',
      content: [
        'אנו משתמשים בקבצי Cookie לשיפור חוויית הגלישה ולמתן שירות מותאם אישית.',
        'קבצי Cookie עוזרים לנו לזכור את העדפותיכם ולנתח את דפוסי השימוש באתר.',
        'ניתן להגדיר את הדפדפן שלכם לחסום או למחוק קבצי Cookie.',
        'חלק מהפונקציות באתר עלולות שלא לפעול כראוי ללא קבצי Cookie.'
      ]
    },
    {
      title: 'עדכונים למדיניות',
      icon: 'fa-sync-alt',
      content: [
        'אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת.',
        'עדכונים משמעותיים יובאו לידיעתכם באמצעות הודעה באתר או בדואר אלקטרוני.',
        'המשך השימוש באתר לאחר עדכון המדיניות מהווה הסכמה לשינויים.',
        'תאריך העדכון האחרון מופיע בראש הדף.'
      ]
    }
  ];

  return (
    <div className={`py-16 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">{t('privacy.title')}</h1>
            <p className="text-lg leading-relaxed mb-4">
              אנו מחויבים להגן על הפרטיות שלכם ולשמור על המידע שלכם בבטחה
            </p>
            <div className="bg-white/20 rounded-lg p-3 inline-block">
              <p className="text-base">
                <i className="fas fa-calendar-alt mr-2"></i>
                {t('privacy.lastUpdated')}: 1 בינואר 2024
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-offwhite">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-dark-gray mb-3">תוכן עניינים</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {sections.map((section, index) => (
              <motion.a
                key={index}
                href={`#section-${index}`}
                className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-secondary transition-colors">
                  <i className={`fas ${section.icon} text-white text-sm`}></i>
                </div>
                <h3 className="font-semibold text-dark-gray group-hover:text-primary transition-colors text-sm">
                  {section.title}
                </h3>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                id={`section-${index}`}
                className="bg-white p-6 rounded-xl shadow-lg"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-3">
                    <i className={`fas ${section.icon} text-white text-lg`}></i>
                  </div>
                  <h2 className="text-2xl font-bold text-dark-gray">{section.title}</h2>
                </div>

                <div className="space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-medium-gray leading-relaxed">
                      <i className="fas fa-check-circle text-success mr-2"></i>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-offwhite">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center bg-white p-6 rounded-xl shadow-lg"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-envelope text-white text-lg"></i>
            </div>
            <h2 className="text-2xl font-bold text-dark-gray mb-3">שאלות בנושא פרטיות?</h2>
            <p className="text-lg text-medium-gray mb-4 leading-relaxed">
              אם יש לכם שאלות לגבי מדיניות הפרטיות שלנו או רוצים לממש את זכויותיכם, 
              אנא צרו איתנו קשר
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <h3 className="font-semibold text-dark-gray mb-1">אימייל</h3>
                <a href="mailto:privacy@blabber.site" className="text-primary font-medium hover:underline">
                  privacy@blabber.site
                </a>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-phone text-primary"></i>
                </div>
                <h3 className="font-semibold text-dark-gray mb-1">טלפון</h3>
                <a href="tel:+972-50-123-4567" className="text-primary font-medium hover:underline">
                  050-123-4567
                </a>
              </div>
            </div>
            <p className="text-sm text-medium-gray">
              זמני מענה: ימים א'-ה', 9:00-17:00
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage; 
