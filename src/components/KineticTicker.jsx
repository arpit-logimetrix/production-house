import React from 'react';

/**
 * KineticTicker — Bold Two-Tone Typography Marquee
 * Features outline + solid words in White & Gold using heavy geometric sans typography.
 * Supports singleLine mode for clean, single-row kinetic headings.
 */
export default function KineticTicker({
  singleLine = false,
  track1 = [
    'DIRECTORS||& VISIONARIES',
    'DIRECTORS||& VISIONARIES',
    'DIRECTORS||& VISIONARIES',
    'DIRECTORS||& VISIONARIES'
  ],
  track2 = null
}) {
  const repeatedTrack1 = [...track1, ...track1, ...track1, ...track1];
  const repeatedTrack2 = track2 ? [...track2, ...track2, ...track2, ...track2] : null;

  const renderPhrase = (item, trackClass) => {
    if (typeof item === 'string' && item.includes('||')) {
      const [outlinePart, solidPart] = item.split('||');
      return (
        <span className={`kinetic-phrase ${trackClass}`}>
          <span className="kinetic-word-outline">{outlinePart}</span>
          <span className="kinetic-word-solid">{solidPart}</span>
        </span>
      );
    }
    return (
      <span className={`kinetic-phrase ${trackClass}`}>
        <span className="kinetic-word-solid">{item}</span>
      </span>
    );
  };

  return (
    <div className={`kinetic-ticker-container ${singleLine ? 'single-line-ticker' : ''}`} aria-hidden="true">
      {/* Primary Track: Left Scroll */}
      <div className="kinetic-track-wrapper">
        <div className="kinetic-track kinetic-scroll-left">
          {repeatedTrack1.map((item, idx) => (
            <span key={`t1-${idx}`} className="kinetic-item">
              {renderPhrase(item, 'kinetic-track-1')}
              <span className="kinetic-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Optional Second Track: Only if not singleLine */}
      {!singleLine && repeatedTrack2 && (
        <div className="kinetic-track-wrapper">
          <div className="kinetic-track kinetic-scroll-right">
            {repeatedTrack2.map((item, idx) => (
              <span key={`t2-${idx}`} className="kinetic-item">
                {renderPhrase(item, 'kinetic-track-2')}
                <span className="kinetic-dot">❖</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Edge Vignette Fades */}
      <div className="kinetic-vignette kinetic-vignette-left" />
      <div className="kinetic-vignette kinetic-vignette-right" />
    </div>
  );
}
