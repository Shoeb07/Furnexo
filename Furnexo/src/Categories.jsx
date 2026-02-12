import React from 'react';

export default function Categories({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <section id="categories" style={styles.categoriesSection}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Browse by Category</h2>
        <div style={styles.categoriesGrid}>
          {categories.map(category => (
            <button
              key={category.id}
              style={{
                ...styles.categoryCard,
                ...(selectedCategory === category.id ? styles.categoryCardActive : {})
              }}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span style={styles.categoryIcon}>{category.icon}</span>
              <span style={styles.categoryName}>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  categoriesSection: {
    padding: '5rem 2rem',
    backgroundColor: '#fff',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#1A1A1A',
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  categoryCard: {
    backgroundColor: '#FAFAFA',
    border: '2px solid #E0E0E0',
    borderRadius: '12px',
    padding: '2rem 1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  categoryCardActive: {
    backgroundColor: '#000',
    borderColor: '#FFD700',
    color: '#fff',
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  },
  categoryIcon: {
    fontSize: '2.5rem',
  },
  categoryName: {
    fontSize: '0.95rem',
    fontWeight: '600',
  },
};