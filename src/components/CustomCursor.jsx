import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default', 'play', 'drag', 'link'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      if (!target) return;

      const dragTrigger = target.closest('.carousel-draggable, .director-carousel-wrapper, .bts-carousel-wrapper');
      const linkTrigger = target.closest('a, button, input, select, textarea, .nl, .filter-btn, .carousel-arrow-btn, .carousel-dot');

      if (dragTrigger && !linkTrigger) {
        setCursorType('drag');
      } else if (linkTrigger) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor-follower ${cursorType}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`
      }}
    >
      {cursorType === 'play' && (
        <span className="cursor-play-label">PLAY</span>
      )}
      {cursorType === 'drag' && (
        <span className="cursor-drag-label">DRAG ↔</span>
      )}
      {(cursorType === 'default' || cursorType === 'link') && (
        <span className="cursor-inner-dot" />
      )}
    </div>
  );
}
