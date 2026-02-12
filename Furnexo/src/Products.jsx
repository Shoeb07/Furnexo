import React from 'react';
import ProductCard from './ProductCard';

export default function Products({ products, favorites, toggleFavorite, addToCart }) {
  return (
    <section id="products" style={styles.productsSection}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.productsGrid}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              toggleFavorite={toggleFavorite}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  productsSection: {
    padding: '5rem 2rem',
    backgroundColor: '#FAFAFA',
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
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
  },
};