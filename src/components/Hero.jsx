import { motion } from "framer-motion";
import { useTypingEffect } from "../hooks/useTypingEffect";
import Profile_Image from "../assets/Profile_Image.png";

const roles = [
  "Mobile Developer",
  "QA Automation Engineer",
  "Backend Developer",
];

const stats = [
  { value: "1+", label: "Internship" },
  { value: "5+", label: "Projects" },
  { value: "2026", label: "Graduate" },
  { value: "3.29", label: "CGPA" },
  { value: "Rawalpindi,PK", label: "Location" },
];

export default function Hero() {
  const typed = useTypingEffect(roles);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        {/* Badges shown ABOVE the avatar on small screens (static, no overlap) */}
        <div className="mobile-tags">
          <div className="glass floating-tag-inline">
            <span>📱 Mobile App Dev</span>
          </div>
          <div className="glass floating-tag-inline">
            <span>🧪 QA Automation</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="hero-avatar-container"
        >
          {/* Rotating decorative ring behind the avatar */}
          <span className="avatar-ring" aria-hidden="true" />

          {/* Floating badges around avatar (desktop / tablet only) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="glass floating-tag tag-top-left"
          >
            <span>📱 Mobile App Dev</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass floating-tag tag-top-right"
          >
            <span>🧪 QA Automation</span>
          </motion.div>

          <img
            src={Profile_Image}
            alt="Abdul Moiz Raza"
            className="hero-avatar"
          />

          <div className="glass status-badge">
            <span className="status-dot" />
            <span>Available for work</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hero-content"
        >
          <div className="eyebrow">Welcome to my portfolio</div>

          <h1 className="hero-title">
            Hi, I'm <span className="gold-text">Abdul Moiz Raza</span>
          </h1>

          <div className="typing-wrapper">
            <span className="typed-text">{typed}</span>
            <span className="cursor" />
          </div>

          <p className="hero-bio">
            Computer Science student and mobile developer building
            production-grade applications end to end — from Flutter and Kotlin
            on the mobile front to NestJS and PostgreSQL on the backend,
            alongside SQA automation experience. Based in Rawalpindi, Pakistan.
          </p>

          <div className="stats-grid">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                whileHover={{ y: -4, borderColor: "var(--gold-soft)" }}
                className="glass stat-card"
              >
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn">
              View my work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: calc(var(--nav-height, 84px) + 24px);
          padding-bottom: 40px;
          overflow-x: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: clamp(28px, 5vw, 48px);
          align-items: center;
          width: 100%;
        }

        .mobile-tags { display: none; }

        .floating-tag-inline {
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
          white-space: nowrap;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          background: rgba(20, 15, 10, 0.75);
          backdrop-filter: blur(8px);
        }

        .hero-avatar-container {
          position: relative;
          width: 220px;
          height: 220px;
          justify-self: center;
          margin: 20px 0;
        }

        .avatar-ring {
          position: absolute;
          inset: -14px;
          border-radius: 50%;
          border: 2px dashed var(--gold-soft);
          opacity: 0.55;
          animation: spin 16s linear infinite;
          pointer-events: none;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--gold-soft);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          position: relative;
          z-index: 2;
        }

        .floating-tag {
          position: absolute;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
          white-space: nowrap;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          background: rgba(20, 15, 10, 0.75);
          backdrop-filter: blur(8px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
          z-index: 3;
        }

        .tag-top-left { top: 10px; left: -45px; }
        .tag-top-right { top: 75px; right: -50px; }

        .status-badge {
          position: absolute;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
          white-space: nowrap;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          background: rgba(20, 15, 10, 0.85);
          z-index: 3;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
        }

        .hero-title {
          margin-bottom: 14px;
          color: var(--text);
        }

        .gold-text { color: var(--gold-light); }

        .typing-wrapper {
          font-size: clamp(16px, 2.4vw, 22px);
          font-weight: 600;
          min-height: 30px;
          margin-bottom: 18px;
          color: var(--gold);
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .cursor {
          display: inline-block;
          width: 3px;
          height: 20px;
          background: var(--gold-light);
          margin-left: 6px;
          animation: blink 1s step-start infinite;
        }

        .hero-bio {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 28px;
          max-width: 540px;
        }

        /* Improved Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          margin-bottom: 30px;
        }

        .stat-card {
          padding: 14px 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 105px;
          border-radius: 16px;
          cursor: default;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .stat-value {
          font-family: var(--font-display);
          font-size: clamp(15px, 1.8vw, 20px);
          font-weight: 700;
          color: var(--gold-light);
          white-space: pre-line;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .stat-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        @keyframes blink { 50% { opacity: 0; } }

        @media (max-width: 960px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 850px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 32px;
          }
          .hero-bio { margin-left: auto; margin-right: auto; }
          .typing-wrapper, .hero-actions, .stats-grid { justify-content: center; }
        }

        @media (max-width: 600px) {
          .mobile-tags {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            order: -1;
            margin-bottom: 8px;
          }
          .tag-top-left, .tag-top-right { display: none; }
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }
        }

        @media (max-width: 480px) {
          .hero-section { padding-top: calc(var(--nav-height, 76px) + 16px); }
          .hero-avatar-container { width: 168px; height: 168px; }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-actions { flex-direction: column; width: 100%; }
          .hero-actions .btn { width: 100%; }
        }

        @media (max-width: 360px) {
          .hero-avatar-container { width: 140px; height: 140px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .avatar-ring { animation: none; }
          .cursor { animation: none; }
        }
      `}</style>
    </section>
  );
}
