import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCheck,
  FaArrowRight,
  FaUsers,
  FaCogs,
  FaMusic,
  FaUtensils,
  FaCameraRetro,
  FaPalette,
  FaChartLine
} from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Annual Conference - Stackly Events',
    heroTitle: 'Annual Conference',
    heroParagraph: 'Bring your industry together for insight, connection, and innovation at a flawlessly executed annual event.',
    featuresTitle: 'Conference Features',
    featuresDescription: 'Modern organization, inspiring programming, and seamless logistics for your annual meeting.',
    luxuryFeatures: [
      { icon: FaUsers, title: 'Professional Networking', description: 'Dedicated spaces and networking events to connect industry leaders and professionals.' },
      { icon: FaChartLine, title: 'Keynote Speakers & Panels', description: 'Inspiring presentations and panels from renowned thought leaders.' },
      { icon: FaCogs, title: 'Cutting-Edge Venue & Tech', description: 'Seamless AV, digital signage, and attendee management in world-class venues.' },
      { icon: FaUtensils, title: 'Catering & Refreshments', description: 'All-day coffee, gourmet dining, and themed networking breaks to keep energy high.' },
      { icon: FaPalette, title: 'Branded Event Styling', description: 'Custom conference branding, signage, and creative décor to elevate your message.' },
      { icon: FaCameraRetro, title: 'Comprehensive Event Coverage', description: 'Photography and video content creation to document every moment and session.' },
    ],
    benefitsTitle: 'Why Trust Us With Your Annual Conference?',
    benefitsDescription: 'We combine flawless logistics, creative vision, and industry know-how for an engaging, motivating conference from registration to closing ceremony.',
    benefitsList: [
      'Connect your organization with industry leaders, clients, and talent',
      'Expert planning for smooth registration, logistics, and on-site execution',
      'Custom branding and communications amplify your message and mission',
      'Memorable social events and networking foster real relationships',
      'Detailed analytics, feedback, and media assets post-conference',
      'All logistics—so you can focus on your delegates and vision',
    ],
    galleryTitle: 'Discover Our Stunning Properties',
    gallerySubtitle: 'Step into a world of architectural elegance and modern living. Our handpicked collection of homes blends style, comfort, and functionality to create spaces you’ll love to call your own.',
    faqsTitle: 'FAQs',
    faqsSubtitle: 'Answers to your most common conference planning questions.',
    faqs: [
      { question: 'How far in advance should an annual conference be planned?', answer: 'We recommend beginning planning 6–12 months ahead to secure the best venues and speakers.' },
      { question: 'Can you handle virtual or hybrid conferences?', answer: 'Yes! We offer in-person, hybrid, and fully virtual conference experiences with robust tech and support.' },
      { question: 'What branding opportunities are available?', answer: 'We offer full-scale event branding: signage, stage design, introductions, swag, and digital assets.' },
      { question: 'How are meals and dietary needs handled?', answer: 'Our catering partners offer diverse and customizable menu options for all dietary restrictions and preferences.' },
    ],
    ctaTitle: 'Plan Your Next Conference',
    ctaParagraph: 'Partner with Stackly for an annual conference that inspires, connects, and propels your community forward.',
    ctaPrimaryButton: 'Start Planning',
    ctaSecondaryButton: 'Learn about our process',
    reachOut: 'Start Planning',
  },
  ar: {
    pageTitle: 'المؤتمر السنوي - فعاليات ستاكلي',
    heroTitle: 'المؤتمر السنوي',
    heroParagraph: 'اجمع صناعتك معًا للرؤية، الاتصال، والابتكار في حدث سنوي يتم تنفيذه بلا عيوب.',
    featuresTitle: 'مميزات المؤتمر',
    featuresDescription: 'تنظيم حديث، برامج ملهمة، ولوجستيات سلسة لاجتماعك السنوي.',
    luxuryFeatures: [
      { icon: FaUsers, title: 'شبكات احترافية', description: 'مساحات مخصصة وفعاليات للتواصل بين قادة الصناعة والمحترفين.' },
      { icon: FaChartLine, title: 'المتحدثون الأساسيون واللجان', description: 'عروض ملهمة ولجان من قادة الفكر المعروفين.' },
      { icon: FaCogs, title: 'مكان وتقنية متطورة', description: 'صوت وصورة لا مثيل لهما، لافتات رقمية وإدارة الحضور في أماكن عالمية المستوى.' },
      { icon: FaUtensils, title: 'التموين والمرطبات', description: 'قهوة طوال اليوم، طعام ذواقة وفواصل شبكات ذات طابع للحفاظ على الطاقة.' },
      { icon: FaPalette, title: 'تصميم بعلامة تجارية للحدث', description: 'علامة مؤتمرات مخصصة، لافتات وديكور إبداعي لرفع رسالتك.' },
      { icon: FaCameraRetro, title: 'تغطية شاملة للحدث', description: 'تصوير فوتوغرافي وفيديو لتوثيق كل لحظة وجلسة.' },
    ],
    benefitsTitle: 'لماذا تثق بنا لمؤتمرك السنوي؟',
    benefitsDescription: 'نجمع بين اللوجستيات المثالية والرؤية الإبداعية والخبرة في الصناعة لمؤتمر محفز من التسجيل حتى حفل الختام.',
    benefitsList: [
      'ربط مؤسستك بقادة الصناعة والعملاء والمواهب',
      'تخطيط خبير لتسجيل وتنفيذ ميداني سلس',
      'علامات تجارية واتصالات مخصصة تضخم رسالتك ومهمتك',
      'فعاليات اجتماعية وشبكات لا تُنسى لتعزيز العلاقات الحقيقية',
      'تحليلات مفصلة، تعليقات ومواد إعلامية بعد المؤتمر',
      'جميع اللوجستيات—حتى تركز على مندوبينك ورؤيتك',
    ],
    galleryTitle: 'اكتشف ممتلكاتنا المذهلة',
    gallerySubtitle: 'ادخل عالم الأناقة المعمارية والعيش العصري. مجموعتنا المختارة تمزج الأسلوب والراحة والوظائف لإنشاء مساحات تحب تسميتها منزلك.',
    faqsTitle: 'الأسئلة الشائعة',
    faqsSubtitle: 'إجابات على الأسئلة الأكثر شيوعًا لتخطيط المؤتمرات.',
    faqs: [
      { question: 'كم من الوقت يجب التخطيط للمؤتمر السنوي؟', answer: 'ننصح ببدء التخطيط من 6 إلى 12 شهرًا لضمان أفضل الأماكن والمتحدثين.' },
      { question: 'هل تستطيع التعامل مع المؤتمرات الافتراضية أو الهجينة؟', answer: 'نعم! نقدم تجارب مؤتمرات شخصية، هجينة وافتراضية كاملة مع دعم وتقنية قوية.' },
      { question: 'ما فرص العلامات التجارية المتوفرة؟', answer: 'نوفر علامات تجارية شاملة: لافتات، تصميم المسرح، مقدمات، هدايا ومواد رقمية.' },
      { question: 'كيف يتم التعامل مع الوجبات والاحتياجات الغذائية؟', answer: 'شركاؤنا للتموين يقدمون خيارات قائمة متنوعة وقابلة للتخصيص لجميع القيود والتفضيلات الغذائية.' },
    ],
    ctaTitle: 'خطط لمؤتمرك القادم',
    ctaParagraph: 'شارك مع ستاكلي لمؤتمر سنوي يلهم ويجمع ويدفع הקהילה שלך קדימה.',
    ctaPrimaryButton: 'ابدأ التخطيط',
    ctaSecondaryButton: 'تعرف على عمليتنا',
    reachOut: 'ابدأ التخطيط',
  },
  he: {
    pageTitle: 'ועידה שנתית - אירועי סטאקלי',
    heroTitle: 'ועידה שנתית',
    heroParagraph: 'הביאו את התעשייה שלכם יחד לתובנות, חיבורים וחדשנות באירוע שנתי מתוקתק ומושלם.',
    featuresTitle: 'מאפייני הוועידה',
    featuresDescription: 'ארגון מודרני, תכנות מעורר השראה ולוגיסטיקה חלקה לפגישתכם השנתית.',
    luxuryFeatures: [
      { icon: FaUsers, title: 'רישות מקצועי', description: 'מרחבים ייעודיים ואירועי רישות לחיבור בין מנהיגי תעשייה ומקצוענים.' },
      { icon: FaChartLine, title: 'דוברים מרכזיים ופאנלים', description: 'הרצאות ופאנלים מעוררי השראה ממובילי דעה ידועים.' },
      { icon: FaCogs, title: 'מקום מתקדם וטכנולוגיה', description: 'מערכות AV חלקות, שילוט דיגיטלי וניהול משתתפים במקומות ברמה עולמית.' },
      { icon: FaUtensils, title: 'קייטרינג ומרעננים', description: 'קפה כל היום, אוכל גורמה והפסקות נטוורקינג עם נושא לשימור האנרגיה.' },
      { icon: FaPalette, title: 'עיצוב מותג לאירוע', description: 'מיתוג כנסים מותאם אישית, שילוט ויצירת דקורציה להעצמת המסר שלך.' },
      { icon: FaCameraRetro, title: 'תיעוד אירוע מקיף', description: 'צילום ותוכן וידאו לתיעוד כל רגע ומפגש.' },
    ],
    benefitsTitle: 'למה לסמוך עלינו עם הוועידה השנתית שלך?',
    benefitsDescription: 'אנו משלבים לוגיסטיקה מושלמת, חזון יצירתי וידע תעשייתי לכנס מלהיב ומניע מהרישום ועד טקס הסיום.',
    benefitsList: [
      'קשרו את הארגון שלכם עם מנהיגי תעשייה, לקוחות וכשרונות',
      'תכנון מומחה לרישום חלק, לוגיסטיקה וביצוע בשטח',
      'מיתוג ותקשורת מותאמים להגברת המסר והמשימה שלכם',
      'אירועים חברתיים בלתי נשכחים ורישותים לבניית קשרים אמיתיים',
      'אנליזות מפורטות, משוב ונכסי מדיה לאחר הכנס',
      'כל הלוגיסטיקה—כדי שתוכלו להתמקד במשלחים ובחזון שלכם',
    ],
    galleryTitle: 'גלו את הנכסים המרהיבים שלנו',
    gallerySubtitle: 'היכנסו לעולם של אלגנטיות ארכיטקטונית ומגורים מודרניים. קולקציית הבתים שבחרנו משלבת סגנון, נוחות ופונקציונליות ליצירת מרחבים שתרצו לקרוא להם בית.',
    faqsTitle: 'שאלות נפוצות',
    faqsSubtitle: 'תשובות לשאלות נפוצות ביותר לתכנון כנסים.',
    faqs: [
      { question: 'כמה זמן מראש צריך לתכנן ועידה שנתית?', answer: 'מומלץ להתחיל בתכנון 6–12 חודשים מראש כדי להבטיח את המקומות והדוברים הטובים ביותר.' },
      { question: 'האם אתם מטפלים בכנסים וירטואליים או היברידיים?', answer: 'כן! אנו מציעים חוויות כנס פרונטליות, היברידיות ווירטואליות עם תמיכה וטכנולוגיה מתקדמת.' },
      { question: 'אילו הזדמנויות מיתוג זמינות?', answer: 'אנו מציעים מיתוג מלא לאירועים: שילוט, עיצוב במה, מבואות, מתנות ונכסים דיגיטליים.' },
      { question: 'כיצד מטפלים בארוחות וצרכים תזונתיים?', answer: 'שותפי הקייטרינג שלנו מציעים תפריטים מגוונים הניתנים להתאמה לכל המגבלות והעדפות התזונה.' },
    ],
    ctaTitle: 'תכננו את הכנס הבא שלכם',
    ctaParagraph: 'שתפו פעולה עם סטאקלי לכנס שנתי שמעורר השראה, מחבר ומניע את הקהילה שלכם קדימה.',
    ctaPrimaryButton: 'התחל לתכנן',
    ctaSecondaryButton: 'למד על התהליך שלנו',
    reachOut: 'התחל לתכנן',
  }
};

