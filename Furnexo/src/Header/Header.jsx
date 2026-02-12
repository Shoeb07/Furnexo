import React from 'react';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';

export default function Header({ scrolled, isMenuOpen, setIsMenuOpen, cartCount }) {
  return (
    <header style={{
      ...styles.header,
      ...(scrolled ? styles.headerScrolled : {})
    }}>
      <div style={styles.headerContent}>
        {/* Logo */}
        <div style={styles.logo}>
          <span style={styles.logoText}>Furn</span>
          <span style={styles.logoAccent}>exo</span>
        </div>

        {/* Desktop Navigation */}
        <nav style={styles.desktopNav}>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#products" style={styles.navLink}>Products</a>
          <a href="#categories" style={styles.navLink}>Categories</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>

        {/* Right Icons */}
        <div style={styles.headerIcons}>
          <button style={styles.iconButton} aria-label="Search">
            <Search size={20} />
          </button>
          <button style={styles.iconButton} aria-label="User Account">
            <User size={20} />
          </button>
          <button style={styles.iconButton} aria-label="Shopping Cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span style={styles.cartBadge}>{cartCount}</span>}
          </button>
          <button 
            style={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav style={styles.mobileNav}>
          <a href="#home" style={styles.mobileNavLink}>Home</a>
          <a href="#products" style={styles.mobileNavLink}>Products</a>
          <a href="#categories" style={styles.mobileNavLink}>Categories</a>
          <a href="#about" style={styles.mobileNavLink}>About</a>
          <a href="#contact" style={styles.mobileNavLink}>Contact</a>
        </nav>
      )}
    </header>
  );
}
const styles = {
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#000',
    color: '#fff',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    boxShadow: 'none',
  },
  headerScrolled: {
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  },
  headerContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: '800',
    letterSpacing: '-0.5px',
    cursor: 'pointer',
  },
  logoText: {
    color: '#fff',
  },
  logoAccent: {
    color: '#FFD700',
  },
  desktopNav: {
    display: 'flex',
    gap: '2.5rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
    position: 'relative',
  },
  headerIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  iconButton: {
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'color 0.3s ease',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: '#FFD700',
    color: '#000',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    fontSize: '0.7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  menuToggle: {
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'none',
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    backgroundColor: '#1A1A1A',
    borderTop: '1px solid #333',
  },
  mobileNavLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '1rem 2rem',
    borderBottom: '1px solid #333',
    transition: 'background-color 0.3s ease',
  },
};