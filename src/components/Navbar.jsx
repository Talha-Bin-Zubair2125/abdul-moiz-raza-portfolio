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

  const typedBrand = useTypingEffect(
    brandTitles,
    100,
    2000,
    600
  );

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
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-inner">

          {/* BRAND */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={closeMenu}
          >
            <span className="brand-hidden">
              Abdul Moiz
            </span>

            <span className="brand-typed">
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
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.97,
              }}
              transition={{ duration: 0.2 }}
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
           MAIN NAVBAR
        ===================================== */

        .navbar {
          position: fixed;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);

          z-index: 1000;

          width: max-content;
          max-width: calc(100vw - 32px);

          box-sizing: border-box;
        }


        /* =====================================
           NAVBAR INNER
        ===================================== */

        .navbar-inner {
          display: flex;
          align-items: center;

          width: fit-content;

          min-height: 58px;

          padding: 8px 12px;

          border-radius: 999px;

          background: rgba(20, 20, 25, 0.72);

          border: 1px solid rgba(255, 255, 255, 0.09);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          box-shadow:
            0 8px 35px rgba(0, 0, 0, 0.25);

          box-sizing: border-box;

          gap: 12px;

          transition: all 0.3s ease;
        }


        /* =====================================
           BRAND
        ===================================== */

        .navbar-brand {
          position: relative;

          display: inline-flex;
          align-items: center;

          flex: 0 0 auto;

          color: var(--text);

          text-decoration: none;

          font-family: var(--font-display);

          font-size: 18px;
          font-weight: 700;

          letter-spacing: 0.5px;

          white-space: nowrap;
        }

        .brand-hidden {
          visibility: hidden;
          white-space: nowrap;
        }

        .brand-typed {
          position: absolute;
          left: 0;
          top: 0;

          display: inline-flex;
          align-items: center;

          white-space: nowrap;
        }

        .typing-cursor {
          width: 2px;
          height: 18px;

          margin-left: 4px;

          background: var(--gold-light);

          animation: cursorBlink 1s step-start infinite;
        }


        /* =====================================
           DESKTOP LINKS
        ===================================== */

        .desktop-links {
          display: flex;
          align-items: center;

          gap: 18px;

          white-space: nowrap;
        }

        .nav-link {
          position: relative;

          color: var(--text);

          text-decoration: none;

          font-size: 13px;
          font-weight: 500;

          opacity: 0.85;

          white-space: nowrap;

          padding: 7px 0;

          transition:
            color 0.25s ease,
            opacity 0.25s ease;
        }

        .nav-link:hover {
          color: var(--gold-light);
          opacity: 1;
        }

        .nav-link::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 2px;

          width: 0;
          height: 1.5px;

          border-radius: 999px;

          background: var(--gold-light);

          transition: width 0.25s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }


        /* =====================================
           MENU BUTTON
        ===================================== */

        .menu-button {
          display: none;

          align-items: center;
          justify-content: center;

          width: 40px;
          height: 40px;

          flex-shrink: 0;

          border: none;
          border-radius: 50%;

          background: rgba(255, 255, 255, 0.05);

          color: var(--text);

          font-size: 22px;

          cursor: pointer;

          padding: 0;

          transition:
            background 0.25s ease,
            color 0.25s ease,
            transform 0.2s ease;
        }

        .menu-button:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--gold-light);
        }

        .menu-button:active {
          transform: scale(0.92);
        }


        /* =====================================
           MOBILE OVERLAY
        ===================================== */

        .menu-overlay {
          position: fixed;
          inset: 0;

          z-index: 998;

          background: rgba(0, 0, 0, 0.4);

          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
        }


        /* =====================================
           MOBILE MENU
        ===================================== */

        .mobile-menu {
          position: fixed;

          top: 86px;
          left: 50%;

          transform: translateX(-50%);

          z-index: 999;

          width: min(
            calc(100vw - 32px),
            360px
          );

          padding: 10px;

          display: flex;
          flex-direction: column;

          border-radius: 22px;

          background: rgba(20, 20, 25, 0.88);

          border: 1px solid rgba(255, 255, 255, 0.09);

          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);

          box-shadow:
            0 15px 45px rgba(0, 0, 0, 0.35);

          box-sizing: border-box;
        }

        .mobile-link {
          display: flex;
          align-items: center;

          min-height: 45px;

          padding: 0 16px;

          border-radius: 12px;

          color: var(--text);

          text-decoration: none;

          font-size: 15px;
          font-weight: 500;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            padding-left 0.2s ease;
        }

        .mobile-link:hover {
          color: var(--gold-light);

          background: rgba(255, 255, 255, 0.05);

          padding-left: 20px;
        }


        /* =====================================
           TABLETS
        ===================================== */

        @media (max-width: 1100px) {

          .navbar-inner {
            gap: 14px;
          }

          .desktop-links {
            gap: 13px;
          }

          .nav-link {
            font-size: 12px;
          }
        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 850px) {

          .navbar {
            top: 12px;

            max-width: calc(100vw - 24px);
          }

          .navbar-inner {
            width: auto;

            min-height: 54px;

            padding: 7px 8px 7px 14px;

            border-radius: 999px;

            gap: 8px;
          }

          .desktop-links {
            display: none;
          }

          .menu-button {
            display: flex;
          }
        }


        /* =====================================
           SMALL PHONES
        ===================================== */

        @media (max-width: 500px) {

          .navbar {
            top: 10px;

            max-width: calc(100vw - 20px);
          }

          .navbar-inner {
            min-height: 52px;

            padding: 6px 7px 6px 13px;
          }

          .navbar-brand {
            font-size: 16px;
          }

          .typing-cursor {
            height: 16px;
          }

          .menu-button {
            width: 38px;
            height: 38px;

            font-size: 21px;
          }

          .mobile-menu {
            top: 72px;

            width: calc(100vw - 20px);
          }
        }


        /* =====================================
           VERY SMALL PHONES
        ===================================== */

        @media (max-width: 350px) {

          .navbar-brand {
            font-size: 15px;
          }

          .navbar-inner {
            padding-left: 11px;
          }

          .menu-button {
            width: 36px;
            height: 36px;

            font-size: 20px;
          }
        }


        /* =====================================
           CURSOR ANIMATION
        ===================================== */

        @keyframes cursorBlink {
          50% {
            opacity: 0;
          }
        }


        /* =====================================
           REDUCED MOTION
        ===================================== */

        @media (prefers-reduced-motion: reduce) {

          .typing-cursor {
            animation: none;
          }

          .nav-link,
          .nav-link::after,
          .mobile-link,
          .menu-button {
            transition: none;
          }
        }

      `}</style>
    </>
  );
}