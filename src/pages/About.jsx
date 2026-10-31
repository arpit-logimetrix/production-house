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

      {/* Studio Leadership & Producers */}
      <section style={{
        padding: '120px var(--container-pad)',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px'
      }}>
        {/* Section Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <span style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
              STUDIO LEADERSHIP &amp; PRODUCERS
            </span>
            <h2 style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
              color: 'var(--text-primary)'
            }}>
              The Visionaries Behind <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>Chitralok.</span>
            </h2>
          </div>
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)', letterSpacing: '0.04em', maxWidth: '380px' }}>
            Empowering fearless storytelling, cultural authenticity, and world-class cinematic execution.
          </span>
        </div>

        {/* 1. Creative Leadership: Pushpendra Singh & Pragati Chauhan */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600 }}>
            CREATIVE LEADERSHIP
          </span>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '32px'
          }}>
            {about.leadership && about.leadership.map((leader, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 15, 14, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: 'clamp(24px, 4vw, 36px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  transition: 'border-color 0.3s ease, transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{
                    width: '84px',
                    height: '84px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--gold-primary)',
                    flexShrink: 0,
                    background: '#070707'
                  }}>
                    <img
                      src={leader.img}
                      alt={leader.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {leader.name}
                    </h3>
                    <span style={{
                      display: 'inline-block',
                      marginTop: '6px',
                      fontSize: '12px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: 'var(--gold-primary)'
                    }}>
                      {leader.role}
                    </span>
                  </div>
                </div>

                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <span style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                    Vision
                  </span>
                  <p style={{
                    margin: 0,
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: 'var(--text-light-sub)',
                    fontStyle: 'italic'
                  }}>
                    {leader.vision}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Producers: Alok Sir, Amod Sir, Pawan Sir, Krishnkant Sir, Shantanu Sir, Vipul Sir */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600 }}>
            PRODUCERS
          </span>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '24px'
          }}>
            {about.producers && about.producers.map((producer, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(12, 12, 11, 0.55)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.45)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.background = 'rgba(18, 18, 16, 0.75)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(12, 12, 11, 0.55)';
                }}
              >
                {/* Producer Header with Avatar / Monogram */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212, 166, 42, 0.25) 0%, rgba(7, 7, 7, 0.95) 75%)',
                    border: '1.5px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--gold-primary)',
                    flexShrink: 0,
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)'
                  }}>
                    {producer.monogram}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {producer.name}
                    </h3>
                    <span style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
                      {producer.role}
                    </span>
                  </div>
                </div>

                {/* Producer Vision */}
                <div style={{
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}>
                  <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                    Vision
                  </span>
                  <p style={{
                    margin: 0,
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'var(--text-light-sub)'
                  }}>
                    {producer.vision}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden CTA */}
      <GoldenCTA text="Start a project" link="/contact" />
    </div>
  );
}

