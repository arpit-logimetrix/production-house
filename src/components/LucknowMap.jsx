import React from 'react';
import { siteData } from '../data/content';

/**
 * LucknowMap — Interactive Dark-Themed Map of Lucknow, UP
 * Full-width, with floating address badge and exact coordinates for Gomti Nagar studio.
 */
export default function LucknowMap() {
  const { brand } = siteData;
  const mapQuery = encodeURIComponent('2/248, Vikash Khand Rd, Gomti Nagar, Lucknow, Uttar Pradesh 226010');

  return (
    <section className="lucknow-map-section" aria-label="Chitralok Studios Lucknow Location Map">
      {/* Top Gradient Transition Overlay */}
      <div className="map-gradient-top" />

      {/* Floating Studio Info Badge */}
    

      {/* Interactive Google Map Embed */}
      <div className="map-iframe-container">
        <iframe
          title="Chitralok Studios — 2/248, Vikash Khand Rd, Gomti Nagar, Lucknow Map"
          className="lucknow-map-iframe"
          src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Bottom Gradient Transition to Footer */}
      <div className="map-gradient-bottom" />
    </section>
  );
}


