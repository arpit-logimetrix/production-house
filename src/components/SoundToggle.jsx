import React, { useState } from 'react';

export default function SoundToggle({ onToggle, isPlaying = false }) {
  const [isMuted, setIsMuted] = useState(true);

  const handleClick = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (onToggle) onToggle(nextMuted);
  };

  return (
    <button
      className={`sound-toggle-pill ${!isMuted ? 'active' : ''}`}
      onClick={handleClick}
      aria-label={isMuted ? 'Unmute Audio Showreel' : 'Mute Audio Showreel'}
      title={isMuted ? 'Click to unmute showreel' : 'Mute sound'}
    >
      <div className="sound-wave-bars">
        <span className="sound-bar bar-1"></span>
        <span className="sound-bar bar-2"></span>
        <span className="sound-bar bar-3"></span>
        <span className="sound-bar bar-4"></span>
      </div>
      <span className="sound-pill-text">
        {isMuted ? 'SOUND OFF' : 'SOUND ON'}
      </span>
    </button>
  );
}

