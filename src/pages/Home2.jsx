import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowRight, 
  FaPlay, 
  FaRocket, 
  FaUsers, 
  FaAward, 
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaHandshake,
  FaQuoteLeft, 
  FaEye,
  FaUserFriends,
  FaBook,  // For Continuous Learning
} from 'react-icons/fa';

const services = [
  { title: 'Corporate Events', imgSrc: 'images/event1.jpg', desc: 'Seminars, conferences, and team-building.' },
  { title: 'Weddings', imgSrc: 'images/event2.jpg', desc: 'Romantic, memorable celebrations.' },
  { title: 'Product Launches', imgSrc: 'images/event3.jpg', desc: 'Impactful events for new products.' },
  { title: 'Social Gatherings', imgSrc: 'images/event4.jpg', desc: 'Creative parties and special occasions.' },
];


const Home2 = () => {
  const [stats] = useState([
    { number: '500+', label: 'Projects Completed', icon: FaRocket },
    { number: '200+', label: 'Happy Clients', icon: FaUsers },
    { number: '50+', label: 'Awards Won', icon: FaAward },
    { number: '99%', label: 'Success Rate', icon: FaChartLine }
  ]);

  const [features] = useState([
  {
    icon: FaEye, // or FaShieldAlt
    title: 'Integrity & Transparency',
    description: 'We maintain open and honest interactions at all times. Clients always know where they stand, ensuring trust and accountability.'
  },
  {
    icon: FaUserFriends, // or FaHeart
    title: 'Client-Centered Culture',
    description: 'Your goals guide our work. We listen actively, understand your needs, and deliver tailored solutions that put your interests first.'
  },
  {
    icon: FaBook, // or FaRocket
    title: 'Continuous Learning',
    description: 'We’re committed to growth—personally and professionally. Our team consistently embraces new ideas and technologies.'
  }
]);


  const [testimonials] = useState([
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'ForStackly transformed our entire digital infrastructure. Their innovative approach helped us achieve 300% growth in just one year.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      content: 'The level of expertise and dedication shown by the ForStackly team is exceptional. They delivered beyond our expectations.'
    }
  ]);

const events = [
  {
    img: "images/upcoming.jpg",
    badge: "FREE",
    title: "BestSeller Book Bootcamp - Write, Market & Publish Your Book - Lucknow",
    date: "Saturday, March 18, 9.30PM",
    location: "ONLINE EVENT - Attend anywhere",
    weekday: "saturday",
    eventType: "conference",  // set according to your dropdown options!
    category: "business"
  },
  {
    img: "images/upcoming1.jpg",
    badge: "FREE",
    title: "Creative Marketing Workshop - Boost Your Brand Awareness",
    date: "Sunday, March 19, 10.00AM",
    location: "New York, NY",
    weekday: "sunday",
    eventType: "workshop",
    category: "marketing"
  },
  {
    img: "images/upcoming2.jpg",
    badge: "PAID",
    title: "Tech Startup Pitch Night - Showcase Your Ideas",
    date: "Wednesday, March 22, 6.00PM",
    location: "San Francisco, CA",
    weekday: "wednesday",
    eventType: "conference",
    category: "business"
  },
  {
    img: "images/upcoming3.jpg",
    badge: "FREE",
    title: "Healthy Living Seminar - Nutrition & Wellness",
    date: "Friday, March 24, 2.00PM",
    location: "Online Event",
    weekday: "friday",
    eventType: "seminar",
    category: "health"
  },
  {
    img: "images/upcoming4.jpg",
    badge: "PAID",
    title: "Art & Design Expo - Contemporary Creatives Meet",
    date: "Saturday, March 25, 11.00AM",
    location: "Chicago, IL",
    weekday: "saturday",
    eventType: "expo",
    category: "art"
  },
  {
    img: "images/upcoming5.jpg",
    badge: "FREE",
    title: "Business Growth Masterclass - Strategies for Scaling",
    date: "Monday, March 27, 9.00AM",
    location: "Online Webinar",
    weekday: "monday",
    eventType: "conference",
    category: "business"
  },
];

// ✅ Add filter and load more state here
const [selectedWeekday, setSelectedWeekday] = useState('');
const [selectedEventType, setSelectedEventType] = useState('');
const [selectedCategory, setSelectedCategory] = useState('');
const [visibleCount, setVisibleCount] = useState(6);
const filteredEvents = events.filter(event =>
  (selectedWeekday === '' || event.weekday === selectedWeekday) &&
  (selectedEventType === '' || event.eventType === selectedEventType) &&
  (selectedCategory === '' || event.category === selectedCategory)
);

