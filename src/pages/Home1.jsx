import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaRocket, 
  FaShieldAlt, 
  FaCogs, 
  FaCalendarCheck, 
  FaBuilding, 
  FaHeart, 
  FaAward,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaRing,
  FaBriefcase,
  FaPalette,
  FaUtensils,
  FaMusic,
  FaTrophy
} from 'react-icons/fa';







const Home1 = () => {
  useEffect(() => {
    document.title = 'ForStackly - Professional Business Solutions';
  }, []);

  const features = [
    {
      icon:FaRing,
      title: 'Wedding Planning',
      description: 'Plan and coordinate unforgettable weddings with personalized themes and flawless execution.',
      color: '#007bff'
    },
    {
      icon:FaBriefcase,
      title: 'Event Management',
      description: ' Organize impactful corporate events, product launches, and conferences that impress.',
      color: '#007bff'
    },
    {
      icon:FaPalette,
      title: 'Event Design & Decor',
      description: 'Create stunning event aesthetics with customized decorations, lighting, and staging.',
      color: '#007bff'
    },
    {
      icon:FaUtensils,
      title: 'Catering & Hospitality',
      description: 'Deliver exceptional catering experiences with gourmet menus and impeccable service.',
      color: '#007bff'
    },
    {
    icon:FaMusic,
    title: 'Entertainment',
    description: 'Bring events to life with electrifying live music, talented DJs, and captivating cultural performances.',
    color: '#007bff'
  },
    {
    icon:FaTrophy,
    title: 'Award-Winning Events',
    description: ' Recognized for creativity, punctuality, disciplined and unforgettable experiences.',
    color: '#007bff'
    }
  ];

const stats = [
  { number: '300+', label: 'Successful Events', icon: FaCalendarCheck },  // Calendar with check
  { number: '150+', label: 'Corporate Clients', icon: FaBuilding },       // Building icon
  { number: '50+', label: 'Wedding Ceremonies', icon: FaHeart },          // Heart icon
  { number: '10+', label: 'Years of Experience', icon: FaAward }          // Award icon
];


  const testimonials = [
    {
      name: 'Joel Johnson',
      company: 'GlobalCorp',
      role: 'Event Coordinator',
      content: 'Evently turned our annual gala into an unforgettable evening. Their meticulous planning impressed every guest in attendance.',
      rating: 5,
      image: 'images/professional.jpg'
    },
    {
      name: 'Michael Chen',
      company: 'Innovations',
      role: 'Marketing Manager',
      content: 'Our product launch was a flawless success thanks to Evently’s team. Their dedication and creativity exceeded our expectations.',
      rating: 5,
      image: 'images/professional1.jpg'
    },
    {
      name: 'Emily Davis',
      company: 'Helping Hands',
      role: 'Director',
      content: 'From venue to entertainment, Evently perfected every detail of our festival. Their expertise ensured a seamless, memorable event.',
      rating: 5,
      image: 'images/Professional2.jpg'
    }
  ];

  return (
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
    <source src="images/video21.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="hero-overlay">
    <div className="hero-content">
     <h1 className="hero-title animate-slide-in">Creating Unforgettable Experiences</h1>
<p className="hero-paragraph animate-fade-up">
  From weddings and corporate gatherings to private celebrations, we design and manage events that leave lasting impressions. 
  Your vision, our expertise — together we make moments memorable.
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
            <h2>Why Choose ForStackly?</h2>
            <p>We deliver comprehensive business solutions tailored to your unique needs</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon" style={{ color: feature.color }}>
                  <feature.icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to="/services" className="feature-link">
                  Learn More <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="stat-icon" />
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <div className="grid-2">
            <motion.div
              className="services-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Comprehensive Event Management Solutions</h2>
              <p>
                From corporate conferences to grand celebrations, we deliver end-to-end event planning that ensures unforgettable experiences and keeps your guests delighted.
              </p>
              <ul className="benefits-list">
                <li><FaCheck /> Corporate Events & Conferences</li>
                <li><FaCheck /> Weddings & Social Celebrations</li>
                <li><FaCheck /> Product Launches & Brand Activations</li>
                <li><FaCheck /> Exhibitions & Trade Shows</li>
                <li><FaCheck /> Concerts & Cultural Festivals</li>
                <li><FaCheck /> Virtual & Hybrid Events</li>
              </ul>
              <div className="services-btn-container">
  <div className="services-btn-container">
  <Link to="/services" className="btn view-all-btn">
    View All Services
  </Link>
</div>


</div>

            </motion.div>
            
            <motion.div
              className="services-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="services-image">
                <img 
                  src="images/business-solutions.jpg" 
                  alt="Team collaboration"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>What Our Clients Say</h2>
            <p>Trusted by industry leaders worldwide</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}, {testimonial.company}</p>
                  </div>
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
          padding: 20px 0;
        }

        .section-header {
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .section-header p {
          font-size: 1.2rem;
          color: var(--text-muted);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        /* Default (Light Mode) */
.feature-card {
   background: #000 !important;
    color: #fff !important;
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.feature-card h3,
.feature-card p,
.feature-link {
  color: #fff !important; /* white text in light mode */
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .feature-card {
    background: #fff !important;  /* white card in dark mode */
    color: #000 !important;       /* black text */
  }

  .feature-card h3,
  .feature-card p,
  .feature-link {
    color: #000 !important; /* black text in dark mode */
  }
}

        .feature-card:hover {
          box-shadow: var(--shadow-hover);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: var(--heading-color);
        }

        .feature-card p {
          color: var(--text-color);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .feature-link {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .feature-link:hover {
          transform: translateX(5px);
        }

       .stats {
  background: var(--primary-color);
  color: #fff;
  padding: 40px 0;
  min-height: 320px;         /* Adjust as needed for your design */
  display: flex;
  align-items: center;
}


       .stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;      /* Center horizontally */
  justify-content: center;  /* Center vertically within each stat-item */
  text-align: center;
  min-height: 220px;        /* Makes all stat blocks equal height; adjust as needed */
}

.stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;        /* Large icon for bold visual */
  margin-bottom: 24px;      /* Nice gap below icon */
  color: #fff;              /* Icon bright white on blue */
  opacity: 1;
}

.stat-item h3 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 12px;
  color: #fff;
}

.stat-item p {
  font-size: 1.2rem;
  opacity: 0.97;
  color: #fff;
  margin: 0;
}



        .services-content h2 {
          font-size: 1.6rem;
          margin-bottom: 20px;
        }

        .services-content p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 30px;
          color: var(--text-color);
        }

        .benefits-list {
          list-style: none;
          margin: 0 0 30px 0;
          padding: 0;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
          color: var(--text-color);
          font-size: 1rem;
        }

        .benefits-list li svg {
          color: var(--accent-color);
          font-size: rem;
        }

        .services-visual {
          display: flex;
          justify-content: center;
        }

        .services-image {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .services-image img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          border-radius: 40px;
        }
          
      .section.services-preview {
  padding: 40px;
}
  .services-btn-container {
  text-align: left;        /* Button aligns left in parent */
  margin-top: 24px;
}

.view-all-btn {
  display: inline-flex;         /* Minimum flex for vertical centering inside */
  align-items: center;
  justify-content: flex-start;  /* Keeps content left if icon added back */
  padding: 20px 36px;
  background: #224DB7;
  color: #fff;
  border-radius: 12px;
  text-decoration: none;
  border: none;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(34,77,183,0.1);
  transition: background 0.3s, transform 0.3s;
  width: 260px;                /* Set your preferred width */
  margin: 0;                   /* NO margin auto or centering */
  font-size: 1.3rem;
}


.view-all-btn:hover {
  background: #182e57;
  transform: scale(1.05);
}

.container {
  padding: 0;
}
                 

        .testimonials-section {
          background:#000;
          padding-top: 20px;
          padding-bottom: 40px;
        }
        .section.testimonials-section .section-header h2 {
  color: #fff;
}
.section.testimonials-section .section-header p {
  color: #fff;
}



        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .testimonial-card {
          background: var(--card-bg);
          padding: 30px;
          border-radius: 15px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
        }

        .testimonial-content {
          margin-bottom: 20px;
        }

       .testimonial-rating {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 0px;     /* Optional: add if needed for spacing above stars */
}


        .star-icon {
          color: #ffc107;
          margin-right: 3px;
        }

        .testimonial-content p {
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          color: var(--text-color);
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .testimonial-author img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-info h4 {
          color: var(--heading-color);
          margin: 0 0 5px 0;
          font-size: 1rem;
        }
          
        /* Light mode text for author info */
/* Light mode - author info text black */
:global(.author-info p) {
  color: #000 !important;  /* black text */
  margin: 0;
  font-size: 1rem;
}

/* Dark mode - author info text white */
@media (prefers-color-scheme: dark) {
  :global(.author-info p) {
    color: #fff !important;  /* white text */
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

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .hero-buttons,
          .cta-buttons {
            justify-content: center;
          }

          .services-content {
            text-align: center;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home1;
