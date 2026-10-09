import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Briefcase, Globe } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">
          Yanis<span className="accent">.</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <div className="nav-divider"></div>
          <div className="social-links">
            <a href="https://github.com/yaniszf" target="_blank" rel="noreferrer" className="social-icon">
              <Code size={18} />
            </a>
            <a href="https://linkedin.com/in/yaniszf" target="_blank" rel="noreferrer" className="social-icon">
              <Briefcase size={18} />
            </a>
          </div>
        </div>

        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu glass">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-socials" style={{ display: 'flex', gap: '20px', marginTop: '16px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
            <a href="https://github.com/yaniszf" className="social-icon"><Code size={24} /></a>
            <a href="https://linkedin.com/in/yaniszf" className="social-icon"><Briefcase size={24} /></a>
          </div>
        </div>
      )}

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 24px 0;
          transition: var(--transition-base);
        }

        .navbar.scrolled {
          padding: 16px 0;
          background: rgba(9, 9, 11, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.02em;
        }

        .logo .accent {
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-divider {
          width: 1px;
          height: 20px;
          background: var(--border);
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-icon {
          color: var(--text-secondary);
          transition: var(--transition-base);
        }

        .social-icon:hover {
          color: var(--primary);
          transform: translateY(-2px);
        }

        .mobile-toggle {
          display: none;
          color: white;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          border-top: none;
        }

        .mobile-link {
          font-size: 1.2rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
