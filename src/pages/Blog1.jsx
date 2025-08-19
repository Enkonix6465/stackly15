import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Blog1 = () => {
  useEffect(() => {
    document.title = 'The Future of Event Management in a Digital Era';
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
        <motion.header
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '40px' }}
        >
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--heading-color)',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            The Future of Event Management in a Digital Era
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginBottom: '20px'
          }}>
            <span>By Admin</span>
            <span>•</span>
            <span>January 15, 2024</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              background: 'var(--primary-color)',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem'
            }}>
              Event Management
            </span>
            <span style={{
              background: 'var(--secondary-color)',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem'
            }}>
              Digital Era
            </span>
          </div>
        </motion.header>

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
            The events industry has undergone a massive shift in recent years. With the rise of digital tools, hybrid models, and data-driven experiences, event management is no longer just about organizing gatherings—it’s about creating meaningful, tech-enabled experiences for global audiences.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            Technology as the Driving Force
          </h2>

          <p style={{ marginBottom: '25px' }}>
            From virtual reality networking to AI-powered attendee engagement, technology has become the backbone of modern events. Event planners are now leveraging digital platforms to expand reach, personalize experiences, and collect valuable insights.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            Key Trends in Digital Event Management
          </h2>

          <ul style={{
            paddingLeft: '20px',
            marginBottom: '25px'
          }}>
            <li style={{ marginBottom: '10px' }}>Hybrid events combining physical and virtual participation</li>
            <li style={{ marginBottom: '10px' }}>AI-driven personalization for attendees</li>
            <li style={{ marginBottom: '10px' }}>Sustainable and eco-friendly event practices</li>
            <li style={{ marginBottom: '10px' }}>Data analytics to measure event impact</li>
            <li style={{ marginBottom: '10px' }}>Immersive technologies like AR/VR</li>
          </ul>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            The Road Ahead
          </h2>

          <p style={{ marginBottom: '25px' }}>
            The future of event management is not just digital—it’s experiential. Organizers must adopt innovative tools while keeping the human connection at the center of every event. Success will depend on creating seamless, inclusive, and sustainable experiences that go beyond physical boundaries.
          </p>

          <p>
            Those who embrace the digital era in event management will unlock new opportunities for engagement, growth, and long-term impact.
          </p>
        </motion.div>

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

export default Blog1;
