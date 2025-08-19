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

const Service1 = () => {
  useEffect(() => {
    document.title = 'Mountain Retreat - Stackly Events';
  }, []);

  const luxuryFeatures = [
    {
      icon: FaCogs,
      title: "Scenic Lodging",
      description: "Cozy, modern cabins and lodges set amidst breathtaking mountain views."
    },
    {
      icon: FaUsers,
      title: "Group Experiences",
      description: "Customizable activities for team-building, wellness, and relaxation in nature."
    },
    {
      icon: FaUtensils,
      title: "Gourmet Mountain Cuisine",
      description: "Farm-to-table meals and bespoke menus prepared by expert chefs."
    },
    {
      icon: FaMusic,
      title: "Fireside Entertainment",
      description: "Live acoustic music, storytelling, and activities beneath the stars."
    },
    {
      icon: FaCameraRetro,
      title: "Nature Photography",
      description: "Capture unforgettable moments with guided nature photo sessions."
    },
    {
      icon: FaPalette,
      title: "Nature-inspired Décor",
      description: "Elegant, rustic styling to blend your retreat with the tranquil landscape."
    }
  ];

  const benefits = [
    'Unplug and recharge surrounded by majestic mountain beauty',
    'Personalized retreat plans for wellness, reflection, or adventure',
    'All-inclusive coordination for a stress-free escape',
    'Custom gourmet cuisine with local and seasonal ingredients',
    'Wellness sessions, guided hikes, and outdoor activities',
    'Create meaningful bonds in an inspiring, peaceful environment'
  ];

  const faqs = [
    {
      question: 'How far in advance should we book a mountain retreat?',
      answer: 'We recommend booking at least 2-5 months in advance for the best selection of dates, lodging, and activities.'
    },
    {
      question: 'Is the retreat suitable for all ages and fitness levels?',
      answer: 'Yes! Activities and accommodations can be tailored to fit different group profiles, including family, corporate, and wellness groups.'
    },
    {
      question: 'What type of cuisine is offered?',
      answer: 'Enjoy locally sourced meals, gourmet fare, and custom menus suited to dietary needs and preferences.'
    },
    {
      question: 'Are there options for both relaxation and adventure?',
      answer: 'Absolutely. Choose from yoga, spa, and mindfulness, or opt for guided hikes, outdoor sports, and exploration.'
    }
  ];

  return (
    <div className="service-page">
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-bg-video"
          >
            <source src="images/video81.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">Mountain Retreat</h1>
              <p className="hero-paragraph">Escape to tranquility and adventure. Experience connection, wellness, and natural beauty at our luxurious mountain retreats.</p>
              <Link to="/contact" className="hero-button">
                Start Your Journey
              </Link>
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
              <h2>Retreat Features</h2>
              <p>Everything you need for a rejuvenating mountain escape—comfort, nourishment, and adventure.</p>
            </motion.div>
            <div className="features-grid">
              {luxuryFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card premium-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
              <Link to="/contact" className="btn-learn">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section">
          <div className="container">
            <div className="grid-2">
              <motion.div
                className="benefits-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>Why Retreat to the Mountains?</h2>
                <p>
                  Restore balance, foster creativity, and build community in an awe-inspiring natural setting. Let us handle every detail for a seamless, luxurious experience.
                </p>
                <div className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="benefit-item"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <FaCheck className="check-icon" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary">
                  Plan Your Retreat <FaArrowRight />
                </Link>
              </motion.div>
              <motion.div
                className="benefits-visual"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="benefits-image">
                  <img src="images/service4.jpg" alt="Mountain Retreat" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

         <section className="gallery-wrapper">
      {/* Heading & Content */}
      <div className="gallery-header">
        <h2 className="gallery-title">Discover Our Stunning Properties</h2>
        <p className="gallery-subtitle">
          Step into a world of architectural elegance and modern living. 
          Our handpicked collection of homes blends style, comfort, and 
          functionality to create spaces you’ll love to call your own.
        </p>
      </div>

      {/* Gallery Rows */}
      <div className="gallery-container">
        
        {/* Row 1 */}
        <div className="gallery-row">
          <div className="gallery-big">
            <img
              src="images/wedding3.png"
              alt="Luxury Property"
            />
          </div>
          <div className="gallery-grid">
            <img src="images/row12.jpg" alt="Interior 1" />
            <img src="images/row1.jpg" alt="Interior 2" />
            <img src="images/row11.jpg" alt="Interior 3" />
            <img src="images/row13.jpg" alt="Interior 4" />
          </div>
        </div>

        {/* Row 2 (Zig Zag) */}
        <div className="gallery-row reverse">
          <div className="gallery-big">
            <img
              src="images/wedding2.png"
              alt="Modern Home"
            />
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
              <h2>Frequently Asked Questions</h2>
              <p>Your mountain escape, made easy—find the answers here.</p>
            </motion.div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="faq-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                className="cta-content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2>Start Your Mountain Retreat Adventure</h2>
                <p>
                  Let us turn your vision into a restorative, unforgettable mountain experience. Contact us for a custom retreat proposal.
                </p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary">
                    Plan Your Retreat <FaArrowRight />
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

/* Responsive */
@media (max-width: 992px) {
  .gallery-row,
  .gallery-row.reverse {
    flex-direction: column;
  }
  .gallery-big img {
    height: 350px;
  }
  .gallery-grid img {
    height: 180px;
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
