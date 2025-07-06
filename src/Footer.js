import React from 'react';
import logo from '../src/assets/Logo.svg';

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site Footer">
      <div className="site-footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>

        <div className="footer-section" aria-label="Doormat Navigation">
          <h3>Doormat Navigation</h3>
          <ul className="footer-nav-list">
            <li><a href="/" aria-label="Home">Home</a></li>
            <li><a href="/order-online" aria-label="Order Online">Order Online</a></li>
            <li><a href="/reservations" aria-label="Reservations">Reservations</a></li>
            <li><a href="/about" aria-label="About">About</a></li>
            <li><a href="/login" aria-label="Login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section" aria-label="Contact Information">
          <h3>Contact</h3>
          <ul className="footer-contact-list">
            <li>Address: 123 Lemon Street</li>
            <li>Phone Number: (123) 456-7890</li>
            <li>
              Email: <a href="mailto:contact@littlelemon.com" aria-label="Email contact at Little Lemon">contact@littlelemon.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-section" aria-label="Social Media Links">
          <h3>Social Media Links</h3>
          <ul className="footer-social-list">
            <li><a href="https://facebook.com" aria-label="Facebook">Facebook</a></li>
            <li><a href="https://instagram.com" aria-label="Instagram">Instagram</a></li>
            <li><a href="https://twitter.com" aria-label="Twitter">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
