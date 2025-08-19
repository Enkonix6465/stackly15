import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCalendar,
  FaUser,
  FaTag,
  FaClock,
  FaArrowRight,
  FaSearch,
  FaFilter,
  FaBookmark,
  FaShare
} from 'react-icons/fa';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    document.title = 'Blog - ForStackly Business Solutions';
  }, []);

  const blogPosts = [
  {
    id: 1,
    title: 'The Future of Event Management in a Digital Era',
    excerpt: 'Discover how virtual platforms, AI, and data-driven insights are transforming event planning and attendee engagement in 2024 and beyond.',
    author: 'Emily Carter',
    date: '2025-01-15',
    readTime: '6 min read',
    category: 'Event Management',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop',
    featured: true
  },
{
  id: 2,
  title: 'Top Event Security Practices Every Planner Should Know',
  excerpt: 'From crowd management to digital check-ins, explore essential security strategies to ensure safe and seamless events.',
  author: 'James Morgan',
  date: '2025-01-12',
  readTime: '6 min read',
  category: 'Event Security',
  image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop',
  featured: false
},
{
  id: 3,
  title: 'How AI is Transforming Guest Experiences at Events',
  excerpt: 'Learn how artificial intelligence is being used to personalize attendee journeys, enhance engagement, and optimize event success.',
  author: 'Sophia Bennett',
  date: '2025-01-10',
  readTime: '10 min read',
  category: 'Event Technology',
  image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&h=250&fit=crop',
  featured: false
},
{
  id: 4,
  title: 'Scaling Event Management: From Small Gatherings to Mega Conferences',
  excerpt: 'Discover strategies for designing flexible event infrastructures that adapt to any size, ensuring flawless execution every time.',
  author: 'Daniel Hughes',
  date: '2025-01-08',
  readTime: '12 min read',
  category: 'Event Planning',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
  featured: true
}
  ];

  const categories = [
  'all',
  'Event Management',
  'Event Security',
  'Event Technology',
  'Event Planning',
  'Event Automation',
  'Event Analytics'
];
const trendingPosts = [
  {
    id: 1,
    title: "10 Event Planning Trends for 2025",
    category: "Trends",
    author: "Emily Parker",
    date: "Feb 12, 2025",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500&h=350&fit=crop",
  },
  {
    id: 2,
    title: "Mastering Corporate Event Branding",
    category: "Branding",
    author: "David Lee",
    date: "Jan 28, 2025",
    image:
      "https://images.unsplash.com/photo-1503424886302-f7f06a7ba05c?w=500&h=350&fit=crop",
  },
  {
    id: 3,
    title: "How to Maximize ROI in Conferences",
    category: "Business",
    author: "Sophia Miller",
    date: "Feb 02, 2025",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500&h=350&fit=crop",
  },
];


 const filteredPosts = blogPosts.filter(post => {
  const matchesCategory =
    selectedCategory === 'all' || post.category === selectedCategory;
  const matchesSearch =
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
  return matchesCategory && matchesSearch;
});

// Show featured post only if no search & category = all
const featuredPost =
  selectedCategory === 'all' && searchTerm === ''
    ? blogPosts.find(post => post.featured)
    : null;

