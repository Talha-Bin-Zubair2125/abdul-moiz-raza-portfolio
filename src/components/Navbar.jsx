import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  const typedBrand = useTypingEffect(brandTitles, 100, 2000, 600);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="navbar-inner">
          {/* BRAND */}
          <a href="#home" className="navbar-brand" onClick={closeMenu}>
            <span className="brand-measure" aria-hidden="true">
              Abdul Moiz
            </span>
            <span className="brand-content">
              {typedBrand}
              <span className="typing-cursor" />
            </span>
          </a>

          {/* DESKTOP LINKS */}
          <div className="desktop-links">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link"
                onClick={closeMenu}
              >
                {link}
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="menu-button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="mobile-link"
                  onClick={closeMenu}
                >
                  {link}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        /* =====================================
            MAIN NAVBAR CONTAINER
        ===================================== */
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: max-content;
          max-width: calc(100vw - 28px);
          box-sizing: border-box;
        }

        /* =====================================
            NAVBAR INNER PILL
        ===================================== */
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 56px;
          padding: 6px 8px 6px 18px;
          border-radius: 999px;
          background: rgba(13, 13, 18, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          box-sizing: border-box;
          gap: 20px;
          transition: all 0.3s ease;
        }

        /* =====================================
            BRAND LOGO & TYPING EFFECT
        ===================================== */
        .navbar-brand {
          position: relative;
          display: inline-flex;
          align-items: center;
          color: var(--text, #ffffff);
          text-decoration: none;
          font-family: var(--font-display, inherit);
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 0.4px;
          white-space: nowrap;
        }

        /* Hidden sizing span to maintain stable navbar width */
        .brand-measure {
          visibility: hidden;
          pointer-events: none;
          white-space: nowrap;
          font-weight: 700;
        }

        .brand-content {
          position: absolute;
          left: 0;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          color: var(--gold-light, #f3e5ab);
        }

        .typing-cursor {
          width: 2px;
          height: 16px;
          margin-left: 3px;
          background: var(--gold-light, #f3e5ab);
          animation: cursorBlink 1s step-start infinite;
          border-radius: 2px;
        }

        /* =====================================
            DESKTOP LINKS
        ===================================== */
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .nav-link {
          position: relative;
          color: var(--text, #ffffff);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          opacity: 0.8;
          padding: 8px 14px;
          border-radius: 999px;
          transition: color 0.2s ease, opacity 0.2s ease, background 0.2s ease;
        }

        .nav-link:hover {
          color: var(--gold-light, #f3e5ab);
          opacity: 1;
          background: rgba(255, 255, 255, 0.05);
        }

        /* =====================================
            MOBILE TOGGLE BUTTON
        ===================================== */
        .menu-button {
          display: none;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          color: var(--text, #ffffff);
          font-size: 20px;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .menu-button:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--gold-light, #f3e5ab);
        }

        .menu-button:active {
          transform: scale(0.92);
        }

        /* =====================================
            MOBILE OVERLAY & MENU DROPDOWN
        ===================================== */
        .menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 998;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .mobile-menu {
          position: fixed;
          top: 88px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999;
          width: min(calc(100vw - 28px), 340px);
          padding: 10px;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          background: rgba(16, 16, 22, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
          box-sizing: border-box;
          gap: 4px;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          min-height: 44px;
          padding: 0 16px;
          border-radius: 12px;
          color: var(--text, #ffffff);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          opacity: 0.9;
          transition: background 0.2s ease, color 0.2s ease, padding-left 0.2s ease;
        }

        .mobile-link:hover {
          color: var(--gold-light, #f3e5ab);
          background: rgba(255, 255, 255, 0.06);
          padding-left: 20px;
          opacity: 1;
        }

        /* =====================================
            MEDIA QUERIES
        ===================================== */
        @media (max-width: 950px) {
          .desktop-links {
            display: none;
          }
          .menu-button {
            display: flex;
          }
          .navbar-inner {
            padding: 6px 8px 6px 16px;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            top: 14px;
            max-width: calc(100vw - 20px);
          }
          .navbar-brand {
            font-size: 15px;
          }
          .mobile-menu {
            top: 78px;
            width: calc(100vw - 20px);
          }
        }

        /* =====================================
            CURSOR ANIMATION
        ===================================== */
        @keyframes cursorBlink {
          0%, 50% { opacity: 1; }
          50.1%, 100% { opacity: 0; }
        }

        /* =====================================
            REDUCED MOTION
        ===================================== */
        @media (prefers-reduced-motion: reduce) {
          .typing-cursor {
            animation: none;
          }
          .nav-link,
          .mobile-link,
          .menu-button {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
