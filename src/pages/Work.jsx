import React, { useState } from 'react';
import { siteData } from '../data/content';
import GoldenCTA from '../components/GoldenCTA';

export default function Work({ onOpenVideo }) {
  const { allWorks } = siteData;
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Film', 'Ad Film', 'Series', 'Music'];

  const filteredWorks = activeFilter === 'All'
    ? allWorks
    : allWorks.filter(w => w.cat === activeFilter);

  return (
    <div style={{ width: '100%' }}>
      {/* Title & Filters */}
      <section style={{ padding: '104px var(--container-pad) 48px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <h1 style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(64px, 13vw, 220px)',
          lineHeight: 0.9,
          letterSpacing: '-0.035em'
        }}>
          Work<span style={{ color: 'var(--gold-primary)' }}>.</span>
        </h1>

        <div role="group" aria-label="Filter work by category" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px 28px',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '16px'
        }}>
          {categories.map((cat, idx) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={idx}
                className={`filter-btn ${isActive ? 'active' : 'fb'}`}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={isActive}
                style={{
                  minHeight: '44px',
                  padding: 0,
                  fontFamily: 'inherit',
                  fontSize: '12px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  color: isActive ? 'var(--gold-primary)' : 'var(--text-secondary)',
                  background: 'transparent',
                  border: 0,
                  borderBottom: isActive ? '1px solid var(--gold-primary)' : '1px solid transparent',
                  transition: 'color var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '0 var(--container-pad) 128px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '56px 32px'
        }}>
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="th"
            >
              <div style={{
                position: 'relative',
                aspectRatio: '16/9',
                background: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)'
              }}>
                <img
                  src={work.img}
                  alt={work.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <span style={{
                  position: 'absolute',
                  right: '16px',
                  top: '14px',
                  padding: '5px 10px',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  background: 'rgba(10,10,9,0.75)',
                  backdropFilter: 'blur(4px)'
                }}>
                  {work.cat}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '6px 20px', marginTop: '16px' }}>
                <span className="tt" style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', lineHeight: 1.15 }}>
                  {work.title}
                </span>
                <span style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  {work.credit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <p style={{ margin: '40px 0', fontSize: '17px', color: 'var(--text-light-sub)' }}>
            No projects in this category yet.
          </p>
        )}
      </section>

      {/* Golden CTA */}
      <GoldenCTA text="Start a project" link="/contact" />
    </div>
  );
}

