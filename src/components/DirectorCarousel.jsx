import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';

/**
 * DirectorCarousel — Dharma 2.0 Inspired Interactive Showcase Carousel
 * for "Directors & Visionaries." section with smooth navigation arrows,
 * active indicator dots, drag/swipe gestures, and zero dummy cast.
 */
export default function DirectorCarousel() {
  const { directors } = siteData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const total = directors.length;

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < total - 1 ? prev + 1 : 0));
  };

  const isFirstRender = useRef(true);

  // Scroll to active card when index changes (container only, never window)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!containerRef.current) return;
    const container = containerRef.current;
    const card = container.children[currentIndex];
    if (card) {
      const targetScroll = card.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2);
      container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  }, [currentIndex]);

  // Touch & Mouse Drag handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftPos.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  return (
    <div className="director-carousel-wrapper">
      {/* Top Carousel Navigation Controls */}
      <div className="carousel-controls-bar">
        <div className="carousel-counter">
          <span className="counter-current">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className="counter-sep">/</span>
          <span className="counter-total">
            {String(total).padStart(2, '0')}
          </span>
        </div>

        <div className="carousel-nav-arrows">
          <button
            onClick={handlePrev}
            className="carousel-arrow-btn"
            aria-label="Previous Director Slide"
            title="Previous Slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="carousel-arrow-btn"
            aria-label="Next Director Slide"
            title="Next Slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Cards Track */}
      <div
        ref={containerRef}
        className="director-carousel-track carousel-draggable"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {directors.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={item.id || idx}
              className={`director-carousel-card ${isActive ? 'active-slide' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <div className="director-slide-media">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="director-slide-img"
                />
                {item.badge && (
                  <span className="director-slide-badge">
                    {item.badge}
                  </span>
                )}
                <div className="director-slide-overlay" />
              </div>

              <div className="director-slide-body">
                <span className="director-slide-tag">{item.tag}</span>
                <h3 className="director-slide-name">{item.name}</h3>
                <span className="director-slide-role">{item.role}</span>
                <p className="director-slide-desc">{item.summary || item.specialty}</p>

                <Link
                  to={item.path}
                  className="director-slide-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Explore Portfolio</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Dot Indicators */}
      <div className="carousel-dots-container">
        {directors.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

