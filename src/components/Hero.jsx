import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Globe, Layout, Shield, FileDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge">
            <span className="dot"></span>
            Scalable Solutions for Global Clients
          </div>
          <h1 className="hero-title">
            Enterprise <br />
            <span className="gradient-text">Software Architect</span>
          </h1>
          <p className="hero-subtitle">
            Crafting high-performance Education Management Systems, secure Laravel applications, and custom business software for institutions and startups worldwide.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              See Case Studies <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" download className="btn btn-glass">
              <FileDown size={18} /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="visual-container glass">
            <img 
              src="/assets/dashboard.png" 
              alt="Dashboard Mockup" 
              className="mockup-img"
            />
            
            <motion.div 
              className="floating-card top glass"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="icon-box blue">
                <Shield size={18} />
              </div>
              <div>
                <p className="card-label">Security</p>
                <p className="card-value">Enterprise Grade</p>
              </div>
            </motion.div>

            <motion.div 
              className="floating-card bottom glass"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="icon-box purple">
                <Layout size={18} />
              </div>
              <div>
                <p className="card-label">Interface</p>
                <p className="card-value">Modern SaaS UX</p>
              </div>
            </motion.div>
          </div>
          
          <div className="hero-glow"></div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .hero { position: relative; padding-top: 180px; padding-bottom: 120px; overflow: hidden; }
        .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center; }
        .badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 100px; font-size: 0.75rem; font-weight: 600; color: #60a5fa; margin-bottom: 24px; }
        .dot { width: 6px; height: 6px; background: #3b82f6; border-radius: 50%; position: relative; }
        .dot::after { content: ''; position: absolute; inset: -2px; border-radius: 50%; background: #3b82f6; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(3); opacity: 0; } }
        .hero-title { font-size: 5rem; margin-bottom: 24px; line-height: 1; }
        .hero-subtitle { font-size: 1.25rem; color: var(--text-secondary); max-width: 540px; margin-bottom: 40px; line-height: 1.6; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 16px; }
        .hero-visual { position: relative; }
        .visual-container { position: relative; z-index: 10; padding: 8px; border-radius: var(--radius-xl); }
        .mockup-img { width: 100%; border-radius: 24px; display: block; }
        .floating-card { position: absolute; padding: 16px; border-radius: var(--radius-md); display: flex; align-items: center; gap: 12px; z-index: 20; min-width: 180px; }
        .floating-card.top { top: -20px; right: -20px; }
        .floating-card.bottom { bottom: -20px; left: -20px; }
        .icon-box { padding: 8px; border-radius: 10px; }
        .icon-box.blue { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
        .icon-box.purple { background: rgba(139, 92, 246, 0.2); color: #a78bfa; }
        .card-label { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 2px; }
        .card-value { font-size: 0.9rem; font-weight: 600; }
        .hero-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 140%; height: 140%; background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%); z-index: -1; }
        
        @media (max-width: 1024px) { 
          .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 80px; } 
          .hero-subtitle { margin-left: auto; margin-right: auto; } 
          .hero-actions { justify-content: center; } 
          .hero-title { font-size: 4rem; } 
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-subtitle { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
