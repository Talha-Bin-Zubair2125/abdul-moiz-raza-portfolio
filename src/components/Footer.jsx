import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const quickLinks = ["Home", "About", "Goal", "Projects", "Skills", "Experience", "Contact"];

const socials = [
  { icon: <FiLinkedin size={18} />, href: "https://linkedin.com/in/abdul-moiz-raza-96b93a249", label: "LinkedIn" },
  { icon: <FiGithub size={18} />, href: "https://github.com/Abdul-Moiz-Raza", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 1, padding: "20px clamp(12px, 4vw, 20px) 40px" }}>
      <div
        className="glass"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(30px, 6vw, 48px) clamp(20px, 5vw, 40px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(24px, 5vw, 36px)",
          }}
        >
          <div>
            <h3 style={{ marginBottom: 12 }}>Abdul Moiz.</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 18, maxWidth: 260 }}>
              Passionate about building reliable mobile applications. Let's connect and build something together.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, borderColor: "var(--gold-light)" }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(0, 0, 0, 0.2)",
                    color: "var(--gold)",
                    border: "1px solid var(--glass-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: 15, marginBottom: 16, fontWeight: 600 }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div style={{ minWidth: 0 }}>
            <h4 style={{ fontSize: 15, marginBottom: 16, fontWeight: 600 }}>Get In Touch</h4>
            <a
              href="mailto:greatglobian@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 18,
                fontSize: 14,
                color: "var(--text-muted)",
                textDecoration: "none",
                overflowWrap: "anywhere",
              }}
            >
              <SiGmail style={{ color: "var(--gold)", flexShrink: 0 }} />
              greatglobian@gmail.com
            </a>
            <a
              href="https://drive.google.com/file/d/1nbqM1_peXO0HZRu8uwKqipmdwJgzNgrx/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--glass-border)",
            marginTop: 36,
            paddingTop: 20,
            fontSize: 13,
            color: "var(--text-muted)",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Developed by Abdul Moiz Raza. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
