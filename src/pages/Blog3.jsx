import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Top Event Security Practices - Forsty Blog',
    title: 'Top Event Security Practices Every Planner Should Know',
    author: 'By Event Insights',
    date: 'January 20, 2024',
    readTime: '6 min read',
    categories: ['Event Security', 'Best Practices'],
    content: [
      'Security is one of the most important considerations at any event. From small gatherings to large conferences, ensuring safety of attendees, staff, and assets is paramount.',
      '1. Comprehensive Risk Assessment',
      'Identify potential risks such as overcrowding or emergencies. Full assessment helps prepare mitigation plans.',
      '2. Strong Access Control',
      'Use ID badges, wristbands, or tickets to regulate access. Restrict backstage areas to authorized personnel.',
      '3. Visible Security Presence',
      'Security staff should be approachable and visible, reassuring attendees and deterring threats.',
      '4. Emergency Response Planning',
      'Clear procedures for fire, medical emergencies, and evacuations. Staff should be trained and drills conducted.',
      '5. Technology Integration',
      'Utilize surveillance, metal detectors, and real-time monitoring for rapid response.',
      'Prioritizing security builds trust and ensures enjoyable, safe experiences.',
    ],
    backButton: '← Back to Blog',
  },
  ar: {
    pageTitle: 'أفضل ممارسات أمن الفعاليات - مدونة فورستي',
    title: 'أفضل ممارسات أمن الفعاليات التي يجب أن يعرفها كل منظّم',
    author: 'بواسطة رؤى الفعاليات',
    date: '٢٠ يناير ٢٠٢٤',
    readTime: '٦ دقائق قراءة',
    categories: ['أمن الفعاليات', 'أفضل الممارسات'],
    content: [
      'الأمن هو أحد أهم الاعتبارات في أي فعالية. من التجمعات الصغيرة إلى المؤتمرات الكبرى، ضمان سلامة الحضور والطاقم والمعدات أمر بالغ الأهمية.',
      '1. تقييم المخاطر الشامل',
      'تحديد المخاطر المحتملة مثل الاكتظاظ أو الطوارئ. التقييم الكامل يساعد على وضع خطط للتخفيف.',
      '2. تحكم قوي بالدخول',
      'استخدم بطاقات هوية أو أساور أو تذاكر للتحكم في الدخول. حظر المناطق الخلفية للمخولين.',
      '3. وجود أمني ظاهر',
      'يجب أن يكون طاقم الأمن سهل الوصول ومرئي لتعزيز الاطمئنان وصد التهديدات.',
      '4. تخطيط الاستجابة للطوارئ',
      'إجراءات واضحة للحريق والطوارئ الطبية والإخلاء. تدريب الطاقم وإجراء تدريبات.',
      '5. دمج التكنولوجيا',
      'استخدم المراقبة، كاشفات المعادن، وأدوات المراقبة لحركة سريعة.',
      'إعطاء الأولوية للأمن يبني الثقة ويضمن التجارب الآمنة والممتعة.',
    ],
    backButton: '← العودة إلى المدونة',
  },
  he: {
    pageTitle: 'טכניקות אבטחה מובילות לאירועים - בלוג פורסטי',
    title: 'טכניקות אבטחה מובילות שכל מתכנן צריך לדעת',
    author: 'מאת צוות תובנות אירועים',
    date: '20 בינואר 2024',
    readTime: '6 דקות קריאה',
    categories: ['אבטחת אירועים', 'שיטות מומלצות'],
    content: [
      'אבטחה היא אחד השיקולים החשובים בכל אירוע. מאסיפות קטנות ועד כנסים גדולים, שמירה על בטיחות המשתתפים, הצוות והרכוש היא חיונית.',
      '1. הערכת סיכונים מלאה',
      'זיהוי סיכונים כגון צפיפות יתר או מקרים חריגים. הערכה מלאה מסייעת בתכנון הפחתת הסיכונים.',
      '2. בקרת גישה חזקה',
      'השתמש בכרטיסי זיהוי, צמידים או כרטיסים דיגיטליים לסינון כניסה. הגבל את הגישה לאזורים מוגבלים.',
      '3. נוכחות ביטחונית בולטת',
      'כאשר צוות האבטחה זמין ונראה לעין, הוא מרגיע את המשתתפים ומרתיע איומים.',
      '4. תכנון תגובת חירום',
      'נהלים ברורים לאש, רפואי ופינוי. יש להכין את הצוות ולערוך תרגילים.',
      '5. שילוב טכנולוגיות',
      'השתמש במצלמות, גלאי מתכות ומעקב בזמן אמת לצורך תגובה מהירה.',
      'הקדשת תשומת לב לאבטחה בונה אמון ומבטיחה חוויות בטוחות ומהנות.',
    ],
    backButton: '← חזור לבלוג',
  },
};

const Blog3 = () => {
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
            {t.categories.map((category, i) => (
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
                {category}
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
          {t.content.map((para, index) => (
            <p
              key={index}
              style={{
                marginBottom: 25,
                fontSize: "1.1rem",
                whiteSpace: "pre-line",
              }}
            >
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

export default Blog3;
