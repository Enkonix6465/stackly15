import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Scaling Event Management: From Small Gatherings to Mega Conferences - ForStackly Blog',
    title: 'Scaling Event Management: From Small Gatherings to Mega Conferences',
    author: 'By Event Strategy Team',
    date: 'March 10, 2024',
    readTime: '7 min read',
    categories: ['Event Management', 'Scaling', 'Conferences'],
    content: [
      'Event management today spans from intimate workshops to global-scale conferences. As audiences grow and expectations rise, organizers must adapt strategies, tools, and workflows to deliver experiences that scale without sacrificing quality.',
      '1. Managing Small Gatherings',
      'Smaller events thrive on personalization and close interaction. With limited guests, organizers can focus on curated agendas, tailored networking, and creating tight-knit communities.',
      '2. Scaling Up for Large Events',
      'As events scale into the hundreds or thousands, technology becomes essential. From ticketing platforms to mobile apps, automation reduces complexity and ensures smooth operations across logistics, scheduling, and registration.',
      '3. Technology as a Growth Multiplier',
      'Scalable event tech platforms offer centralized dashboards for organizers, real-time analytics, and AI-powered recommendations. This ensures consistency while allowing events to handle drastically different audience sizes.',
      '4. Logistics and Operations',
      'Large-scale events introduce complexities in crowd control, vendor coordination, and on-site security. Strategic planning, venue partnerships, and scalable staffing solutions are crucial for maintaining guest satisfaction.',
      'Looking Ahead',
      'Event management is no longer one-size-fits-all. Organizers who embrace scalability—by balancing the intimacy of small gatherings with the vast reach of mega conferences—will succeed in delivering impactful experiences at every level.'
    ],
    backButton: '← Back to Blog',
  },
  ar: {
    pageTitle: 'توسيع إدارة الفعاليات: من اللقاءات الصغيرة إلى المؤتمرات الكبرى - مدونة فورستلي',
    title: 'توسيع إدارة الفعاليات: من اللقاءات الصغيرة إلى المؤتمرات الكبرى',
    author: 'بواسطة فريق استراتيجية الفعاليات',
    date: '10 مارس 2024',
    readTime: '7 دقائق قراءة',
    categories: ['إدارة الفعاليات', 'التوسع', 'المؤتمرات'],
    content: [
      'تمتد إدارة الفعاليات اليوم من ورش العمل الحميمة إلى المؤتمرات على نطاق عالمي. مع زيادة الجمهور وارتفاع التوقعات، يجب على المنظمين تكييف الاستراتيجيات والأدوات وسير العمل لتقديم تجارب تتسع دون التضحية بالجودة.',
      '1. إدارة اللقاءات الصغيرة',
      'تزدهر الفعاليات الصغيرة من خلال التخصيص والتفاعل الوثيق. مع عدد محدود من الضيوف، يمكن للمنظمين التركيز على جداول مخصصة، وتواصل شخصي، وخلق مجتمعات مترابطة.',
      '2. التوسع للفعاليات الكبيرة',
      'مع توسع الفعاليات إلى المئات أو الآلاف، تصبح التكنولوجيا ضرورية. بدءًا من منصات التذاكر إلى التطبيقات المحمولة، تقلل الأتمتة التعقيد وتضمن سير العمليات بسلاسة في اللوجستيات، والجدولة، والتسجيل.',
      '3. التكنولوجيا كمضاعف للنمو',
      'توفر منصات التكنولوجيا القابلة للتوسع لوحات تحكم مركزية للمنظمين، تحليلات لحظية، وتوصيات معتمدة على الذكاء الاصطناعي. هذا يضمن الاتساق مع القدرة على إدارة جمهور بأحجام مختلفة تمامًا.',
      '4. اللوجستيات والعمليات',
      'تقدم الفعاليات الكبيرة تعقيدات في التحكم بالجماهير، تنسيق البائعين، والأمن في الموقع. التخطيط الاستراتيجي، شراكات الأماكن، وحلول التوظيف القابلة للتوسع ضرورية للحفاظ على رضا الضيوف.',
      'نظرة مستقبلية',
      'لم يعد إدارة الفعاليات أمرًا موحدًا لكل الحالات. سيفلح المنظمون الذين يتبنون القابلية للتوسع بالتوازن بين الحميمة في اللقاءات الصغيرة والانتشار الواسع للمؤتمرات الكبرى في تقديم تجارب ذات تأثير على كل المستويات.'
    ],
    backButton: '← العودة إلى المدونة',
  },
  he: {
    pageTitle: 'הגדלת ניהול אירועים: מפגישות קטנות לכנסים ענקיים - בלוג פורסטלי',
    title: 'הגדלת ניהול אירועים: מפגישות קטנות לכנסים ענקיים',
    author: 'מאת צוות אסטרטגיית אירועים',
    date: '10 במרץ 2024',
    readTime: '7 דקות קריאה',
    categories: ['ניהול אירועים', 'הגדלה', 'כנסים'],
    content: [
      'ניהול אירועים כיום נע בין סדנאות אינטימיות לכנסים בקנה מידה עולמי. ככל שהקהל גדל והציפיות עולות, המארגנים חייבים להתאים אסטרטגיות, כלים ותהליכי עבודה כדי לספק חוויות שיכולות להתרחב ללא פגיעה באיכות.',
      '1. ניהול מפגשים קטנים',
      'אירועים קטנים מתמקדים בהתאמה אישית ובאינטראקציה קרובה. עם אורחים מוגבלים, המארגנים יכולים להתמקד בסדר יום מובנה, נטוורקינג ייחודי ויצירת קהילות צמודות.',
      '2. התרחבות לאירועים גדולים',
      'כשהאירועים מתרחבים למאות ואלפי משתתפים, הטכנולוגיה הופכת להיות הכרחית. מפלטפורמות כרטיסים ועד אפליקציות ניידות, האוטומציה מפחיתה מורכבות ומבטיחה פעולה חלקה בלוגיסטיקה, תזמון ורישום.',
      '3. הטכנולוגיה כמכפיל צמיחה',
      'פלטפורמות טכנולוגיות הניתנות להרחבה מציעות לוחות בקרה מרכזיים, ניתוח בזמן אמת והמלצות מבוססות AI. זה מבטיח עקביות תוך התמודדות עם קהלים בגדלים שונים.',
      '4. לוגיסטיקה ותפעול',
      'אירועים בקנה מידה גדול יוצרים מורכבויות בשליטה בקהל, תיאום ספקים ואבטחה במקום. תכנון אסטרטגי, שותפויות עם מקומות ופיתרונות כוח אדם ניתנים להרחבה חיוניים לשמירה על שביעות רצון המשתתפים.',
      'המבט קדימה',
      'ניהול אירועים אינו עוד גודל אחיד. מארגנים המאמצים יכולת להרחיב — באמצעות איזון בין אינטימיות המפגשים הקטנים לבין טווח ההגעה הרחב של הכנסים הגדולים — יצליחו לספק חוויות משמעותיות בכל רמה.'
    ],
    backButton: '← חזור לבלוג',
  }
};

