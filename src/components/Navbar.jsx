import { useEffect, useState } from "react";
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

// Keep this in sync with the CSS breakpoint below.
const MOBILE_BREAKPOINT = 1100;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const typedBrand = useTypingEffect(brandTitles, 100, 2000, 600);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="glass navbar-container"
      >
        {/* Brand */}
        <a href="#home" className="navbar-brand" onClick={handleNavClick}>
          {/* Invisible text keeps a stable width */}
          <span className="navbar-sentinel" aria-hidden="true">
            Abdul Moiz
          </span>

          <span className="navbar-text-wrapper">
            <span>{typedBrand}</span>
            <span className="navbar-cursor" />
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
              onClick={handleNavClick}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="glass mobile-menu"
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={handleNavClick}
                  className="mobile-nav-link"
                >
                  {link}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        /* =========================================
           NAVBAR
        ========================================= */

        .navbar-container {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);

          z-index: 100;

          width: min(
            calc(100% - 32px),
            1180px
          );

          min-height: 58px;

          padding: 10px 18px;

          box-sizing: border-box;

          display: flex;
          align-items: center;

          gap: 24px;

          overflow: hidden;
        }

        /* =========================================
           BRAND
        ========================================= */

        .navbar-brand {
          position: relative;

          display: inline-flex;
          align-items: center;

          flex: 0 0 auto;

          min-width: max-content;

          font-family: var(--font-display);
          font-size: clamp(17px, 1.7vw, 20px);
          font-weight: 700;

          letter-spacing: 1px;

          color: var(--text);
          text-decoration: none;

          white-space: nowrap;

          transition: color 0.3s ease;
        }

        .navbar-brand:hover {
          color: var(--gold-light);
        }

        .navbar-sentinel {
          visibility: hidden;

          display: block;

          white-space: nowrap;

          pointer-events: none;
        }

        .navbar-text-wrapper {
          position: absolute;

          inset: 0 auto auto 0;

          display: inline-flex;
          align-items: center;

          white-space: nowrap;
        }

        .navbar-cursor {
          display: inline-block;

          width: 2px;
          height: 18px;

          margin-left: 4px;

          flex-shrink: 0;

          background: var(--gold-light);

          animation: blink 1s step-start infinite;
        }

        /* =========================================
           DESKTOP LINKS
        ========================================= */

        .nav-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          flex: 1 1 auto;

          min-width: 0;

          gap: clamp(10px, 1.45vw, 22px);
        }

        .nav-link {
          position: relative;

          flex: 0 0 auto;

          color: var(--text);
          text-decoration: none;

          font-size: clamp(12px, 1.1vw, 14px);
          font-weight: 500;

          opacity: 0.85;

          white-space: nowrap;

          transition:
            color 0.25s ease,
            opacity 0.25s ease;
        }

        .nav-link::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -5px;

          width: 0;
          height: 2px;

          border-radius: 10px;

          background: var(--gold-light);

          transition: width 0.25s ease;
        }

        .nav-link:hover {
          color: var(--gold-light);
          opacity: 1;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* =========================================
           MOBILE TOGGLE
        ========================================= */

        .nav-toggle {
          display: none;

          align-items: center;
          justify-content: center;

          flex: 0 0 auto;

          width: 42px;
          height: 42px;

          padding: 0;

          border: 0;
          border-radius: 10px;

          background: transparent;

          color: var(--text);

          font-size: 24px;

          cursor: pointer;

          transition:
            color 0.25s ease,
            background 0.25s ease,
            transform 0.2s ease;
        }

        .nav-toggle:hover {
          color: var(--gold-light);

          background: rgba(255, 255, 255, 0.06);
        }

        .nav-toggle:active {
          transform: scale(0.94);
        }

        /* =========================================
           MOBILE BACKDROP
        ========================================= */

        .mobile-backdrop {
          position: fixed;

          inset: 0;

          z-index: 80;

          background: rgba(0, 0, 0, 0.35);

          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
        }

        /* =========================================
           MOBILE MENU
        ========================================= */

        .mobile-menu {
          position: fixed;

          top: 82px;
          left: 16px;
          right: 16px;

          z-index: 90;

          display: flex;
          flex-direction: column;

          padding: 10px;

          box-sizing: border-box;

          max-height: calc(100vh - 100px);

          overflow-y: auto;

          overscroll-behavior: contain;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;

          min-height: 46px;

          padding: 0 14px;

          border-radius: 10px;

          color: var(--text);

          text-decoration: none;

          font-size: 16px;
          font-weight: 500;

          transition:
            color 0.25s ease,
            background 0.25s ease,
            padding-left 0.25s ease;
        }

        .mobile-nav-link:hover {
          color: var(--gold-light);

          background: rgba(255, 255, 255, 0.06);

          padding-left: 18px;
        }

        /* =========================================
           LARGE TABLETS / SMALL LAPTOPS
           Keep desktop navigation only when it
           actually has enough room.
        ========================================= */

        @media (max-width: 1150px) and (min-width: 1101px) {
          .navbar-container {
            width: calc(100% - 24px);
            padding-left: 14px;
            padding-right: 14px;

            gap: 16px;
          }

          .nav-links {
            gap: 11px;
          }

          .nav-link {
            font-size: 12px;
          }
        }

        /* =========================================
           TABLETS + PHONES
        ========================================= */

        @media (max-width: 1100px) {
          .navbar-container {
            top: 12px;

            width: calc(100% - 24px);

            min-height: 56px;

            padding: 8px 12px;

            gap: 12px;

            overflow: visible;
          }

          .nav-links {
            display: none;
          }

          .nav-toggle {
            display: flex;

            margin-left: auto;
          }

          .mobile-menu {
            top: 76px;
            left: 12px;
            right: 12px;
          }
        }

        /* =========================================
           PHONES
        ========================================= */

        @media (max-width: 600px) {
          .navbar-container {
            top: 10px;

            width: calc(100% - 20px);

            min-height: 52px;

            padding: 7px 10px;
          }

          .navbar-brand {
            font-size: 17px;

            letter-spacing: 0.7px;
          }

          .navbar-cursor {
            height: 16px;
          }

          .nav-toggle {
            width: 40px;
            height: 40px;

            font-size: 22px;
          }

          .mobile-menu {
            top: 68px;

            left: 10px;
            right: 10px;

            padding: 8px;
          }

          .mobile-nav-link {
            min-height: 44px;

            font-size: 15px;
          }
        }

        /* =========================================
           VERY SMALL PHONES
        ========================================= */

        @media (max-width: 360px) {
          .navbar-container {
            width: calc(100% - 16px);

            padding-left: 8px;
            padding-right: 8px;
          }

          .navbar-brand {
            font-size: 15px;
          }

          .nav-toggle {
            width: 38px;
            height: 38px;

            font-size: 21px;
          }

          .mobile-menu {
            top: 64px;

            left: 8px;
            right: 8px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .navbar-cursor {
            animation: none;
          }

          .nav-link,
          .nav-link::after,
          .navbar-brand,
          .nav-toggle,
          .mobile-nav-link {
            transition: none;
          }
        }

        /* =========================================
           CURSOR
        ========================================= */

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
