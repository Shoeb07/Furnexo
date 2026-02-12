import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>
          Transform Your Space<br />
          <span style={styles.heroTitleAccent}>With Premium Furniture</span>
        </h1>
        <p style={styles.heroSubtitle}>
          Discover handcrafted pieces that blend elegance, comfort, and functionality
        </p>
        <div style={styles.heroButtons}>
          <button style={styles.heroPrimaryBtn}>
            Shop Collection <ChevronRight size={20} />
          </button>
          <button style={styles.heroSecondaryBtn}>Learn More</button>
        </div>
      </div>
      <div style={styles.heroOverlay}></div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A1A1A 100%)',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
    padding: '2rem',
    maxWidth: '900px',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: '800',
    color: '#fff',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
  },
  heroTitleAccent: {
    color: '#FFD700',
  },
  heroSubtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
    color: '#E0E0E0',
    marginBottom: '2.5rem',
    lineHeight: '1.6',
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  heroPrimaryBtn: {
    backgroundColor: '#FFD700',
    color: '#000',
    border: 'none',
    padding: '1rem 2.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
  },
  heroSecondaryBtn: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    padding: '1rem 2.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};