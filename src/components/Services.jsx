import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Database, Server, Smartphone, Code2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Education Management Systems',
      desc: 'Comprehensive platforms for managing students, grading, and school administration.',
      icon: <Globe />
    },
    {
      title: 'School & Islamic Platforms',
      desc: 'Specialized portals for Islamic institutions, schools, and religious organizations.',
      icon: <Layout />
    },
    {
      title: 'Laravel Applications',
      desc: 'Robust, secure, and scalable enterprise applications built with the Laravel framework.',
      icon: <Database />
    },
    {
      title: 'Modern Web Applications',
      desc: 'High-performance front-end experiences using React and Next.js.',
      icon: <Server />
    },
    {
      title: 'Custom Business Software',
      desc: 'Tailor-made software solutions to solve unique business challenges.',
      icon: <Code2 />
    },
    {
      title: 'Database Architecture',
      desc: 'Optimized data structures and management for complex institutional data.',
      icon: <Smartphone />
    }
  ];

  return (
    <section id="services" className="section bg-card">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Specialized Services</h2>
          <p className="section-subtitle">Delivering high-performance digital solutions for institutions and businesses.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .services-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className="service-card card"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div 
        className="glow" 
        style={{ 
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.1), transparent 80%)` 
        }}
      />
      <div className="service-icon-wrapper">
        {service.icon}
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.desc}</p>

      <style jsx="true">{`
        .service-card {
          padding: 40px;
          position: relative;
          overflow: hidden;
        }

        .glow {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .service-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .service-title {
          font-size: 1.25rem;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .service-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }
      `}</style>
    </motion.div>
  );
};

export default Services;
