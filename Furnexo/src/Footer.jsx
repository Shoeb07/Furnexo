import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerGrid}>
          <div style={styles.footerSection}>
            <div style={styles.footerLogo}>
              <span style={styles.logoText}>Furn</span>
              <span style={styles.logoAccent}>exo</span>
            </div>
            <p style={styles.footerDescription}>
              Premium furniture crafted for those who appreciate quality, design, and comfort. 
              Transforming houses into homes since 2020.
            </p>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Quick Links</h4>
            <ul style={styles.footerList}>
              <li><a href="#home" style={styles.footerLink}>Home</a></li>
              <li><a href="#products" style={styles.footerLink}>Products</a></li>
              <li><a href="#about" style={styles.footerLink}>About Us</a></li>
              <li><a href="#blog" style={styles.footerLink}>Blog</a></li>
              <li><a href="#contact" style={styles.footerLink}>Contact</a></li>
            </ul>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Categories</h4>
            <ul style={styles.footerList}>
              <li><a href="#living" style={styles.footerLink}>Living Room</a></li>
              <li><a href="#bedroom" style={styles.footerLink}>Bedroom</a></li>
              <li><a href="#dining" style={styles.footerLink}>Dining Room</a></li>
              <li><a href="#office" style={styles.footerLink}>Office</a></li>
              <li><a href="#outdoor" style={styles.footerLink}>Outdoor</a></li>
            </ul>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Contact Us</h4>
            <ul style={styles.footerList}>
              <li style={styles.contactItem}>
                <Phone size={16} style={styles.contactIcon} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li style={styles.contactItem}>
                <Mail size={16} style={styles.contactIcon} />
                <span>info@furnexo.com</span>
              </li>
              <li style={styles.contactItem}>
                <MapPin size={16} style={styles.contactIcon} />
                <span>123 Design Avenue, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <p style={styles.copyright}>© 2026 Furnexo. All rights reserved.</p>
          <div style={styles.footerLinks}>
            <a href="#privacy" style={styles.footerBottomLink}>Privacy Policy</a>
            <a href="#terms" style={styles.footerBottomLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#1A1A1A',
    color: '#fff',
    padding: '4rem 2rem 2rem',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  footerLogo: {
    fontSize: '1.5rem',
    fontWeight: '800',
    marginBottom: '0.5rem',
  },
  logoText: {
    color: '#fff',
  },
  logoAccent: {
    color: '#FFD700',
  },
  footerDescription: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#999',
  },
  footerTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#FFD700',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  footerLink: {
    color: '#999',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#999',
    fontSize: '0.95rem',
  },
  contactIcon: {
    color: '#FFD700',
    flexShrink: 0,
  },
  footerBottom: {
    borderTop: '1px solid #333',
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyright: {
    fontSize: '0.9rem',
    color: '#666',
  },
  footerLinks: {
    display: 'flex',
    gap: '2rem',
  },
  footerBottomLink: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
  },
};