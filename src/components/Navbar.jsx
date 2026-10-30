import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMobileNav = () => {
    setIsMobileOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brand-link" aria-label="Chitralok Studios">
          <img
            src={siteData.brand.logo}
            alt="Chitralok Studios Logo"
            className="brand-logo-img"
          />
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-title">
            Chitralok <span style={{ color: 'var(--gold-primary)' }}>Studios</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main Navigation">
          <Link to="/" className={`nl ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nl ${isActive('/about') ? 'active' : ''}`}>
            About Us
          </Link>
          <Link to="/director" className={`nl ${isActive('/director') ? 'active' : ''}`}>
            Director
          </Link>
          <Link to="/work" className={`nl ${isActive('/work') ? 'active' : ''}`}>
            Projects
          </Link>
          <Link to="/contact" className={`nl ${isActive('/contact') ? 'active' : ''}`}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className={`mobile-nav-toggle ${isMobileOpen ? 'active' : ''}`}
          onClick={toggleMobileNav}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        <Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
        <Link to="/director" className={isActive('/director') ? 'active' : ''}>Director</Link>
        <Link to="/work" className={isActive('/work') ? 'active' : ''}>Projects</Link>
        <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact Us</Link>
      </div>
    </>
  );
}

