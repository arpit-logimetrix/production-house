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

      {/* Studio Leadership & Visionaries Behind Chitralok */}
      <section style={{
        padding: '100px var(--container-pad) 130px',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: '72px'
      }}>
        {/* Section Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <span style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
              STUDIO CREATIVE ROSTER &amp; LEADERSHIP
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
            Empowering fearless storytelling, cultural authenticity, and world-class cinematic execution across India.
          </span>
        </div>

        {/* 1. FIRST: PRODUCERS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '14px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
              01 · PRODUCERS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.12em' }}>
              {about.producers?.length || 6} Executive Producers
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '28px'
          }}>
            {about.producers && about.producers.map((producer, idx) => (
              <div
                key={idx}
                className="visionary-card"
                style={{
                  background: 'rgba(12, 12, 11, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Visual Image Frame */}
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  background: 'var(--bg-card)'
                }}>
                  <img
                    src={producer.img}
                    alt={producer.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,7,7,0.1) 0%, rgba(7,7,7,0.3) 50%, rgba(7,7,7,0.92) 100%)',
                    pointerEvents: 'none'
                  }} />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    background: 'rgba(7, 7, 7, 0.88)',
                    padding: '4px 10px',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '2px'
                  }}>
                    {producer.role}
                  </span>
                </div>

                {/* Card Details */}
                <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {producer.name}
                  </h3>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                    {producer.subtitle || producer.role}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, letterSpacing: '0.02em', marginTop: '2px' }}>
                    {producer.credit || producer.vision}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. SECOND: DIRECTORS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '14px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
              02 · DIRECTORS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.12em' }}>
              Directorial Vision &amp; Craft
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '28px'
          }}>
            {about.directors && about.directors.map((director, idx) => (
              <div
                key={idx}
                className="visionary-card"
                style={{
                  background: 'rgba(12, 12, 11, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  background: 'var(--bg-card)'
                }}>
                  <img
                    src={director.img}
                    alt={director.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,7,7,0.1) 0%, rgba(7,7,7,0.3) 50%, rgba(7,7,7,0.92) 100%)',
                    pointerEvents: 'none'
                  }} />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    background: 'rgba(7, 7, 7, 0.88)',
                    padding: '4px 10px',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '2px'
                  }}>
                    {director.tag || director.role}
                  </span>
                </div>

                <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {director.name}
                  </h3>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                    {director.subtitle || director.role}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, letterSpacing: '0.02em', marginTop: '2px' }}>
                    {director.credit}
                  </span>
                  {director.path && (
                    <Link
                      to={director.path}
                      className="ul"
                      style={{
                        marginTop: 'auto',
                        paddingTop: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontSize: '11px',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-primary)',
                        fontWeight: 600
                      }}
                    >
                      View Director Archive →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. THIRD: WRITERS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '14px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
              03 · WRITERS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.12em' }}>
              Screenplay, Dialogue &amp; Narrative Architecture
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '28px'
          }}>
            {about.writers && about.writers.map((writer, idx) => (
              <div
                key={idx}
                className="visionary-card"
                style={{
                  background: 'rgba(12, 12, 11, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  background: 'var(--bg-card)'
                }}>
                  <img
                    src={writer.img}
                    alt={writer.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,7,7,0.1) 0%, rgba(7,7,7,0.3) 50%, rgba(7,7,7,0.92) 100%)',
                    pointerEvents: 'none'
                  }} />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    background: 'rgba(7, 7, 7, 0.88)',
                    padding: '4px 10px',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '2px'
                  }}>
                    {writer.tag || writer.role}
                  </span>
                </div>

                <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {writer.name}
                  </h3>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                    {writer.subtitle || writer.role}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, letterSpacing: '0.02em' }}>
                    {writer.credit}
                  </span>
                  <p style={{ margin: '4px 0 0', fontSize: '12px', lineHeight: 1.6, color: 'var(--text-light-sub)', fontStyle: 'italic' }}>
                    {writer.vision}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FOURTH: ACTORS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '14px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
              04 · ACTORS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.12em' }}>
              Featured Ensemble &amp; Cast
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '28px'
          }}>
            {about.actors && about.actors.map((actor, idx) => (
              <div
                key={idx}
                className="visionary-card"
                style={{
                  background: 'rgba(12, 12, 11, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  background: 'var(--bg-card)'
                }}>
                  <img
                    src={actor.img}
                    alt={actor.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,7,7,0.1) 0%, rgba(7,7,7,0.3) 50%, rgba(7,7,7,0.92) 100%)',
                    pointerEvents: 'none'
                  }} />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    background: 'rgba(7, 7, 7, 0.88)',
                    padding: '4px 10px',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '2px'
                  }}>
                    {actor.role}
                  </span>
                  {actor.character && (
                    <span style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      right: '12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-primary)',
                      background: 'rgba(10, 10, 9, 0.85)',
                      padding: '4px 8px',
                      borderRadius: '2px',
                      border: '1px solid rgba(212, 166, 42, 0.35)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      as {actor.character}
                    </span>
                  )}
                </div>

                <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {actor.name}
                  </h3>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                    {actor.subtitle || actor.role}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, letterSpacing: '0.02em' }}>
                    {actor.credit}
                  </span>
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

