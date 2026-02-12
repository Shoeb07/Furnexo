import React from 'react';

/**
 * Floating WhatsApp button.
 * Props:
 * - phone (string): recipient phone number in international format (can include + or spaces)
 * - message (string): optional initial message sent to the chat
 *
 * Example usage:
 * <WhatsAppButton phone="+919812345678" message="Hi!%20I%27m%20interested%20in%20your%20products" />
 */
export default function WhatsAppButton({ phone = '', message = '' }) {
  // Ensure only digits in phone, WhatsApp requires country code and no + or separators
  const formattedPhone = (phone || '').replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message || '');
  const href = formattedPhone
    ? `https://wa.me/${formattedPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`
    : '#';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={styles.container}
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.icon}
        aria-hidden="true"
      >
        <path
          fill="#ffffff"
          d="M20.52 3.48A11.9 11.9 0 0012 0C5.372 0 .09 5.282.09 11.91c0 2.096.548 4.145 1.588 5.94L0 24l6.332-1.656a11.836 11.836 0 005.668 1.44h.01c6.628 0 11.91-5.282 11.91-11.91 0-3.18-1.24-6.17-3.41-8.39zM12 21.24h-.01a10.09 10.09 0 01-5.138-1.37l-.37-.22L4 20l1.74-2.49-.24-.4A10.086 10.086 0 012.05 11.91C2.05 6.08 6.17 2 12 2c2.71 0 5.2 1.05 7.09 2.95A9.998 9.998 0 0122 11.91c0 5.82-4.12 9.33-10 9.33z"
        />
        <path
          fill="#ffffff"
          d="M17.1 14.06c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.7.15-.22.3-.82.98-1 1.18-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.41-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.12-.61.12-.12.28-.32.42-.48.14-.16.18-.27.28-.45.09-.17.05-.33-.02-.47-.07-.14-.7-1.69-.96-2.32-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.52.07-.8.32-.28.25-1.07 1.04-1.07 2.54s1.1 2.95 1.25 3.15c.15.2 2.15 3.3 5.21 4.63 3.06 1.34 3.06.9 3.61.84.55-.07 1.78-.73 2.03-1.44.25-.7.25-1.3.18-1.44-.06-.13-.22-.2-.5-.35z"
        />
      </svg>
    </a>
  );
}

const styles = {
  container: {
    position: 'fixed',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    backgroundColor: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 18px rgba(37,211,102,0.3)',
    zIndex: 1000,
    textDecoration: 'none',
  },
  icon: {
    width: 28,
    height: 28,
  },
};
