import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useTypingEffect } from "../hooks/useTypingEffect";

const links = [
  "Home",
  "About",
  "Goal",
  "Experience",
  "Projects",
  "Skills",
  "Awards",
  "Contact",
];
const brandTitles = ["A.M.", "Abdul Moiz", "Developer"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const typedBrand = useTypingEffect(brandTitles, 100, 2000);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="glass navbar-container"
      >
        <a href="#home" className="navbar-brand">
          {/* Invisible sentinel ensures the longest title ("Abdul Moiz") reserves exact width to prevent layout shift & wrapping */}
          <span className="navbar-sentinel" aria-hidden="true">
            Abdul Moiz
          </span>
          <span className="navbar-text-wrapper">
            <span>{typedBrand}</span>
            <span className="navbar-cursor" />
          </span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="glass mobile-menu"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="mobile-nav-link"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-container {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: calc(100% - 32px);
          max-width: 900px;
          padding: 12px 24px;
        }

        .navbar-brand {
          position: relative;
          display: inline-flex;
          align-items: center;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 20px;
          color: var(--text);
          text-decoration: none;
          letter-spacing: 1px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: color 0.3s ease;
        }

        .navbar-brand:hover {
          color: var(--gold-light);
        }

        .navbar-sentinel {
          visibility: hidden;
          white-space: nowrap;
          pointer-events: none;
        }

        .navbar-text-wrapper {
          position: absolute;
          left: 0;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }

        .navbar-cursor {
          display: inline-block;
          width: 2px;
          height: 18px;
          background: var(--gold-light);
          margin-left: 3px;
          animation: blink 1s step-start infinite;
        }

        .nav-links {
          display: flex;
          gap: 22px;
        }

        .nav-link {
          color: var(--text);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          opacity: 0.85;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          opacity: 1;
          color: var(--gold-light);
        }

        .nav-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--text);
          font-size: 24px;
          align-items: center;
          justify-content: center;
          padding: 4px;
          transition: color 0.3s ease;
        }

        .nav-toggle:hover {
          color: var(--gold-light);
        }

        .mobile-menu {
          position: fixed;
          top: 76px;
          left: 16px;
          right: 16px;
          z-index: 49;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          color: var(--text);
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: var(--gold-light);
        }

        @keyframes blink { 50% { opacity: 0; } }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .nav-toggle {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
