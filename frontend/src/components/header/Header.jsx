import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import headerLogo from '../../assets/Logo.png';

import './header.css';

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <header className="main-header-section">

      <div className="header-logo-container">
        <img src={headerLogo} className="header-logo" alt="Header Logo" />
        <div className="logo-shadow"></div>
      </div>

      <NavLink to="/" className="header-web-name">Let's Change</NavLink>

      <nav className="header-navbar">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
      </nav>

      <NavLink to="/lets-start" className="main-web-btn">Let's Start</NavLink>

      <div className="account-dropdown">
        <span className="account-text">
          Account
          <span className="account-toggle" onClick={toggleDropdown}>
            <FaChevronDown />
          </span>
        </span>

        {showDropdown && (
          <div className="dropdown-menu">
            <NavLink to="/login" className="dropdown-link">Login</NavLink>
            <NavLink to="/signup" className="dropdown-link">Sign Up</NavLink>
          </div>
        )}
        
      </div>

    </header>
  );
};