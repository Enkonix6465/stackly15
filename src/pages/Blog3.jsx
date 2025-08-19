import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Blog3 = () => {
  useEffect(() => {
    document.title = 'How AI is Transforming Guest Experiences at Events - ForStackly Blog';
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
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--heading-color)',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            How AI is Transforming Guest Experiences at Events
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginBottom: '20px'
          }}>
            <span>By Event Tech Team</span>
            <span>•</span>
            <span>February 2, 2024</span>
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
              AI
            </span>
            <span style={{
              background: 'var(--secondary-color)',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem'
            }}>
              Events
            </span>
            <span style={{
              background: '#28a745',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem'
            }}>
              Guest Experience
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
            Artificial Intelligence (AI) is reshaping the event industry by enhancing personalization, efficiency, and engagement. From smart chatbots to predictive analytics, AI is transforming how guests interact with events and how organizers deliver seamless experiences.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            1. Personalized Event Journeys
          </h2>
          <p style={{ marginBottom: '25px' }}>
            AI can analyze guest preferences and behavior to recommend sessions, networking opportunities, and content that match their interests—making events more relevant and engaging for each participant.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            2. Smart Chatbots and Virtual Assistants
          </h2>
          <p style={{ marginBottom: '25px' }}>
            AI-powered chatbots provide real-time assistance to guests, answering questions about schedules, locations, and event details—improving accessibility and reducing staff workload.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            3. Predictive Analytics for Organizers
          </h2>
          <p style={{ marginBottom: '25px' }}>
            By analyzing data from registrations, engagement patterns, and feedback, AI helps organizers predict attendance, identify trends, and make data-driven decisions to optimize events.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            4. Enhanced Networking Opportunities
          </h2>
          <p style={{ marginBottom: '25px' }}>
            AI-powered matchmaking tools connect guests with similar interests, industries, or goals, enabling more meaningful networking and long-term professional relationships.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            Looking Ahead
          </h2>
          <p style={{ marginBottom: '25px' }}>
            As AI continues to advance, its role in creating immersive, personalized, and efficient event experiences will only grow. Event planners who embrace AI-driven solutions will stay ahead in delivering exceptional guest experiences.
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

export default Blog3;
