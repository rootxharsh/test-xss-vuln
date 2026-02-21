import React from 'react';
import './Footer.css';

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <button className="logo footer-logo" onClick={() => navigate('home')} aria-label="Go home">
            <span className="logo-mark" />
            <span className="logo-text">Nexus</span>
          </button>
          <p>Building the digital future, one exceptional product at a time.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><button onClick={() => navigate('home')}>Home</button></li>
              <li><button onClick={() => navigate('about')}>About</button></li>
              <li><button onClick={() => navigate('work')}>Work</button></li>
              <li><button onClick={() => navigate('contact')}>Contact</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><button onClick={() => navigate('services')}>Web Development</button></li>
              <li><button onClick={() => navigate('services')}>Mobile Apps</button></li>
              <li><button onClick={() => navigate('services')}>UI/UX Design</button></li>
              <li><button onClick={() => navigate('services')}>Cloud & DevOps</button></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Nexus. All rights reserved.</p>
          <p>Built with React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
