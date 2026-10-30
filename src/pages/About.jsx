import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import GoldenCTA from '../components/GoldenCTA';

export default function About() {
  const { about } = siteData;

  return (
    <div style={{ width: '100%' }}>
      {/* Hero Title Section */}
      <section style={{ padding: '120px var(--container-pad) 96px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
          About Us
        </span>
        <h1 style={{
          margin: 0,
          maxWidth: '1180px',
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(40px, 6.6vw, 108px)',
          lineHeight: 1.02,
          letterSpacing: '-0.025em'
        }}>
          {about.headingPart1} <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>{about.headingAccent}</span> {about.headingPart2}
        </h1>
      </section>

      {/* Set Still Banner */}
      <section style={{ padding: '0 var(--container-pad) 128px' }}>
        <div style={{
          aspectRatio: '21/9',
          minHeight: '280px',
          background: 'var(--bg-card)',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)'
        }}>
          <img
            src={about.bannerImg}
            alt="Chitralok Studios Production Studio"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: '0 var(--container-pad) 128px', display: 'flex', flexWrap: 'wrap', gap: '40px 80px' }}>
        <div style={{ flex: '1 1 200px', minWidth: 0 }}>
          <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            Who We Are
          </span>
        </div>
        <div style={{ flex: '4 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '860px' }}>
          <p style={{ margin: 0, fontSize: '20px', lineHeight: 1.7, color: 'var(--text-primary)' }}>
            {about.p1}
          </p>
          <p style={{ margin: 0, fontSize: '20px', lineHeight: 1.7, color: 'var(--text-light-sub)' }}>
            {about.p2}
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ padding: '0 var(--container-pad) 128px', display: 'flex', flexWrap: 'wrap', gap: '40px 80px' }}>
        <div style={{ flex: '1 1 200px', minWidth: 0 }}>
          <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            How We Work
          </span>
        </div>
        <div style={{ flex: '4 1 560px', minWidth: 0 }}>
          {about.steps.map((s, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px 40px',
                padding: '36px 0',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ flex: 'none', width: '56px', fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--gold-primary)' }}>
                {s.n}
              </span>
              <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.6vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.015em' }}>
                  {s.title}
                </span>
                <span style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--text-light-sub)', maxWidth: '520px' }}>
                  {s.text}
                </span>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
        </div>
      </section>

      {/* Key Stats */}
      <section style={{
        padding: '96px var(--container-pad)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '48px 32px',
        justifyContent: 'space-between'
      }}>
        {about.stats.map((t, idx) => (
          <div key={idx} style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(56px, 7vw, 112px)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: 'var(--gold-primary)'
            }}>
              {t.v}
            </span>
            <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              {t.l}
            </span>
          </div>
        ))}
      </section>

      {/* The Team */}
      <section style={{ padding: '128px var(--container-pad)', display: 'flex', flexWrap: 'wrap', gap: '40px 80px' }}>
        <div style={{ flex: '1 1 200px', minWidth: 0 }}>
          <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            The Team
          </span>
        </div>
        <div style={{ flex: '4 1 560px', minWidth: 0 }}>
          {about.crew.map((c, idx) => (
            <Link
              key={idx}
              to="/director"
              className="dir"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: '8px 24px',
                padding: '24px 0',
                borderTop: '1px solid var(--border-subtle)',
                textDecoration: 'none'
              }}
            >
              <span className="dn" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.4vw, 48px)', lineHeight: 1.1 }}>
                {c.name}
              </span>
              <span style={{ fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                {c.role}
              </span>
            </Link>
          ))}
          <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
        </div>
      </section>

      {/* Golden CTA */}
      <GoldenCTA text="Start a project" link="/contact" />
    </div>
  );
}

