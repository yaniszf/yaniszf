import React from 'react';
import { Mail, MessageSquare, Briefcase, Code } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div className="contact-card glass">
        <div className="contact-content">
          <h2 className="contact-title">
            Ready to build something <span className="gradient-text">exceptional?</span>
          </h2>
          <p className="contact-subtitle">
            I'm currently available for freelance projects and consulting. Let's discuss how we can bring your vision to life.
          </p>
          
          <div className="contact-buttons">
            <a href="mailto:hello@yanis.dev" className="btn btn-primary lg">
              <Mail size={20} /> Email Me
            </a>
            <a href="https://wa.me/yournumber" className="btn btn-glass lg">
              <MessageSquare size={20} /> WhatsApp
            </a>
          </div>

          <div className="contact-footer">
            <a href="https://linkedin.com/in/yaniszf" className="social-link">
              <Briefcase size={20} /> LinkedIn
            </a>
            <a href="https://github.com/yaniszf" className="social-link">
              <Code size={20} /> GitHub
            </a>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="contact-glow"></div>
      </div>

      <style jsx="true">{`
        .contact-card {
          padding: 100px 40px;
          border-radius: var(--radius-xl);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .contact-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 32px;
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 48px;
          line-height: 1.6;
        }

        .contact-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 64px;
        }

        .btn.lg {
          padding: 16px 40px;
          font-size: 1.1rem;
        }

        .contact-footer {
          display: flex;
          justify-content: center;
          gap: 40px;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .social-link:hover {
          color: white;
        }

        .contact-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          z-index: -1;
        }

        @media (max-width: 768px) {
          .contact-card { padding: 60px 24px; }
          .contact-title { font-size: 2.5rem; }
          .contact-buttons { flex-direction: column; }
          .contact-footer { flex-direction: column; gap: 20px; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
