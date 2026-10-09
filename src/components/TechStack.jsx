import React from 'react';

const TechStack = () => {
  const techs = [
    'Laravel', 'React', 'Next.js', 'Node.js', 'TypeScript', 'MySQL', 'PostgreSQL', 'Docker', 'GitHub', 'Tailwind', 'Python', 'Redis'
  ];

  // Duplicate list for infinite loop
  const doubleTechs = [...techs, ...techs];

  return (
    <section className="tech-stack">
      <div className="container">
        <p className="tech-label">Powering systems with modern technologies</p>
        <div className="marquee-container">
          <div className="marquee-content">
            {doubleTechs.map((tech, index) => (
              <div key={`${tech}-${index}`} className="tech-item">
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .tech-stack {
          padding: 100px 0;
          background: rgba(255, 255, 255, 0.01);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }

        .tech-label {
          text-align: center;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          margin-bottom: 64px;
        }

        .marquee-container {
          position: relative;
          width: 100%;
          display: flex;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .marquee-content {
          display: flex;
          gap: 100px;
          animation: marquee 40s linear infinite;
        }

        .tech-item {
          flex-shrink: 0;
          opacity: 0.3;
          transition: var(--transition-base);
          cursor: default;
        }

        .tech-item:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .tech-name {
          font-size: 2rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.02em;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .tech-name { font-size: 1.5rem; }
          .marquee-content { gap: 60px; }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
