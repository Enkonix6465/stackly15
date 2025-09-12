import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaCheck,
  FaArrowRight,
  FaUsers,
  FaChartLine,
  FaCogs,
  FaShieldAlt,
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaMusic,
  FaUtensils,
  FaUmbrellaBeach,
  FaQuoteLeft,
  FaCameraRetro,
  FaPalette
} from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Digital Consulting - ForStackly Business Solutions',
    heroTitle: 'Luxury Yacht Wedding',
    heroParagraph: 'Set sail for a breathtaking celebration on the water—experience elegance, romance, and unforgettable moments with a bespoke wedding aboard a luxury yacht.',
    featuresTitle: 'Extraordinary Wedding Enhancements',
    featuresDescription: 'A curated celebration on the water, blending elegant décor, tailored cuisine, and expert planning.',
    luxuryFeatures: [
      { icon: FaUmbrellaBeach, title: 'Custom Floral Arrangements', description: 'Bespoke floral artistry designed to enhance your nautical celebration.' },
      { icon: FaUsers, title: 'VIP Guest Services', description: 'Personalized concierge for a seamless luxury experience onboard.' },
      { icon: FaUtensils, title: 'Gourmet Catering', description: 'Tailored menus crafted by world-class chefs, served with elegance.' },
      { icon: FaMusic, title: 'Onboard Entertainment', description: 'Live music, DJs, and curated performances for unforgettable moments.' },
      { icon: FaCameraRetro, title: 'Photography & Videography', description: 'Capture every cherished moment with cinematic photography and film.' },
      { icon: FaPalette, title: 'Personalized Décor & Styling', description: 'Exclusive themes and luxury styling to reflect your unique love story.' }
    ],
    benefitsTitle: 'Luxury Yacht Wedding',
    benefitsDescription: 'Our luxury yacht wedding services create a truly unique and unforgettable celebration, blending timeless elegance, romantic ambiance, and stunning ocean vistas. From personalized planning to exquisite details, we ensure your special day is a flawless and breathtaking experience surrounded by the beauty of the sea.',
    benefitsList: [
      'Create an elegant and memorable wedding experience on the water',
      'Personalized planning and exquisite attention to detail throughout',
      'Breathtaking ocean views and a stunning backdrop for your ceremony',
      'Seamless coordination ensuring a flawless and stress-free celebration',
      'Exclusive luxury amenities and personalized guest services',
      'Capture unforgettable moments with iconic seaside photography'
    ],
    galleryTitle: 'Discover Our Stunning Properties',
    gallerySubtitle: 'Step into a world of architectural elegance and modern living. Our handpicked collection of homes blends style, comfort, and functionality to create spaces you’ll love to call your own.',
    faqsTitle: 'Frequently Asked Questions',
    faqsSubtitle: 'Get answers to common questions about our digital consulting services',
    faqs: [
      { question: 'How far in advance should we book our luxury yacht wedding?', answer: 'We recommend booking at least 6 to 12 months in advance to secure your preferred yacht and date, allowing ample time for personalized planning and coordination.' },
      { question: 'What kind of customization options are available for the wedding?', answer: 'Our services include fully personalized décor, tailored menus, entertainment options, and bespoke floral arrangements to perfectly match your vision and style.' },
      { question: 'Can you accommodate special dietary needs and preferences?', answer: 'Absolutely. Our gourmet catering team works closely with you to create exquisite menus that cater to all dietary requirements and preferences, ensuring every guest is delighted.' },
      { question: 'What is included in the VIP guest services onboard?', answer: 'VIP services include personalized concierge support, luxury amenities, seamless guest management, and exclusive entertainment to provide an unforgettable experience.' },
    ],
    ctaTitle: 'Ready to Transform Your Business?',
    ctaParagraph: 'Get started today with a free consultation and discover how we can help you achieve your goals.',
    ctaPrimaryButton: 'Start Your Journey',
    ctaSecondaryButton: 'Learn More About Us',
    reachOut: 'Reach Out Today',
  },
  ar: {
    pageTitle: 'الاستشارات الرقمية - حلول فورستاكلي للأعمال',
    heroTitle: 'حفل زفاف على يخت فاخر',
    heroParagraph: 'انطلق للاحتفال المذهل على المياه—اختبر الأناقة والرومانسية ولحظات لا تُنسى مع حفل زفاف مخصص على متن يخت فاخر.',
    featuresTitle: 'تعزيزات حفل الزفاف الاستثنائية',
    featuresDescription: 'احتفال مخصص على الماء يمزج بين ديكور أنيق وطهي حسب الطلب وتخطيط خبير.',
    luxuryFeatures: [
      { icon: FaUmbrellaBeach, title: 'تنسيقات الزهور المخصصة', description: 'فن الزهور المصمم لتعزيز احتفالك البحري.' },
      { icon: FaUsers, title: 'خدمات ضيوف كبار الشخصيات', description: 'الكونسيرج الشخصي لتجربة فاخرة على متن السفينة.' },
      { icon: FaUtensils, title: 'تموين فخم', description: 'قوائم مصممة على يد أفضل الطهاة، تقدم بأناقة.' },
      { icon: FaMusic, title: 'الترفيه على متن السفينة', description: 'موسيقى حية ومنسق أغاني وعروض مختارة للحظات لا تُنسى.' },
      { icon: FaCameraRetro, title: 'التصوير الفوتوغرافي والفيديو', description: 'التقاط كل لحظة عزيزة بتصوير سينمائي وأفلام.' },
      { icon: FaPalette, title: 'ديكور وتصميم مخصص', description: 'مواضيع حصرية وتصميم فاخر يعكس قصة حبك الفريدة.' },
    ],
    benefitsTitle: 'حفل الزفاف على يخت فاخر',
    benefitsDescription: 'خدمات حفل الزفاف على اليخت التي نقدمها تخلق احتفالًا فريدًا يجمع بين الأناقة الكلاسيكية والجو الرومانسي وإطلالات المحيط الخلابة. من التخطيط المخصص إلى التفاصيل الرائعة، نضمن يومك الخاص أن يكون تجربة مثالية ومذهلة في قلب البحر.',
    benefitsList: [
      'خلق تجربة زفاف أنيقة ولا تُنسى على الماء',
      'تخطيط مخصص واهتمام دقيق بكل التفاصيل',
      'إطلالات خلابة على المحيط وخلفية مذهلة للمراسم',
      'تنسيق سلس لضمان احتفال خالٍ من التوتر',
      'مرافق فاخرة حصرية وخدمات ضيوف مخصصة',
      'التقاط لحظات لا تُنسى مع تصوير بحري مميز',
    ],
    galleryTitle: 'اكتشف عقاراتنا الرائعة',
    gallerySubtitle: 'خطوة إلى عالم من الأناقة المعمارية والراحة العصرية. مجموعتنا المختارة من المنازل تمزج بين الأسلوب والراحة والوظائف لتخلق مساحات تحب أن تسميها منزلك.',
    faqsTitle: 'الأسئلة الشائعة',
    faqsSubtitle: 'احصل على أجوبة عن الأسئلة الشائعة حول خدماتنا للاستشارات الرقمية',
    faqs: [
      { question: 'كم من الوقت يجب أن نحجز حفل زفاف اليخت الفاخر؟', answer: 'ننصح بالحجز قبل 6 إلى 12 شهرًا لضمان اليخت المفضل والتاريخ المناسب، مما يتيح وقتًا كافيًا للتخطيط والتنسيق.' },
      { question: 'ما هي خيارات التخصيص المتاحة للزفاف؟', answer: 'تشمل خدماتنا ديكورًا مخصصًا كاملًا، قوائم طعام مصممة، خيارات ترفيه، وترتيبات زهور فريدة حسب رؤيتك.' },
      { question: 'هل يمكنك تلبية الاحتياجات الغذائية الخاصة؟', answer: 'بالطبع. يعمل فريق التموين معك لإنشاء قوائم تلبي جميع المتطلبات والتفضيلات الغذائية لضمان رضا جميع الضيوف.' },
      { question: 'ما الذي يشمله خدمات ضيوف كبار الشخصيات على متن اليخت؟', answer: 'تشمل خدمات كبار الشخصيات دعم الكونسييرج الشخصي، مرافق فاخرة، إدارة ضيوف متكاملة وترفيه בלעדי.' },
    ],
    ctaTitle: 'هل أنت مستعد لتحويل عملك؟',
    ctaParagraph: 'ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.',
    ctaPrimaryButton: 'ابدأ الآن',
    ctaSecondaryButton: 'تعرف علينا أكثر',
    reachOut: 'تواصل معنا',
  },
  he: {
    pageTitle: 'ייעוץ דיגיטלי - פתרונות פורסטאקלי',
    heroTitle: 'חתונת יאכטה יוקרתית',
    heroParagraph: 'צאו לחגיגה מרהיבה על המים—חוויה של אלגנטיות, רומנטיקה ורגעים בלתי נשכחים בחתונה ייחודית על יאכטה יוקרתית.',
    featuresTitle: 'שדרוגי חתונה יוצאי דופן',
    featuresDescription: 'חגיגה מעוצבת על המים, השילוב בין עיצוב אלגנטי, מאכלים מותאמים ותכנון מומחה.',
    luxuryFeatures: [
      { icon: FaUmbrellaBeach, title: 'סידורי פרחים מותאמים', description: 'אמנות פרחים ייחודית לשדרוג החגיגה הימית שלך.' },
      { icon: FaUsers, title: 'שירותי אורחים VIP', description: 'שירות קונסיירז׳ אישי לחוויית יוקרה בלתי נשכחת.' },
      { icon: FaUtensils, title: 'קייטרינג גורמה', description: 'תפריטים מותאמים שאפו ע״י שפים מהשורה הראשונה, מוגשים באלגנטיות.' },
      { icon: FaMusic, title: 'בידור על הסיפון', description: 'מוזיקה חיה, די-ג׳ייז והופעות שעוצבו במיוחד לרגעים בלתי נשכחים.' },
      { icon: FaCameraRetro, title: 'צילום ווידאו', description: 'תיעוד כל רגע יקר עם צילום וסרטים בקולנוע.' },
      { icon: FaPalette, title: 'עיצוב אישי וסגנון', description: 'נושאים בלעדיים ועיצוב יוקרתי שישקף את סיפור האהבה שלך.' },
    ],
    benefitsTitle: 'חתונת יאכטה יוקרתית',
    benefitsDescription: 'שירותי חתונות יאכטה שלנו יוצרים חוויה ייחודית ובלתי נשכחת, המשלבת אלגנטיות קלאסית, אווירה רומנטית ונופים עוצרי נשימה של האוקיינוס. מהתכנון האישי ועד לפרטים המרהיבים, אנו מבטיחים שהיום שלך יהיה מושלם מוקף ביופי של הים.',
    benefitsList: [
      'יצירת חוויית חתונה אלגנטית ובלתי נשכחת על המים',
      'תכנון אישי ותשומת לב מדוקדקת לכל פרט',
      'נופים מרהיבים של האוקיינוס ורקע מדהים לטקס',
      'תיאום חלק להבטיח חגיגה נטולת לחץ',
      'מתקנים יוקרתיים ושירותי אורחים מותאמים',
      'תיעוד רגעים בלתי נשכחים עם צילום איקוני של חוף הים',
    ],
    galleryTitle: 'גלה את הנכסים המרהיבים שלנו',
    gallerySubtitle: 'צעדו לעולם של אלגנטיות ארכיטקטונית ומגורים מודרניים. האוסף שלנו משלב סגנון, נוחות ופונקציונליות ליצירת מרחבים שתרצו לקרוא להם בית.',
    faqsTitle: 'שאלות נפוצות',
    faqsSubtitle: 'קבלו תשובות לשאלות נפוצות בנוגע לשירותי הייעוץ הדיגיטלי שלנו',
    faqs: [
      { question: 'כמה זמן מראש מומלץ להזמין חתונת יאכטה יוקרתית?', answer: 'מומלץ להזמין לפחות 6 עד 12 חודשים מראש כדי להבטיח יאכטה ותאריך מועדפים, ולספק זמן לתכנון והתאמה אישית.' },
      { question: 'אילו אפשרויות התאמה אישית זמינות לחתונה?', answer: 'השירותים שלנו כוללים עיצוב מותאם אישית, תפריטים מיוחדים, אפשרויות בידור ופרחי ייחוד.' },
      { question: 'האם יש אפשרות לתפריטים מיוחדים עקב דרישות תזונתיות?', answer: 'בהחלט. צוות הקייטרינג שלנו יעבוד איתך ליצירת תפריטים מותאמים לכל הצרכים וההעדפות.' },
      { question: 'מה כלול בשירותי VIP על הסיפון?', answer: 'שירותים מיוחדים הכוללים תמיכה אישית, מתקנים יוקרתיים, ניהול אורחים ובידור בלעדי.' },
    ],
    ctaTitle: 'מוכנים לשנות את העסק שלכם?',
    ctaParagraph: 'התחילו היום עם ייעוץ חינם וגלו כיצד נוכל לעזור לכם להשיג את היעדים שלכם.',
    ctaPrimaryButton: 'התחל עכשיו',
    ctaSecondaryButton: 'למד עוד',
    reachOut: 'צור קשר',
  },
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
            <source src="images/video51.mp4" type="video/mp4" />
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
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
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
                  <img src="images/wedding.jpg" alt="Luxury Yacht" />
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
