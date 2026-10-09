import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <p className="footer-logo">
            Yanis<span className="accent">.</span>
          </p>
          <p className="footer-tagline">Built with precision for educational excellence.</p>
        </div>
        
        <div className="footer-nav">
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#experience" className="footer-link">Experience</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        <p className="footer-copy">© 2026. All rights reserved.</p>
      </div>

      <style jsx="true">{`
        .footer {
          padding: 64px 0;
          border-top: 1px solid var(--border);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 8px;
        }

        .footer-logo .accent {
          color: var(--primary);
        }

        .footer-tagline {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-nav {
          display: flex;
          gap: 32px;
        }

        .footer-link {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
        }

        .footer-link:hover {
          color: white;
        }

        .footer-copy {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-nav {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
