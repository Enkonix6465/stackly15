import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaEye,
  FaUserFriends,
  FaBook,
} from "react-icons/fa";
import { useLanguage } from "../context.jsx/LanguageContext";

const translations = {
  en: {
    pageTitle: "Home Alternative - ForStackly Business Solutions",
    heroTitle: "Designing Events, Creating Memories",
    heroParagraph:
      "We are a passionate team of event planners dedicated to crafting seamless, stylish, and stress-free celebrations. From concept to execution, we handle every detail so you can focus on enjoying the moment.",
    reachOut: "Reach Out Today",
    servicesTitle: "Services & Expertise",
    services: [
      {
        title: "Corporate Events",
        desc: "Seminars, conferences, and team-building.",
        imgSrc: "images/event1.jpg",
      },
      {
        title: "Weddings",
        desc: "Romantic, memorable celebrations.",
        imgSrc: "images/event2.jpg",
      },
      {
        title: "Product Launches",
        desc: "Impactful events for new products.",
        imgSrc: "images/event3.jpg",
      },
      {
        title: "Social Gatherings",
        desc: "Creative parties and special occasions.",
        imgSrc: "images/event4.jpg",
      },
    ],
    upcomingTitle: { main: "Upcoming", highlight: "Events" },
    filters: {
      weekdayPlaceholder: "Weekdays",
      weekdays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      eventTypePlaceholder: "Event type",
      eventTypes: [
        { value: "conference", label: "Conference" },
        { value: "workshop", label: "Workshop" },
        { value: "seminar", label: "Seminar" },
        { value: "expo", label: "Expo" },
        { value: "wedding", label: "Wedding" },
        { value: "corporate", label: "Corporate" },
        { value: "party", label: "Party" },
      ],
      categoryPlaceholder: "Any category",
      categories: [
        { value: "business", label: "Business" },
        { value: "marketing", label: "Marketing" },
        { value: "health", label: "Health" },
        { value: "art", label: "Art" },
        { value: "music", label: "Music" },
        { value: "sports", label: "Sports" },
      ],
    },
    events: [
      {
        img: "images/upcoming.jpg",
        badge: "FREE",
        title:
          "BestSeller Book Bootcamp - Write, Market & Publish Your Book - Lucknow",
        date: "Saturday, March 18, 9.30PM",
        location: "ONLINE EVENT - Attend anywhere",
        weekday: "saturday",
        eventType: "conference",
        category: "business",
      },
      {
        img: "images/upcoming1.jpg",
        badge: "FREE",
        title: "Creative Marketing Workshop - Boost Your Brand Awareness",
        date: "Sunday, March 19, 10.00AM",
        location: "New York, NY",
        weekday: "sunday",
        eventType: "workshop",
        category: "marketing",
      },
      {
        img: "images/upcoming2.jpg",
        badge: "PAID",
        title: "Tech Startup Pitch Night - Showcase Your Ideas",
        date: "Wednesday, March 22, 6.00PM",
        location: "San Francisco, CA",
        weekday: "wednesday",
        eventType: "conference",
        category: "business",
      },
      {
        img: "images/upcoming3.jpg",
        badge: "FREE",
        title: "Healthy Living Seminar - Nutrition & Wellness",
        date: "Friday, March 24, 2.00PM",
        location: "Online Event",
        weekday: "friday",
        eventType: "seminar",
        category: "health",
      },
      {
        img: "images/upcoming4.jpg",
        badge: "PAID",
        title: "Art & Design Expo - Contemporary Creatives Meet",
        date: "Saturday, March 25, 11.00AM",
        location: "Chicago, IL",
        weekday: "saturday",
        eventType: "expo",
        category: "art",
      },
      {
        img: "images/upcoming5.jpg",
        badge: "FREE",
        title: "Business Growth Masterclass - Strategies for Scaling",
        date: "Monday, March 27, 9.00AM",
        location: "Online Webinar",
        weekday: "monday",
        eventType: "conference",
        category: "business",
      },
    ],
    noEventsMsg: "No events match your filter. Please try different options.",
    loadMore: "Load More",
    companyValuesTitle: "Company Values",
    companyValuesDesc:
      "We believe in honest communication and ethical business, building trust at every step.",
    features: [
      {
        icon: FaEye,
        title: "Integrity & Transparency",
        description:
          "We maintain open and honest interactions at all times. Clients always know where they stand, ensuring trust and accountability.",
      },
      {
        icon: FaUserFriends,
        title: "Client-Centered Culture",
        description:
          "Your goals guide our work. We listen actively, understand your needs, and deliver tailored solutions that put your interests first.",
      },
      {
        icon: FaBook,
        title: "Continuous Learning",
        description:
          "We’re committed to growth—personally and professionally. Our team consistently embraces new ideas and technologies.",
      },
    ],
    ctaTitle: "Ready to Transform Your Business?",
    ctaDesc:
      "Get started today with a free consultation and discover how we can help you achieve your goals.",
    ctaBtnStart: "Start Your Journey",
    ctaBtnLearn: "Learn More About Us",
  },

  // Arabic translations (must be replaced with real translations)
  ar: {
    pageTitle: "الصفحة البديلة - حلول أعمال فورستاكلي",
    heroTitle: "تصميم الفعاليات، خلق الذكريات",
    heroParagraph:
      "نحن فريق شغوف من منظمي الفعاليات ملتزمون بصنع احتفالات أنيقة وسلسة وخالية من التوتر. من الفكرة إلى التنفيذ، نتولى كل التفاصيل لتستمتع باللحظة.",
    reachOut: "تواصل معنا اليوم",
    servicesTitle: "الخدمات والخبرة",
    services: [
      {
        title: "الفعاليات الشركاتية",
        desc: "ندوات، مؤتمرات، وبناء فرق العمل.",
        imgSrc: "images/event1.jpg",
      },
      {
        title: "حفلات الزفاف",
        desc: "احتفالات رومانسية ولا تُنسى.",
        imgSrc: "images/event2.jpg",
      },
      {
        title: "إطلاق المنتجات",
        desc: "فعاليات مؤثرة للمنتجات الجديدة.",
        imgSrc: "images/event3.jpg",
      },
      {
        title: "التجمعات الاجتماعية",
        desc: "حفلات مبدعة ومناسبات خاصة.",
        imgSrc: "images/event4.jpg",
      },
    ],
    upcomingTitle: { main: "الأحداث", highlight: "القادمة" },
    filters: {
      weekdayPlaceholder: "أيام الأسبوع",
      weekdays: [
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
        "الأحد"
      ],
      eventTypePlaceholder: "نوع الحدث",
      eventTypes: [
        { value: "conference", label: "مؤتمر" },
        { value: "workshop", label: "ورشة عمل" },
        { value: "seminar", label: "ندوة" },
        { value: "expo", label: "معرض" },
        { value: "wedding", label: "زفاف" },
        { value: "corporate", label: "شركة" },
        { value: "party", label: "حفلة" },
      ],
      categoryPlaceholder: "أي فئة",
      categories: [
        { value: "business", label: "أعمال" },
        { value: "marketing", label: "تسويق" },
        { value: "health", label: "صحة" },
        { value: "art", label: "فن" },
        { value: "music", label: "موسيقى" },
        { value: "sports", label: "رياضة" },
      ],
    },
    events: [
      {
        img: "images/upcoming.jpg",
        badge: "مجاني",
        title:
          "أفضل دورة تدريبية لكتابة وتسويق ونشر كتابك - لاكناو",
        date: "السبت، 18 مارس، 9:30 مساءً",
        location: "فعالية عبر الإنترنت - احضر من أي مكان",
        weekday: "saturday",
        eventType: "conference",
        category: "business",
      },
      {
        img: "images/upcoming1.jpg",
        badge: "مجاني",
        title: "ورشة عمل تسويق إبداعية - عزز وعي علامتك التجارية",
        date: "الأحد، 19 مارس، 10:00 صباحاً",
        location: "نيويورك، نيويورك",
        weekday: "sunday",
        eventType: "workshop",
        category: "marketing",
      },
      {
        img: "images/upcoming2.jpg",
        badge: "مدفوع",
        title: "حفل عرض لشركات التكنولوجيا الناشئة - قدم أفكارك",
        date: "الأربعاء، 22 مارس، 6:00 مساءً",
        location: "سان فرانسيسكو، كاليفورنيا",
        weekday: "wednesday",
        eventType: "conference",
        category: "business",
      },
      {
        img: "images/upcoming3.jpg",
        badge: "مجاني",
        title: "ندوة العيش الصحي - التغذية والعافية",
        date: "الجمعة، 24 مارس، 2:00 مساءً",
        location: "فعالية عبر الإنترنت",
        weekday: "friday",
        eventType: "seminar",
        category: "health",
      },
      {
        img: "images/upcoming4.jpg",
        badge: "مدفوع",
        title: "معرض الفن والتصميم - لقاء المبدعين المعاصرين",
        date: "السبت، 25 مارس، 11:00 صباحاً",
        location: "شيكاغو، إلينوي",
        weekday: "saturday",
        eventType: "expo",
        category: "art",
      },
      {
        img: "images/upcoming5.jpg",
        badge: "مجاني",
        title: "ماستر كلاس لنمو الأعمال - استراتيجيات التوسع",
        date: "الإثنين، 27 مارس، 9:00 صباحاً",
        location: "ندوة عبر الإنترنت",
        weekday: "monday",
        eventType: "conference",
        category: "business",
      },
    ],
    noEventsMsg: "لا توجد فعاليات تطابق تصفيتك. يرجى تجربة خيارات مختلفة.",
    loadMore: "تحميل المزيد",
    companyValuesTitle: "قيم الشركة",
    companyValuesDesc:
      "نؤمن بالتواصل الصادق والتجارة الأخلاقية، وبناء الثقة في كل خطوة.",
    features: [
      {
        icon: FaEye,
        title: "النزاهة والشفافية",
        description:
          "نحافظ على تفاعلات مفتوحة وصادقة في جميع الأوقات. يعرف العملاء دائمًا موقفهم، مما يضمن الثقة والمسؤولية.",
      },
      {
        icon: FaUserFriends,
        title: "ثقافة موجهة للعملاء",
        description:
          "أهدافك توجه عملنا. نستمع بفهم ونعمل على تقديم حلول مصممة خصيصًا تضع مصالحك أولاً.",
      },
      {
        icon: FaBook,
        title: "التعلم المستمر",
        description:
          "نلتزم بالنمو شخصيًا ومهنيًا، ونتبنّى أفكارًا وتقنيات جديدة بانتظام.",
      },
    ],
    ctaTitle: "هل أنت مستعد لتحويل عملك؟",
    ctaDesc:
      "ابدأ اليوم مع استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك.",
    ctaBtnStart: "ابدأ رحلتك",
    ctaBtnLearn: "تعرف علينا أكثر",
  },

  he: {
    pageTitle: "דף חלופי - פתרונות עסקיים של פורסטאקלי",
    heroTitle: "עיצוב אירועים, יצירת זיכרונות",
    heroParagraph:
      "אנו צוות נלהב של מתכנני אירועים המחויב ליצירת חגיגות חלקות, אלגנטיות וללא מתח. מהרעיון ועד הביצוע, אנו מטפלים בכל פרט כדי שתוכלו להתרכז בהנאה מהרגע.",
    reachOut: "צרו קשר היום",
    servicesTitle: "שירותים ומומחיות",
    services: [
      {
        title: "אירועים עסקיים",
        desc: "סמינרים, כנסים ובניית צוות.",
        imgSrc: "images/event1.jpg",
      },
      {
        title: "חתונות",
        desc: "חגיגות רומנטיות ובלתי נשכחות.",
        imgSrc: "images/event2.jpg",
      },
      {
        title: "השקות מוצרים",
        desc: "אירועים משמעותיים למוצרים חדשים.",
        imgSrc: "images/event3.jpg",
      },
      {
        title: "מפגשים חברתיים",
        desc: "מסיבות יצירתיות והזדמנויות מיוחדות.",
        imgSrc: "images/event4.jpg",
      },
    ],
    upcomingTitle: { main: "אירועים", highlight: "קרובים" },
    filters: {
      weekdayPlaceholder: "ימי השבוע",
      weekdays: [
        "שני",
        "שלישי",
        "רביעי",
        "חמישי",
        "שישי",
        "שבת",
        "ראשון",
      ],
      eventTypePlaceholder: "סוג אירוע",
      eventTypes: [
        { value: "conference", label: "כנס" },
        { value: "workshop", label: "סדנא" },
        { value: "seminar", label: "סמינר" },
        { value: "expo", label: "תערוכה" },
        { value: "wedding", label: "חתונה" },
        { value: "corporate", label: "עסקי" },
        { value: "party", label: "מסיבה" },
      ],
      categoryPlaceholder: "כל קטגוריה",
      categories: [
        { value: "business", label: "עסקים" },
        { value: "marketing", label: "שיווק" },
        { value: "health", label: "בריאות" },
        { value: "art", label: "אמנות" },
        { value: "music", label: "מוזיקה" },
        { value: "sports", label: "ספורט" },
      ],
    },
    events: [
      {
        img: "images/upcoming.jpg",
        badge: "חינם",
        title:
          "סדנת כתיבת ספרים למכירה - כתיבה, שיווק ופרסום - לקנאוו",
        date: "שבת, 18 במרץ, 21:30",
        location: "אירוע מקוון - ניתן להשתתף מכל מקום",
        weekday: "saturday",
        eventType: "conference",
        category: "business",
      },
      {
        img: "images/upcoming1.jpg",
        badge: "חינם",
        title: "סדנת שיווק יצירתית - הגבר רעיון המותג שלך",
        date: "ראשון, 19 במרץ, 10:00",
        location: "ניו יורק, ניו יורק",
        weekday: "sunday",
        eventType: "workshop",
        category: "marketing",
      },
      {
        img: "images/upcoming2.jpg",
        badge: "בתשלום",
        title: "ערב הצגת רעיונות סטארטאפ טכנולוגי",
        date: "רביעי, 22 במרץ, 18:00",
        location: "סן פרנסיסקו, קליפורניה",
        weekday: "wednesday",
        eventType: "conference",
        category: "business",
      },
      {
        img: "images/upcoming3.jpg",
        badge: "חינם",
        title: "סמינר חיים בריאים - תזונה ובריאות",
        date: "שישי, 24 במרץ, 14:00",
        location: "אירוע מקוון",
        weekday: "friday",
        eventType: "seminar",
        category: "health",
      },
      {
        img: "images/upcoming4.jpg",
        badge: "בתשלום",
        title: "תערוכת אמנות ועיצוב - מפגש יצירתי עכשווי",
        date: "שבת, 25 במרץ, 11:00",
        location: "שיקגו, אילינוי",
        weekday: "saturday",
        eventType: "expo",
        category: "art",
      },
      {
        img: "images/upcoming5.jpg",
        badge: "חינם",
        title: "כנס גידול עסקים - אסטרטגיות להרחבה",
        date: "שני, 27 במרץ, 9:00",
        location: "וובינר מקוון",
        weekday: "monday",
        eventType: "conference",
        category: "business",
      },
    ],
    noEventsMsg: "אין אירועים התואמים את המסנן שלך. נא נסה אפשרויות שונות.",
    loadMore: "טען עוד",
    companyValuesTitle: "ערכי החברה",
    companyValuesDesc:
      "אנו מאמינים בתקשורת הוגנת ובעסקים אתיים, ובונים אמון בכל שלב.",
    features: [
      {
        icon: FaEye,
        title: "יושרה ושקיפות",
        description:
          "אנו שומרים על אינטראקציות פתוחות והוגנות כל הזמן. הלקוחות תמיד יודעים את המצב, ומקבלים אמון ואחריות.",
      },
      {
        icon: FaUserFriends,
        title: "תרבות ממוקדת לקוח",
        description:
          "המטרות שלך מנחות את עבודתנו. אנו מקשיבים, מבינים את הצרכים שלך ומספקים פתרונות מותאמים המקדימים את האינטרסים שלך.",
      },
      {
        icon: FaBook,
        title: "למידה מתמשכת",
        description:
          "אנו מחויבים לצמיחה אישית ומקצועית. הצוות שלנו מאמץ רעיונות וטכנולוגיות חדשות בהתמדה.",
      },
    ],
    ctaTitle: "מוכנים לשנות את העסק שלכם?",
    ctaDesc:
      "התחילו היום עם ייעוץ חינם וגלו כיצד נוכל לעזור לכם להשיג את היעדים שלכם.",
    ctaBtnStart: "התחילו את המסע שלכם",
    ctaBtnLearn: "למדו עוד עלינו",
  },
};

