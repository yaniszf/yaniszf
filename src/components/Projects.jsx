import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SIAKAD Ma\'had Aly MUDI',
      desc: 'Sistem Informasi Akademik terintegrasi untuk manajemen data mahasantri, nilai, dan kurikulum di Ma\'had Aly MUDI Mesjid Raya.',
      image: '/assets/project1.png',
      tags: ['Laravel', 'Inertia.js', 'Vue.js', 'MySQL'],
      link: 'https://siakad.mahadalymudi.ac.id/',
      github: '#',
      large: true
    },
    {
      title: 'PMB Ma\'had Aly MUDI',
      desc: 'Platform Penerimaan Mahasantri Baru digital untuk efisiensi pendaftaran dan seleksi calon mahasantri.',
      image: '/assets/project2.png',
      tags: ['Laravel', 'Blade', 'Tailwind CSS'],
      link: 'https://pmb.mahadalymudi.ac.id/',
      github: '#',
      large: false
    },
    {
      title: 'LBM MUDI Mobile',
      desc: 'Aplikasi mobile untuk Lembaga Bahsul Masail (LBM) MUDI, memudahkan akses ke database hasil keputusan hukum Islam.',
      image: '/assets/project1.png',
      tags: ['React Native', 'Mobile', 'API Integration'],
      link: '#',
      github: '#',
      large: false,
      isMobile: true
    },
    {
      title: 'Digital Repository',
      desc: 'Pusat arsip digital untuk karya ilmiah, kitab, dan dokumen akademik Ma\'had Aly MUDI.',
      image: '/assets/project2.png',
      tags: ['Laravel', 'Filament', 'Cloud Storage'],
      link: 'https://repository.mahadalymudi.ac.id/',
      github: '#',
      large: false
    },
    {
      title: 'Official Website Ma\'had Aly',
      desc: 'Portal informasi utama dan profil institusi Ma\'had Aly MUDI Mesjid Raya Samalanga.',
      image: '/assets/project1.png',
      tags: ['Laravel', 'SEO', 'Performance'],
      link: 'https://mahadalymudi.ac.id/',
      github: '#',
      large: false
    }
  ];

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <h2 className="section-title">Portfolio Projek</h2>
        <p className="section-subtitle">Implementasi sistem informasi dan aplikasi untuk ekosistem pendidikan Ma'had Aly MUDI.</p>
      </div>

      <div className="bento-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`project-card card ${project.large ? 'large' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="overlay-actions">
                  <a href={project.link} target="_blank" rel="noreferrer" className="overlay-btn"><ExternalLink size={20} /></a>
                  {project.isMobile ? (
                    <span className="overlay-btn"><Smartphone size={20} /></span>
                  ) : (
                    <a href={project.github} className="overlay-btn"><Code size={20} /></a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx="true">{`
        .section-header {
          margin-bottom: 64px;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 16px;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 600px;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .project-card.large {
          grid-column: span 2;
        }

        .project-image {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: #000;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-base);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-base);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .overlay-actions {
          display: flex;
          gap: 16px;
        }

        .overlay-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-base);
        }

        .overlay-btn:hover {
          transform: scale(1.1);
        }

        .project-info {
          padding: 32px;
          flex: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .tag {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .project-card.large {
            grid-column: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
