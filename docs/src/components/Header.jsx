// Header.jsx
import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../assets/logo.png';

const MOBILE_BREAKPOINT = 768;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Stephen Vineburg Logo" className="cropped-logo" />
      </div>

      {!isMobile && (
        <nav className="header__center-wrapper header__nav">
          <a href="#contact">Contact</a>
          <a href="#buy">Buy</a>
          <a href="#statement">Statement</a>
        </nav>
      )}

      {!isMobile && (
        <a href="mailto:stephenvineburg@gmail.com" className="header__email">
          stephenvineburg@gmail.com
        </a>
      )}

      {isMobile && (
        <button
          className="header__hamburger"
          aria-label="Open menu"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          &#9776;
        </button>
      )}

      {isMobile && isMobileMenuOpen && (
        <div className="header__sidebar">
          <div className="header__sidebar-logo">
            <img src={logo} alt="Stephen Vineburg Logo" className="cropped-logo" />
          </div>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
          <a href="#buy" onClick={handleLinkClick}>Buy</a>
          <a href="#statement" onClick={handleLinkClick}>Statement</a>
        </div>
      )}
    </header>
  );
};

export default Header;
