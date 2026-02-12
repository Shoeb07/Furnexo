import React from 'react';
import { Star, Heart } from 'lucide-react';

export default function ProductCard({ product, isFavorite, toggleFavorite, addToCart }) {
  return (
    <div style={styles.productCard}>
      <div style={styles.productImageContainer}>
        <div style={styles.productImage}>
          <span style={styles.productImageText}>
            {product.name.split(' ')[0]}
          </span>
        </div>
        <button 
          style={styles.favoriteBtn}
          onClick={() => toggleFavorite(product.id)}
          aria-label="Add to favorites"
        >
          <Heart 
            size={20} 
            fill={isFavorite ? '#FFD700' : 'none'}
            color={isFavorite ? '#FFD700' : '#fff'}
          />
        </button>
      </div>
      <div style={styles.productInfo}>
        <h3 style={styles.productName}>{product.name}</h3>
        <p style={styles.productDescription}>{product.description}</p>
        <div style={styles.productRating}>
          <Star size={16} fill="#FFD700" color="#FFD700" />
          <span style={styles.ratingText}>{product.rating}</span>
          <span style={styles.reviewsText}>({product.reviews} reviews)</span>
        </div>
        <div style={styles.productFooter}>
          <span style={styles.productPrice}>${product.price.toLocaleString()}</span>
          <button 
            style={styles.addToCartBtn}
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  productCard: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
  },
  productImageContainer: {
    position: 'relative',
    paddingTop: '75%',
    overflow: 'hidden',
  },
  productImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImageText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#FFD700',
  },
  favoriteBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'rgba(0,0,0,0.5)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  productInfo: {
    padding: '1.5rem',
  },
  productName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#1A1A1A',
  },
  productDescription: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '1rem',
    lineHeight: '1.5',
  },
  productRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  ratingText: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#1A1A1A',
  },
  reviewsText: {
    fontSize: '0.85rem',
    color: '#999',
  },
  productFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid #F0F0F0',
  },
  productPrice: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1A1A1A',
  },
  addToCartBtn: {
    backgroundColor: '#000',
    color: '#FFD700',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};