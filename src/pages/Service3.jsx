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
  FaPalette
} from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Birthday Celebration - Stackly Events',
    heroTitle: 'Birthday Celebration',
    heroParagraph: 'Make every birthday unforgettable with personalized themes, lively entertainment, and joyful moments.',
    featuresTitle: 'Birthday Party Highlights',
    featuresDescription: 'Exciting features and services to create a vibrant birthday atmosphere.',
    luxuryFeatures: [
      { icon: FaCogs, title: 'Vibrant Venue', description: 'A lively and colorful venue perfect for birthday celebrations of all ages.' },
      { icon: FaUsers, title: 'Personalized Guest Experience', description: 'Custom guest services ensuring every attendee feels special and celebrated.' },
      { icon: FaUtensils, title: 'Delicious Catering', description: 'Theme-inspired menus and treats crafted to delight your guests.' },
      { icon: FaMusic, title: 'Entertainment & Activities', description: 'Live performances, DJs, games, and more to keep the party lively.' },
      { icon: FaCameraRetro, title: 'Photobooth & Photographer', description: 'Fun photo opportunities and professional photography to capture memories.' },
      { icon: FaPalette, title: 'Themed Décor & Styling', description: 'Custom decorations to match your birthday theme and style.' },
    ],
    benefitsTitle: 'Why Celebrate With Us?',
    benefitsDescription: 'From intimate gatherings to grand celebrations, we deliver joy and personalization at every step.',
    benefitsList: [
      'Create an unforgettable birthday party full of joy and laughter',
      'Customizable themes and activities for all ages',
      'Delicious food and drinks tailored to your preferences',
      'Interactive entertainment to engage every guest',
      'Professional photography to capture the day’s special moments',
      'Stress-free planning with expert event coordination',
    ],
    galleryTitle: 'Discover Our Stunning Properties',
    gallerySubtitle: 'Step into a world of architectural elegance and modern living. Our handpicked collection of homes blends style, comfort, and functionality to create spaces you’ll love to call your own.',
    faqsTitle: 'FAQs',
    faqsSubtitle: 'Answers to common questions about birthday celebrations.',
    faqs: [
      { question: 'How far in advance should I book my birthday celebration?', answer: 'We recommend booking at least 2-4 months in advance to secure your preferred date and services.' },
      { question: 'Can I customize the party theme?', answer: 'Absolutely, we offer fully customizable themes and personalized options to make your birthday truly unique.' },
      { question: 'Are dietary restrictions accommodated?', answer: 'Yes, our catering team works with you to provide delicious options for all dietary needs.' },
      { question: 'What entertainment options are available?', answer: 'We provide a wide array of entertainment options including live music, DJs, games, and custom activities.' },
    ],
    ctaTitle: 'Ready to Celebrate?',
    ctaParagraph: 'Contact us to plan a birthday celebration that shines and delights.',
    ctaButton: 'Book Your Celebration',
    reachOut: 'Plan Your Celebration'
  },
  ar: {
    pageTitle: 'احتفال عيد ميلاد - فعاليات ستاكلي',
    heroTitle: 'احتفال عيد ميلاد',
    heroParagraph: 'اجعل كل عيد ميلاد لا يُنسى مع ثيمات مخصصة، وترفيه حيوي، ولحظات مليئة بالفرح.',
    featuresTitle: 'أبرز مميزات حفلة عيد الميلاد',
    featuresDescription: 'ميزات وخدمات مميزة لخلق أجواء عيد ميلاد نابضة بالحياة.',
    luxuryFeatures: [
      { icon: FaCogs, title: 'مكان نابض بالحياة', description: 'مكان ملون وحيوي مثالي لاحتفالات أعياد الميلاد لجميع الأعمار.' },
      { icon: FaUsers, title: 'تجربة ضيوف مخصصة', description: 'خدمات ضيوف خاصة تضمن شعور كل حاضر بالتميز والاحتفال.' },
      { icon: FaUtensils, title: 'تموين لذيذ', description: 'قوائم مستوحاة من الثيم تقدم مع الأطعمة التي تبهج ضيوفك.' },
      { icon: FaMusic, title: 'ترفيه وأنشطة', description: 'عروض حية، منسقو أغاني، ألعاب والمزيد لإبقاء الحفلة حيوية.' },
      { icon: FaCameraRetro, title: 'كشك تصوير ومصور', description: 'فرص تصوير ممتعة وتصوير احترافي لالتقاط الذكريات.' },
      { icon: FaPalette, title: 'ديكور وتصميم ثيم', description: 'زينة مخصصة تتناسب مع ثيم عيد ميلادك وأسلوبك.' },
    ],
    benefitsTitle: 'لماذا تحتفل معنا؟',
    benefitsDescription: 'من اللقاءات الحميمة إلى الاحتفالات الكبرى، نقدم الفرح والتخصيص في كل خطوة.',
    benefitsList: [
      'خلق حفلة عيد ميلاد لا تُنسى مليئة بالفرح والضحك',
      'ثيمات وأنشطة يمكن تخصيصها لجميع الأعمار',
      'أطعمة ومشروبات شهية مخصصة لتفضيلاتك',
      'ترفيه تفاعلي ليشارك فيه جميع الضيوف',
      'تصوير محترف لالتقاط لحظات اليوم الخاصة',
      'تخطيط خالي من التوتر مع تنسيق خبير',
    ],
    galleryTitle: 'اكتشف ممتلكاتنا الرائعة',
    gallerySubtitle: 'خطوة إلى عالم من الأناقة المعمارية والعيش العصري. مجموعتنا المختارة من المنازل تمزج بين الأسلوب والراحة والوظائف لخلق مساحات تحب أن تسميها منزلك.',
    faqsTitle: 'الأسئلة المتكررة',
    faqsSubtitle: 'إجابات على الأسئلة الشائعة بخصوص احتفالات أعياد الميلاد.',
    faqs: [
      { question: 'كم من الوقت يجب أن أحجز احتفال عيد ميلادي؟', answer: 'ننصح بالحجز مقدماً من 2 إلى 4 أشهر لضمان التاريخ والخدمات.' },
      { question: 'هل يمكنني تخصيص ثيم الحفلة؟', answer: 'نعم، نقدّم ثيمات وخيارات مخصصة بالكامل.' },
      { question: 'هل يتم تلبية الاحتياجات الغذائية؟', answer: 'فريق التموين يوفر خيارات لجميع الاحتياجات الغذائية.' },
      { question: 'ما هي خيارات الترفيه المتوفرة؟', answer: 'موسيقى حية، منسق أغاني، ألعاب، وأنشطة مخصصة.' },
    ],
    ctaTitle: 'هل أنت جاهز للاحتفال؟',
    ctaParagraph: 'اتصل بنا لتنظيم احتفال عيد ميلاد يضيء ويُسعد الجميع.',
    ctaButton: 'احجز احتفالك',
    reachOut: 'خطط لاحتفالك'
  },
  he: {
    pageTitle: 'חגיגת יום הולדת - אירועי סטאקלי',
    heroTitle: 'חגיגת יום הולדת',
    heroParagraph: 'עשו כל יום הולדת לבלתי נשכח עם עיצובים מותאמים, בידור תוסס ורגעים משמחים.',
    featuresTitle: 'הדגשים של מסיבת יום הולדת',
    featuresDescription: 'מאפיינים ושירותים מרגשים ליצירת אווירת יום הולדת תוססת.',
    luxuryFeatures: [
      { icon: FaCogs, title: 'אולם מלא חיוניות', description: 'אולם צבעוני ותוסס מושלם לחגיגות יום הולדת לכל הגילים.' },
      { icon: FaUsers, title: 'חוויה מותאמת לאורחים', description: 'שירותי אורחים מותאמים לוודא שכל משתתף ירגיש מיוחד וחוגג.' },
      { icon: FaUtensils, title: 'קייטרינג טעים', description: 'תפריטים נושאי נושא המותאמים להנאת האורחים.' },
      { icon: FaMusic, title: 'בידור ופעילויות', description: 'מופעים חיים, די ג’ייז, משחקים ועוד לשמירת האווירה.' },
      { icon: FaCameraRetro, title: 'קיר צילום ומצולם', description: 'הזדמנויות צילום מהנות וצילום מקצועי לתיעוד הזיכרונות.' },
      { icon: FaPalette, title: 'קישוט ועיצוב בנושא', description: 'קישוטים מותאמים לנושא ועיצוב יום ההולדת שלך.' },
    ],
    benefitsTitle: 'למה לחגוג איתנו?',
    benefitsDescription: 'ממפגשים אינטימיים לחגיגות גדולות, אנו מספקים שמחה והתאמה אישית בכל שלב.',
    benefitsList: [
      'יצירת מסיבת יום הולדת בלתי נשכחת מלאה בשמחה וצחוק',
      'נושאים ופעילויות הניתנים להתאמה לכל הגילים',
      'אוכל ושתייה טעימים המותאמים להעדפותיך',
      'בידור אינטראקטיבי לכל אורח',
      'צילום מקצועי של רגעי היום המיוחדים',
      'תכנון נטול מתח עם תיאום מקצועי',
    ],
    galleryTitle: 'גלו את הנכסים המדהימים שלנו',
    gallerySubtitle: 'צאו לעולם של אלגנטיות ארכיטקטונית וחיים מודרניים. האוספים שלנו משלבים סגנון, נוחות ופונקציונליות ליצירת מרחבים שתאהבו לקרוא בית.',
    faqsTitle: 'שאלות נפוצות',
    faqsSubtitle: 'תשובות לשאלות נפוצות על חגיגות יום ההולדת.',
    faqs: [
      { question: 'כמה זמן מראש יש להזמין את חגיגת יום ההולדת?', answer: 'מומלץ להזמין לפחות 2-4 חודשים מראש כדי להבטיח תאריך ושירותים.' },
      { question: 'האם אפשר להתאים את הנושא?', answer: 'בוודאי, אנו מציעים נושאים ואפשרויות מלאות התאמה אישית.' },
      { question: 'האם יש התאמות תזונתיות?', answer: 'צוות הקייטרינג שלנו יספק אופציות לכל דרישות התזונה.' },
      { question: 'אילו אפשרויות בידור זמינות?', answer: 'מוזיקה חיה, די ג’ייז, משחקים ופעילויות מותאמות.' },
    ],
    ctaTitle: 'מוכנים לחגוג?',
    ctaParagraph: 'צרו קשר לתכנון חגיגת יום הולדת בלתי נשכחת.',
    ctaButton: 'הזמן את החגיגה שלך',
    reachOut: 'תכנן את החגיגה שלך'
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
            <source src="images/video71.mp4" type="video/mp4" />
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
            <motion.div className="section-header text-center" initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2>{t.featuresTitle}</h2>
              <p>{t.featuresDescription}</p>
            </motion.div>
            <div className="features-grid">
              {t.luxuryFeatures.map((feature, idx) => (
                <motion.div key={idx} className="feature-card premium-card" initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: idx * 0.1 }} viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.03 }}>
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="btn-learn-wrapper">
              <Link to="/contact" className="btn-learn">{t.ctaButton} <FaArrowRight /></Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section benefits-section">
          <div className="container">
            <div className="grid-2">
              <motion.div className="benefits-content" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2>{t.benefitsTitle}</h2>
                <p>{t.benefitsDescription}</p>
                <div className="benefits-list">
                  {t.benefitsList.map((benefit, idx) => (
                    <motion.div key={idx} className="benefit-item" initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }}>
                      <FaCheck className="check-icon" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary">{t.ctaButton} <FaArrowRight /></Link>
              </motion.div>
              <motion.div className="benefits-visual" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <div className="benefits-image">
                  <img src="images/birthday.jpg" alt="Birthday Celebration" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-wrapper">
          <div className="gallery-header">
            <h2 className="gallery-title">{t.galleryTitle}</h2>
            <p className="gallery-subtitle">{t.gallerySubtitle}</p>
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
            <motion.div className="section-header text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2>{t.faqsTitle}</h2>
              <p>{t.faqsSubtitle}</p>
            </motion.div>
            <div className="faq-list">
              {t.faqs.map((faq, idx) => (
                <motion.div key={idx} className="faq-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }}>
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
      <motion.div className="cta-content" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaParagraph}</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">{t.ctaButton} <FaArrowRight /></Link>
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
  background: url('/images/professional1.jpg') center/cover no-repeat fixed;
  color: #fff;
  min-height: 350px;
}
.cta-overlay {
  background: rgba(0,0,0,0.58);
  min-height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-content {
  max-width: 700px;
  margin: auto;
  color:#fff;
}

.cta-content h2 {
  font-size: 2.7rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #fff;
  text-align: center;
}

.cta-content p {
  font-size: 1.19rem;
  margin-bottom: 28px;
  color: #fff;
  text-align: center;
}

.cta-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn {
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}

.btn.btn-primary {
  background: #224DB7;
  color: #fff;
  font-weight: bold;
  font-size: 1.16rem;
  border-radius: 10px;
  padding: 15px 36px;
  border: none;
  margin: 0 auto;
  box-shadow: 0 2px 12px rgba(34,77,183,0.12);
  transition: background 0.15s;
  text-align: center;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn.btn-primary:hover {
  background: #193682;
  color: #fff;
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