const Blog4 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  useEffect(() => {
    document.title = t.pageTitle;
  }, [t.pageTitle]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "120px 20px 60px",
        background: "var(--bg-color)",
        minHeight: "100vh",
        color: "var(--text-color)",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.header
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: 40 }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "var(--heading-color)",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            {t.title}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              marginBottom: 20,
            }}
          >
            <span>{t.author}</span>
            <span>•</span>
            <span>{t.date}</span>
            <span>•</span>
            <span>{t.readTime}</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {t.categories.map((cat, i) => (
              <span
                key={i}
                style={{
                  background:
                    i === 0
                      ? "var(--primary-color)"
                      : "var(--secondary-color)",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: 20,
                  fontSize: "0.8rem",
                  marginRight: 8,
                  marginBottom: 8,
                  display: "inline-block",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.header>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: "var(--card-bg)",
            borderRadius: 12,
            padding: 40,
            boxShadow: "var(--shadow)",
            lineHeight: 1.8,
          }}
        >
          {t.content.map((para, idx) => (
            <p key={idx} style={{ marginBottom: 25, fontSize: "1.1rem" }}>
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginTop: 40, textAlign: "center" }}
        >
          <a
            href="/blog"
            style={{
              display: "inline-block",
              background: "var(--primary-color)",
              color: "white",
              padding: "12px 30px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s ease",
            }}
          >
            {t.backButton}
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog4;
