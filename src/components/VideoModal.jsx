import React, { useEffect } from 'react';

export default function VideoModal({ isOpen, onClose, videoSrc }) {
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
      aria-label="Video Player Modal"
    >
      <div className="video-modal-content">
        <button
          className="video-modal-close"
          onClick={onClose}
          aria-label="Close Video Modal"
        >
          ×
        </button>

        {isEmbed ? (
          <iframe
            src={videoSrc}
            title="Video Player"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video controls autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

