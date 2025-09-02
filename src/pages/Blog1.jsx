import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    title: 'The Future of Event Management in a Digital Era',
    author: 'By Admin',
    date: 'January 15, 2024',
    readTime: '6 min read',
    categoryPrimary: 'Event Management',
    categorySecondary: 'Digital Era',
    contentParagraphs: [
      `The events industry has undergone a massive shift in recent years. With the rise of digital tools, hybrid models, and data-driven experiences, event management is no longer just about organizing gatherings—it’s about creating meaningful, tech-enabled experiences for global audiences.`,
      `From virtual reality networking to AI-powered attendee engagement, technology has become the backbone of modern events. Event planners are now leveraging digital platforms to expand reach, personalize experiences, and collect valuable insights.`,
      `Hybrid events combining physical and virtual participation`,
      `AI-driven personalization for attendees`,
      `Sustainable and eco-friendly event practices`,
      `Data analytics to measure event impact`,
      `Immersive technologies like AR/VR`,
      `The future of event management is not just digital—it’s experiential. Organizers must adopt innovative tools while keeping the human connection at the center of every event. Success will depend on creating seamless, inclusive, and sustainable experiences that go beyond physical boundaries.`,
      `Those who embrace the digital era in event management will unlock new opportunities for engagement, growth, and long-term impact.`
    ],
    backButton: '← Back to Blog',
  },
  ar: {
    title: 'مستقبل إدارة الفعاليات في العصر الرقمي',
    author: 'بواسطة المسؤول',
    date: '15 يناير 2024',
    readTime: '6 دقائق قراءة',
    categoryPrimary: 'إدارة الفعاليات',
    categorySecondary: 'العصر الرقمي',
    contentParagraphs: [
      `شهدت صناعة الفعاليات تحولًا كبيرًا في السنوات الأخيرة. مع صعود الأدوات الرقمية، النماذج الهجينة، والتجارب المدفوعة بالبيانات، لم يعد إدارة الفعاليات مقتصرًا على تنظيم اللقاءات بل خلق تجارب تقنية وذات مغزى للجماهير العالمية.`,
      `من الشبكات بالواقع الافتراضي إلى استخدام الذكاء الاصطناعي لتعزيز تفاعل الحضور، أصبحت التكنولوجيا العمود الفقري للفعاليات الحديثة. يقوم منظمو الفعاليات الآن باستخدام المنصات الرقمية لتوسيع الوصول، تخصيص التجارب، وجمع رؤى قيمة.`,
      `فعاليات هجينة تجمع بين المشاركة الفعلية والافتراضية`,
      `تخصيص معتمد على الذكاء الاصطناعي للحضور`,
      `ممارسات فعالة بيئيًا ومستدامة`,
      `تحليلات بيانات لقياس تأثير الفعاليات`,
      `تكنولوجيات غامرة مثل الواقع المعزز/الافتراضي`,
      `مستقبل إدارة الفعاليات ليس فقط رقميًا بل تجريبيًا. يجب على المنظمين تبني أدوات مبتكرة مع الحفاظ على الاتصال الإنساني كركيزة لكل حدث. النجاح يعتمد على خلق تجارب سلسة، شاملة ومستدامة تتخطى الحدود المادية.`,
      `أولئك الذين يتبنون العصر الرقمي في إدارة الفعاليات سيفتحون فرصًا جديدة للمشاركة، النمو، والأثر طويل الأمد.`
    ],
    backButton: '← العودة إلى المدونة',
  },
  he: {
    title: 'עתיד ניהול האירועים בעידן הדיגיטלי',
    author: 'מאת המנהל',
    date: '15 בינואר 2024',
    readTime: '6 דקות קריאה',
    categoryPrimary: 'ניהול אירועים',
    categorySecondary: 'העידן הדיגיטלי',
    contentParagraphs: [
      `תעשיית האירועים עברה מהפכה בשנים האחרונות. עם עליית הכלים הדיגיטליים, דגמי היבריד ונתונים מבוססי חוויה, ניהול אירועים איננו רק ארגון מפגשים אלא יצירת חוויות טכנולוגיות משמעותיות לקהל גלובלי.`,
      `מרשתות מציאות מדומה ועד להעצמת מעורבות המשתתפים באמצעות בינה מלאכותית, טכנולוגיה הפכה לעמוד השדרה של אירועים מודרניים. מארגני אירועים מנצלים עכשיו פלטפורמות דיגיטליות להרחבת ההגעה, התאמת חוויות, ואיסוף תובנות חשובות.`,
      `אירועים היברידיים המשלבים השתתפות פיזית ווירטואלית`,
      `התאמה אישית מונעת בינה מלאכותית למשתתפים`,
      `נהלים בני קיימא וידידותיים לסביבה`,
      `ניתוחי נתונים להערכת השפעת האירוע`,
      `טכנולוגיות מושקעות כגון AR/VR`,
      `העתיד של ניהול האירועים הוא לא רק דיגיטלי אלא חווייתי. מארגנים חייבים לאמץ כלים חדשניים תוך שמירה על הקשר האנושי במרכז כל אירוע. ההצלחה תלוית יצירת חוויות חלקות, כוללניות ובר קיימא שמעבר לגבולות הפיזיים.`,
      `מי שיאמץ את העידן הדיגיטלי בניהול אירועים יפתח הזדמנויות חדשות למעורבות, צמיחה והשפעה ארוכת טווח.`
    ],
    backButton: '← חזור לבלוג',
  }
}

const Blog1 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  useEffect(() => {
    document.title = t.title;
  }, [t.title]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '120px 20px 60px',
        background: 'var(--bg-color)',
        minHeight: '100vh',
        color: 'var(--text-color)'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.header
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '40px' }}
        >
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--heading-color)',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            {t.title}
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginBottom: '20px'
          }}>
            <span>{t.author}</span>
            <span>•</span>
            <span>{t.date}</span>
            <span>•</span>
            <span>{t.readTime}</span>
          </div>

          <div style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              background: 'var(--primary-color)',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem'
            }}>
              {t.categoryPrimary}
            </span>
            <span style={{
              background: 'var(--secondary-color)',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem'
            }}>
              {t.categorySecondary}
            </span>
          </div>
        </motion.header>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: 'var(--card-bg)',
            borderRadius: '12px',
            padding: '40px',
            boxShadow: 'var(--shadow)',
            lineHeight: '1.8'
          }}
        >
          {t.contentParagraphs.map((para, i) => (
            <p key={i} style={{ marginBottom: '25px', fontSize: i === 2 ? '1.1rem' : '1rem' }}>
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: '40px',
            textAlign: 'center'
          }}
        >
          <a
            href="/blog"
            style={{
              display: 'inline-block',
              background: 'var(--primary-color)',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            {t.backButton}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog1;
