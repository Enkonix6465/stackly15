import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Blog4 = () => {
  useEffect(() => {
    document.title = 'Scaling Event Management: From Small Gatherings to Mega Conferences - ForStackly Blog';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: '120px 20px 60px',
        background: 'var(--bg-color)',
        minHeight: '100vh',
        color: 'var(--text-color)'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <motion.header
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '40px' }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--heading-color)',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}
          >
            Scaling Event Management: From Small Gatherings to Mega Conferences
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}
          >
            <span>By Event Strategy Team</span>
            <span>•</span>
            <span>March 10, 2024</span>
            <span>•</span>
            <span>7 min read</span>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap'
            }}
          >
            <span
              style={{
                background: 'var(--primary-color)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem'
              }}
            >
              Event Management
            </span>
            <span
              style={{
                background: 'var(--secondary-color)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem'
              }}
            >
              Scaling
            </span>
            <span
              style={{
                background: '#28a745',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem'
              }}
            >
              Conferences
            </span>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: 'var(--card-bg)',
            borderRadius: '12px',
            padding: '40px',
            boxShadow: 'var(--shadow)',
            lineHeight: '1.8'
          }}
        >
          <p style={{ marginBottom: '25px', fontSize: '1.1rem' }}>
            Event management today spans from intimate workshops to global-scale conferences. As audiences grow and expectations rise, organizers must adapt strategies, tools, and workflows to deliver experiences that scale without sacrificing quality.
          </p>

          <h2
            style={{
              fontSize: '1.8rem',
              color: 'var(--heading-color)',
              marginTop: '35px',
              marginBottom: '20px'
            }}
          >
            1. Managing Small Gatherings
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Smaller events thrive on personalization and close interaction. With limited guests, organizers can focus on curated agendas, tailored networking, and creating tight-knit communities.
          </p>

          <h2
            style={{
              fontSize: '1.8rem',
              color: 'var(--heading-color)',
              marginTop: '35px',
              marginBottom: '20px'
            }}
          >
            2. Scaling Up for Large Events
          </h2>
          <p style={{ marginBottom: '25px' }}>
            As events scale into the hundreds or thousands, technology becomes essential. From ticketing platforms to mobile apps, automation reduces complexity and ensures smooth operations across logistics, scheduling, and registration.
          </p>

          <h2
            style={{
              fontSize: '1.8rem',
              color: 'var(--heading-color)',
              marginTop: '35px',
              marginBottom: '20px'
            }}
          >
            3. Technology as a Growth Multiplier
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Scalable event tech platforms offer centralized dashboards for organizers, real-time analytics, and AI-powered recommendations. This ensures consistency while allowing events to handle drastically different audience sizes.
          </p>

          <h2
            style={{
              fontSize: '1.8rem',
              color: 'var(--heading-color)',
              marginTop: '35px',
              marginBottom: '20px'
            }}
          >
            4. Logistics and Operations
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Large-scale events introduce complexities in crowd control, vendor coordination, and on-site security. Strategic planning, venue partnerships, and scalable staffing solutions are crucial for maintaining guest satisfaction.
          </p>

          <h2
            style={{
              fontSize: '1.8rem',
              color: 'var(--heading-color)',
              marginTop: '35px',
              marginBottom: '20px'
            }}
          >
            Looking Ahead
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Event management is no longer one-size-fits-all. Organizers who embrace scalability—by balancing the intimacy of small gatherings with the vast reach of mega conferences—will succeed in delivering impactful experiences at every level.
          </p>
        </motion.div>

        {/* Back to Blog */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: '40px',
            textAlign: 'center'
          }}
        >
          <a
            href="/blog"
            style={{
              display: 'inline-block',
              background: 'var(--primary-color)',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            ← Back to Blog
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Blog4;
