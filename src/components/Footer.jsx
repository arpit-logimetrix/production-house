import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';

export default function Footer() {
  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case 'youtube':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
          </svg>
        );
      case 'facebook':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        );
      case 'imdb':
        return (
          <span style={{
            fontSize: '9px',
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            letterSpacing: '0.04em',
            lineHeight: 1
          }}>
            IMDb
          </span>
        );
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        );
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Column 1: Studio Name & Address (Centered in its box) */}
        <div className="footer-col footer-col-address">
          <div className="footer-col-inner">
            <span className="footer-col-title">Our Address</span>
            <div className="footer-address-text">
              <span className="footer-company-name">S &amp; P Chitralok Studios</span>
              <span className="footer-address-line">2/248, Vikash Khand Rd,</span>
              <span className="footer-address-line">Gomti Nagar, Lucknow,</span>
              <span className="footer-address-line">Uttar Pradesh (226010)</span>
            </div>
          </div>
        </div>

        {/* Vertical Divider 1 */}
        <div className="footer-v-divider" />

        {/* Column 2: Navigation Links (Centered in its box) */}
        <div className="footer-col footer-links">
          <div className="footer-col-inner">
            <span className="footer-col-title">Explore</span>
            <div className="footer-nav-list">
              <Link className="nl" to="/">Home</Link>
              <Link className="nl" to="/about">About Us</Link>
              <Link className="nl" to="/director">Director</Link>
              <Link className="nl" to="/work">Projects</Link>
              <Link className="nl" to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Vertical Divider 2 */}
        <div className="footer-v-divider" />

        {/* Column 3: Follow With Icons (Centered in its box) */}
        <div className="footer-col footer-links">
          <div className="footer-col-inner">
            <span className="footer-col-title">Follow</span>
            <div className="footer-social-list">
              {siteData.brand.socials.map((s, idx) => (
                <a
                  key={idx}
                  className="footer-social-link"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Follow on ${s.name}`}
                >
                  <span className="footer-social-icon">{getSocialIcon(s.name)}</span>
                  <span className="footer-social-label">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Divider 2 (Between Columns & Bottom Bar) */}
      <div className="footer-h-divider footer-h-divider-bottom" />

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={siteData.brand.logo}
            alt="Chitralok Studios Logo"
            style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(212, 166, 42, 0.4))' }}
          />
          <span className="footer-brand">S &amp; P {siteData.brand.fullName}</span>
        </div>
        <span className="footer-copy">
          © {new Date().getFullYear()} S &amp; P Chitralok Studios. All rights reserved.
        </span>
      </div>
    </footer>
  );
}


