import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaComments } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram,FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="hero-section">
        <video autoPlay muted loop playsInline className="hero-bg-video">
          <source src="/images/video121.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Festive Holiday Soiree</h1>
            <p className="hero-paragraph">
              Celebrate the magic of the season with a sparkling, joy-filled event designed
              for laughter, warmth, and lasting memories.
            </p>
          </div>
        </div>
      </section>
{/* Contact Section */}
<section className="py-20 container mx-auto px-6 mb-20">
  <div className="grid md:grid-cols-2 gap-12">
    {/* Form Card */}
    <div
      className="p-10 rounded-2xl shadow-lg"
      style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
    >
      <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--heading-color)" }}>
        Plan Your Perfect Event
      </h2>
      <p className="mb-6" style={{ color: "var(--text-muted)" }}>
        Share your details below and our event experts will get in touch to craft a
        memorable experience for you.
      </p>

      <form className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm mb-1" style={{ color: "var(--text-muted)" }}>
            <FaUser /> Full Name *
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring"
            placeholder="Enter your full name"
            style={{
              background: "var(--input-bg)",
              color: "var(--text-color)",
              borderColor: "var(--border-color)",
            }}
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm mb-1" style={{ color: "var(--text-muted)" }}>
            <FaEnvelope /> Email Address *
          </label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring"
            placeholder="Enter your email address"
            style={{
              background: "var(--input-bg)",
              color: "var(--text-color)",
              borderColor: "var(--border-color)",
            }}
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm mb-1" style={{ color: "var(--text-muted)" }}>
            <FaPhone /> Phone Number *
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring"
            placeholder="Enter your phone number"
            style={{
              background: "var(--input-bg)",
              color: "var(--text-color)",
              borderColor: "var(--border-color)",
            }}
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm mb-1" style={{ color: "var(--text-muted)" }}>
            <FaBuilding /> Event Type *
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring"
            style={{
              background: "var(--input-bg)",
              color: "var(--text-color)",
              borderColor: "var(--border-color)",
            }}
          >
            <option>Select an event type</option>
            <option>Wedding</option>
            <option>Corporate Party</option>
            <option>Birthday Celebration</option>
            <option>Concert / Festival</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm mb-1" style={{ color: "var(--text-muted)" }}>
            <FaComments /> Event Details *
          </label>
          <textarea
            rows="4"
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring"
            placeholder="Tell us about your event, venue preferences, guest count, or special requests..."
            style={{
              background: "var(--input-bg)",
              color: "var(--text-color)",
              borderColor: "var(--border-color)",
            }}
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 rounded-xl font-medium shadow-lg transition"
            style={{
              background: "var(--primary-color)",
              color: "white",
            }}
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>

    {/* Contact Info Card */}
    <div
      className="p-10 rounded-2xl shadow-lg space-y-8"
      style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
    >
      <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--heading-color)" }}>
        Contact Information
      </h2>

      <div className="space-y-6">
        {[
          {
            icon: "📍",
            title: "Visit Our Office",
            desc: "123 Business Avenue, Suite 100\nNew York, NY 10001\nUnited States",
          },
          {
            icon: "📞",
            title: "Call Us",
            desc: "+1 (555) 123-4567\n+1 (555) 987-6543\nToll Free: 1-800-FORSTACKLY",
          },
          {
            icon: "✉️",
            title: "Email Us",
            desc: "hello@forstackly.com\nsupport@forstackly.com\ncareers@forstackly.com",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-lg shadow-md hover:shadow-xl transition flex gap-4 items-start"
            style={{ background: "var(--input-bg)", color: "var(--text-color)" }}
          >
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h4 className="font-bold mb-1" style={{ color: "var(--heading-color)" }}>
                {item.title}
              </h4>
              <p className="whitespace-pre-line" style={{ color: "var(--text-muted)" }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h4 className="font-bold mb-3" style={{ color: "var(--heading-color)" }}>
          Follow Us
        </h4>
        <div className="flex gap-5">
          <a href="#" className="text-3xl hover:scale-110 transition" style={{ color: "var(--primary-color)" }}>
            <FaFacebook />
          </a>
          <a href="#" className="text-3xl hover:scale-110 transition" style={{ color: "var(--primary-color)" }}>
            <FaTwitter />
          </a>
          <a href="#" className="text-3xl hover:scale-110 transition" style={{ color: "var(--primary-color)" }}>
            <FaLinkedin />
          </a>
          <a href="#" className="text-3xl hover:scale-110 transition" style={{ color: "var(--primary-color)" }}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


   <section className="py-20 relative mt-10">
  <div className="absolute inset-0">
    <img
      src="/images/promise.jpg"
      alt="Luxury Event Background"
      className="w-full h-full object-cover opacity-20"
    />
  </div>

  <div className="relative container mx-auto px-6 text-center">
    <motion.h2
      className="text-4xl font-bold mb-6"
      style={{ color: "#fff" }}
    >
      Our Promise to You
    </motion.h2>

    <motion.p
      className="max-w-3xl mx-auto mb-12"
      style={{ color: "#fff" }}
    >
      We go beyond just planning events — we craft memories. Our team guarantees
      flawless execution, unmatched creativity, and a commitment to making your
      celebration extraordinary.
    </motion.p>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        { icon: "💎", title: "Premium Quality", desc: "We ensure world-class standards with attention to every detail." },
        { icon: "🕒", title: "On-Time Delivery", desc: "Punctuality and precision are at the heart of our service promise." },
        { icon: "🌟", title: "Memorable Experience", desc: "Your guests will remember the joy, elegance, and seamless flow." },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          className="p-8 rounded-2xl shadow-lg transition"
          style={{ backgroundColor: "var(--card-bg)", color: "var(--card-text)" }}
        >
          <div className="text-5xl mb-4">{item.icon}</div>
          <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
          <p>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>





      {/* Google Map */}
      <section className="w-full ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.6812121976543!2d-73.9882391845932!3d40.75889577932683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d96d9b5d%3A0x6a3a21f5e7205c1!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1689431792005!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
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
                      <h2>Ready for a Festive Holiday Soiree?</h2>
                      <p>Let us turn your holiday vision into a sparkling reality. Contact us today to book your holiday celebration!</p>
                      <div className="cta-buttons">
                       
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
      

      

      {/* CSS Inside Same File */}
      <style>
        {`

        :root {
  --bg-page: #ffffff;
  --bg-card: #ffffff;
  --text-primary: #111111;
  --text-secondary: #444444;
}

.dark {
  --bg-page: #111111;
  --bg-card: #1f1f1f;
  --text-primary: #f5f5f5;
  --text-secondary: #bbbbbb;
}


       .hero-section {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 480px;    /* ensures minimal height on small viewports */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.hero-video,
.hero-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;  /* behind overlays */
  pointer-events: none; /* clicks fall through */
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.28); /* slightly lighter for better video visibility */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1; /* above video */
}

.hero-content {
  position: relative;    /* ensure on top */
  text-align: center;
  color: #fff;
  max-width: 750px;
  width: 90vw;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-title {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 12px 0;
  animation: slideIn 1s ease-out forwards 0.5s;
  opacity: 0;
}

.hero-paragraph {
  font-size: 1.1rem;
  margin: 0 0 24px 0;
  line-height: 1.5;
  opacity: 0;
  animation: fadeUp 1s ease-out forwards 1s;
}

.hero-button {
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #224DB7;
  border-radius: 8px;
  text-decoration: none;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  opacity: 0;
  animation: fadeUp 1s ease-out forwards 1.5s;
  cursor: pointer;
  display: inline-block;
  text-align: center;
}

.hero-button:hover {
  background-color: #163479;
  transform: scale(1.05);
}

/* Responsive tweaking */
@media (max-width: 700px) {
  .hero-title {
    font-size: 1.8rem;
  }
  .hero-paragraph {
    font-size: 0.95rem;
  }
  .hero-button {
    font-size: 0.9rem;
    padding: 10px 18px;
  }
  .hero-content {
    gap: 15px;
  }
}

/* Animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

:root {
  --bg-page: #ffffff;   /* light mode page background */
  --bg-card: #ffffff;
  --text-primary: #111111;
  --text-secondary: #444444;
  --border-color: #dddddd;
}

.dark {
  --bg-page: #111111;   /* dark mode page background */
  --bg-card: #1f1f1f;
  --text-primary: #f5f5f5;
  --text-secondary: #bbbbbb;
  --border-color: #333333;
}

/* 🌞 Light Theme */
:root {
  --heading-color: #000000; /* black */
  --text-color: #222222;    /* dark gray */
  --card-bg: #ffffff;       /* white card */
  --card-text: #000000;     /* black text inside cards */
}

/* 🌙 Dark Theme */
:root[data-theme="dark"] {
  --heading-color: #ffffff; /* white */
  --text-color: #dddddd;    /* light gray */
  --card-bg: #1e1e1e;       /* dark card */
  --card-text: #ffffff;     /* white text inside cards */
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



        `}
      </style>
    </div>
  );
}