// Regular posts = everything that matches filter
const regularPosts = filteredPosts;

  return (
    <div className="blog-page">
      {/* Hero Section */}
            <section className="hero-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-bg-video"
        >
           <source src="images/video111.mp4" type="video/mp4" /> 
          Your browser does not support the video tag.
        </video>
      
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">Blog</h1>
<p className="hero-paragraph animate-fade-up">
  Welcome to our blog—a curated hub of insights, inspiration, and expert perspectives. Discover the latest trends, practical tips, and stories designed to inform, empower, and spark your curiosity on everything from innovation to lifestyle.
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
      

      <div className="blog-main">
        <div className="container">
          <div className="blog-grid">
            {/* Sidebar */}
            <motion.aside
              className="blog-sidebar"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Search */}
              <div className="search-widget">
                <h3>Search Articles</h3>
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  <FaSearch className="search-icon" />
                </div>
              </div>

              {/* Categories */}
              <div className="categories-widget">
                <h3>Categories</h3>
                <div className="categories-list">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category}
                      className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <FaFilter className="category-icon" />
                      {category === 'all' ? 'All Posts' : category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="recent-widget">
                <h3>Recent Posts</h3>
                <div className="recent-list">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <motion.div
                      key={post.id}
                      className="recent-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link to={`/blog${post.id}`} className="recent-link">
                        <img src={post.image} alt={post.title} />
                        <div className="recent-content">
                          <h4>{post.title}</h4>
                          <span className="recent-date">{post.date}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <motion.main
              className="blog-content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Featured Post */}
              {selectedCategory === 'all' && featuredPost && (
                <motion.article
                  className="featured-post"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="featured-badge">Featured</div>
                  <div className="post-image">
                    <img src={featuredPost.image} alt={featuredPost.title} />
                    <div className="post-overlay">
                      <div className="post-category">{featuredPost.category}</div>
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-author">
                        <FaUser /> {featuredPost.author}
                      </span>
                      <span className="post-date">
                        <FaCalendar /> {featuredPost.date}
                      </span>
                      <span className="post-read-time">
                        <FaClock /> {featuredPost.readTime}
                      </span>
                    </div>
                    <h2>{featuredPost.title}</h2>
                    <p>{featuredPost.excerpt}</p>
                    <div className="post-actions">
                      <Link to={`/blog${featuredPost.id}`} className="btn btn-primary">
                        Read More <FaArrowRight />
                      </Link>
                      <div className="post-buttons">
                        <button className="action-btn">
                          <FaBookmark />
                        </button>
                        <button className="action-btn">
                          <FaShare />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )}

              {/* Regular Posts */}
              <div className="posts-section">
                <div className="section-header">
                  <h2>
                    {selectedCategory === 'all' ? 'Latest Articles' : `${selectedCategory} Articles`}
                  </h2>
                  <p>{filteredPosts.length} articles found</p>
                </div>

                <div className="posts-grid">
                  {regularPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      className="post-card"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10 }}
                    >
                      <div className="post-image">
                        <img src={post.image} alt={post.title} />
                        <div className="post-overlay">
                          <div className="post-category">
                            <FaTag /> {post.category}
                          </div>
                        </div>
                      </div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span className="post-author">
                            <FaUser /> {post.author}
                          </span>
                          <span className="post-date">
                            <FaCalendar /> {post.date}
                          </span>
                          <span className="post-read-time">
                            <FaClock /> {post.readTime}
                          </span>
                        </div>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div className="post-actions">
                          <Link to={`/blog${post.id}`} className="read-more">
                            Read More <FaArrowRight />
                          </Link>
                          <div className="post-buttons">
                            <button className="action-btn">
                              <FaBookmark />
                            </button>
                            <button className="action-btn">
                              <FaShare />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
              
            </motion.main>
          </div>
        </div>
      </div>

      {/* Trending Section */}
<div className="trending-section">
  <h2 className="trending-title">Trending Now</h2>
  <div className="trending-container">
    <div className="trending-card">
      <img src="images/trending1.jpg" alt="Trending Blog 1" />
      <h3>How AI is Transforming Guest Experiences at Events</h3>
      <p>Discover how artificial intelligence is enhancing personalization and engagement in events.</p>
    </div>
    <div className="trending-card">
      <img src="images/trending2.jpg" alt="Trending Blog 2" />
      <h3>Top Event Security Practices Every Planner Should Know</h3>
      <p>Security tips to ensure guest safety and smooth event operations.</p>
    </div>
    <div className="trending-card">
      <img src="images/trending3.jpg" alt="Trending Blog 3" />
      <h3>Automating Event Workflows for Maximum Efficiency</h3>
      <p>See how automation tools streamline registrations and scheduling.</p>
    </div>
  </div>
