import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Top Event Security Practices Every Planner Should Know - ForStackly Blog',
    title: 'Top Event Security Practices Every Planner Should Know',
    author: 'By Event Insights',
    date: 'January 20, 2024',
    readTime: '6 min read',
    categories: ['Event Security', 'Best Practices'],
    content: [
      'Security is one of the most important considerations for any successful event. From small gatherings to large conferences, ensuring the safety of attendees, staff, and assets should be a top priority for every event planner.',
      '1. Comprehensive Risk Assessment',
      'Begin by identifying potential risks—such as overcrowding, equipment failures, or emergency situations. A thorough risk assessment helps you prepare mitigation strategies before the event begins.',
      '2. Strong Access Control',
      'Use ID badges, wristbands, or digital tickets to control access. Limit backstage or restricted area entry to authorized personnel only.',
      '3. Visible Security Presence',
      'Security staff should be both approachable and visible. Their presence reassures attendees while acting as a deterrent against potential threats.',
      '4. Emergency Response Planning',
      'Have clear procedures for fire, medical emergencies, or evacuations. Ensure staff are trained and conduct drills if possible.',
      '5. Technology Integration',
      'Leverage surveillance cameras, metal detectors, and real-time monitoring tools. Technology can greatly enhance the ability to detect and respond to issues quickly.',
      'By prioritizing event security and integrating these practices into your planning, you create a safe and enjoyable environment for all participants. Remember—well-managed security doesn’t just protect, it also builds trust with your audience.'
    ],
    backButton: '← Back to Blog',
  },
  ar: {
    pageTitle: 'أفضل ممارسات أمن الفعاليات التي يجب أن يعرفها كل منظّم - مدونة فورستلي',
    title: 'أفضل ممارسات أمن الفعاليات التي يجب أن يعرفها كل منظّم',
    author: 'بواسطة رؤى الفعاليات',
    date: '20 يناير، 2024',
    readTime: '6 دقائق قراءة',
    categories: ['أمن الفعاليات', 'أفضل الممارسات'],
    content: [
      'الأمن من أهم الاعتبارات لإنجاح أي فعالية. من التجمعات الصغيرة إلى المؤتمرات الكبرى، يجب أن تكون سلامة الحضور والطاقم والأصول أولوية قصوى لكل منظّم فعالية.',
      '1. تقييم شامل للمخاطر',
      'ابدأ بتحديد المخاطر المحتملة مثل الاكتظاظ، الأعطال التقنية، أو حالات الطوارئ. يساعد التقييم الشامل على وضع خطط للتخفيف من المخاطر قبل بدء الفعالية.',
      '2. تحكم قوي بالدخول',
      'استخدم بطاقات هوية، أساور، أو تذاكر رقمية للتحكم بالدخول. قصر الدخول إلى المناطق المحظورة على الأشخاص المصرح لهم فقط.',
      '3. وجود أمني ظاهر',
      'يجب أن يكون فريق الأمن مرئيًا وسهل التواصل معه. وجودهم يطمئن الحضور ويعمل كرادع ضد التهديدات المحتملة.',
      '4. تخطيط الاستجابة للطوارئ',
      'إعداد إجراءات واضحة للحريق، الطوارئ الطبية، أو الإخلاء. ضمان تدريب الفرق وإجراء تدريبات عملية عند الإمكان.',
      '5. دمج التقنيات',
      'استخدام كاميرات المراقبة، أجهزة كشف المعادن، وأدوات المراقبة في الوقت الفعلي. يمكن للتكنولوجيا تعزيز القدرة على الكشف والاستجابة السريعة.',
      'بإعطاء الأولوية لأمن الفعاليات ودمج هذه الممارسات في التخطيط، تضمن بيئة آمنة وممتعة لكل المشاركين. تذكر - الأمن المنظم جيداً لا يحمي فقط بل يبني الثقة مع جمهورك.'
    ],
    backButton: '← العودة إلى المدونة',
  },
  he: {
    pageTitle: 'הטכניקות המובילות לאבטחת אירועים שכל מתכנן צריך לדעת - בלוג פורסטקליי',
    title: 'הטכניקות המובילות לאבטחת אירועים שכל מתכנן צריך לדעת',
    author: 'מאת תובנות אירועים',
    date: '20 בינואר 2024',
    readTime: '6 דקות קריאה',
    categories: ['אבטחת אירועים', 'שיטות מומלצות'],
    content: [
      'אבטחה היא אחד השיקולים החשובים ביותר להצלחת אירוע. מאירועים קטנים ועד כנסים גדולים, הבטחת בטיחות המשתתפים, הצוות והרכוש צריכה להיות עדיפות עליונה לכל מתכנן אירועים.',
      '1. הערכת סיכונים מקיפה',
      'התחל בזיהוי סיכונים פוטנציאליים – כמו צפיפות יתר, כשלים טכניים או מצבי חירום. הערכה מקיפה מסייעת לתכנן אסטרטגיות הפחתה טרם תחילת האירוע.',
      '2. בקרת גישה חזקה',
      'השתמש בכרטיסי זיהוי, צמידים או כרטיסים דיגיטליים לבקרת גישה. הגבל גישה לאזורי הבמה או אזורים מוגבלים רק לקהל מוסמך.',
      '3. נוכחות ביטחונית נראית לעין',
      'צוות הביטחון צריך להיות נגיש ונראה לעין. הנוכחות שלהם מרגיעה את המשתתפים ופועלת כהרתעה מפני איומים פוטנציאליים.',
      '4. תכנון תגובה למצבי חירום',
      'הכנת נהלים ברורים לכיבוי אש, חירום רפואי או פינוי. יש להבטיח שהצוות מאומן ומקיים תרגולים ככל האפשר.',
      '5. שילוב טכנולוגיות',
      'השתמש במצלמות אבטחה, גלאי מתכות וכלי ניטור בזמן אמת. טכנולוגיה יכולה לשפר מאוד את היכולת לאתר ולהגיב במהירות לבעיות.',
      'על ידי מתן עדיפות לאבטחת האירוע ושילוב שיטות אלו בתכנון, אתה יוצר סביבה בטוחה ומהנה לכל המשתתפים. זכור – אבטחה מנוהלת היטב לא רק מגינה, אלא גם בונה אמון עם הקהל שלך.'
    ],
    backButton: '← חזור לבלוג',
  }
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
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <motion.header
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: "40px" }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "var(--heading-color)",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            {t.title}
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              marginBottom: "20px",
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
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {t.categories.map((category, index) => (
              <span
                key={index}
                style={{
                  background: index === 0 ? "var(--primary-color)" : "var(--secondary-color)",
                  color: "white",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  marginRight: "8px",
                  marginBottom: "8px",
                  display: "inline-block"
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
            borderRadius: "12px",
            padding: "40px",
            boxShadow: "var(--shadow)",
            lineHeight: "1.8",
          }}
        >
          {t.content.map((para, idx) => (
            <p key={idx} style={{ marginBottom: "25px", fontSize: "1.1rem" }}>
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <a
            href="/blog"
            style={{
              display: "inline-block",
              background: "var(--primary-color)",
              color: "white",
              padding: "12px 30px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
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
