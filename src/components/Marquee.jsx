import React from 'react';
import { siteData } from '../data/content';

export default function Marquee() {
  const { clients } = siteData;

  // Duplicate clients array to ensure infinite loop seamless scroll
  const marqueeItems = [...clients, ...clients];

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {marqueeItems.map((client, idx) => (
          <span key={idx} className="marquee-item">
            <span className="marquee-name">{client}</span>
            <span className="marquee-separator">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

