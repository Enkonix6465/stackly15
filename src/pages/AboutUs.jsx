import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaEye, FaBullseye, FaUsers, FaAward, FaHandshake,
  FaLinkedin, FaTwitter, FaGithub, FaArrowRight
} from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'About Us - DreamNest Real Estate',
    heroTitle: 'About Us',
    heroParagraph: 'Our mission is rooted in trust, transparency, and delivering value at every step of your property journey.',
    reachOut: 'Reach Out Today',
    storyTitle: 'Our Story',
    storyParagraphs: [
      'DreamNest was born from a simple idea: finding a home should feel as welcoming, honest, and rewarding as living in one. Since our beginning in 2015, we’ve helped thousands—from first-time buyers to seasoned investors—navigate clarity in the complex world of real estate.',
      'Our journey started with a commitment to eliminate the stress from property decisions. We put transparency and expert guidance at the heart of every relationship, so you can focus on what truly matters—discovering the space where your future unfolds.',
      'Whether you’re buying, selling, or investing, each step is supported by data-driven insight, personalized service, and a genuine care for your aspirations. Today, DreamNest serves communities across India with an unwavering promise: to make every move effortless, memorable, and truly yours.'
    ],
    visionTitle: 'Our Vision',
    visionDescription: 'To be the most trusted real estate partner—blending technology and human insight to make property moves effortless.',
    missionTitle: 'Our Mission',
    missionDescription: 'To help people buy, sell, rent, and invest with confidence through transparent guidance, strong negotiation, and reliable after-sales support.',
    valuesTitle: 'Our Core Values',
    valuesSubtitle: 'The principles that shape every deal',
    values: [
      { icon: FaBullseye, title: 'Transparency', description: 'Clear pricing, honest advisories, and total openness at every step.' },
      { icon: FaHandshake, title: 'Client-First', description: 'We tailor every search and negotiation around your goals.' },
      { icon: FaUsers, title: 'Community', description: 'We connect people with homes and neighborhoods that truly fit their life.' },
      { icon: FaAward, title: 'Excellence', description: 'Top-tier service from first viewing to final closing and beyond.' },
    ],
    teamTitle: 'Meet Our Team',
    teamSubtitle: 'Advisors committed to your property journey',
    team: [
      {
        name: 'Aarav Sharma',
        role: 'Founder & CEO',
        bio: 'Two decades in residential and commercial real estate across major Indian cities.',
        image: 'images/professional6.jpg',
      },
      {
        name: 'Priya Mehta',
        role: 'Head of Sales',
        bio: 'Skilled negotiator focused on getting buyers the right homes at the right price.',
        image: 'images/professional4.jpg',
      },
      {
        name: 'Rahul Verma',
        role: 'Operations Director',
        bio: 'Leads property onboarding, inspections, and closing coordination for a smooth journey.',
        image: 'images/professional5.jpg',
      },
      {
        name: 'Ananya Iyer',
        role: 'Marketing Head',
        bio: 'Showcases listings with data-backed market insights and digital-first storytelling.',
        image: 'images/professional3.jpg',
      }
    ],
    milestonesTitle: 'Our Journey',
    milestonesSubtitle: 'Key milestones in our growth',
    milestones: [
      { year: '2015', event: 'DreamNest Founded', description: 'Started to make buying, selling, and renting truly transparent.' },
      { year: '2017', event: '100 Families Housed', description: 'Helped our first 100 families find homes they love.' },
      { year: '2019', event: 'Luxury & Villas', description: 'Expanded into premium apartments, villas, and gated communities.' },
      { year: '2021', event: 'Pan-India Presence', description: 'Operations across multiple metros and emerging realty hubs.' },
      { year: '2023', event: 'Smart Tools Launch', description: 'Introduced AI search, price trends, and ROI calculators.' },
    ],
    ctaTitle: 'Ready to Transform Your Business?',
    ctaDescription: 'Get started today with a free consultation and discover how we can help you achieve your goals.',
    ctaBtnStart: 'Start Your Journey',
    ctaBtnLearn: 'Learn More About Us',
  },
  ar: {
    pageTitle: 'معلومات عنا - دريم نيست للعقارات',
    heroTitle: 'معلومات عنا',
    heroParagraph: 'مهمتنا تعتمد على الثقة والشفافية وتقديم القيمة في كل خطوة من رحلتك العقارية.',
    reachOut: 'تواصل معنا اليوم',
    storyTitle: 'قصتنا',
    storyParagraphs: [
      'تأسست دريم نيست من فكرة بسيطة: العثور على منزل يجب أن يكون مرحبًا وواضحًا ومجزياً مثل العيش فيه. منذ عام 2015، ساعدنا آلاف الأفراد - من المشترين لأول مرة إلى المستثمرين المتمرسين - على فهم سوق العقارات.',
      'بدأت رحلتنا بالتزام إزالة التوتر من قرارات العقارات. وضعنا الشفافية والخبرة في قلب كل علاقة، لتتمكن من التركيز على ما يهم - العثور على مساحتك المستقبلية.',
      'سواء كنت تشتري أو تبيع أو تستثمر، يدعم كل خطوة رؤى مستندة إلى البيانات، وخدمة شخصية، واهتمام حقيقي بطموحاتك. اليوم، تخدم دريم نيست مجتمعات في جميع أنحاء الهند مع وعد لا يتزعزع: جعل كل خطوة سهلة ومميزة وخاصة.'
    ],
    visionTitle: 'رؤيتنا',
    visionDescription: 'أن نكون الشريك العقاري الأكثر ثقة - مع مزج التكنولوجيا والبصيرة البشرية لتسهيل كل خطوة عقارية.',
    missionTitle: 'مهمتنا',
    missionDescription: 'مساعدتك على الشراء والبيع والتأجير والاستثمار بثقة من خلال التوجيه الواضح، والتفاوض القوي، والدعم الممتاز بعد البيع.',
    valuesTitle: 'قيمنا الأساسية',
    valuesSubtitle: 'المبادئ التي تشكل كل صفقة',
    values: [
      { icon: FaBullseye, title: 'الشفافية', description: 'تسعير واضح، نصائح صادقة وانفتاح تام في كل خطوة.' },
      { icon: FaHandshake, title: 'العميل أولاً', description: 'نخصص كل بحث وتفاوض وفقًا لأهدافك.' },
      { icon: FaUsers, title: 'المجتمع', description: 'نربط الناس بالمنازل والأحياء التي تناسب حياتهم.' },
      { icon: FaAward, title: 'التميز', description: 'خدمة عالية الجودة من العرض الأول وحتى الإغلاق النهائي.' },
    ],
    teamTitle: 'تعرف على فريقنا',
    teamSubtitle: 'المستشارون المكرسون لرحلة ممتلكاتك',
    team: [
      {
        name: 'آاراف شارما',
        role: 'المؤسس والرئيس التنفيذي',
        bio: 'عشرون عامًا في العقارات السكنية والتجارية عبر مدن الهند الكبرى.',
        image: 'images/professional6.jpg',
      },
      {
        name: 'بريا ميهتا',
        role: 'رئيسة قسم المبيعات',
        bio: 'مفاوضة ماهرة تركز على حصول المشترين على البيوت المناسبة بالسعر المناسب.',
        image: 'images/professional4.jpg',
      },
      {
        name: 'راهول فيرما',
        role: 'مدير العمليات',
        bio: 'يقود عملية إدخال العقارات، والفحص، والتنسيق للإغلاق لتجربة سلسة.',
        image: 'images/professional5.jpg',
      },
      {
        name: 'أنانيا إيير',
        role: 'رئيسة التسويق',
        bio: 'تعرض القوائم بخبرة قائمة على البيانات ورواية القصص الرقمية أولًا.',
        image: 'images/professional3.jpg',
      }
    ],
    milestonesTitle: 'رحلتنا',
    milestonesSubtitle: 'أهم الإنجازات في نمونا',
    milestones: [
      { year: '2015', event: 'تأسيس دريم نيست', description: 'بدأنا لجعل الشراء والبيع والتأجير واضحًا.' },
      { year: '2017', event: 'مئة عائلة حصلت على منزل', description: 'ساعدنا أول 100 عائلة في العثور على منازلهم.' },
      { year: '2019', event: 'الفيلات والفخامة', description: 'قمنا بتوسيع الخدمة إلى الشقق الفاخرة والفيلات والمجمعات المغلقة.' },
      { year: '2021', event: 'حضور على مستوى الهند', description: 'عمليات في عدة ميتروهات ومراكز عقارية ناشئة.' },
      { year: '2023', event: 'إطلاق الأدوات الذكية', description: 'أدخلنا البحث الآلي وحاسبات العوائد الاستثمارية.' },
    ],
    ctaTitle: 'هل أنت مستعد لتحويل عملك؟',
    ctaDescription: 'ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.',
    ctaBtnStart: 'ابدأ رحلتك',
    ctaBtnLearn: 'تعرف علينا أكثر',
  },
  he: {
    pageTitle: 'אודותינו - DreamNest נדל"ן',
    heroTitle: 'אודותינו',
    heroParagraph: 'המשימה שלנו מושרשת באמון, שקיפות ומתן ערך בכל שלב במסע הנדל"ן שלך.',
    reachOut: 'צור קשר היום',
    storyTitle: 'הסיפור שלנו',
    storyParagraphs: [
      'DreamNest נוסדה מתוך רעיון פשוט: למצוא בית צריך להרגיש כמו שהיית גר בו באמת. מאז 2015, עזרנו לאלפי אנשים - מקונים ראשוניים ועד משקיעים מנוסים - לנווט בשוק הנדל"ן המורכב.',
      'המסע שלנו התחיל עם מחויבות להקל על התהליך ולקבל החלטות בלי לחץ. שמנו את השקיפות וההנחיה המומחית במרכז כל מערכת יחסים.',
      'בין אם אתה קונה, מוכר או משקיע, כל שלב מלווה בתובנות מונחות נתונים, שירות מותאם ואכפתיות אמיתית. כיום, DreamNest משרתת קהילות ברחבי הודו עם הבטחה ברורה: להפוך כל מעבר לקל, בלתי נשכח ואישי.'
    ],
    visionTitle: 'החזון שלנו',
    visionDescription: 'להיות השותף האיכותי ביותר בנדל"ן, המשולב בטכנולוגיה ובתובנות אנושיות להקלה על התהליך.',
    missionTitle: 'המשימה שלנו',
    missionDescription: 'לעזור לאנשים לקנות, למכור, לשכור ולהשקיע בביטחון עם הדרכה שקופה, ניהול מו"מ חזק ותמיכה אמינה לאחר המכירה.',
    valuesTitle: 'ערכי הליבה שלנו',
    valuesSubtitle: 'העקרונות שמעצבים כל עסקה',
    values: [
      { icon: FaBullseye, title: 'שקיפות', description: 'תמחור ברור, ייעוץ כנה ופתיחות מלאה בכל שלב.' },
      { icon: FaHandshake, title: 'הלקוח קודם כל', description: 'אנחנו מתאימים כל חיפוש ומשא ומתן למטרות שלך.' },
      { icon: FaUsers, title: 'קהילה', description: 'אנחנו מחברים אנשים לבתים וקהילות שמתאימות לחייהם.' },
      { icon: FaAward, title: 'מצוינות', description: 'שירות ברמה הגבוהה ביותר מהצפייה הראשונה ועד הסגירה הסופית.' },
    ],
    teamTitle: 'הכירו את הצוות שלנו',
    teamSubtitle: 'יועצים שמוקדשים למסע הנדל"ן שלכם',
    team: [
      {
        name: 'אאראב שרמה',
        role: 'מייסד ומנכ"ל',
        bio: 'שני עשורים בנדל"ן למגורים ומסחר בערי הודו המרכזיות.',
        image: 'images/professional6.jpg',
      },
      {
        name: 'פריה מהטה',
        role: 'ראש מחלקת מכירות',
        bio: 'מנהלת מו"מ מוכשרת המתמקדת בהשגת הבית הנכון במחיר הנכון.',
        image: 'images/professional4.jpg',
      },
      {
        name: 'רהול ורמה',
        role: 'מנהל תפעול',
        bio: 'מוביל את שילוב הנכסים, הבדיקות והתיאום לסגירה לחוויה חלקה.',
        image: 'images/professional5.jpg',
      },
      {
        name: 'אנניה אייר',
        role: 'ראש מחלקת שיווק',
        bio: 'מציגה נכסים בתובנות שוק מבוססות נתונים וסיפורי דיגיטל.',
        image: 'images/professional3.jpg',
      }
    ],
    milestonesTitle: 'המסע שלנו',
    milestonesSubtitle: 'אבני דרך מרכזיות בצמיחתנו',
    milestones: [
      { year: '2015', event: 'הקמת דרימנסט', description: 'התחלנו לעשות את קניית, מכירת והשכרת נכסים לשקופים באמת.' },
      { year: '2017', event: '100 משפחות התיישבו', description: 'עזרתנו ל-100 משפחות הראשונות למצוא בתי חלומותיהן.' },
      { year: '2019', event: 'דירות יוקרה ווילות', description: 'התרחבנו לדירות פרימיום, וילות וקהילות סגורות.' },
      { year: '2021', event: 'נוכחות בכל הודו', description: 'פעילות במטרו ובמרכזי נדל"ן מתפתחים.' },
      { year: '2023', event: 'השקת כלים חכמים', description: 'הכנסנו חיפוש עם בינה מלאכותית ומחשבי החזר השקעה.' }
    ],
    ctaTitle: 'מוכנים לשנות את העסק שלכם?',
    ctaDescription: 'התחילו היום עם ייעוץ חינם וגלו כיצד נוכל לעזור לכם להשיג את היעדים שלכם.',
    ctaBtnStart: 'התחילו את המסע שלכם',
    ctaBtnLearn: 'למדו עוד עלינו',
  }
};

