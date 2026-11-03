import React, { useState, useRef, useEffect } from 'react';
import { siteData } from '../data/content';
import KineticTicker from './KineticTicker';

/**
 * BTSGallery — Dharma 2.0 Inspired Behind The Scenes Interactive Carousel
 * Features kinetic scrolling typography, carousel controls, and zoomable camera stills.
 */
export default function BTSGallery({ onOpenMedia, onOpenImage }) {
  const { btsGallery } = siteData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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

  // Auto-scroll carousel timer (advances every 3.8s when not hovered or dragged)
  useEffect(() => {
    if (isHovered || isDragging.current) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
    }, 3800);
    return () => clearInterval(interval);
  }, [total, isHovered]);

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
    setIsHovered(false);
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

  const handleCardClick = (item, idx) => {
    setCurrentIndex(idx);
    const mediaUrl = item.type === 'video' ? item.videoSrc : item.img;
    if (onOpenMedia) {
      onOpenMedia(mediaUrl, item.title);
    } else if (onOpenImage) {
      onOpenImage(mediaUrl, item.title);
    }
  };

  return (
    <section className="bts-section" style={{ padding: '72px 0 100px', borderTop: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
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

      {/* BTS Carousel Track with Floating Side Arrows (Header Image Style) */}
      <div
        className="bts-carousel-wrapper"
        style={{ position: 'relative', width: '100%', marginTop: '36px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Side Arrow Navigation (Matching Header Images / Hero Carousel) */}
        <div style={{
          position: 'absolute',
          top: '38%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 clamp(16px, 3vw, 48px)',
          zIndex: 10,
          pointerEvents: 'none'
        }}>
          <button
            onClick={handlePrev}
            aria-label="Previous Behind The Scenes Slide"
            title="Previous Frame"
            style={{
              pointerEvents: 'auto',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              border: '1px solid rgba(212, 166, 42, 0.45)',
              background: 'rgba(10, 10, 9, 0.72)',
              color: 'var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.65)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold-primary)';
              e.currentTarget.style.color = '#070707';
              e.currentTarget.style.borderColor = 'var(--gold-primary)';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(10, 10, 9, 0.72)';
              e.currentTarget.style.color = 'var(--gold-primary)';
              e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.45)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Behind The Scenes Slide"
            title="Next Frame"
            style={{
              pointerEvents: 'auto',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              border: '1px solid rgba(212, 166, 42, 0.45)',
              background: 'rgba(10, 10, 9, 0.72)',
              color: 'var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.65)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold-primary)';
              e.currentTarget.style.color = '#070707';
              e.currentTarget.style.borderColor = 'var(--gold-primary)';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(10, 10, 9, 0.72)';
              e.currentTarget.style.color = 'var(--gold-primary)';
              e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.45)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div
          ref={containerRef}
          className="bts-carousel-track carousel-draggable"
          style={{ padding: '0 var(--container-pad)' }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {btsGallery.map((item, idx) => {
            const isActive = idx === currentIndex;
            const isVideo = item.type === 'video';

            return (
              <div
                key={idx}
                className={`bts-carousel-card ${isActive ? 'active-slide' : ''}`}
                onClick={() => handleCardClick(item, idx)}
                role="button"
                tabIndex={0}
                aria-label={`View BTS: ${item.title}`}
              >
                <div className="bts-img-wrapper">
                  {isVideo ? (
                    <video
                      src={item.videoSrc}
                      poster={item.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <img src={item.img} alt={item.title} loading="lazy" />
                  )}
                  <div className="bts-overlay">
                    <span className="bts-lens-tag">
                      {isVideo ? 'CINEMA CLIP' : 'STILL FRAME'} #{idx + 1}
                    </span>
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

        {/* Carousel Dots & Frame Counter */}
        <div className="carousel-dots-container" style={{ marginTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--gold-primary)',
            letterSpacing: '0.15em',
            fontWeight: 500
          }}>
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
      </div>
    </section>
  );
}
