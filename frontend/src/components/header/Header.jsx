import { FaChevronDown, FaUserCircle, FaUserEdit, FaSignOutAlt, FaCamera } from "react-icons/fa";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import headerLogo from "../../assets/Logo.png";

import "./header.css";

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const currentUser = JSON.parse(localStorage.getItem("user"));

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
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact-us" className="nav-link">
          Contact Us
        </NavLink>
      </nav>

      <NavLink to="/lets-change" className="main-web-btn">
        Let's Start
      </NavLink>

      <div className="account-dropdown">
        <span className="account-text" onClick={toggleDropdown}>
          Account
          <span className="account-toggle">
            <FaChevronDown />
          </span>
        </span>

        {showDropdown && (
          <div className="dropdown-menu">
            {currentUser ? (
              <>
                <div className="dropdown-user-info">
                  {currentUser.profilePic ? (
                    <img
                      src={`http://localhost:2209/${currentUser.profilePic}`}
                      alt="Profile"
                      className="avatar-img"
                    />
                  ) : (
                    <FaUserCircle className="avatar-icon" />
                  )}

                  <div className="dropdown-greeting">
                    {getGreeting()}, <strong>{currentUser.name}</strong>
                  </div>
                </div>

                <div className="dropdown-divider"></div>

                <span
                  className="dropdown-link"
                  onClick={() => {
                    setShowDropdown(false);
                    navigate("/edit-profile");
                  }}
                >
                  <FaUserEdit className="dropdown-icon" /> Edit Profile
                </span>

                <div className="dropdown-divider"></div>

                <span className="dropdown-link" onClick={handleLogout}>
                  <FaSignOutAlt className="dropdown-icon" /> Logout
                </span>
              </>
            ) : (
              <>
                <div className="dropdown-user-info">
                  <FaUserCircle className="avatar-icon" />
                  <div className="dropdown-greeting">Welcome</div>
                </div>

                <div className="dropdown-divider"></div>

                <span
                  className="dropdown-link"
                  onClick={() => {
                    setShowDropdown(false);
                    navigate("/login");
                  }}
                >
                  Login
                </span>
                <span
                  className="dropdown-link"
                  onClick={() => {
                    setShowDropdown(false);
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};