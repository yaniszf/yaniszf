import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Ma\'had Aly MUDI Mesjid Raya',
      role: 'Head of IT & Software Architect',
      period: '2020 - Sekarang',
      location: 'Samalanga, Aceh',
      desc: 'Membangun dan mengelola seluruh ekosistem digital termasuk SIAKAD, PMB, dan Repository Institusi.'
    },
    {
      company: 'LBM MUDI Mesjid Raya',
      role: 'Full Stack Mobile Developer',
      period: '2022 - 2023',
      location: 'Samalanga, Aceh',
      desc: 'Pengembangan aplikasi mobile LBM MUDI untuk akses database fatwa dan hasil bahsul masail.'
    },
    {
      company: 'Freelance Software Developer',
      role: 'Web & App Developer',
      period: '2016 - 2020',
      location: 'Aceh',
      desc: 'Mengembangkan berbagai sistem informasi custom untuk bisnis lokal dan institusi pendidikan.'
    }
  ];

  return (
    <section id="experience" className="section container">
      <div className="section-header centered">
        <h2 className="section-title">Pengalaman Kerja</h2>
        <p className="section-subtitle">Rekam jejak profesional dalam membangun solusi digital di institusi pendidikan Islam.</p>
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.company}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            
            <div className="timeline-card card">
              <div className="card-header">
                <div className="role-info">
                  <h3 className="role-title">{exp.role}</h3>
                  <p className="company-name">{exp.company}</p>
                </div>
                <div className="period-info">
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              <p className="experience-desc">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx="true">{`
        .section-header.centered {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header.centered .section-subtitle {
          margin: 0 auto;
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--border) 10%, var(--border) 90%, transparent);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding-bottom: 64px;
        }

        .timeline-item:nth-child(even) {
          margin-left: auto;
          padding-left: 60px;
        }

        .timeline-item:nth-child(odd) {
          margin-right: auto;
          padding-right: 60px;
          text-align: right;
        }

        .timeline-dot {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-color);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .dot-inner {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .timeline-card {
          padding: 32px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 20px;
        }

        .timeline-item:nth-child(odd) .card-header {
          flex-direction: row-reverse;
        }

        .role-title {
          font-size: 1.25rem;
          margin-bottom: 4px;
        }

        .company-name {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .period-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .timeline-item:nth-child(odd) .period-info {
          align-items: flex-start;
        }

        .period {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .location {
          font-size: 0.75rem;
          color: var(--text-muted);
          opacity: 0.6;
        }

        .experience-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .timeline-line { left: 24px; transform: none; }
          .timeline-item { width: 100%; padding: 0 0 48px 60px !important; text-align: left !important; }
          .timeline-dot { left: 24px; transform: translateX(-50%); }
          .card-header { flex-direction: column !important; align-items: flex-start !important; }
          .period-info { align-items: flex-start !important; margin-top: 8px; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
