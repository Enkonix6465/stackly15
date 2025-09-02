import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaShip,
  FaBuilding,
  FaBirthdayCake,
  FaMountain,
  FaGift,
  FaCalendarAlt,
  FaArrowRight,
  FaCheck,
  FaUsers,
  FaClock,
  FaAward,
} from 'react-icons/fa';
import { useLanguage } from '../context.jsx/LanguageContext';

const translations = {
  en: {
    pageTitle: "Our Services - ForStackly Business Solutions",
    heroTitle: "Our Services",
    heroParagraph: "From intimate gatherings to grand celebrations, we provide end-to-end event planning, design, and execution to make every occasion unforgettable.",
    servicesHeading: "Premium Event Management Services",
    servicesDescription: "We specialize in crafting unforgettable experiences from luxurious weddings to high-profile corporate galas. Our team takes care of every detail so you can focus on celebrating the moments that matter.With a seamless blend of creativity and precision, we design events that leave a lasting impression. Our trusted vendor network ensures premium venues, décor, and entertainment tailored to your vision.",
    servicesFeatures: [
      "End-to-end Event Planning",
      "Luxury Venue Selection",
      "Customized Décor & Styling",
      "Entertainment & Guest Management",
      "Seamless On-site Coordination"
    ],
    filterOptions: ["All", "Weddings", "Corporate", "Parties"],
    portfolioHeader: "Our Portfolio",
    portfolioDescription: "A glimpse of our premium event experiences",
    portfolioItems: [
      { id: 1, title: "Luxury Wedding", category: "Weddings", image: "images/portfolio2.jpg" },
      { id: 2, title: "Corporate Gala", category: "Corporate", image: "images/corporate Gala copy.jpg" },
      { id: 3, title: "Birthday Bash", category: "Parties", image: "images/portfolio1.jpg" },
      { id: 4, title: "Destination Event", category: "Weddings", image: "images/portfolio.jpg" },
      { id: 5, title: "Holiday Party", category: "Parties", image: "images/portfolio3.jpg" },
      { id: 6, title: "Annual Conference", category: "Corporate", image: "images/portfolio4 copy.jpg" }
    ],
    processHeader: "Our Proven Process",
    processDescription: "A systematic approach to delivering exceptional results",
    processSteps: [
      { step: "01", title: "Consultation & Visioning", description: "We collaborate closely to understand your event goals, preferences, and unique requirements, crafting a clear vision for success." },
      { step: "02", title: "Creative Planning & Design", description: "Our team develops a comprehensive event plan, including theme, logistics, vendor coordination, and timeline to bring your vision to life." },
      { step: "03", title: "Seamless Execution", description: "On the day of the event, we manage every detail with precision and professionalism, ensuring flawless delivery and guest satisfaction." },
      { step: "04", title: "Post-Event Support & Review", description: "We provide follow-up services, gather feedback, and analyze outcomes to continuously enhance future events and build lasting partnerships." }
    ],
    reachOut: "Reach Out Today",
    ctaTitle: "Ready to Transform Your Business?",
    ctaParagraph: "Get started today with a free consultation and discover how we can help you achieve your goals.",
    ctaButton: "Get Started",
    ctaSecondaryButton: "Learn More",
  },
  ar: {
    pageTitle: "خدماتنا - حلول الأعمال فورستاكلي",
    heroTitle: "خدماتنا",
    heroParagraph: "من اللقاءات الحميمة إلى الاحتفالات الكبرى، نوفر تخطيطًا كاملاً للفعالية، وتصميمًا، وتنفيذًا لجعل كل مناسبة لا تُنسى.",
    servicesHeading: "خدمات إدارة الأحداث الفاخرة",
    servicesDescription: "نتخصص في خلق تجارب لا تُنسى بدءًا من حفلات الزفاف الفاخرة وحتى الحفلات الرسمية الكبرى. يعتني فريقنا بكل التفاصيل لتتمكن من التركيز على الاحتفال باللحظات المهمة. بتوازن سلس بين الإبداع والدقة، نصمم فعاليات تترك انطباعًا دائمًا. يضمن شبكتنا الموثوقة من الموردين أماكن فاخرة، وزخارف، وترفيهًا مُخصصًا لرؤيتك.",
    servicesFeatures: [
      "تخطيط شامل للفعالية",
      "اختيار أماكن فاخرة",
      "زخرفة وتصميم حسب الطلب",
      "الترفيه وإدارة الضيوف",
      "تنسيق لا شمولي في الموقع"
    ],
    filterOptions: ["الكل", "حفلات زفاف", "شركة", "حفلات"],
    portfolioHeader: "معرض أعمالنا",
    portfolioDescription: "لمحة عن تجاربنا الفاخرة في تنظيم الفعاليات",
    portfolioItems: [
      { id: 1, title: "حفل زفاف فاخر", category: "حفلات زفاف", image: "images/portfolio2.jpg" },
      { id: 2, title: "حفلة شركة", category: "شركة", image: "images/corporate Gala copy.jpg" },
      { id: 3, title: "حفلة عيد ميلاد", category: "حفلات", image: "images/portfolio1.jpg" },
      { id: 4, title: "فعالية في الوجهة", category: "حفلات زفاف", image: "images/portfolio.jpg" },
      { id: 5, title: "حفلة عطلة", category: "حفلات", image: "images/portfolio3.jpg" },
      { id: 6, title: "مؤتمر سنوي", category: "شركة", image: "images/portfolio4 copy.jpg" }
    ],
    processHeader: "عمليتنا الموثوقة",
    processDescription: "نهج منهجي لتحقيق نتائج استثنائية",
    processSteps: [
      { step: "01", title: "الاستشارة ورسم الرؤية", description: "نتعاون عن كثب لفهم أهداف الفعالية وتفضيلاتك ومتطلباتك الفريدة، لصياغة رؤية واضحة للنجاح." },
      { step: "02", title: "التخطيط الإبداعي والتصميم", description: "يطور فريقنا خطة فعالية شاملة، تشمل الموضوع واللوجستيات والتنسيق مع الموردين والجدول الزمني لتحقيق رؤيتك." },
      { step: "03", title: "التنفيذ السلس", description: "في يوم الحدث، ندير كل التفاصيل بدقة واحتراف، لضمان تقديم مثالي ورضا الضيوف." },
      { step: "04", title: "الدعم والمراجعة بعد الحدث", description: "نوفر خدمات متابعة، ونجمع التعليقات، ونحلل النتائج لتحسين فعاليات المستقبل وبناء شراكات مستدامة." }
    ],
    reachOut: "تواصل معنا",
    ctaTitle: "هل أنت مستعد لتحويل عملك؟",
    ctaParagraph: "ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.",
    ctaButton: "ابدأ الآن",
    ctaSecondaryButton: "تعرف علينا أكثر",
  },
  he: {
    pageTitle: "השירותים שלנו - פתרונות עסקיים פורסטאקלי",
    heroTitle: "השירותים שלנו",
    heroParagraph: "מפגישות אינטימיות לחגיגות גדולות אנו מספקים תכנון, עיצוב, וביצוע מלא לאירועים שיהפכו כל הזדמנות לבלתי נשכחת.",
    servicesHeading: "שירותי ניהול אירועים יוקרתיים",
    servicesDescription: "אנו מתמחים ביצירת חוויות בלתי נשכחות, מחתונות יוקרה ועד גאלה עסקית ברמה גבוהה. הצוות שלנו דואג לכל פרט כדי שתוכלו להתמקד בחגיגות הרגעים החשובים. בשילוב מושלם בין יצירתיות לדיוק, אנו מעצבים אירועים שמותירים רושם מתמשך. רשת הספקים האמינה שלנו מבטיחה מקומות יוקרה, עיצוב והנאות מותאמות לרצונך.",
    servicesFeatures: [
      "תכנון אירועים מקיף",
      "בחירת מקומות יוקרתיים",
      "עיצוב וקישוט מותאם אישית",
      "ניהול אירוח ובידור",
      "תיאום מושלם באתר"
    ],
    filterOptions: ["הכל", "חתונות", "עסק", "מסיבות"],
    portfolioHeader: "תיק עבודות",
    portfolioDescription: "הצצה לחוויות האירועים היוקרתיות שלנו",
    portfolioItems: [
      { id: 1, title: "חתונת יוקרה", category: "חתונות", image: "images/portfolio2.jpg" },
      { id: 2, title: "אירוע חברה", category: "עסק", image: "images/corporate Gala copy.jpg" },
      { id: 3, title: "מסיבת יום הולדת", category: "מסיבות", image: "images/portfolio1.jpg" },
      { id: 4, title: "אירוע ייחודי", category: "חתונות", image: "images/portfolio.jpg" },
      { id: 5, title: "מסיבת חגים", category: "מסיבות", image: "images/portfolio3.jpg" },
      { id: 6, title: "ועידה שנתית", category: "עסק", image: "images/portfolio4 copy.jpg" }
    ],
    processHeader: "התהליך שלנו",
    processDescription: "גישה שיטתית לאירוע מושלם ותוצאות מעולות",
    processSteps: [
      { step: "01", title: "ייעוץ והגדרת חזון", description: "שיתוף פעולה להבנת המטרות והדרישות ליצירת חזון ברור." },
      { step: "02", title: "תכנון יצירתי ועיצוב", description: "צוותנו מפתח תכנית אירוע כוללת: עיצוב, לוגיסטיקה, תיאום." },
      { step: "03", title: "הוצאה לפועל חלקה", description: "ביום האירוע אנו דואגים לכל פרט במקצועיות." },
      { step: "04", title: "מעקב וביקורת לאחר האירוע", description: "מעקב ואיסוף תובנות לשיפור תמידי." }
    ],
    reachOut: "צור קשר",
    ctaTitle: "מוכנים לשנות את העסק שלכם?",
    ctaParagraph: "התחילו היום עם ייעוץ חינם וגלו כיצד נוכל לעזור לכם להשיג את היעדים שלכם.",
    ctaButton: "התחל עכשיו",
    ctaSecondaryButton: "למידע נוסף",
  }
};

