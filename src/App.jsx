import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    const timer = setTimeout(() => setIsLoading(false), 1500);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="loading-screen"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div 
              className="loading-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Yanis<span style={{ color: 'var(--primary)' }}>.</span>
            </motion.div>
            <div className="loading-bar-container">
              <motion.div 
                className="loading-bar"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reading Progress Bar */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Custom Cursor */}
      <motion.div 
        className="cursor"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      <motion.div 
        className="cursor-dot"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.2 }}
      />

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button 
            className="back-to-top glass"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Dynamic Background Blobs */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      <style jsx="true">{`
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--primary);
          transform-origin: 0%;
          z-index: 10001;
        }

        .back-to-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 999;
          cursor: pointer;
          border: 1px solid var(--border);
        }

        .loading-screen {
          position: fixed;
          inset: 0;
          background: var(--bg-color);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        .loading-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .loading-bar-container {
          width: 200px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .loading-bar {
          height: 100%;
          background: var(--primary);
        }

        .bg-blobs {
          position: fixed;
          inset: 0;
          z-index: -2;
          overflow: hidden;
          pointer-events: none;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          animation: float 20s infinite alternate;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: var(--primary);
          top: -100px;
          right: -100px;
        }

        .blob-2 {
          width: 600px;
          height: 600px;
          background: var(--secondary);
          bottom: -150px;
          left: -150px;
          animation-delay: -5s;
        }

        .blob-3 {
          width: 400px;
          height: 400px;
          background: #3b82f6;
          top: 40%;
          left: 30%;
          opacity: 0.05;
          animation-delay: -10s;
        }

        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(100px, 100px) scale(1.1); }
        }

        @media (max-width: 768px) {
          .back-to-top { bottom: 20px; right: 20px; width: 40px; height: 40px; }
        }
      `}</style>
    </div>
  );
}

export default App;
