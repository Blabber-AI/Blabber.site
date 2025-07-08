interface Translations {
  [key: string]: {
    he: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { he: 'בית', en: 'Home' },
  'nav.about': { he: 'אודות', en: 'About' },
  'nav.howItWorks': { he: 'איך זה עובד', en: 'How It Works' },
  'nav.testimonials': { he: 'עדויות והמלצות', en: 'Testimonials' },
  'nav.contact': { he: 'צור קשר', en: 'Contact' },
  'nav.support': { he: 'תמיכה ושירות', en: 'Support' },
  'nav.privacy': { he: 'פרטיות', en: 'Privacy' },
  'nav.letsStart': { he: 'בואו נתחיל', en: "Let's Start" },

  // Hero Section
  'hero.title': { 
    he: 'לימוד אנגלית באמצעות דיבור עם AI', 
    en: 'Learn English by Speaking with AI' 
  },
  'hero.subtitle': { 
    he: 'שדרג את ההוראה שלך עם מורה פרטי מבוסס AI המותאם לכל תלמיד', 
    en: 'Transform your class teaching with live AI lessons tailored to each student' 
  },
  'hero.cta.primary': { he: 'התחילו עכשיו', en: 'Get Started' },
  'hero.cta.secondary': { he: 'צפו בהדגמה', en: 'Watch Demo' },
  'hero.stats.students': { he: 'תלמידים', en: 'Students' },
  'hero.stats.schools': { he: 'בתי ספר', en: 'Schools' },
  'hero.stats.satisfaction': { he: 'שביעות רצון', en: 'Satisfaction' },

  // Featured By Section
  'featured.title': { he: 'מוסדות חינוך מובילים בוטחים בנו', en: 'Leading Educational Institutions Trust Us' },
  'featured.subtitle': { he: 'בתי ספר מובילים ברחבי הארץ כבר חוו את הכוח המשנה של הטכנולוגיה שלנו', en: 'Leading schools across the country have already experienced the transformative power of our technology' },
  'featured.badge': { he: 'השותפים שלנו', en: 'Our Partners' },

  // How It Works Section
  'hiw.title': { he: 'איך Blabber עובד', en: 'How Blabber Works' },
  'hiw.subtitle': { he: 'המורה הדיגיטלי המתקדם שלנו תומך במחנכים ומעניק חוויה אישית לתלמידים.', en: 'Our advanced digital teacher supports educators and provides a personalized experience for students.' },
  'hiw.badge': { he: 'תהליך השילוב', en: 'Integration Process' },
  'hiw.step1.title': { he: 'בנו את השיעור המושלם', en: 'Build the Perfect Lesson' },
  'hiw.step1.desc1': { he: 'התכנים של Blabber מותאמים במלואם לתקני משרד החינוך, לספרי הלימוד ולדרישות הליבה.', en: 'Blabber\'s content is fully aligned with Ministry of Education standards, textbooks, and core requirements.' },
  'hiw.step1.desc2': { he: 'בחרו ממגוון רחב של שיעורים המותאמים לכל רמת כיתה.', en: 'Choose from a wide range of lessons adapted to every grade level.' },
  'hiw.step1.desc3': { he: 'התאימו את השיעור בהתאמה אישית לחזון שלכם.', en: 'Customize the lesson to match your educational vision.' },
  'hiw.step2.title': { he: 'תנו להם לדבר!', en: 'Let Them Speak!' },
  'hiw.step2.desc1': { he: 'Blabber מעביר את השיעור לכל תלמיד בנפרד או לכל הכיתה יחד. הכל באמצעות מורה פרטי דיגיטלי, שיוצר סביבה בטוחה ומהנה לתרגול ולמידה מטעויות.', en: 'Blabber delivers lessons to each student individually or to the entire class together. All through a digital private tutor that creates a safe and fun environment for practice and learning from mistakes.' },
  'hiw.step3.title': { he: 'התפתחו יחד עם התלמידים', en: 'Grow Together with the Students' },
  'hiw.step3.desc1': { he: 'Blabber מספק ניתוח מתקדם ומפורט עבור כל תלמיד, המבוסס על המדדים הרשמיים של משרד החינוך.', en: 'Blabber provides advanced and detailed analysis for each student, based on the official metrics of the Ministry of Education.' },
  'hiw.step3.desc2': { he: 'עקבו אחר ביצועי התלמידים במשימה בודדת ובהתפתחותם לאורך זמן.', en: 'Track student performance in individual tasks and their development over time.' },
  'hiw.step3.desc3': { he: 'Blabber גם מתאים עצמו ליכולות ולצרכים של כל תלמיד ככל שהוא מתקדם - בדיוק כמו שאתם עושים!', en: 'Blabber also adapts itself to each student\'s abilities and needs as they progress - just like you do!' },

  // Testimonials Section
  'testimonials.title': { he: 'סיפורי הצלחה של בתי ספר', en: 'School Success Stories' },
  'testimonials.subtitle': { he: 'גלו איך Blabber משפיע על למידת אנגלית בבתי ספר ברחבי הארץ', en: 'Discover how Blabber impacts English learning in schools across the country' },
  'testimonials.badge': { he: 'המלצות', en: 'Testimonials' },
  'testimonials.person1.name': { he: 'טל מזור', en: 'Tal Mazor' },
  'testimonials.person1.role': { he: 'תלמידה, תיכון מקיף ו\'', en: 'Student, Mekif Vav High School' },
  'testimonials.person1.content': { he: 'Blabber שינה את הדרך שבה אני לומדת אנגלית. אני מרגישה הרבה יותר בטוחה לדבר באנגלית עכשיו והציונים שלי השתפרו משמעותית!', en: 'Blabber has changed the way I learn English. I feel much more confident speaking in English now and my grades have improved significantly!' },
  'testimonials.person2.name': { he: 'עדי תורג\'מן', en: 'Adi Turgeman' },
  'testimonials.person2.role': { he: 'מנהלת, תיכון גימנסיה באר שבע', en: 'Principal, Beer Sheva Gymnasia High School' },
  'testimonials.person2.content': { he: 'כמנהלת בית ספר, ראיתי כיצד Blabber שיפר את יכולות האנגלית של התלמידים שלנו. המערכת גם העצימה את המורים שלנו עם כלים טובים יותר להוראה מותאמת אישית.', en: 'As a school principal, I have seen how Blabber has improved our students\' English abilities. The system has also empowered our teachers with better tools for personalized instruction.' },
  'testimonials.person3.name': { he: 'דגנית אביסדריס', en: 'Daganit Abisdris' },
  'testimonials.person3.role': { he: 'מורה לאנגלית', en: 'English Teacher' },
  'testimonials.person3.content': { he: 'Blabber מאפשר לי להתאים את ההוראה לכל תלמיד, לזהות קשיים ספציפיים ולהתמקד בהם. זה כלי חיוני בכיתת האנגלית המודרנית.', en: 'Blabber allows me to tailor instruction to each student, identify specific difficulties, and focus on them. It\'s an essential tool in the modern English classroom.' },

  // Contact Section
  'contact.badge': { he: 'בואו נתחיל יחד', en: "Let's Start Together" },
  'contact.mainTitle1': { he: 'רוצים לדבר? קבעו שיחה עם יועץ', en: 'Want to talk? Schedule a call with a consultant' },
  'contact.mainTitle2': { he: '', en: '' },
  'contact.subtitle': { he: 'מלאו את הפרטים ונחזור אליכם תוך 24 שעות', en: 'Fill in the details and we\'ll get back to you within 24 hours' },
  'contact.feature1.title': { he: 'שיעורים מותאמים אישית', en: 'AI-Customized Lessons' },
  'contact.feature1.desc': { he: 'הבינה המלאכותית שלנו מתאימה את עצמה לקצב של כל תלמיד ויוצרת תרגילים אישיים לשיפור ההגייה והשטף.', en: 'Our AI adapts to each student\'s pace, creating personalized exercises for pronunciation and fluency.' },
  'contact.feature2.title': { he: 'מעקב ביצועים בזמן אמת', en: 'Real-Time Performance Tracking' },
  'contact.feature2.desc': { he: 'מורים מקבלים דאשבורדים מפורטים למעקב אחר התקדמות התלמידים, בעוד שהתלמידים מקבלים משוב מיידי.', en: 'Teachers get detailed dashboards to monitor student progress, while students receive immediate feedback.' },
  'contact.feature3.title': { he: 'יישום ללא מאמץ', en: 'Effortless Implementation' },
  'contact.feature3.desc': { he: 'Blabber משתלב בצורה חלקה בתוכנית הלימודים הקיימת ומספק תמיכה מלאה למורים ולצוות.', en: 'Blabber integrates smoothly with your existing curriculum and provides full support for teachers and staff.' },
  'contact.schoolName': { he: 'שם המוסד החינוכי', en: 'School Name' },
  'contact.schoolNamePlaceholder': { he: 'לדוגמה: גימנסיה ריאלית', en: 'e.g., Gymnasia Realit' },
  'contact.contactName': { he: 'שם איש קשר', en: 'Contact Name' },
  'contact.contactNamePlaceholder': { he: 'שם מלא', en: 'Full Name' },
  'contact.email': { he: 'כתובת אימייל', en: 'Email Address' },
  'contact.emailPlaceholder': { he: 'your-email@school.ac.il', en: 'your-email@school.ac.il' },
  'contact.phone': { he: 'מספר טלפון', en: 'Phone Number' },
  'contact.phonePlaceholder': { he: '05X-XXX-XXXX', en: '05X-XXX-XXXX' },
  'contact.message': { he: 'הודעה', en: 'Message' },
  'contact.messagePlaceholder': { he: '(אופציונלי)', en: '(Optional)' },
  'contact.submitButton': { he: 'שליחת בקשה להדגמה', en: 'Send Demo Request' },
  'contact.submitting': { he: 'שולח...', en: 'Sending...' },
  'contact.successTitle': { he: 'ההודעה נשלחה בהצלחה!', en: 'Message Sent Successfully!' },
  'contact.successMessage': { he: 'תודה על פנייתך. נציג שלנו יחזור אליך בהקדם.', en: 'Thank you for your inquiry. Our representative will get back to you shortly.' },
  'contact.sendAnother': { he: 'שלח פנייה נוספת', en: 'Send Another Inquiry' },

  // Footer
  'footer.description': { he: 'פלטפורמת הבינה המלאכותית המתקדמת לשיפור כישורי האנגלית בבתי ספר', en: 'Advanced AI platform for improving English skills in schools' },
  'footer.quickLinks': { he: 'קישורים מהירים', en: 'Quick Links' },
  'footer.contact': { he: 'צרו קשר', en: 'Contact Us' },
  'footer.email': { he: 'אימייל', en: 'Email' },
  'footer.phone': { he: 'טלפון', en: 'Phone' },
  'footer.address': { he: 'כתובת', en: 'Address' },
  'footer.location': { he: 'ישראל', en: 'Israel' },
  'footer.downloadApp': { he: 'הורדת האפליקציה', en: 'Download the App' },
  'footer.appDescription': { he: 'הורידו את האפליקציה שלנו לניהול נוח יותר', en: 'Download our app for more convenient management' },
  'footer.downloadFrom': { he: 'הורדה מ', en: 'Download from' },
  'footer.newsletterTitle': { he: 'הישארו מעודכנים', en: 'Stay Updated' },
  'footer.newsletterDescription': { he: 'קבלו עדכונים על תכונות חדשות וטיפים לשיפור הוראת האנגלית', en: 'Get updates on new features and tips for improving English teaching' },
  'footer.emailPlaceholder': { he: 'כתובת האימייל שלכם', en: 'Your email address' },
  'footer.subscribe': { he: 'הרשמה', en: 'Subscribe' },
  'footer.rights': { he: 'כל הזכויות שמורות', en: 'All rights reserved' },

  // About Page
  'about.title': { he: 'הסיפור שלנו', en: 'Our Story' },
  'about.subtitle': { 
    he: 'מעצבים את עתיד לימוד האנגלית, שיחה אחת בכל פעם.', 
    en: 'Shaping the future of English learning, one conversation at a time.' 
  },
  'about.mission.title': { he: 'המשימה שלנו', en: 'Our Mission' },
  'about.mission.description': { 
    he: 'להעצים כל תלמיד לדבר אנגלית בביטחון. אנו מפתחים כלים חדשניים שהופכים את הלמידה לחוויה מהנה, אישית ומותאמת לקצב של כולם.', 
    en: 'To empower every student to speak English with confidence. We build innovative tools that make learning fun, personal, and paced for everyone.' 
  },
  'about.vision.title': { he: 'החזון שלנו', en: 'Our Vision' },
  'about.vision.description': { 
    he: 'להוביל את עתיד החינוך הטכנולוגי בישראל, ולספק לכל תלמיד, תחת הסטנדרטים של משרד החינוך, את הכלים להצליח בעולם גלובלי.', 
    en: 'To lead the future of technological education in Israel, providing every student, under the standards of the Ministry of Education, with the tools to succeed in a global world.' 
  },

  // Support Page
  'support.title': { he: 'מרכז התמיכה של Blabber', en: 'Blabber Support Center' },
  'support.subtitle': { he: 'המשאב המרכזי שלכם להפקת המירב מהמורה הדיגיטלי שלנו המונע בבינה מלאכותית. כאן תמצאו מדריכים, פתרונות ותמיכה מקצועית', en: 'Your central resource for getting the most out of our AI-powered digital teacher. Find guides, solutions, and professional support here' },
  
  // Quick Support Cards
  'support.phone.title': { he: 'תמיכה טלפונית', en: 'Phone Support' },
  'support.phone.desc': { he: 'שירות לקוחות זמין בשעות העבודה', en: 'Customer service available during business hours' },
  'support.email.title': { he: 'תמיכה באימייל', en: 'Email Support' },
  'support.email.desc': { he: 'קבלו תשובה תוך 24 שעות', en: 'Get a response within 24 hours' },
  'support.chat.title': { he: 'צ\'אט חי', en: 'Live Chat' },
  'support.chat.desc': { he: 'שירות מיידי בשעות העבודה', en: 'Instant service during business hours' },
  'support.chat.button': { he: 'התחל צ\'אט', en: 'Start Chat' },

  // FAQ Categories - Redesigned with only 3 main categories
  'support.faq.title': { he: 'שאלות נפוצות', en: 'Frequently Asked Questions' },
  'support.faq.subtitle': { he: 'הנה התשובות לשאלות הנפוצות ביותר שמקבלות בתי הספר והמורים שלנו', en: 'Here are answers to the most frequently asked questions from our schools and teachers' },
  
  'support.faq.categories.basics': { he: 'מידע כללי', en: 'General Information' },
  'support.faq.categories.implementation': { he: 'יישום והתחלה', en: 'Implementation & Getting Started' },
  'support.faq.categories.support': { he: 'תמיכה ותשלומים', en: 'Support & Payments' },

  'support.faq.selectTopic': { he: 'בחרו נושא', en: 'Select a Topic' },

  // General Information FAQ
  'support.faq.basics.q1': { he: 'מה זה Blabber ואיך זה עובד?', en: 'What is Blabber and how does it work?' },
  'support.faq.basics.a1': { he: 'בלאבר היא אפליקציה ללימוד אנגלית, הכוללת מורים פרטיים מבוססי בינה מלאכותית. התלמידים מתרגלים דיבור, האזנה ואוצר מילים בשיחות טבעיות, ומקבלים משוב מיידי לשיפור הדקדוק והשטף. המערכת מותאמת אישית לכל תלמיד ועומדת בסטנדרטים של משרד החינוך.', en: 'Blabber is an application for learning English, which includes AI-powered private tutors. Students practice speaking, listening, and vocabulary in natural conversations, receiving instant feedback to improve grammar and fluency. The system is personalized for each student and meets Ministry of Education standards.' },
  
  'support.faq.basics.q2': { he: 'על אילו מכשירים ניתן להשתמש ב-Blabber?', en: 'What devices can I use Blabber on?' },
  'support.faq.basics.a2': { he: 'נכון להיום, Blabber פועל באפליקציה בטלפונים ניידים (להורדה מחנויות האפליקציות) ובטאבלטים. תמיכה למחשבים תתווסף בעתיד.', en: 'Currently, Blabber is available as a mobile app for smartphones (downloadable from app stores) and tablets. Desktop support will be added in the future.' },

  'support.faq.basics.q3': { he: 'האם Blabber מתאים לכל הגילאים?', en: 'Is Blabber suitable for all ages?' },
  'support.faq.basics.a3': { he: 'Blabber מותאם לתלמידים בכיתות ז\' עד י"ב (גילאי 12-18). הממשק והתוכן מותאמים לרמות הגיל השונות, והמורה הדיגיטלי מתאים את השיחה ליכולות של כל תלמיד.', en: 'Blabber is suitable for students in grades 7-12 (ages 12-18). The interface and content are adapted for different age levels, and the digital tutor tailors conversations to each student\'s abilities.' },

  'support.faq.basics.q4': { he: 'איך המערכת מטפלת בתלמידים ביישנים?', en: 'How does the system handle shy students?' },
  'support.faq.basics.a4': { he: 'Blabber יוצר סביבה בטוחה ופרטית שמעודדת תלמידים ביישנים לתרגל. אין חשש מביקורת או השוואות עם חברים לכיתה. המורה הדיגיטלי סבלני, תומך ומתאים את הקצב לצרכי התלמיד. התלמידים יכולים לחזור על תרגילים כמה שרוצים עד שירגישו בטוחים.', en: 'Blabber creates a safe, private environment that encourages shy students to practice. There\'s no fear of criticism or comparisons with classmates. The digital teacher is patient, supportive, and adapts the pace to the student\'s needs. Students can repeat exercises as many times as they want until they feel confident.' },

  // Implementation FAQ
  'support.faq.implementation.q1': { he: 'איך בית הספר שלנו יכול להתחיל עם Blabber?', en: 'How can our school get started with Blabber?' },
  'support.faq.implementation.a1': { he: 'תהליך ההתחלה פשוט ומהיר. לאחר הדגמה ראשונית, נגדיר יחד יעדים ונתאים את המערכת לבית הספר. לאחר מכן, נכשיר את המורים, נקים את החשבונות ונתחיל עם קבוצת פיילוט, לפני שנרחיב את השימוש לכלל בית הספר. התהליך כולו אורך בין שבועיים לארבעה שבועות.', en: 'The startup process is simple and quick. After an initial demo, we will define goals together and customize the system for the school. We then train teachers, set up accounts, and begin with a pilot group before expanding usage to the entire school. The whole process takes two to four weeks.' },
  
  'support.faq.implementation.q2': { he: 'איך המורים משתמשים במערכת?', en: 'How do teachers use the system?' },
  'support.faq.implementation.a2': { he: 'המורים מקבלים ממשק ניהול מתקדם שמאפשר: מעקב אחר התקדמות בזמן אמת, הקצאת משימות והתאמת תוכן לכיתה, קבלת דוחות מפורטים על כל תלמיד, ניהול מספר כיתות במקביל. אנחנו מספקים הכשרה מקיפה ותמיכה רציפה למורים.', en: 'Teachers receive an advanced management interface that allows: real-time progress tracking, assigning tasks and customizing content for the class, receiving detailed reports on each student, managing multiple classes simultaneously. We provide comprehensive training and ongoing support for teachers.' },

  'support.faq.implementation.q3': { he: 'האם יש צורך בהכשרה מיוחדת?', en: 'Is special training required?' },
  'support.faq.implementation.a3': { he: 'אנו מספקים הכשרת מורים של כשעה, בנוסף לליווי ותמיכה שוטפים לאורך כל הדרך. הממשק ידידותי ואינטואיטיבי, כך שהתלמידים לומדים להשתמש במערכת תוך דקות ספורות.', en: 'We provide a teacher training session of about one hour, in addition to ongoing guidance and support. The interface is user-friendly and intuitive, so students learn to use the system within minutes.' },

  'support.faq.implementation.q4': { he: 'איך Blabber משתלב עם תוכנית הלימודים?', en: 'How does Blabber integrate with the curriculum?' },
  'support.faq.implementation.a4': { he: 'Blabber מתואם במלואו עם תוכנית הלימודים של משרד החינוך. אנחנו עובדים עם כל בית ספר להתאמת התוכן, המטלות והיעדים לפי הכיתה והרמה. המערכת תומכת בכל יחידות הלימוד הנדרשות ומספקת תרגול מעשי לכל הנושאים התיאורטיים.', en: 'Blabber is fully coordinated with the Education Ministry curriculum. We work with each school to adapt content, assignments, and goals according to class and level. The system supports all required study units and provides practical practice for all theoretical topics.' },

  // Support & Payments FAQ
  'support.faq.support.q1': { he: 'איך התמחור עובד?', en: 'How does pricing work?' },
  'support.faq.support.a1': { he: 'התמחור מבוסס על מדרגות מחיר התלויות במספר התלמידים עבורם בית הספר רוכש את השירות. התשלום מתבצע דרך מערכת "גפ"ן". המחיר כולל גישה מלאה, ממשק מורים, דוחות התקדמות, תמיכה ועדכונים.', en: 'Pricing is based on tiers depending on the number of students the school purchases the service for. Payment is made through the "Gefen" system. The price includes full access, a teacher interface, progress reports, support, and updates.' },
  
  'support.faq.support.q2': { he: 'איך מקבלים תמיכה טכנית?', en: 'How do I get technical support?' },
  'support.faq.support.a2': { he: 'אנו מספקים תמיכה טלפונית ייעודית, מענה למייל תוך 24 שעות ושירות לקוחות ב-WhatsApp (זמין החל מה-01/09/2025), עם אפשרות ליצירת קשר מהמוקד לאחר מכן. לכל בית ספר יש נציג תמיכה ייעודי.', en: 'We provide dedicated phone support, email responses within 24 hours, and WhatsApp customer service (available from 01/09/2025) with an option for a callback from our support center. Each school has a dedicated support representative.' },

  'support.faq.support.q3': { he: 'מה קורה אם יש בעיה טכנית?', en: 'What happens if there\'s a technical problem?' },
  'support.faq.support.a3': { he: 'ברוב המקרים, בעיות טכניות נפתרות על ידי סגירת האפליקציה וכניסה מחדש. כדאי גם לבדוק את חיבור האינטרנט ולוודא שהרשאות המיקרופון פעילות. אם הבעיה נמשכת, צוות התמיכה שלנו זמין לסייע מרחוק.', en: 'In most cases, technical issues can be resolved by closing and reopening the application. It is also advisable to check the internet connection and ensure microphone permissions are enabled. If the problem persists, our support team is available to assist remotely.' },

  'support.faq.support.q4': { he: 'איך מוגן המידע של התלמידים?', en: 'How is student data protected?' },
  'support.faq.support.a4': { he: 'אנחנו מקפידים על הגנת פרטיות מלאה: כל הנתונים מוצפנים ומאוחסנים בשרתים מאובטחים בישראל, אנחנו עומדים בכל התקנות והחוקים הישראליים, לא משתפים מידע עם גורמים חיצוניים, נותנים לבתי ספר שליטה מלאה על הנתונים, ומאפשרים מחיקת מידע בכל עת.', en: 'We maintain complete privacy protection: all data is encrypted and stored on secure servers in Israel, we comply with all Israeli regulations and laws, we don\'t share information with external parties, we give schools full control over the data, and allow data deletion at any time.' },

  'support.faq.support.q5': { he: 'יש אפשרות לתקופת ניסיון?', en: 'Is there a trial period available?' },
  'support.faq.support.a5': { he: 'כן! אנחנו מציעים תקופת פיילוט של חודש אחד לכל בית ספר החדש. במהלך התקופה ניתן לבחון את המערכת עם קבוצה מצומצמת של תלמידים, לבדוק את התאמת התוכן ולהעריך את התוצאות. התקופה כוללת תמיכה מלאה והכשרת מורים.', en: 'Yes! We offer a one-month pilot period for every new school. During this period you can test the system with a limited group of students, check content compatibility, and evaluate results. The period includes full support and teacher training.' },

  // Support Page Contact Methods
  'support.contact.title': { he: 'דרכי יצירת קשר מהירות', en: 'Quick Contact Methods' },
  'support.contact.subtitle': { he: 'צרו איתנו קשר בדרך הנוחה לכם ביותר - אנחנו כאן לעזור', en: 'Contact us in the way that is most convenient for you - we are here to help' },
  'support.contact.phoneTitle': { he: 'תמיכה טלפונית', en: 'Phone Support' },
  'support.contact.phoneDesc': { he: 'שירות מהיר ואישי בשעות העבודה', en: 'Fast and personal service during business hours' },
  'support.contact.emailTitle': { he: 'תמיכה באימייל', en: 'Email Support' },
  'support.contact.emailDesc': { he: 'מענה מפורט תוך 24 שעות', en: 'Detailed response within 24 hours' },
  'support.contact.chatTitle': { he: 'שירות לקוחות WhatsApp', en: 'WhatsApp Support' },
  'support.contact.chatDesc': { he: 'זמין החל מה-01/09/2025', en: 'Available from 01/09/2025' },
  'support.contact.chatButton': { he: 'שליחת הודעה ב-WhatsApp', en: 'Send WhatsApp Message' },

  // Support Page Form
  'support.form.title': { he: 'עדיין יש שאלות?', en: 'Still have questions?' },
  'support.form.subtitle': { he: 'שלחו לנו הודעה ונציג שלנו יחזור אליכם בהקדם האפשרי.', en: 'Send us a message and a representative will get back to you as soon as possible.' },
  'support.form.fullName': { he: 'שם מלא', en: 'Full Name' },
  'support.form.fullNamePlaceholder': { he: 'השם המלא שלכם', en: 'Your full name' },
  'support.form.email': { he: 'אימייל', en: 'Email' },
  'support.form.emailPlaceholder': { he: 'example@school.edu', en: 'example@school.edu' },
  'support.form.schoolName': { he: 'בית ספר', en: 'School' },
  'support.form.schoolNamePlaceholder': { he: 'שם בית הספר שלכם', en: 'Your school\'s name' },
  'support.form.subject': { he: 'נושא הפנייה', en: 'Subject' },
  'support.form.subjectGeneral': { he: 'שאלה כללית', en: 'General Question' },
  'support.form.subjectTechnical': { he: 'תמיכה טכנית', en: 'Technical Support' },
  'support.form.subjectBilling': { he: 'חיובים ותשלומים', en: 'Billing and Payments' },
  'support.form.subjectFeedback': { he: 'משוב והצעות', en: 'Feedback and Suggestions' },
  'support.form.message': { he: 'הודעה', en: 'Message' },
  'support.form.messagePlaceholder': { he: 'פרטו כאן את שאלתכם...', en: 'Detail your question here...' },
  'support.form.submitButton': { he: 'שלח הודעה', en: 'Send Message' },

  // Privacy Page
  'privacy.title': { he: 'מדיניות פרטיות', en: 'Privacy Policy' },
  'privacy.lastUpdated': { he: 'עודכן לאחרונה', en: 'Last updated' },
  'privacy.hero.subtitle': { 
    he: 'הפרטיות והביטחון של המורים והתלמידים שלנו הם בראש סדר העדיפויות שלנו. אנו מחויבים לשמור על המידע שלכם באופן מאובטח ושקוף.', 
    en: 'The privacy and security of our teachers and students are our top priority. We are committed to keeping your information secure and transparent.' 
  },
  'privacy.toc.title': { he: 'תוכן עניינים', en: 'Table of Contents' },

  'privacy.section1.title': { he: '1. איזה מידע אנו אוספים?', en: '1. What Information Do We Collect?' },
  'privacy.section1.p1': { 
    he: 'מידע הנמסר על ידי בתי הספר: פרטי מוסד, שמות ופרטי קשר של מורים ורכזים, ורשימות תלמידים (שם וכיתה).', 
    en: 'Information provided by schools: Institution details, names and contact information of teachers and coordinators, and student lists (name and grade).' 
  },
  'privacy.section1.p2': { 
    he: 'מידע על שימוש במערכת: נתוני התקדמות של תלמידים, תדירות שימוש, והקלטות קוליות של התלמידים לצורך ניתוח פדגוגי ומתן משוב.', 
    en: 'System usage information: Student progress data, frequency of use, and students\' voice recordings for pedagogical analysis and feedback.' 
  },
  'privacy.section1.p3': { 
    he: 'מידע טכני: כתובות IP, סוגי דפדפנים, ומזהי מכשירים, לצורך הבטחת תקינות השירות ואבטחתו.', 
    en: 'Technical information: IP addresses, browser types, and device identifiers to ensure service integrity and security.' 
  },

  'privacy.section2.title': { he: '2. כיצד אנו משתמשים במידע?', en: '2. How Do We Use Your Information?' },
  'privacy.section2.p1': { 
    he: 'לספק ולהתאים אישית את השירות: אנו משתמשים בנתוני ההתקדמות והקלטות הקול כדי להתאים את חווית הלמידה לכל תלמיד.', 
    en: 'To provide and personalize the service: We use progress data and voice recordings to tailor the learning experience for each student.' 
  },
  'privacy.section2.p2': { 
    he: 'לתמיכה ולתקשורת: ליצירת קשר עם מורים ורכזים בנוגע לעדכונים, תמיכה טכנית ומידע פדגוגי.', 
    en: 'For support and communication: To contact teachers and coordinators regarding updates, technical support, and pedagogical information.' 
  },
  'privacy.section2.p3': { 
    he: 'למחקר ופיתוח: אנו משתמשים בנתונים אנונימיים ומצטברים כדי לשפר את האלגוריתמים שלנו, לפתח תכונות חדשות, ולשפר את יעילות המערכת.', 
    en: 'For research and development: We use anonymous and aggregated data to improve our algorithms, develop new features, and enhance system efficiency.' 
  },

  'privacy.section3.title': { he: '3. שיתוף מידע עם צדדים שלישיים', en: '3. Information Sharing with Third Parties' },
  'privacy.section3.p1': { 
    he: 'אנו לא מוכרים, משכירים או משתפים מידע אישי של תלמידים או מורים עם צדדים שלישיים למטרות שיווקיות.', 
    en: 'We do not sell, rent, or share personal information of students or teachers with third parties for marketing purposes.' 
  },
  'privacy.section3.p2': { 
    he: 'אנו עשויים לשתף מידע עם ספקי שירותים (כגון ספקי ענן) הכפופים להסכמי סודיות ואבטחה מחמירים.', 
    en: 'We may share information with service providers (such as cloud providers) who are subject to strict confidentiality and security agreements.' 
  },
  'privacy.section3.p3': { 
    he: 'במקרה של דרישה חוקית, נשתף מידע כנדרש על פי חוק או צו בית משפט.', 
    en: 'In the event of a legal requirement, we will share information as required by law or court order.' 
  },

  'privacy.section4.title': { he: '4. אבטחת מידע', en: '4. Data Security' },
  'privacy.section4.p1': { 
    he: 'אנו מיישמים אמצעי אבטחה טכניים וארגוניים מתקדמים, כולל הצפנת נתונים במעבר ובמנוחה.', 
    en: 'We implement advanced technical and organizational security measures, including data encryption in transit and at rest.' 
  },
  'privacy.section4.p2': { 
    he: 'הגישה למידע אישי מוגבלת לעובדים מורשים בלבד על בסיס "צורך לדעת".', 
    en: 'Access to personal information is restricted to authorized employees only on a "need-to-know" basis.' 
  },
  'privacy.section4.p3': { 
    he: 'השרתים שלנו ממוקמים בישראל במתקנים מאובטחים העומדים בתקנים בינלאומיים.', 
    en: 'Our servers are located in Israel in secure facilities that meet international standards.' 
  },

  'privacy.section5.title': { he: '5. זכויות המשתמשים', en: '5. User Rights' },
  'privacy.section5.p1': { 
    he: 'לבתי ספר יש זכות לעיין, לתקן או למחוק את המידע של המוסד ושל תלמידיו.', 
    en: 'Schools have the right to review, correct, or delete their institution\'s and students\' information.' 
  },
  'privacy.section5.p2': { 
    he: 'הורים ותלמידים יכולים לפנות לבית הספר כדי לממש את זכויותיהם בנוגע למידע האישי שלהם.', 
    en: 'Parents and students can contact the school to exercise their rights regarding their personal information.' 
  },

  'privacy.section6.title': { he: '6. שמירת נתונים', en: '6. Data Retention' },
  'privacy.section6.p1': { 
    he: 'אנו שומרים מידע אישי כל עוד בית הספר לקוח פעיל שלנו, ולמשך תקופה נוספת כנדרש על פי חוק או לצורך התגוננות מפני תביעות.', 
    en: 'We retain personal information as long as the school is an active client, and for an additional period as required by law or for defense against legal claims.' 
  },

  'privacy.section7.title': { he: '7. קבצי Cookie', en: '7. Cookies' },
  'privacy.section7.p1': { 
    he: 'אנו משתמשים בקבצי Cookie חיוניים בלבד לצורך תפעול ואבטחת האתר. איננו משתמשים בקבצי Cookie למעקב או לפרסום.', 
    en: 'We use only essential cookies for the operation and security of the site. We do not use cookies for tracking or advertising.' 
  },

  'privacy.section8.title': { he: '8. עדכונים למדיניות', en: '8. Policy Updates' },
  'privacy.section8.p1': { 
    he: 'אנו עשויים לעדכן מדיניות זו מעת לעת. על שינויים מהותיים נודיע לבתי הספר באמצעות דוא"ל או דרך המערכת.', 
    en: 'We may update this policy from time to time. We will notify schools of material changes via email or through the system.' 
  },

  'privacy.contact.title': { he: 'יצירת קשר', en: 'Contact Us' },
  'privacy.contact.p1': { 
    he: 'לשאלות נוספות בנושא פרטיות, ניתן ליצור איתנו קשר בכתובת:', 
    en: 'For further questions about privacy, you can contact us at:' 
  },
  'privacy.contact.email': { he: 'contact@blabber.site', en: 'contact@blabber.site' },

  // Common
  'common.loading': { he: 'טוען...', en: 'Loading...' },
  'common.error': { he: 'שגיאה', en: 'Error' },
  'common.success': { he: 'הצלחה', en: 'Success' },
  'common.required': { he: 'שדה חובה', en: 'This field is required' },
  'common.emailRequired': { he: 'כתובת אימייל נדרשת', en: 'Email address required' },
  'common.emailInvalid': { he: 'כתובת אימייל לא תקינה', en: 'Invalid email address' },
  'common.phoneRequired': { he: 'מספר טלפון נדרש', en: 'Phone number required' },
  'common.phoneInvalid': { he: 'מספר טלפון לא תקין', en: 'Invalid phone number' },
  'common.back': { he: 'חזור', en: 'Back' },
  'common.next': { he: 'הבא', en: 'Next' },
  'common.previous': { he: 'הקודם', en: 'Previous' },
  'common.close': { he: 'סגור', en: 'Close' },
  'common.readMore': { he: 'קרא עוד', en: 'Read More' },
  'common.learnMore': { he: 'למד עוד', en: 'Learn More' },
  'common.optional': { he: 'אופציונלי', en: 'Optional' },
  'common.cancel': { he: 'ביטול', en: 'Cancel' },
  'common.save': { he: 'שמור', en: 'Save' },
  'common.edit': { he: 'ערוך', en: 'Edit' },
  'common.delete': { he: 'מחק', en: 'Delete' },
  'common.confirm': { he: 'אשר', en: 'Confirm' },
  
  // About page additions
  'about.stats.title': { he: 'ההשפעה שלנו במספרים', en: 'Our Impact in Numbers' },
  'about.technology.title': { he: 'הטכנולוגיה שלנו', en: 'Our Technology' },
  'about.technology.subtitle': { he: 'טכנולוגיה מתקדמת שנועדה להפוך כל שיעור לחוויה ייחודית.', en: 'Advanced technology designed to make every lesson a unique experience.' },
  
  // Technology Features
  'about.technology.ai.title': { he: 'בינה מלאכותית שיחתית', en: 'Conversational AI' },
  'about.technology.ai.description': { he: 'שיחות טבעיות ודינמיות שמתאימות את עצמן לכל תלמיד.', en: 'Natural, dynamic conversations that adapt to each student.' },
  'about.technology.audio.title': { he: 'ניתוח הגייה חכם', en: 'Smart Pronunciation Analysis' },
  'about.technology.audio.description': { he: 'משוב מיידי ומדויק לחיזוק הביטחון והשטף בדיבור.', en: 'Instant, precise feedback to build confidence and fluency in speaking.' },
  'about.technology.analytics.title': { he: 'תובנות מבוססות נתונים', en: 'Data-Driven Insights' },
  'about.technology.analytics.description': { he: 'מעקב אחר התקדמות אישית וזיהוי הזדמנויות לשיפור.', en: 'Track personal progress and identify opportunities for improvement.' },
  'about.technology.accessibility.title': { he: 'סביבה מכילה ונגישה', en: 'Inclusive & Accessible Environment' },
  'about.technology.accessibility.description': { he: 'מותאם לכלל הלומדים ומספק מרחב בטוח לתרגול.', en: 'Adapted for all learners, providing a safe space for practice.' },
}; 