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



const Services = () => {
  useEffect(() => {
    document.title = 'Our Services - ForStackly Business Solutions';
  }, []);

const portfolioItems = [
  { id: 1, title: "Luxury Wedding", category: "Weddings", image: "images/portfolio2.jpg" },
  { id: 2, title: "Corporate Gala", category: "Corporate", image: "images/corporate Gala copy.jpg" },
  { id: 3, title: "Birthday Bash", category: "Parties", image: "images/portfolio1.jpg" },
  { id: 4, title: "Destination Event", category: "Weddings", image: "images/portfolio.jpg" },
  { id: 5, title: "Holiday Party", category: "Parties", image: "images/portfolio3.jpg" },
  { id: 6, title: "Annual Conference", category: "Corporate", image: "images/portfolio4 copy.jpg" }
];

const [portfolioFilter, setPortfolioFilter] = useState("All");

const filteredItems = portfolioFilter === "All"
  ? portfolioItems
  : portfolioItems.filter(item => item.category === portfolioFilter);


  const services = [
  {
    id: 1,
    title: 'Luxury Yacht Wedding',
    description: 'A curated celebration on the water, blending elegant decor, tailored cuisine and expert planning.',
    features: ['Custom Floral Arrangements', 'VIP Guest Services', 'Gourmet Catering', 'Onboard Entertainment'],
    color: '#007bff',
    image: 'images/lll.jpg'
  },
  {
    id: 2,
    title: 'Modern Corporate Gala',
    description: 'A sophisticated business gathering with striking ambience, premium dining and seamless event coordination.',
    features: ['Thematic Venue Styling', 'Interactive Branding Zones', 'Speaker & Panel Management', 'High-end Catering'],
    color: '#28a745',
    image: 'images/whoweare1.jpg'
  },
  {
    id: 3,
    title: 'Birthday Celebration',
    description: 'A vibrant birthday experience, featuring playful themes, custom treats and attentive hosting throughout.',
    features: ['Personalized Decor', 'Engaging Activities', 'Signature Cake Design', 'Party Coordination'],
    color: '#6f42c1',
    image: 'images/whoweare2.jpg'
  },
  {
    id: 4,
    title: 'Mountain Retreat',
    description: 'A tranquil escape to the mountains, offering curated activities, luxury accommodation and flawless logistics.',
    features: ['Travel & Accommodation Planning', 'Adventure Excursions', 'Exclusive Event Design', 'Local Experience Integration'],
    color: '#dc3545',
    image: 'images/whoweare3.jpg'
  },
  {
    id: 5,
    title: 'Festive Holiday Soiree',
    description: 'A joyful holiday event delivered with seasonal styling, gourmet menus and impeccable guest experiences.',
    features: ['Holiday-themed Styling', 'Seasonal Catering', 'Live Music & Activities', 'Family Coordination'],
    color: '#fd7e14',
    image: 'images/whoweare4.jpg'
  },
  {
    id: 6,
    title: 'Annual Conference',
    description: 'An expertly managed conference, providing innovative programming, elegant and smooth operations.',
    features: ['Registration & Guest Logistics', 'AV Production', 'Program Planning', 'Hospitality Services'],
    color: '#17a2b8',
    image: 'images/whoweare5.jpg'
  }
];


const processSteps = [
  {
    step: '01',
    title: 'Consultation & Visioning',
    description: 'We collaborate closely to understand your event goals, preferences, and unique requirements, crafting a clear vision for success.'
  },
  {
    step: '02',
    title: 'Creative Planning & Design',
    description: 'Our team develops a comprehensive event plan, including theme, logistics, vendor coordination, and timeline to bring your vision to life.'
  },
  {
    step: '03',
    title: 'Seamless Execution',
    description: 'On the day of the event, we manage every detail with precision and professionalism, ensuring flawless delivery and guest satisfaction.'
  },
  {
    step: '04',
    title: 'Post-Event Support & Review',
    description: 'We provide follow-up services, gather feedback, and analyze outcomes to continuously enhance future events and build lasting partnerships.'
  }
];



  

  return (
    <div className="services-page">
      {/* Hero Section */}
             <section className="hero-section">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="hero-bg-video"
              >
                <source src="images/video41.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
              <div className="hero-overlay">
                <div className="hero-content">
                 <h1 className="hero-title animate-slide-in">Our Services</h1>
<p className="hero-paragraph animate-fade-up">
  From intimate gatherings to grand celebrations, we provide end-to-end event planning, design, and execution to make every occasion unforgettable.
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
      <h2 className="services-heading">Premium Event Management Services</h2>

      <div className="services-grid">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="services-image"
        >
          <img
            src="images/luxury.jpg"
            alt="Event Management"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="services-content"
        >
          <p className="services-text">
            We specialize in crafting unforgettable experiences from luxurious
            weddings to high-profile corporate galas. Our team takes care of
            every detail so you can focus on celebrating the moments that matter.With a seamless blend of creativity and precision, we design events that leave a lasting impression.
Our trusted vendor network ensures premium venues, décor, and entertainment tailored to your vision.
          </p>

          <ul className="services-list">
            {[
              "End-to-end Event Planning",
              "Luxury Venue Selection",
              "Customized Décor & Styling",
              "Entertainment & Guest Management",
              "Seamless On-site Coordination",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
                className="services-item"
              >
                <span className="bullet"></span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>What We Offer</h2>
            <p>End-to-end solutions tailored to your business needs</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="service-image">
  <img src={service.image} alt={service.title} />
  <div className="service-overlay">
    {service.icon && (
      <service.icon className="service-icon" style={{ color: service.color }} />
    )}
  </div>
</div>

                
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <FaCheck className="check-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/service${service.id}`} 
                    className="service-link"
                    style={{ color: service.color }}
                  >
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     <section className="portfolio-section">
  <div className="portfolio-header text-center">
    <h2>Our Portfolio</h2>
    <p>A glimpse of our premium event experiences</p>
  </div>

  <div className="portfolio-filters">
    {["All", "Weddings", "Corporate", "Parties"].map(cat => (
      <button
        key={cat}
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
      <section className="section process-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Proven Process</h2>
            <p>A systematic approach to delivering exceptional results</p>
          </motion.div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
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