const visibleEvents = filteredEvents.slice(0, visibleCount);
const handleLoadMore = () => {
  if (visibleCount >= filteredEvents.length) {
    alert("No more events to show.");
    return;
  }
  setVisibleCount((prev) => Math.min(prev + 3, filteredEvents.length));
};







  useEffect(() => {
    document.title = 'Home Alternative - ForStackly Business Solutions';
  }, []);

  return (
    <div className="home2-page">
      {/* Hero Section */}
       <section className="hero-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-bg-video"
        >
          <source src="images/video31.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">Designing Events, Creating Memories</h1>
<p className="hero-paragraph animate-fade-up">
  We are a passionate team of event planners dedicated to crafting seamless, stylish, 
  and stress-free celebrations. From concept to execution, we handle every detail so you 
  can focus on enjoying the moment.
</p>

            <Link
              to="/contact"
              className="hero-button animate-fade-up-delayed"
            >
              Reach Out Today
            </Link>
          </div>
        </div>
      </section>

<section className="services-section">
  <div className="services-container">
    <h2 className="section-title">Services & Expertise</h2>
    <div className="services-grid">
      {services.map((service, idx) => (
        <div className="service-card" key={idx}>
          <div className="service-image-banner">
            <img src={service.imgSrc} alt={service.title} />
          </div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-desc">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


     <section className="upcoming-events-section">
  <div className="upcoming-events-container">
    <div className="upcoming-events-title">
      <span className="events-main-title">Upcoming </span>
      <span className="events-highlight-title">Events</span>
    </div>
    <div className="events-filters">
      <div className="filter-card">
        <select
  className="filter-select"
  aria-label="Select Weekday"
  value={selectedWeekday}
  onChange={e => setSelectedWeekday(e.target.value)}
>
  <option value="">Weekdays</option>
  <option value="monday">Monday</option>
  <option value="tuesday">Tuesday</option>
  <option value="wednesday">Wednesday</option>
  <option value="thursday">Thursday</option>
  <option value="friday">Friday</option>
  <option value="saturday">Saturday</option>
  <option value="sunday">Sunday</option>
</select>

      </div>
      <div className="filter-card">
  <select
  className="filter-select"
  aria-label="Select Event Type"
  value={selectedEventType}
  onChange={e => setSelectedEventType(e.target.value)}
>
  <option value="">Event type</option>
  <option value="conference">Conference</option>
  <option value="wedding">Wedding</option>
  <option value="corporate">Corporate</option>
  <option value="party">Party</option>
  <option value="workshop">Workshop</option>
  <option value="seminar">Seminar</option>
  <option value="expo">Expo</option>
</select>

</div>

      <div className="filter-card">
        <select
  className="filter-select"
  aria-label="Select Category"
  value={selectedCategory}
  onChange={e => setSelectedCategory(e.target.value)}
>
  <option value="">Any category</option>
  <option value="business">Business</option>
  <option value="marketing">Marketing</option>
  <option value="health">Health</option>
  <option value="art">Art</option>
  <option value="music">Music</option>
  <option value="sports">Sports</option>
</select>

      </div>
    </div>
  </div>
</section>

<section className="events-section">
  <div className="events-grid">
    {filteredEvents.slice(0, visibleCount).length > 0 ? (
      filteredEvents.slice(0, visibleCount).map((event, idx) => (
        <div className="event-card" key={idx}>
          <div className="event-image-wrap">
            <img src={event.img} alt={event.title} className="event-img" />
            <span className="event-badge">{event.badge}</span>
          </div>
          <div className="event-details">
            <div className="event-title">{event.title}</div>
            <div className="event-date">{event.date}</div>
            <div className="event-location">{event.location}</div>
          </div>
        </div>
      ))
    ) : (
      <p
        style={{
          color: "#000",
          fontStyle: "italic",
          gridColumn: "1 / -1",
          textAlign: "center",
          padding: "40px 0",
          fontSize: "1.1rem",
        }}
      >
        No events match your filter. Please try different options.
      </p>
    )}
  </div>
  <div style={{ textAlign: "center", marginTop: "24px" }}>
    <button onClick={handleLoadMore} className="load-more-btn">
      Load More
    </button>
  </div>
</section>








      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Company Values</h2>
            <p>We believe in honest communication and ethical business, building trust at every step.</p>
          </motion.div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
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
              <h2>Ready to Transform Your Business?</h2>
              <p>
                Get started today with a free consultation and discover how we can help you achieve your goals.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Start Your Journey <FaArrowRight />
                </Link>
                <Link to="/about" className="btn btn-outline btn-large">
                  Learn More About Us
                </Link>
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
