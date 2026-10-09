import React from 'react';
import { Target, Zap, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Tahun Pengalaman', value: '8+' },
    { label: 'Projek Pendidikan', value: '10+' },
    { label: 'Sistem Terintegrasi', value: '5+' },
  ];

  return (
    <section id="about" className="section bg-card">
      <div className="container about-grid">
        <div className="about-content">
          <h2 className="section-title">Tentang Saya</h2>
          <p className="about-text">
            Saya adalah seorang Full Stack Developer yang berfokus pada digitalisasi ekosistem pendidikan Islam. Memiliki pengalaman luas dalam membangun infrastruktur digital untuk <strong>Ma'had Aly MUDI Mesjid Raya Samalanga</strong>, mulai dari sistem akademik hingga platform repositori ilmiah.
          </p>
          
          <div className="stats-grid">
            {stats.map(stat => (
              <div key={stat.label} className="stat-item">
                <p className="stat-value gradient-text">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon blue"><GraduationCap size={20} /></div>
              <p>Spesialis Digitalisasi Dayah & Pesantren</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon purple"><Zap size={20} /></div>
              <p>Arsitektur Laravel yang Aman & Scalable</p>
            </div>
          </div>
        </div>
        
        <div className="about-visual">
          <div className="profile-card glass">
            <div className="profile-inner">
              <div className="avatar-placeholder flex-center">
                <Target size={48} />
              </div>
              <h3 className="profile-name">Yanis</h3>
              <p className="profile-role">Full Stack Developer</p>
              <p className="profile-location" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px' }}>Samalanga, Aceh</p>
            </div>
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .bg-card {
          background: rgba(15, 15, 18, 0.4);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          align-items: center;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 32px;
        }

        .about-text {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 48px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-top: 8px;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .feature-icon {
          padding: 10px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
        }

        .feature-icon.blue { color: #60a5fa; }
        .feature-icon.purple { color: #a78bfa; }

        .about-visual {
          position: relative;
        }

        .profile-card {
          padding: 40px;
          border-radius: var(--radius-xl);
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .avatar-placeholder {
          width: 100px;
          height: 100px;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          border-radius: 50%;
          margin: 0 auto 24px;
        }

        .profile-name {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .profile-role {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .glow-effect {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
          z-index: -1;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          
          .stats-grid { justify-items: center; }
          .feature-item { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default About;
