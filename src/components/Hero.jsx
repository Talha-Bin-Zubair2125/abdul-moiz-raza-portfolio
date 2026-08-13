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
  { value: "Rawalpindi, Pakistan", label: "Location" },
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
            {stats.map((s) => (
              <div key={s.label} className="glass stat-card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
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
          padding-top: 100px;
          overflow-x: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 48px;
          align-items: center;
          width: 100%;
        }

        /* Static badge row — hidden by default, shown only on small screens */
        .mobile-tags {
          display: none;
        }

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

        .hero-avatar {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--gold-soft);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          display: block;
        }

        /* Floating Skill Badges Around Avatar (desktop/tablet) */
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

        .tag-top-left {
          top: 10px;
          left: -45px;
        }

        .tag-top-right {
          top: 75px;
          right: -50px;
        }

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
          font-size: 46px;
          line-height: 1.15;
          margin-bottom: 14px;
          color: var(--text);
        }

        .gold-text {
          color: var(--gold-light);
        }

        .typing-wrapper {
          font-size: 22px;
          font-weight: 600;
          min-height: 32px;
          margin-bottom: 18px;
          color: var(--gold);
          display: flex;
          align-items: center;
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
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 28px;
          max-width: 540px;
        }

        .stats-grid {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .stat-card {
          padding: 14px 20px;
          min-width: 105px;
          text-align: center;
          flex: 1 1 auto;
        }

        .stat-value {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: var(--gold-light);
        }

        .stat-label {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        @keyframes blink { 50% { opacity: 0; } }

        /* Tablet & Mobile Layout Adjustments */
        @media (max-width: 850px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 36px;
          }

          .hero-bio {
            margin-left: auto;
            margin-right: auto;
          }

          .typing-wrapper,
          .hero-actions,
          .stats-grid {
            justify-content: center;
          }
        }

        /* Below this width the negative-offset floating badges no longer
           fit safely — switch to a static row above the avatar instead. */
        @media (max-width: 600px) {
          .mobile-tags {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            order: -1;
            margin-bottom: 8px;
          }

          .tag-top-left,
          .tag-top-right {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-avatar-container {
            width: 180px;
            height: 180px;
          }

          .stat-card {
            min-width: 42%;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
