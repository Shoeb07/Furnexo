import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Browse & Select',
      description: 'Explore our curated collection of premium furniture pieces designed for modern living'
    },
    {
      number: 2,
      title: 'Customize & Order',
      description: 'Choose colors, materials, and sizes. Place your order with our secure checkout'
    },
    {
      number: 3,
      title: 'Delivery & Setup',
      description: 'Free white-glove delivery and professional assembly included with every purchase'
    }
  ];

  return (
    <section style={styles.stepsSection}>
      <div style={styles.container}>
        <h2 style={styles.stepsSectionTitle}>3 Easy Steps to Your Perfect Furniture</h2>
        <div style={styles.stepsGrid}>
          {steps.map(step => (
            <div key={step.number} style={styles.stepCard}>
              <div style={styles.stepNumber}>{step.number}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  stepsSection: {
    padding: '5rem 2rem',
    backgroundColor: '#000',
    color: '#fff',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  stepsSectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '4rem',
    color: '#fff',
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '3rem',
  },
  stepCard: {
    textAlign: 'center',
    padding: '2rem',
  },
  stepNumber: {
    width: '80px',
    height: '80px',
    backgroundColor: '#FFD700',
    color: '#000',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    fontWeight: '800',
    margin: '0 auto 1.5rem',
  },
  stepTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#FFD700',
  },
  stepDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#E0E0E0',
  },
};