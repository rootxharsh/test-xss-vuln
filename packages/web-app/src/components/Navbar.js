import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',     page: 'home' },
  { label: 'About',    page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Work',     page: 'work' },
  { label: 'Contact',  page: 'contact' },
];

function Navbar({ currentPage, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <button className="logo" onClick={() => handleNav('home')} aria-label="Go home">
          <span className="logo-mark" />
          <span className="logo-text">Nexus</span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} role="list">
          {NAV_LINKS.map(({ label, page }) => (
            <li key={page}>
              <button
                className={`nav-link ${currentPage === page ? 'active' : ''}`}
                onClick={() => handleNav(page)}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="mobile-cta">
            <button className="btn btn-primary" onClick={() => handleNav('contact')}>
              Get Started
            </button>
          </li>
        </ul>

        <button
          className="btn btn-primary nav-cta-desktop"
          onClick={() => handleNav('contact')}
        >
          Get Started
        </button>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