const Services = () => {
  const { language } = useLanguage();
  const [portfolioFilter, setPortfolioFilter] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const isRTL = language === "ar" || language === "he";
  const t = translations[language] || translations['en'];

  useEffect(() => {
    document.title = t.pageTitle;
    setPortfolioFilter(t.filterOptions[0]);
  }, [language, t.pageTitle, t.filterOptions]);

  useEffect(() => {
    if (portfolioFilter === t.filterOptions[0]) {
      setFilteredItems(t.portfolioItems);
    } else {
      setFilteredItems(t.portfolioItems.filter(item => item.category === portfolioFilter));
    }
  }, [portfolioFilter, t]);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="images/video41.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title text-center">{t.heroTitle}</h1>
            <p className="hero-paragraph text-center">{t.heroParagraph}</p>
            <Link to="/contact" className="hero-button text-center">
              {t.reachOut}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-heading text-center">{t.servicesHeading}</h2>
        <div className="services-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="services-image"
          >
            <img src="images/luxury.jpg" alt="Luxury Event" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="services-content"
          >
            <p className="services-description">{t.servicesDescription}</p>
            <ul className="services-features">
              {t.servicesFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="portfolio-header text-center">
          <h2>{t.portfolioHeader}</h2>
          <p>{t.portfolioDescription}</p>
        </div>
        <div className="portfolio-filters text-center">
          {t.filterOptions.map((cat, idx) => (
            <button
              key={idx}
              className={portfolioFilter === cat ? "active" : ""}
              onClick={() => setPortfolioFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-card">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-header text-center">
          <h2>{t.processHeader}</h2>
          <p>{t.processDescription}</p>
        </div>
        <div className="process-steps">
          {t.processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="process-step"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay">
          <div className="cta-content text-center">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaParagraph}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                {t.ctaButton} <FaArrowRight />
              </Link>
              <Link to="/about" className="btn btn-outline">
                {t.ctaSecondaryButton}
              </Link>
            </div>
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

.hero-video {
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
  justify-content: center; /* vertical centering */
  text-align: center;
  color: #fff;
  max-width: 800px;
  z-index: 2;
  gap: 28px; /* spacing between elements */
  padding: 0 20px; /* base horizontal padding */
  box-sizing: border-box;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 0;
  opacity: 0;
  animation: slideIn 1s ease-out forwards 0.5s;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0,0,0,0.3);
  max-width: 100%;
  word-wrap: break-word;
}

.hero-paragraph {
  font-size: 1.25rem;
  margin: 0;
  opacity: 0;
  animation: fadeUp 1s ease-out forwards 1s;
  max-width: 100%;
  word-wrap: break-word;
  line-height: 1.5;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  hyphens: auto;
  overflow-wrap: break-word;
  word-break: break-word;
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
  cursor: pointer;
  min-width: 160px;
  box-sizing: border-box;
}

.hero-button:hover {
  background-color: #000;
  transform: scale(1.05);
}

/* Tablet view */
@media (max-width: 1024px) {
  .hero-content {
    max-width: 90vw;
    gap: 22px;
    padding: 0 18px;
  }

  .hero-title {
    font-size: 2.2rem;
    line-height: 1.15;
  }

  .hero-paragraph {
    font-size: 1.1rem;
    line-height: 1.4;
  }
  
  .hero-button {
    padding: 12px 32px;
    font-size: 1rem;
  }
}

/* Mobile view */
@media (max-width: 700px) {
  .hero-content {
    max-width: 95vw;
    padding: 0 12px;
    gap: 18px;
  }

   .hero-video {
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
  }

  .hero-title {
    font-size: 2rem;
    line-height: 1.25;
  }

  .hero-paragraph {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .hero-button {
    font-size: 1rem;
    padding: 12px 28px;
    min-width: 140px;
  }
}

/* Small Mobile view */
@media (max-width: 480px) {
  .hero-content {
    max-width: 100vw;
    padding: 0 14px;
    gap: 14px;
  }

   .hero-video {
    width: 100vw;
    height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
  }

  .hero-title {
    font-size: 1.5rem;
    line-height: 1.3;
  }

  .hero-paragraph {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .hero-button {
    width: 100%;
    padding: 12px 0;
    font-size: 0.95rem;
    min-width: 0;
  }
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


/* Animations */
@keyframes slideIn {
  0% { opacity: 0; transform: translateY(-20px);}
  100% { opacity: 1; transform: translateY(0);}
}
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
}

/* Additional hero-text styling */
.hero-text h1 {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 20px;
  color: white;
  max-width: 100%;
  word-wrap: break-word;
  text-shadow: 0 2px 14px rgba(0,0,0,0.4);
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
  max-width: 100%;
  word-wrap: break-word;
  hyphens: auto;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-visual {
  position: relative;
}

.hero-image {
  position: relative;
  border-radius: 200px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  width: 300px;
  height: 300px;
  max-width: 100%;
  margin: 0 auto;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* float animation */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Card styles */
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




.services-section {
color: var(--text-color);
  background: var(--bg-color);
  padding: 2rem 2rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  color: var(--text-color);
}

.services-heading {
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--heading-color);
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.services-image img {
  width: 100%;
  height: 420px;
  border-radius: 20px;
  box-shadow: var(--shadow);
  object-fit: cover;
  background: var(--card-bg);
}

.services-content {
  text-align: left;
  justify-content: center;
  color: var(--text-color);
}

.services-text {
  color: var(--text-color);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1.05rem;
  text-align: justify;
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.services-item {
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--text-color);
}


.services-item .bullet {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: var(--text-color);
  border-radius: 50%;
  margin-right: 10px;
}

@media (max-width: 480px) {
  .services-content {
    align-items: flex-start;
    text-align: left;
  }
  .services-description {
    max-width: 95vw;
    margin: 0 0 1.4rem 0;
    text-align: left;
    font-size: 0.98rem;
    line-height: 1.38;
  }
  .services-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
    font-size: 0.99rem;
    text-align: left;
    color: #fff;
  }
  .services-features li {
    width: 100%;
    padding: 2px 0;
    border-radius: 6px;
  }
}




/* Responsive adjustments */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem; /* Reduce gap between cards on mobile */
  }

  .services-section {
    padding: 1rem; /* Reduce section padding for mobile */
  }

  .services-heading {
    font-size: 1.1rem; /* Slightly smaller heading for mobile */
    margin-bottom: 1.5rem; /* Reduce spacing below the heading */
  }

  .services-content {
    text-align: center;
    padding: 0 0.5rem; /* Add horizontal padding for readability */
  }

  .services-text {
    font-size: 0.95rem; /* Decrease paragraph font size */
    margin-bottom: 1rem; /* Decrease space below paragraph */
  }

  .services-item {
    font-size: 0.95rem; /* Decrease feature bullet font size */
    margin-bottom: 0.5rem; /* Reduce margin between items */
  }

  .services-image img {
    height: 240px; /* Reduce image height for mobile */
  }
}





.portfolio-section {
  background: var(--bg-color);
  color: var(--text-color);
  padding: 4rem 2rem;
  font-family: 'Poppins', sans-serif;
}

.portfolio-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--heading-color);
}

.portfolio-header p {
  color: var(--text-muted);
  margin-bottom: 2rem;
  text-align: center;
}

.portfolio-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.portfolio-filters button {
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.portfolio-filters button.active,
.portfolio-filters button:hover {
  background: var(--primary-color);
  color: #fff;
  box-shadow: var(--shadow);
}

.portfolio-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;      /* centers the entire row of cards */
  gap: 1.5rem;                  /* spacing between cards */
}

@media (max-width: 900px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .portfolio-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

.portfolio-card {
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform 0.3s;
  cursor: pointer;
}

.portfolio-card:hover {
  transform: scale(1.05);
}

.portfolio-card img {
  width: 100%;
  height: 16rem;           /* Fixed height, e.g. 16rem or whatever you want */
  object-fit: cover;       /* Ensures the image fills the area, cropped if necessary */
  display: block;
}


.portfolio-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--heading-color);
  padding: 1rem;
  margin-bottom: 0;
}

.portfolio-card p {
  color: var(--text-muted);
  padding: 0 1rem 1rem 1rem;
  margin: 0;
}
  @media (max-width: 1024px) {
  .portfolio-section {
    padding: 2rem 0.8rem;
  }
  .portfolio-header h2 {
    font-size: 2rem;
  }
  .portfolio-grid {
    gap: 1rem;
  }
  .portfolio-filters {
    gap: 0.6rem;
  }
  .portfolio-filters button {
    padding: 0.4rem 1.1rem;
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .portfolio-section {
    padding: 1.3rem 0.2rem;
  }
  .portfolio-header h2 {
    font-size: 1.32rem;
  }
  .portfolio-filters {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
    padding: 0 2vw;
  }
  .portfolio-filters button {
    font-size: 0.97rem;
    padding: 0.38rem 0.9rem;
    min-width: 90px;
    margin-bottom: 5px;
    border-radius: 25px;
  }
  .portfolio-grid {
    flex-direction: column;
    gap: 0.9rem;
  }
}

@media (max-width: 400px) {
  .portfolio-header h2 {
    font-size: 1rem;
  }
  .portfolio-filters button {
    font-size: 0.94rem;
    padding: 0.3rem 0.6rem;
    min-width: 68px;
  }
}


.services-grid-section {
  background: var(--bg-color);
  padding:0 0;
}

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 10px;
      }

        .service-card {
          background: var(--card-bg);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .service-card:hover {
          box-shadow: var(--shadow-hover);
        }

        .service-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-image img {
          transform: scale(1.1);
        }

        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-icon {
          font-size: 3rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .service-content {
          padding: 30px;
          background: var(--card-bg);
        }

        .service-content h3 {
          font-size: 1.5rem;
          color: var(--heading-color);
          margin-bottom: 15px;
        }

        .service-content p {
          color: var(--text-color);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .service-features {
          margin-bottom: 25px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 0.9rem;
          color: var(--text-color);
        }

        .check-icon {
          color: var(--accent-color);
          font-size: 0.8rem;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .service-link:hover {
          transform: translateX(5px);
        }


        @media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;    /* Single column for mobile */
    gap: 20px;                     /* Slightly reduced gap */
    margin-top: 10px;
  }

  .service-content {
    text-align: justify;           /* Justify text content on mobile */
    padding: 20px;                 /* Slightly less padding on smaller screens */
  }

  .service-content h3 {
    font-size: 1.3rem;             /* Slightly smaller heading */
  }

  .service-content p,
  .feature-item {
    font-size: 0.95rem;            /* Smaller body and feature text for readability */
    line-height: 1.5;
  }

  .service-image {
    height: 180px;                 /* Slightly shorter image height */
  }

  .service-icon {
    font-size: 2.5rem;             /* Smaller icons on mobile */
  }
}


        .process-section {
          background: var(--sidebar-bg);
          padding: 0 0;
        }

        .process-steps {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          max-width: 800px;
          margin: 60px auto 0;
        }

        .process-step {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  padding: 30px;
  background: var(--card-bg);
  border-radius: 15px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: box-shadow 0.4s, transform 0.4s, background 0.4s;
  will-change: transform, box-shadow;
}

.process-step:hover {
  background: rgba(255, 255, 255, 0.08); /* subtle light overlay for dark mode */
  box-shadow: var(--shadow-hover);
  transform: translateY(-8px) scale(1.03);
}

@keyframes processFadeIn {
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
}

.process-step {
  animation: processFadeIn 0.8s cubic-bezier(.43,.11,.45,.94);
}
  
@media (prefers-color-scheme: light) {
  .process-step:hover {
    background: var(--primary-color-light, #eef5ff);
  }
}

/* Dark mode hover - subtle white overlay */
@media (prefers-color-scheme: dark) {
  .process-step:hover {
    background: rgba(255, 255, 255, 0.08);
  }
}



        .step-number {
  font-size: 3rem;
  font-weight: 900;                  /* Even bolder for visibility */
  color: var(--primary-color);       /* Your accent color variable */
  opacity: 0.7;                      /* Increased opacity for stronger visibility */
  flex-shrink: 0;
  width: 80px;
  letter-spacing: 1px;               /* Optional: adds clarity */
  transition: transform 0.3s, opacity 0.3s; /* Smooth animation on hover/focus */
}


        .step-content h4 {
          font-size: 1.3rem;
          color: var(--heading-color);
          margin-bottom: 10px;
        }

        .step-content p {
          color: var(--text-color);
          line-height: 1.6;
        }
        @media (max-width: 768px) {
  .process-step {
    flex-direction: column;
    align-items: center;
    text-align: justify; /* Justify content text */
    padding: 20px;
  }

  .step-number {
    width: auto;
    font-size: 2.5rem;
    opacity: 1;
    color: var(--primary-color);
    margin-bottom: 15px;
    align-self: center; /* Center horizontally */
    letter-spacing: 1.5px;
  }

  .step-content {
    width: 100%;
  }

  .step-content h4 {
    font-size: 1.1rem;
    text-align: center; /* Center heading */
    margin-bottom: 10px;
  }

  .step-content p {
    font-size: 1rem;
    line-height: 1.5;
  }
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

        .section-header {
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: var(--heading-color);
        }

        .section-header p {
          font-size: 1.2rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .step-number {
            width: auto;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .service-content {
            padding: 20px;
          }

      `}</style>
    </div>
  );
};

export default Services;