const Home2 = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [selectedWeekday, setSelectedWeekday] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredEvents = t.events.filter(
    (event) =>
      (selectedWeekday === "" || event.weekday === selectedWeekday) &&
      (selectedEventType === "" || event.eventType === selectedEventType) &&
      (selectedCategory === "" || event.category === selectedCategory)
  );

  const visibleEvents = filteredEvents.slice(0, visibleCount);

  const handleLoadMore = () => {
    if (visibleCount >= filteredEvents.length) {
      alert(t.noEventsMsg);
      return;
    }
    setVisibleCount((prev) => Math.min(prev + 3, filteredEvents.length));
  };

  useEffect(() => {
    document.title = t.pageTitle;
  }, [t.pageTitle]);

  return (
    <div className="home2-page" dir={["ar", "he"].includes(language) ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src="images/video31.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <motion.h1 className="hero-title animate-slide-in">{t.heroTitle}</motion.h1>
            <motion.p className="hero-paragraph animate-fade-up">{t.heroParagraph}</motion.p>
            <Link to="/contact" className="hero-button animate-fade-up-delayed">{t.reachOut}</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="section-title">{t.servicesTitle}</h2>
          <div className="services-grid">
            {t.services.map((service, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-image-banner"><img src={service.imgSrc} alt={service.title} /></div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events-section">
        <div className="upcoming-events-container">
          <div className="upcoming-events-title">
            <span className="events-main-title">{t.upcomingTitle.main} </span>
            <span className="events-highlight">{t.upcomingTitle.highlight}</span>
          </div>
          <div className="events-filters">
            <div className="filter-card">
              <select
                className="filter-select"
                aria-label={t.filters.weekdayPlaceholder}
                value={selectedWeekday}
                onChange={(e) => setSelectedWeekday(e.target.value)}
              >
                <option value="">{t.filters.weekdayPlaceholder}</option>
                {t.filters.weekdays.map((d) => (
                  <option key={d.toLowerCase()} value={d.toLowerCase()}>{d}</option>
                ))}
              </select>
            </div>
            <div className="filter-card">
              <select
                className="filter-select"
                aria-label={t.filters.eventTypePlaceholder}
                value={selectedEventType}
                onChange={(e) => setSelectedEventType(e.target.value)}
              >
                <option value="">{t.filters.eventTypePlaceholder}</option>
                {t.filters.eventTypes.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
            <div className="filter-card">
              <select
                className="filter-select"
                aria-label={t.filters.categoryPlaceholder}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">{t.filters.categoryPlaceholder}</option>
                {t.filters.categories.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="events-grid">
          {visibleEvents.length > 0 ? visibleEvents.map((event, idx) => (
            <div className="event-card" key={idx}>
              <div className="event-image-wrap">
                <img src={event.img} alt={event.title} />
                <span className="event-badge">{event.badge}</span>
              </div>
              <div className="event-details">
                <div className="event-title">{event.title}</div>
                <div className="event-date">{event.date}</div>
                <div className="event-location">{event.location}</div>
              </div>
            </div>
          )) : (
            <p style={{gridColumn: "1 / -1", textAlign: "center", fontStyle: "italic", padding: "40px 0"}}>
              {t.noEventsMsg}
            </p>
          )}
        </div>
        <div style={{textAlign: "center", marginTop: "24px"}}>
          <button onClick={handleLoadMore} className="load-more-btn">{t.loadMore}</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div className="section-header text-center" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}>
            <h2>{t.companyValuesTitle}</h2>
            <p>{t.companyValuesDesc}</p>
          </motion.div>
          <div className="features-grid">
            {t.features.map(({ icon: Icon, title, description }, idx) => (
              <motion.div key={idx} className="feature-card" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{delay: idx * 0.2}} viewport={{once: true}} whileHover={{y: -10}}>
                <div className="feature-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay">
          <div className="container">
            <motion.div className="cta-content text-center" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: true}}>
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaDesc}</p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">{t.ctaBtnStart} <FaArrowRight /></Link>
                <Link to="/about" className="btn btn-outline btn-large">{t.ctaBtnLearn}</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home2-page {
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


.services-section {
  width: 100%;
  background: var(--bg-color);
  padding: 40px 0;
}

.services-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 40px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  justify-content: center;
}

.service-card {
  background: var(--card-bg);
  box-shadow: var(--shadow);
  border-radius: 18px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0;
  transition: transform 0.22s ease, box-shadow 0.35s ease;
  cursor: pointer;
  min-height: 290px;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: var(--shadow-hover);
}

.service-image-banner {
  width: 100%;
  height: 130px;
  background: var(--sidebar-bg);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-image-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.service-title {
  margin: 22px 12px 12px 12px;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--heading-color);
  line-height: 1.2;
  min-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-desc {
  margin: 0 20px 24px 20px;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.5;
  min-height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Tablet (2 per row) */
@media (max-width: 990px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .service-card {
    min-height: 240px;
  }
  .service-image-banner {
    height: 100px;
  }
  .service-title {
    font-size: 1.1rem;
  }
  .service-desc {
    font-size: 0.95rem;
    min-height: 48px;
  }
}

/* Mobile (1 per row) */
@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .service-card {
    min-height: 180px;
  }
  .service-image-banner {
    height: 72px;
  }
  .service-title {
    font-size: 1rem;
  }
  .service-desc {
    font-size: 0.9rem;
    min-height: 36px;
  }
}

.upcoming-events-section {
  width: 100%;
  background: #224DB7; /* Updated background */
  padding: 20px 0 20px 0;
  color: white; /* For better contrast */
}

.upcoming-events-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.upcoming-events-title {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
}

.events-main-title {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  font-family: inherit;
}

.events-highlight-title {
  font-size: 2rem;
  font-weight: 700;
  color: #000; /* Accent color for highlight */
  font-family: inherit;
}

.events-filters {
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
}

.filter-card {
  background: #000; /* Slightly darker blue */
  border-radius: 8px;
  border: 1px solid #142f67; /* Darker border */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  padding: 4px 14px;
  cursor: pointer;
  transition: box-shadow 0.22s, border-color 0.3s;
}

.filter-card:hover {
  border-color: #fff;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.5);
}

.filter-select {
  width: 100%;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  appearance: none;
  padding: 8px 36px 8px 12px; /* top right bottom left */

  border-radius: 6px;
  outline: none;
  /* Add custom arrow */
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3csvg fill='%23fff' height='14' viewBox='0 0 24 24' width='14' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 14px;
}
  .filter-select:focus {
  outline: none;
  box-shadow: none;
}


.filter-select option {
  background: #224db7;
  color: white;
}

@media (max-width: 990px) {
  .upcoming-events-container {
    flex-direction: column;
    align-items: flex-start;
  }
  .upcoming-events-title {
    font-size: 1.6rem;
    margin-bottom: 12px;
  }
  .events-filters {
    margin-top: 18px;
    gap: 16px;
  }
  .filter-card {
    min-width: 100%;
  }
  .filter-select {
    padding: 10px;
  }
}

@media (max-width: 600px) {
  .upcoming-events-title {
    font-size: 1.3rem;
    flex-direction: column;
    gap: 6px;
  }
  .events-filters {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
  .filter-card {
    min-width: 100%;
  }
}

.events-section {
  width: 100%;
  background: var(--bg-color);
  padding: 40px 0;
}

.events-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.event-card {
  background: var(--card-bg);
  box-shadow: var(--shadow);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  transition: box-shadow 0.22s, transform 0.22s;
  position: relative;
  /* For theme: light/dark auto! */
}

.event-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-5px) scale(1.02);
}

.event-image-wrap {
  width: 100%;
  height: 240px;
  position: relative;
  background: var(--border-light);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.event-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 4px 14px;
  background: var(--primary-color);
  color: #fff;
  font-size: 0.92rem;
  font-weight: 600;
  border-radius: 7px;
  letter-spacing: 1px;
  box-shadow: var(--shadow-light);
}

.event-details {
  padding: 18px 16px 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.event-title {
  color: var(--heading-color);
  font-size: 1.12rem;
  font-weight: 600;
  margin-bottom: 6px;
  line-height: 1.25;
  min-height: 46px;
  text-align: left;
}

.event-date {
  font-size: 0.98rem;
  color: var(--primary-color);
  font-weight: 500;
  text-align: left;
}

.event-location {
  font-size: 0.95rem;
  color: var(--text-muted);
  text-align: left;
}

/* Responsive: 2 per row tablet, 1 per row mobile */
@media (max-width: 990px) {
  .events-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 600px) {
  .events-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .event-card {
    min-height: 220px;
  }
  .event-image-wrap {
    height: 120px;
  }
  .event-details {
    padding: 11px 8px 5px 8px;
  }
}
  .load-more-btn {
  padding: 12px 40px;
  font-size: 1rem;
  font-family: 'Product Sans', sans-serif;
  font-weight: 600;
  color: white;
  background-color: var(--primary-color);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;
}

.load-more-btn:hover,
.load-more-btn:focus {
  background-color: #5a36b1;
  outline: none;
}




        .features-section {
          padding: 0px 0;
          padding-bottom: 50px;
          background: var(--section-bg);
        }

        .section-header {
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.8rem;
          color: var(--heading-color);
          margin-bottom: 16px;
        }

        .section-header p {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }


        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .feature-card {
          background: var(--card-bg);
          padding: 40px 30px;
          border-radius: 16px;
          text-align: center;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .feature-card:hover {
          box-shadow: var(--shadow-hover);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          font-size: 2rem;
          color: white;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          color: var(--heading-color);
          margin-bottom: 16px;
        }

        .feature-card p {
          color: var(--text-color);
          line-height: 1.6;
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
  
      `}</style>
    </div>
  );
};

export default Home2;
