import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Blog3 = () => {
  useEffect(() => {
    document.title = 'Top Event Security Practices Every Planner Should Know - ForStackly Blog';
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
            Top Event Security Practices Every Planner Should Know
          </h1>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginBottom: '20px'
          }}>
            <span>By Event Insights</span>
            <span>•</span>
            <span>January 20, 2024</span>
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
              Event Security
            </span>
            <span style={{
              background: 'var(--secondary-color)',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem'
            }}>
              Best Practices
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
            Security is one of the most important considerations for any successful event. 
            From small gatherings to large conferences, ensuring the safety of attendees, 
            staff, and assets should be a top priority for every event planner.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            1. Comprehensive Risk Assessment
          </h2>
          <p style={{ marginBottom: '20px' }}>
            Begin by identifying potential risks—such as overcrowding, equipment failures, 
            or emergency situations. A thorough risk assessment helps you prepare mitigation 
            strategies before the event begins.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            2. Strong Access Control
          </h2>
          <p style={{ marginBottom: '20px' }}>
            Use ID badges, wristbands, or digital tickets to control access. Limit 
            backstage or restricted area entry to authorized personnel only.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            3. Visible Security Presence
          </h2>
          <p style={{ marginBottom: '20px' }}>
            Security staff should be both approachable and visible. Their presence 
            reassures attendees while acting as a deterrent against potential threats.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            4. Emergency Response Planning
          </h2>
          <p style={{ marginBottom: '20px' }}>
            Have clear procedures for fire, medical emergencies, or evacuations. Ensure 
            staff are trained and conduct drills if possible.
          </p>

          <h2 style={{
            fontSize: '1.8rem',
            color: 'var(--heading-color)',
            marginTop: '35px',
            marginBottom: '20px'
          }}>
            5. Technology Integration
          </h2>
          <p style={{ marginBottom: '25px' }}>
            Leverage surveillance cameras, metal detectors, and real-time monitoring tools. 
            Technology can greatly enhance the ability to detect and respond to issues quickly.
          </p>

          <p>
            By prioritizing event security and integrating these practices into your planning, 
            you create a safe and enjoyable environment for all participants. Remember—well-managed 
            security doesn’t just protect, it also builds trust with your audience.
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

export default Blog3;