const AboutUs = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  useEffect(() => {
    document.title = t.pageTitle;
  }, [t.pageTitle]);

  const values = t.values;
  const milestones = t.milestones;
  const team = t.team;

  const isRTL = language === "ar" || language === "he";

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src="images/video11.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">{t.heroTitle}</h1>
            <p className="hero-paragraph animate-fade-up">{t.heroParagraph}</p>
            <Link to="/contact" className="hero-button animate-fade-up-delayed">{t.reachOut}</Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section full-width">
        <div className="grid-2">
          <motion.div className="story-content" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2>{t.storyTitle}</h2>
            {t.storyParagraphs.map((para, idx) => <p key={idx}>{para}</p>)}
          </motion.div>
          <motion.div className="story-visual" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="story-image">
              <img src="images/about1.jpg" alt="Handshake at a new home" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission full-width">
        <div className="grid-2">
          <motion.div className="vision-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="card-header">
              <FaEye className="card-icon" />
              <h3>{t.visionTitle}</h3>
            </div>
            <p>{t.visionDescription}</p>
          </motion.div>
          <motion.div className="mission-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <div className="card-header">
              <FaBullseye className="card-icon" />
              <h3>{t.missionTitle}</h3>
            </div>
            <p>{t.missionDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section full-width">
        <motion.div className="section-header text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2>{t.valuesTitle}</h2>
          <p>{t.valuesSubtitle}</p>
        </motion.div>
        <div className="values-grid">
          {values.map(({ icon: Icon, title, description }, idx) => (
            <motion.div key={idx} className="value-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10 }}>
              <Icon className="value-icon" />
              <h4>{title}</h4>
              <p>{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section full-width">
        <motion.div className="section-header text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2>{t.teamTitle}</h2>
          <p>{t.teamSubtitle}</p>
        </motion.div>
        <div className="team-grid">
          {team.map(({ name, role, bio, image }, idx) => (
            <motion.div key={idx} className="team-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10 }}>
              <div className="team-image">
                <img src={image} alt={name} />
              </div>
              <div className="team-info">
                <h4>{name}</h4>
                <p className="team-role">{role}</p>
                <p className="team-bio">{bio}</p>
                <div className="team-social">
                  <a href="https://www.linkedin.com/" aria-label="LinkedIn"><FaLinkedin /></a>
                  <a href="https://x.com/login" aria-label="Twitter"><FaTwitter /></a>
                  <a href="https://github.com/" aria-label="GitHub"><FaGithub /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section - Zigzag in all languages */}
      <section className="section timeline-section full-width">
        <motion.div className="section-header text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2>{t.milestonesTitle}</h2>
          <p>{t.milestonesSubtitle}</p>
        </motion.div>
       <div className="timeline" dir="ltr">
  {milestones.map(({ year, event, description }, idx) => {
    // Zigzag logic (unchanged)
    const side = isRTL ? (idx % 2 === 0 ? "right" : "left") : (idx % 2 === 0 ? "left" : "right");
    return (
      <motion.div
        key={idx}
        className={`timeline-item ${side}`}
        initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: idx * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="timeline-content" dir={isRTL ? "rtl" : "ltr"}>
          <div className="timeline-year">{year}</div>
          <h4>{event}</h4>
          <p>{description}</p>
        </div>
      </motion.div>
    );
  })}
</div>

      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay">
          <div className="container">
            <motion.div className="cta-content text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaDescription}</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">{t.ctaBtnStart} <FaArrowRight /></Link>
                <Link to="/about" className="btn btn-outline btn-large">{t.ctaBtnLearn}</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
        <style jsx>{`
          /* ===== Base & Utilities ===== */
          .full-width { width: 100%; }
          .text-center { text-align: center; }
          .about-page { padding-top: 80px; background: var(--page-bg, #fff); }
          .section { padding: 80px 24px; }

          .home-page {
            padding-top: 80px;
          }

        .hero-section {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-bg-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   /* ensures vertical centering inside overlay */
    text-align: center;
    color: #fff;
    max-width: 800px;
    z-index: 2;
    gap: 28px; /* space between title, text, and button */
  }

  .hero-title {
    color: #fff; /* ✅ force white text so it’s visible on dark video background in light mode */
    font-size: 2.8rem;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 0;
    opacity: 0;
    animation: slideIn 1s ease-out forwards 0.5s;
  }


  .hero-paragraph {
    font-size: 1.25rem;
    margin: 0;
    opacity: 0;
    animation: fadeUp 1s ease-out forwards 1s;
  }

  .hero-button {
    margin-top: 0;
    padding: 14px 36px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    background-color: #224DB7;
    border-radius: 10px;
    text-decoration: none;
    border: none;
    transition: background-color 0.3s, transform 0.3s;
    opacity: 0;
    animation: fadeUp 1s ease-out forwards 1.5s;
  }

  .hero-button:hover {
    background-color: #000;
    transform: scale(1.05);
  }

  /* Responsive adjustments */
  @media (max-width: 700px) {
    .hero-content {
      max-width: 95vw;
      padding: 0 10px;
      gap: 18px;
    }
    .hero-title {
      font-size: 2rem;
    }
    .hero-paragraph {
      font-size: 1rem;
    }
    .hero-button {
      font-size: 1rem;
    }
  }

  /* Animations */
  @keyframes slideIn {
    0% { opacity: 0; transform: translateY(-20px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(20px);}
    100% { opacity: 1; transform: translateY(0);}
  }

          .hero-text h1 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 20px;
            color: white;
          }

          .gradient-text {
            background: linear-gradient(45deg, #ffd700, #ff6b6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .hero-text p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin-bottom: 30px;
            opacity: 0.9;
          }

          .hero-buttons {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }

          .hero-visual {
            position: relative;
          }

          .hero-image {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            border-radius: 200px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .hero-image img {
            width: 100%;
            height: 400px;
            object-fit: cover;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .card-icon {
            font-size: 2rem;
            color: var(--primary-color);
          }

          .card-content h4 {
            color: var(--heading-color);
            margin: 0 0 5px 0;
            font-size: 1rem;
          }

          .card-content p {
            color: var(--text-muted);
            margin: 0;
            font-size: 0.9rem;
          }
         @media (max-width: 480px) {
              html, body, #root, .home-page, .aboutit-section, .aboutit-grid, .hero-section, .hero-overlay {
                width: 100vw !important;
                max-width: 100vw !important;
                overflow-x: hidden !important;
                margin: 0 !important;
                padding: 0 !important;
                box-sizing: border-box !important;
              }
              .hero-title, .hero-paragraph, .hero-button { margin-right: 0 !important; }
              header { left: 0; right: 0; width: 100vw !important; max-width: 100vw !important; }
    html, body, #root, .home-page, .aboutit-section, .aboutit-grid, .hero-section, .hero-overlay {
      width: 100vw !important;
      max-width: 100vw !important;
      overflow-x: hidden !important;
      margin: 0 !important;
      padding: 0 !important;
      box-sizing: border-box !important;
    }
    .hero-title, .hero-paragraph, .hero-button { margin-right: 0 !important; }
    header { left: 0; right: 0; width: 100vw !important; max-width: 100vw !important; }
  }



        /* ===== Two Column Grid (equal height) ===== */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    gap: 48px;
    background: var(--card-bg);              /* Card background for both themes */
    border-radius: 24px;
    box-shadow: var(--shadow);               /* Soft shadow for premium look */
    padding: 0 40px;
    margin-bottom: 40px;
  }

  .story-section {
    background: var(--card-bg);           /* Uses your theme variable *
    box-shadow: var(--shadow);
    padding: 0 0;
    margin: 0 auto 56px auto;
    max-width: 1600px;                    /* Optional: constrain max width */
    transition: background 0.3s, color 0.3s;
  }

  .story-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    gap: 28px;
    padding-right: 20px;
  }

  .story-content h2 {
    font-size: 2.4rem;
    color: var(--heading-color);
    margin-bottom: 18px;
    font-weight: 800;
    line-height: 1.15;
  }

  .story-content p {
    font-size: 1.15rem;
    color: var(--text-color);
    line-height: 1.8;
    margin-bottom: 0;
    max-width: 560px;
  }

  .story-visual {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-image {
    width: 100%;
    min-height: 500px;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: var(--shadow-hover);
    background: var(--sidebar-bg);            /* subtle background for image area in both themes */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .story-image img {
    width: 100%;
    height: 520px;
    object-fit: cover;
    display: block;
    border-radius: 18px;
  }

  /* Responsive: stack columns on tablet/mobile */
  @media (max-width: 1024px) {
    .grid-2 {
      grid-template-columns: 1fr;
      padding: 32px 14px;
      min-height: unset;
      border-radius: 16px;
    }
    .story-content {
      padding-right: 0;
    }
    .story-image {
      min-height: 340px;
      margin-top: 24px;
    }
  }
  @media (max-width: 768px) {
    .story-content h2 { font-size: 1.7rem; }
    .story-content p { font-size: 1rem; }
    .story-image { min-height: 200px; }
  }


  /* ===Vission Section (Theme-Based) ===== */
:root {
  --card-bg: #ffffff;
  --card-text: #111827;
  --card-radius: 18px;
  --card-padding: 1.8rem;
  --card-shadow: 0 4px 10px rgba(0,0,0,0.12);
  --card-hover-shadow: 0 6px 18px rgba(0,0,0,0.18);

  --icon-size: 60px;
  --icon-color: #ffffff;
  --vision-bg: #3b82f6;   /* blue */
  --mission-bg: #10b981;  /* green */
}

[data-theme="dark"] {
  --card-bg: #1e1e1e;
  --card-text: #f3f4f6;
  --card-shadow: 0 4px 14px rgba(0,0,0,0.3);
  --card-hover-shadow: 0 6px 20px rgba(0,0,0,0.45);

  --vision-bg: #2563eb;
  --mission-bg: #059669;
}

/* Grid wrapper */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

/* Vision & Mission Section Wrapper */
.vision-mission-section {
  margin: 0;        /* remove extra margin */
  padding: 0 0;  /* adjust vertical spacing */
}


/* Card */
.vision-card,
.mission-card {
  background: var(--card-bg);
  border-radius: var(--card-radius);
  padding: var(--card-padding);
  text-align: center;
  color: var(--card-text);
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.vision-card:hover,
.mission-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--card-hover-shadow);
}

/* Header */
.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
}

/* Icon */
.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-size);
  height: var(--icon-size);
  border-radius: 50%;
  font-size: 1.8rem;
  color: var(--icon-color);
}

.vision-card .card-icon {
  background: var(--vision-bg);
}

.mission-card .card-icon {
  background: var(--mission-bg);
}

/* Title */
.card-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

/* Responsive */
@media (max-width: 600px) {
  .cards-grid {
    gap: 1.5rem;
  }
  .card-header h3 {
    font-size: 1.3rem;
  }
  .card-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
}




          /* ===== Values Section (Theme-Based) ===== */
  .values-section {
    background: var(--card-bg);/* subtle background distinct from cards */
    padding: 80px 24px;
  }

  .section-header h2 {
    margin: 0 0 6px;
    font-size: 2rem;
    color: var(--heading-color);         /* theme heading color */
  }

  .section-header p {
    color: var(--text-color);            /* theme text color */
    margin: 0 0 24px;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 28px;
  }

  .value-card {
    background: var(--card-bg);          /* theme card background */
    padding: 28px;
    border-radius: 16px;
    text-align: center;
    box-shadow: var(--shadow);           /* theme shadow */
    border: 1px solid var(--border-color);
    transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
  }

  .value-card:hover {
    box-shadow: var(--shadow-hover);     /* hover effect from theme */
    transform: translateY(-6px);
  }

  .value-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
    color: var(--primary-color);
    margin-bottom: 14px;
    width: 100%;        /* Ensures icon spans card width */
    height: 40px;       /* Optional: consistent icon height */
  }


  .value-card h4 {
    font-size: 1.2rem;
    color: var(--heading-color);         /* heading color per theme */
    margin: 0 0 8px;
  }

  .value-card p {
    color: var(--text-color);            /* body text per theme */
    margin: 0;
  }
    /* Responsive adjustment for smaller screens (mobile) */
  @media (max-width: 600px) {
    .value-icon {
      font-size: 2rem;   /* slightly smaller on mobile */
      height: 40px;      /* tighter vertical space */
    }
  }


          /* ===== Team ===== */
          .team-section { background: var(--sidebar-bg, #f7f8f9); }
          .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 28px; }
          .team-card { background: var(--card-bg, #fff); border-radius: 16px; box-shadow: var(--shadow, 0 10px 25px rgba(0,0,0,.06)); border: 1px solid var(--border-color, #e8e8e8); overflow: hidden; transition: transform .25s ease, box-shadow .25s ease; }
          .team-card:hover { box-shadow: var(--shadow-hover, 0 14px 35px rgba(0,0,0,.09)); transform: translateY(-6px); }
          .team-image {
    width: 100%;
    height: 320px; /* increase height for better proportion */
    overflow: hidden; /* prevent overflow */
  }

  .team-image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* ensures full cover */
    object-position: top center; /* keeps faces visible */
    display: block;
  }
          .team-info { padding: 22px; text-align: center; }
          .team-info h4 { margin: 0 0 6px; font-size: 1.2rem; color: var(--heading-color, #1b1b1b); }
          .team-role { color: var(--primary-color, #0b5e2b); font-weight: 700; margin: 0 0 12px; }
          .team-bio { color: var(--text-color, #3c3c3c); line-height: 1.55; margin: 0 0 16px; font-size: .95rem; }
          .team-social { display: flex; justify-content: center; gap: 12px; }
          .team-social a { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--primary-color, #0b5e2b); color: #fff; text-decoration: none; transition: transform .2s ease, background .2s ease; }
          .team-social a:hover { background: var(--secondary-color, #1aa36b); transform: translateY(-3px); }

        /* ===== Timeline ===== */
  /* ===== Timeline Section (Theme-Based) ===== */

  
  .timeline-section {
    background: var(--card-bg);
    padding: 80px 0;
  }

  /* This styles the vertical line */
  .timeline {
    position: relative;
    width: 100%;
    padding: 10px 0;
  }

  .timeline::before {
    content: '';
    position: absolute;
    width: 2px;
    background: var(--primary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }

  /* Timeline item containers */
  .timeline-item {
    position: relative;
    width: 50%;
    padding: 20px 40px;
    box-sizing: border-box;
  }

  .timeline-item.left { left: 0; text-align: right; }
  .timeline-item.right { left: 50%; text-align: left; }

  .timeline-item::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background: var(--primary-color);
    border-radius: 50%;
    top: 28px;
  }
  .timeline-item.left::after { right: -9px; }
  .timeline-item.right::after { left: -9px; }

  /* Timeline card/content */
  .timeline-content {
    background: var(--card-bg);      /* Same as section, so no contrast */
    color: var(--text-color);        /* Adapts to both themes */
    padding: 22px;
    border-radius: 14px;
    box-shadow: none;                /* Remove shadow for non-floating look */
    border: 1px solid var(--border-color);
    display: inline-block;
    max-width: 560px;
    transition: background 0.3s, color 0.3s;
  }

  /* Year badge */
  .timeline-year {
    background: var(--primary-color);
    color: #fff;
    padding: 6px 14px;
    border-radius: 20px;
    font-weight: 700;
    display: inline-block;
    margin-bottom: 12px;
  }

  /* Header text */
  .timeline-content h4 {
    color: var(--heading-color);
    margin: 0 0 8px;
    font-size: 1.15rem;
  }

  /* Description text */
  .timeline-content p {
    color: var(--text-color);
    margin: 0;
    line-height: 1.55;
  }

  /* Optional: Responsive adjustments */
  @media (max-width: 1024px) {
    .timeline::before { left: 24px; }
    .timeline-item { width: 100%; padding-left: 64px; padding-right: 24px; text-align: left; }
    .timeline-item.left, .timeline-item.right { left: 0; }
    .timeline-item::after { left: 15px; right: auto; }
  }


          /* ===== Stats ===== */
          .stats { background: var(--primary-color, #0b5e2b); color: #fff; padding: 80px 24px; }
          .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
          .stat-item { text-align: center; }
          .stat-icon { font-size: 2.6rem; margin-bottom: 12px; opacity: .9; }
          .stat-item h3 { font-size: 2.8rem; font-weight: 800; margin: 0 0 8px; color: #fff; }
          .stat-item p { font-size: 1.05rem; opacity: .95; margin: 0; }

          /* ===== Responsive ===== */
          @media (max-width: 1024px) {
            .grid-2 { grid-template-columns: 1fr; }
            .story-image { min-height: 420px; }
            .timeline::before { left: 24px; }
            .timeline-item { width: 100%; padding-left: 64px; padding-right: 24px; text-align: left; }
            .timeline-item.left, .timeline-item.right { left: 0; }
            .timeline-item::after { left: 15px; right: auto; }
          }
          @media (max-width: 768px) {
            .hero-content h1 { font-size: 2.4rem; }
            .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
          }

          .cta-section {
    position: relative;
    background: url('/images/agent.jpg') center/cover no-repeat fixed; /* fixed background */
    padding: 0 0;
    color: white;
  }

  .cta-overlay {
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
    padding: 100px 0;
  }

  .cta-content {
    max-width: 700px;
    margin: auto;
    color:#fff;
  }

  .cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color:#fff;
  }
            @media (max-width: 480px) {
              .cta-section {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
              }
              .cta-overlay {
                padding: 40px 0;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .cta-content {
                padding: 24px 12px;
                border-radius: 16px;
                background: rgba(0,0,0,0.55);
                box-shadow: 0 2px 16px rgba(0,0,0,0.12);
                text-align: center;
              }
              .cta-content h2 {
                font-size: 1.5rem;
                margin-bottom: 14px;
              }
              .cta-content p {
                font-size: 1rem;
                margin-bottom: 18px;
              }
              .cta-buttons {
                flex-direction: column;
                gap: 10px;
              }
              .btn {
                width: 100%;
                font-size: 1rem;
                padding: 10px 0;
              }
            }

  .cta-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .btn {
    padding: 12px 25px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s;
  }
    .btn-primary, .btn-outline, .btn-large {
    display: inline-flex;           /* Ensures horizontal layout! */
    align-items: center;            /* Vertically centers content */
    justify-content: center;        /* Centers content horizontally */
    gap: 8px;                       /* Space between text and icon */
  }

  .btn-primary svg {
    font-size: 1.3rem;
    vertical-align: middle;
  }


  .btn-primary {
    background: #ff6600;
    color: white;
  }

  .btn-primary:hover {
    background: #e65c00;
  }

  .btn-outline {
    border: 2px solid white;
    color: white;
  }

  .btn-outline:hover {
    background: white;
    color: black;
  }


  .btn {
    padding: 12px 25px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s;
  }

  .btn-primary {
    background: #224DB7;
    color: white;
  }

  .btn-primary:hover {
    background: #224DB7;
  }

  .btn-outline {
    border: 2px solid white;
    color: white;
  }

  .btn-outline:hover {
    background: white;
    color: black;
  }


          @media (max-width: 768px) {
            .hero-content {
              grid-template-columns: 1fr;
              text-align: center;
            }
              .services-content h2 {
            font-size: 0.9rem;
            margin-bottom: 20px;
            margin-left: -20px;
          }

          .services-content p {
            font-size: 0.9rem;
            line-height: 1.6;
            text-align: justify;
            margin-bottom: 30px;
            color: var(--text-color);
          }

            .hero-text h1 {
              font-size: 2.5rem;
            }
              .section-header h2 {
            font-size: 1.9rem;
            margin-bottom: 15px;
          }
            .cta-content h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color:#fff;
  }
        `}</style>
      </div>
    );
  };

  export default AboutUs;
