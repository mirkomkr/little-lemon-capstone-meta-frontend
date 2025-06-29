import React from 'react';
import logo from '../src/assets/Logo.svg';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>

        <div className="footer-section">
          <h3>Doormat Navigation</h3>
          <ul className="footer-nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="footer-contact-list">
            <li>Address: 123 Lemon Street</li>
            <li>Phone Number: (123) 456-7890</li>
            <li>Email: contact@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social Media Links</h3>
          <ul className="footer-social-list">
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
