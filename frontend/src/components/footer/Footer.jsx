import { NavLink } from 'react-router-dom';
import footerLogo from '../../assets/Logo.png';

import './footer.css';

export const Footer = () => {
  return (
    <footer className="main-footer-section">
      <div className="footer-links-block">
        <h2 className="quick-links-title">Quick Links</h2>
        <div className="quick-links-container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/start">Let's Start</NavLink>
        </div>
      </div>

      <div className="footer-logo-block">
        <img src={footerLogo} className="footer-logo" alt="Footer Logo" />
        <h1 className="footer-web-name">Let's Change</h1>
      </div>
    </footer>
  );
};