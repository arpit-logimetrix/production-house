import React, { useState, useRef, useEffect } from 'react';
import { siteData } from '../data/content';
import KineticTicker from './KineticTicker';

/**
 * BTSGallery — Dharma 2.0 Inspired Behind The Scenes Interactive Carousel
 * Features kinetic scrolling typography, carousel controls, and zoomable camera stills.
 */
export default function BTSGallery({ onOpenImage }) {
  const { btsGallery } = siteData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const total = btsGallery.length;

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev < total - 1 ? prev + 1 : 0));
  };

  const isFirstRender = useRef(true);

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
    <section className="bts-section" style={{ padding: '100px 0 128px', borderTop: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      {/* Top Header & Navigation Bar */}
      <div style={{ padding: '0 var(--container-pad)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginBottom: '24px' }}>
        <div>
          <span style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
            BEHIND THE SCENES · CINEMA IN MOTION
          </span>
        </div>

        {/* Carousel Navigation Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
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
              aria-label="Previous Behind The Scenes Slide"
              title="Previous Frame"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="carousel-arrow-btn"
              aria-label="Next Behind The Scenes Slide"
              title="Next Frame"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Kinetic Scrolling Typography for Life On Set */}
      <KineticTicker
        track1={[
          'LIFE ON SET||& THE CRAFT',
          'BEHIND THE SCENES||CHITRALOK',
          'LIFE ON SET||& THE CRAFT',
          'BEHIND THE SCENES||CHITRALOK'
        ]}
        track2={[
          'BEHIND THE SCENES||CHITRALOK',
          'LIFE ON SET||& THE CRAFT',
          'BEHIND THE SCENES||CHITRALOK',
          'LIFE ON SET||& THE CRAFT'
        ]}
      />

      {/* BTS Carousel Track */}
      <div className="bts-carousel-wrapper" style={{ padding: '0 var(--container-pad)' }}>
        <div
          ref={containerRef}
          className="bts-carousel-track carousel-draggable"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {btsGallery.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={idx}
                className={`bts-carousel-card ${isActive ? 'active-slide' : ''}`}
                onClick={() => {
                  setCurrentIndex(idx);
                  if (onOpenImage) onOpenImage(item.img);
                }}
                role="button"
                tabIndex={0}
                aria-label={`View BTS: ${item.title}`}
              >
                <div className="bts-img-wrapper">
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div className="bts-overlay">
                    <span className="bts-lens-tag">CAMERA REEL #{idx + 1}</span>
                  </div>
                </div>
                <div className="bts-details">
                  <span className="bts-title">{item.title}</span>
                  <span className="bts-meta">{item.meta}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots */}
        <div className="carousel-dots-container" style={{ marginTop: '28px' }}>
          {btsGallery.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              aria-label={`Go to BTS slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
