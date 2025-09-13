import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import footerLogo from '../../assets/Logo.png';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="main-footer-section">

      <div className="footer-logo-block">
        <NavLink to="/"><img src={footerLogo} className="footer-logo" alt="Footer Logo" /></NavLink>
        <h1 className="footer-web-name">Let's Change</h1>
      </div>

      <div className="footer-content-block">

        <div className="footer-links-block">
          <h2 className="quick-links-title">Quick Links</h2>
          <div className="quick-links-container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
            <NavLink to="/lets-change">Let's Start</NavLink>
          </div>
        </div>

        <div className="footer-resources-block">
          <h2 className="resources-title">Resources</h2>
          <div className="resources-container">
            <NavLink to="/success-stories">Success Stories</NavLink>
            <NavLink to="/blog">Blogs</NavLink>
            <NavLink to="/tips-tricks">Tips & Tricks</NavLink>
          </div>
        </div>

        <div className="footer-connect-block">
          <h2 className="connect-title">Connect</h2>
          <div className="connect-links-container">
            <a href="https://facebook.com/akshayg.0922" target="_blank" rel="noreferrer" className="footer-social-icon fb"><FaFacebookF /></a>
            <a href="https://instagram.com/akshay.o22" target="_blank" rel="noreferrer" className="footer-social-icon insta"><FaInstagram /></a>
            <a href="https://linkedin.com/in/akshay0922" target="_blank" rel="noreferrer" className="footer-social-icon linkedin"><FaLinkedinIn /></a>
            <a href="https://youtube.com/@AkshayRealVlogs" target="_blank" rel="noreferrer" className="footer-social-icon yt"><FaYoutube /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};