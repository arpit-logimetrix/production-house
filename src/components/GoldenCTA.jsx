import React from 'react';
import { Link } from 'react-router-dom';

export default function GoldenCTA({ text = 'Start a project', link = '/contact' }) {
  return (
    <section className="golden-cta">
      <Link to={link}>
        <span className="cta-text">{text}</span>
        <span className="arrow">→</span>
      </Link>
    </section>
  );
}