const Service1 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  useEffect(() => {
    document.title = t.pageTitle;
  }, [t.pageTitle]);

  return (
    <div className="service-page">
      <div className="home-page">
        
        {/* Hero Section */}
        <section className="hero-section">
          <video autoPlay muted loop playsInline className="hero-bg-video">
            <source src="images/video101.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">{t.heroTitle}</h1>
              <p className="hero-paragraph">{t.heroParagraph}</p>
              <Link to="/contact" className="hero-button">{t.reachOut}</Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section features-section">
          <div className="container">
            <motion.div
              className="section-header text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>{t.featuresTitle}</h2>
              <p>{t.featuresDescription}</p>
            </motion.div>

            <div className="features-grid">
              {t.luxuryFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="feature-card premium-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.03 }}
                >
                  <div className="feature-icon"><feature.icon /></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="btn-learn-wrapper">
              <Link to="/contact" className="btn-learn">{t.ctaPrimaryButton} <FaArrowRight /></Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section benefits-section">
          <div className="container">
            <div className="grid-2">
              <motion.div
                className="benefits-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>{t.benefitsTitle}</h2>
                <p>{t.benefitsDescription}</p>
                <div className="benefits-list">
                  {t.benefitsList.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="benefit-item"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <FaCheck className="check-icon" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary">{t.ctaPrimaryButton} <FaArrowRight /></Link>
              </motion.div>
              <motion.div
                className="benefits-visual"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="benefits-image">
                  <img src="images/service6.jpg" alt="Annual Conference Benefits" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Gallery Section */}
        <section className="gallery-wrapper">
          <div className="gallery-header">
            <h2>{t.galleryTitle}</h2>
            <p>{t.gallerySubtitle}</p>
          </div>
          <div className="gallery-container">
            <div className="gallery-row">
              <div className="gallery-big">
                <img src="images/wedding11.jpg" alt="Luxury Property" />
              </div>
              <div className="gallery-grid">
                <img src="images/row12.jpg" alt="Interior 1" />
                <img src="images/row1.jpg" alt="Interior 2" />
                <img src="images/row11.jpg" alt="Interior 3" />
                <img src="images/row13.jpg" alt="Interior 4" />
              </div>
            </div>
            <div className="gallery-row reverse">
              <div className="gallery-big">
                <img src="images/wedding12.jpg" alt="Modern Home" />
              </div>
              <div className="gallery-grid">
                <img src="images/row2.jpg" alt="Interior 5" />
                <img src="images/row21.jpg" alt="Interior 6" />
                <img src="images/row22.jpg" alt="Interior 7" />
                <img src="images/row23.jpg" alt="Interior 8" />
              </div>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="section faq-section">
          <div className="container">
            <motion.div
              className="section-header text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>{t.faqsTitle}</h2>
              <p>{t.faqsSubtitle}</p>
            </motion.div>
            <div className="faq-list">
              {t.faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  className="faq-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
                  <div className="cta-overlay">
                    <div className="container">
                      <motion.div
                        className="cta-content text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <h2>{t.ctaTitle}</h2>
                        <p>{t.ctaParagraph}</p>
                        <div className="cta-buttons">
                          <Link to="/contact" className="btn btn-primary btn-large">
                            {t.ctaPrimaryButton} <FaArrowRight />
                          </Link>
                          <Link to="/about" className="btn btn-outline btn-large">
                            {t.ctaSecondaryButton}
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </section>


      <style jsx>{`
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


  

.features-section {
  background: var(--sidebar-bg);
  padding: 80px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.feature-card.premium-card {
  position: relative;
  background: rgba(20, 20, 20, 0.9);
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  overflow: hidden;
  color: #fff;
  z-index: 1;
}

.feature-card {
  background: var(--card-bg, #111);
  border: 1px solid rgba(0, 123, 255, 0.4);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;   /* Center horizontally */
  justify-content: flex-start; /* Keep content top-aligned */
}

.feature-card.premium-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(270deg, #4f9fff, #a855f7, #4f9fff);
  background-size: 600% 600%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: borderMove 6s linear infinite;
  z-index: -1;
}

@keyframes borderMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.feature-icon {
  font-size: 3rem;
  color: #4f9fff;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #fff;
}

.feature-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #bbb;
}

.btn-learn {
  margin-top: 40px;
}
  .btn-learn-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  /* Optional: align-items: center; for vertical centering */
}


.btn-learn {
  margin-top: 40px;
}
 .btn-learn-wrapper {
  display: flex;
  justify-content: center;  /* horizontal center */
  align-items: center;      /* vertical center */
  width: 100%;
  margin-top: 20px;         /* optional spacing */
}

.btn-learn {
  background: linear-gradient(90deg, #3b82f6, #a855f7);
  color: #fff;
  padding: 12px 28px;
  border: none;
  border-radius: 9999px;  /* pill shape */
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;               /* spacing between text & arrow */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-learn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}


        .benefits-section {
          background: var(--bg-color);
        }

        .benefits-content h2 {
          font-size: 2.5rem;
          color: var(--heading-color);
          margin-bottom: 20px;
        }

        .benefits-content p {
  font-size: 1.02rem;
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: justify;                /* Justified paragraph */
  letter-spacing: 0.1px;              /* Slight letter spacing for professionalism */
}


        .benefits-list {
          margin-bottom: 40px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 1rem;
          color: var(--text-color);
        }

       .check-icon {
  color: var(--accent-color, #28a745);
  font-size: 1.15rem;                 /* Slightly larger for visibility */
  background: var(--accent-bg, #e0f7e9); /* Soft green for light mode */
  padding: 8px;
  border-radius: 50%;
  box-shadow: 0 0 6px var(--accent-color, #28a745); /* Glow/silhouette effect */
  transition: background 0.3s, color 0.3s;
}

  /* Light theme (optional, if you use a root variable) */
  :root {
  --accent-color: #111;     /* Black for icon color */
  --accent-bg: #eaeaea;     /* Light grey for background dot */
}


/* Dark theme (assuming body.dark is toggled for dark mode) */
body.dark .check-icon {
  color: #5cffb1;                          /* Bright green for dark */
  background: rgba(40,167,69,0.22);        /* Slightly brighter dot */
  box-shadow: 0 0 8px #5cffb1;
}


        .benefits-image {
          border-radius: 50px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .benefits-image img {
          width: 100%;
          height: 570px;
          object-fit: cover;
          border-radius: 50px;
        }

        .gallery-wrapper {
  background: var(--sidebar-bg); /* Uses sidebar background for both themes */
  padding: 80px 40px;
  font-family: "Segoe UI", sans-serif;
  transition: background-color 0.3s ease; /* Smooth transition on theme change */
}


.gallery-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 15px;
}

.gallery-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.6;
}


.gallery-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.gallery-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: stretch;
}

.gallery-row.reverse {
  flex-direction: row-reverse;
}

.gallery-big img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  flex: 1;
}

.gallery-grid img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}

.gallery-grid img:hover {
  transform: scale(1.03);
}

/* Tablet (medium screens) */
@media (max-width: 992px) {
  .gallery-wrapper {
    padding: 60px 20px;
  }
  .gallery-big img {
    height: 350px; /* already present, keeps height smaller */
  }
  .gallery-grid {
    grid-template-columns: 1fr 1fr; /* two columns (unchanged) */
    gap: 15px;
  }
  .gallery-grid img {
    height: 180px;
  }
  /* Stack gallery rows vertically */
  .gallery-row,
  .gallery-row.reverse {
    flex-direction: column;
    gap: 15px;
  }
}

/* Mobile (small screens) */
@media (max-width: 600px) {
  .gallery-wrapper {
    padding: 40px 12px;
  }

  .gallery-header {
    max-width: 100%;
    padding: 0 10px;
  }
  .gallery-title {
    font-size: 1.8rem;
  }
  .gallery-subtitle {
    font-size: 1rem;
    padding: 0 10px;
    line-height: 1.4;
  }

  .gallery-big img {
    height: 250px;
    border-radius: 12px;
  }
  .gallery-grid {
    grid-template-columns: 1fr; /* single column grid */
    gap: 12px;
  }
  .gallery-grid img {
    height: 200px;
    border-radius: 10px;
  }

  /* Stack gallery rows vertically */
  .gallery-row,
  .gallery-row.reverse {
    flex-direction: column;
    gap: 12px;
  }
}

/* Extra small mobile */
@media (max-width: 400px) {
  .gallery-wrapper {
    padding: 30px 8px;
  }
  .gallery-title {
    font-size: 1.5rem;
  }
  .gallery-subtitle {
    font-size: 0.95rem;
  }
  .gallery-big img {
    height: 200px;
  }
  .gallery-grid img {
    height: 160px;
  }
}



.cta-section {
  position: relative;
  background: url('/images/professional1.jpg') center/cover no-repeat fixed; /* fixed background */
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
  .btn-primary, .btn-outline, .btn-large {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.btn-primary svg {
  font-size: 1.3rem;
  vertical-align: middle;
}




        .faq-section {
          background: var(--sidebar-bg);
          padding: 0 0;
          padding-bottom: 40px;
          margin-top:-40px;
        }

        .faq-list {
          max-width: 800px;
          margin: 60px auto 0;
        }

        .faq-item {
          background: var(--card-bg);
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 20px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
        }

        .faq-item h4 {
          color: var(--heading-color);
          font-size: 1.2rem;
          margin-bottom: 15px;
        }

        .faq-item p {
          color: var(--text-color);
          line-height: 1.6;
          margin: 0;
        }

       src/pages/Home2.jsx

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
          }

          .step-number {
            width: auto;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default Service1;
