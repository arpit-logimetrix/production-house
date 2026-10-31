import React, { useEffect } from 'react';
import { X, Play } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoSrc, title }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isEmbed = videoSrc && (videoSrc.includes('youtube') || videoSrc.includes('youtu.be') || videoSrc.includes('vimeo'));

  return (
    <div
      className={`video-modal ${isOpen ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={title ? `Trailer: ${title}` : 'Trailer Player Modal'}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        background: 'rgba(4, 4, 4, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(14px, 3vw, 40px)',
        animation: 'projectModalFadeIn 0.2s ease forwards'
      }}
    >
      {/* Prominent Cross Button to Close Modal (Fixed Top-Right) */}
      <button
        onClick={onClose}
        aria-label="Close trailer (Esc)"
        className="trailer-modal-close-btn"
        style={{
          position: 'fixed',
          top: 'clamp(14px, 2.8vw, 28px)',
          right: 'clamp(14px, 2.8vw, 28px)',
          zIndex: 100020,
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(18, 18, 17, 0.9)',
          border: '1px solid rgba(212, 166, 42, 0.55)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 166, 42, 0.2)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.borderColor = 'var(--gold-primary)';
          e.currentTarget.style.color = 'var(--gold-primary)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 166, 42, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.55)';
          e.currentTarget.style.color = '#FFFFFF';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 166, 42, 0.2)';
        }}
      >
        <X size={22} strokeWidth={2.2} />
      </button>

      {/* Main Video Modal Dialog Wrapper */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1160px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimal Header Strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 4px',
          minHeight: '28px',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, overflow: 'hidden' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontWeight: 600,
              flexShrink: 0
            }}>
              <Play size={10} fill="var(--gold-primary)" />
              Official Trailer
            </span>

            {title && (
              <>
                <span style={{ color: 'rgba(255,255,255,0.25)' }}>·</span>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(15px, 2vw, 19px)',
                  color: '#FFFFFF',
                  fontWeight: 500,
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap'
                }}>
                  {title}
                </span>
              </>
            )}
          </div>

          <span style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            flexShrink: 0
          }}>
            Press Esc to close
          </span>
        </div>

        {/* 16:9 Cinema Aspect Ratio Frame */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            background: '#000000',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid rgba(212, 166, 42, 0.4)',
            boxShadow: '0 30px 100px -10px rgba(0, 0, 0, 0.98), 0 0 40px rgba(212, 166, 42, 0.12)'
          }}
        >
          {isEmbed ? (
            <iframe
              src={videoSrc}
              title={title || "Trailer Player"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block'
              }}
            />
          ) : (
            <video
              controls
              autoPlay
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
}
