import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={require('../public/images/logo.png')} alt="Logo" className="navbar-img" />
          <span className="navbar-title">Event Management</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-user">
        <span>Welcome, Admin</span>
      </div>
    </nav>
  );
};

export default Navbar;