</div>
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

        .blog-main {
          background: var(--bg-color);
          padding: 80px 0;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 60px;
        }

        .blog-sidebar {
          background: var(--card-bg);
          padding: 30px;
          border-radius: 15px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          height: fit-content;
          position: sticky;
          top: 100px;
        }

        .search-widget,
        .categories-widget,
        .recent-widget {
          margin-bottom: 40px;
        }

        .search-widget h3,
        .categories-widget h3,
        .recent-widget h3 {
          color: var(--heading-color);
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

        .search-box {
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 12px 40px 12px 15px;
          border: 2px solid var(--border-color);
          border-radius: 25px;
          background: var(--input-bg);
          color: var(--text-color);
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--primary-color);
        }

        .search-icon {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .categories-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 15px;
          border: none;
          border-radius: 8px;
          background: var(--sidebar-bg);
          color: var(--text-color);
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .category-btn:hover,
        .category-btn.active {
          background: var(--primary-color);
          color: white;
        }

        .category-icon {
          font-size: 0.8rem;
        }

        .recent-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .recent-item {
          background: var(--sidebar-bg);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .recent-item:hover {
          background: var(--bg-color);
        }

        .recent-link {
          display: flex;
          gap: 12px;
          padding: 12px;
          text-decoration: none;
          color: var(--text-color);
        }

        .recent-item img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 6px;
        }

        .recent-content h4 {
          font-size: 0.9rem;
          color: var(--heading-color);
          margin-bottom: 5px;
          line-height: 1.3;
        }

        .recent-date {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .featured-post {
          background: var(--card-bg);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          margin-bottom: 60px;
          position: relative;
        }

        .featured-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--accent-color);
          color: white;
          padding: 5px 15px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 2;
        }

        .featured-post .post-image {
          height: 300px;
          position: relative;
        }

        .post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .post-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
          display: flex;
          align-items: flex-end;
          padding: 20px;
        }

        .post-category {
          background: var(--primary-color);
          color: white;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .featured-post .post-content {
          padding: 30px;
        }

        .post-content {
          padding: 25px;
        }

        .post-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
          font-size: 0.9rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        .post-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .featured-post h2 {
          font-size: 2rem;
          color: var(--heading-color);
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .post-card h3 {
          font-size: 1.3rem;
          color: var(--heading-color);
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .post-content p {
          color: var(--text-color);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .post-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .read-more {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .read-more:hover {
          transform: translateX(5px);
        }

        .post-buttons {
          display: flex;
          gap: 10px;
        }

        .action-btn {
          width: 40px;
          height: 40px;
          border: 2px solid var(--border-color);
          border-radius: 50%;
          background: var(--card-bg);
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }

        .posts-section {
          margin-top: 40px;
        }

        .section-header {
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: 2rem;
          color: var(--heading-color);
          margin-bottom: 5px;
        }

        .section-header p {
          color: var(--text-muted);
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .post-card {
          background: var(--card-bg);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .post-card:hover {
          box-shadow: var(--shadow-hover);
        }

        .post-card .post-image {
          height: 200px;
          position: relative;
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .blog-sidebar {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .posts-grid {
            grid-template-columns: 1fr;
          }

          .post-meta {
            gap: 15px;
          }

          .categories-list {
            flex-direction: row;
            flex-wrap: wrap;
          }
        }

       .trending-section {
  margin: 0 auto;
  max-width: 1200px;
  padding-bottom: 40px;
}

.trending-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  color: var(--text-primary); /* theme-friendly */
}

.trending-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.trending-card {
  background: var(--card-bg);
  border-radius: 16px;
  box-shadow: 0px 6px 20px rgba(0,0,0,0.08);
  padding: 20px;
  transition: all 0.3s ease;
}

.trending-card:hover {
  transform: translateY(-6px);
  box-shadow: 0px 12px 28px rgba(0,0,0,0.15);
}

.trending-card img {
  width: 100%;
  height: 200px; /* same structure */
  object-fit: cover; /* keeps cover style */
  border-radius: 12px;
  margin-bottom: 16px;
}

.trending-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.trending-card p {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

/* Theme Variables */
:root {
  --text-primary: #222;
  --text-secondary: #555;
  --card-bg: #fff;
}

[data-theme="dark"] {
  --text-primary: #f5f5f5;
  --text-secondary: #bbb;
  --card-bg: #1e1e1e;
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


      `}</style>
    </div>
  );
};

export default Blog;
