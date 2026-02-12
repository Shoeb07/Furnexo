import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Hero from './Hero';
import Categories from './Categories';
import Products from './Products';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Luxury Velvet Sofa',
      category: 'living',
      price: 1299,
      description: 'Elegant 3-seater velvet sofa with deep cushioning and brass legs',
      rating: 4.8,
      reviews: 124,
      image: 'sofa'
    },
    {
      id: 2,
      name: 'Scandinavian Dining Table',
      category: 'dining',
      price: 899,
      description: 'Solid oak wood dining table seats 6, minimalist Nordic design',
      rating: 4.9,
      reviews: 89,
      image: 'table'
    },
    {
      id: 3,
      name: 'Executive Office Chair',
      category: 'office',
      price: 349,
      description: 'Ergonomic chair with lumbar support, breathable mesh back',
      rating: 4.7,
      reviews: 256,
      image: 'chair'
    },
    {
      id: 4,
      name: 'King Bedroom Set',
      category: 'bedroom',
      price: 2499,
      description: 'Complete set: bed frame, nightstands, dresser in walnut finish',
      rating: 4.9,
      reviews: 67,
      image: 'bedroom'
    },
    {
      id: 5,
      name: 'Marble Coffee Table',
      category: 'living',
      price: 599,
      description: 'Contemporary marble top with gold-finished steel frame',
      rating: 4.6,
      reviews: 143,
      image: 'coffee-table'
    },
    {
      id: 6,
      name: 'Modern Bookshelf',
      category: 'office',
      price: 449,
      description: 'Industrial-style open shelving unit, 6 tiers, sturdy metal frame',
      rating: 4.8,
      reviews: 91,
      image: 'bookshelf'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏠' },
    { id: 'living', name: 'Living Room', icon: '🛋️' },
    { id: 'bedroom', name: 'Bedroom', icon: '🛏️' },
    { id: 'dining', name: 'Dining Room', icon: '🍽️' },
    { id: 'office', name: 'Office', icon: '💼' },
    { id: 'outdoor', name: 'Outdoor', icon: '🌳' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div style={styles.app}>
      <Header 
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        cartCount={cartCount}
      />
      
      <Hero />
      
      <Categories 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <Products 
        products={filteredProducts}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        addToCart={addToCart}
      />
      
      <HowItWorks />
      
      <Footer />
      {/* Replace the phone prop with the client's number in international format (no '+' or separators) */}
      <WhatsAppButton phone="+919100590377" message="Hi%2C%20I%27m%20interested%20in%20your%20products" />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: '#FAFAFA',
    color: '#1A1A1A',
  }
};