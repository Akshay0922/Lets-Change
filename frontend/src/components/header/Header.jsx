import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../../assets/Logo.png";

import Modal from "../modal/Modal";
import LoginForm from "../login/LoginForm";
import SignupForm from "../signup/SignupForm";

import "./header.css";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const openLogin = () => {
    setActiveForm("login");
    setShowModal(true);
  };

  const openSignup = () => {
    setActiveForm("signup");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveForm(null);
  };

  return (
    <header className="main-header-section">
      <div className="header-logo-container">
        <img src={headerLogo} className="header-logo" alt="Header Logo" />
        <div className="logo-shadow"></div>
      </div>

      <NavLink to="/" className="header-web-name">
        Let's Change
      </NavLink>

      <nav className="header-navbar">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact-us" className="nav-link">Contact Us</NavLink>
      </nav>

      <NavLink to="/lets-change" className="main-web-btn">
        Let's Start
      </NavLink>

      <div className="account-dropdown">
        <span className="account-text">
          Account
          <span className="account-toggle" onClick={toggleDropdown}>
            <FaChevronDown />
          </span>
        </span>

        {showDropdown && (
          <div className="dropdown-menu">
            <span className="dropdown-link" onClick={openLogin}>
              Login
            </span>
            <span className="dropdown-link" onClick={openSignup}>
              Sign Up
            </span>
          </div>
        )}
      </div>

      <Modal show={showModal} onClose={closeModal}>
        {activeForm === "login" && (
          <LoginForm switchToSignup={() => setActiveForm("signup")} />
        )}
        {activeForm === "signup" && (
          <SignupForm switchToLogin={() => setActiveForm("login")} />
        )}
      </Modal>
    </header>
  );
};