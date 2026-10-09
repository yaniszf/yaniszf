import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sara Smith',
      role: 'Product Manager @ TechFlow',
      content: 'Working with Muhammad was a game-changer for our platform. His attention to detail and architectural knowledge is world-class.',
      rating: 5
    },
    {
      name: 'Matt Robinson',
      role: 'Founder @ SaaSify',
      content: 'Excellent communication and high-quality code. The dashboard he built for us is both beautiful and performant.',
      rating: 5
    },
    {
      name: 'Raul Harris',
      role: 'CTO @ InnovateDigital',
      content: 'He doesn’t just build what you ask; he suggests improvements that actually help the business grow. Highly recommended.',
      rating: 5
    }
  ];

  return (
    <section className="section container">
      <div className="section-header centered">
        <h2 className="section-title">Client Feedback</h2>
        <p className="section-subtitle">Trusted by founders and product leaders worldwide.</p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <motion.div 
            key={t.name} 
            className="testimonial-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="star-rating">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={14} fill="#3B82F6" stroke="none" />
              ))}
            </div>
            <p className="quote">"{t.content}"</p>
            <div className="client-info">
              <div className="client-avatar">{t.name[0]}</div>
              <div className="client-meta">
                <p className="client-name">{t.name}</p>
                <p className="client-role">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style jsx="true">{`
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .testimonial-card {
          padding: 40px;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
        }

        .star-rating {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
        }

        .quote {
          font-size: 1.1rem;
          font-style: italic;
          line-height: 1.6;
          color: var(--text-primary);
          margin-bottom: 32px;
          flex: 1;
        }

        .client-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .client-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .client-name {
          font-weight: 700;
          font-size: 1rem;
        }

        .client-role {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .testimonial-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .testimonial-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
