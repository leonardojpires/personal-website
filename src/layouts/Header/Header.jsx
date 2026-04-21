import "./index.css";
import personalImage from "../../../public/imgs/hero/personal_picture.webp";
import { Link } from "react-router-dom";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { MdOutlineHeadphones, MdOutlineWorkOutline } from "react-icons/md";
import { IoBookOutline, IoPersonOutline } from "react-icons/io5";

const MENU_ANIMATION_MS = 280;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const closeTimeoutRef = useRef(null);
  const animationFrameRef = useRef(null);

  const openMenu = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    if (!isMenuMounted) {
      setIsMenuMounted(true);
      animationFrameRef.current = window.requestAnimationFrame(() => {
        setIsMenuOpen(true);
      });
      return;
    }

    setIsMenuOpen(true);
  };

  const closeMenu = (immediate = false) => {
    setIsMenuOpen(false);

    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    if (immediate) {
      setIsMenuMounted(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const unmountDelay = prefersReducedMotion ? 0 : MENU_ANIMATION_MS;

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsMenuMounted(false);
      closeTimeoutRef.current = null;
    }, unmountDelay);
  };

  const handleMenuClick = () => {
    if (isMenuOpen) {
      closeMenu();
      return;
    }

    openMenu();
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleBreakpointChange = (event) => {
      if (event.matches) {
        closeMenu(true);
      }
    };

    mediaQuery.addEventListener("change", handleBreakpointChange);
    return () => mediaQuery.removeEventListener("change", handleBreakpointChange);
  }, []);

  useEffect(() => {
    if (!isMenuMounted) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuMounted]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header className="header">
      <nav className="header-nav" aria-label="Primary">
        <div className="desktop-brand text-2xl font-bold font-headline md:text-3xl">
          <Link to="/">
            <img src={personalImage} alt="" className="border-4 border-(--color-primary) rounded-full pointer-events-none" />
          </Link>
        </div>

        {/* ---- Desktop Sidebar Menu ----*/}
        <ul className="desktop-menu font-body">
          <li>
            <a href="/#featured-projects" className="nav-links desktop-nav-link">
              <MdOutlineWorkOutline aria-hidden="true" focusable="false" className="nav-link-icon" />
              Work
            </a>
          </li>
          <li>
            <a href="/#about" className="nav-links desktop-nav-link">
              <IoPersonOutline aria-hidden="true" focusable="false" className="nav-link-icon" />
              About
            </a>
          </li>
          <li>
            <a href="/#skills" className="nav-links desktop-nav-link">
              <IoBookOutline aria-hidden="true" focusable="false" className="nav-link-icon" />
              Skills
            </a>
          </li>
          <li>
            <a href="/#contact" className="nav-links-contact desktop-nav-link-contact">
              <MdOutlineHeadphones aria-hidden="true" focusable="false" />
              Get in touch
            </a>
          </li>
        </ul>

        {/* ---- Mobile Menu Button ---- */}
        <button
          type="button"
          className="menu-button"
          onClick={handleMenuClick}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <RxHamburgerMenu aria-hidden="true" focusable="false" />
        </button>
      </nav>
      {/* ---- Mobile Menu ---- */}
      {isMenuMounted && (
        <>
          <button
            type="button"
            className={`mobile-menu-backdrop ${isMenuOpen ? "mobile-menu-backdrop-open" : "mobile-menu-backdrop-close"}`}
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />

          <div
            className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : "mobile-menu-close"}`}
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="mobile-menu-header">
              <Link
                to="/"
                className="text-transparent bg-clip-text bg-(--color-primary) text-xl font-bold font-headline"
                onClick={closeMenu}
              >
                Leonardo Pires
              </Link>

              <button
                type="button"
                className="menu-close-button"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <RxCross2 aria-hidden="true" focusable="false" />
              </button>
            </div>

            <ul className="font-body" aria-label="Mobile navigation">
              <li>
                <a
                  href="/#featured-projects"
                  className="nav-links flex items-center gap-2"
                  onClick={closeMenu}
                >
                  <MdOutlineWorkOutline
                    size={24}
                    className="text-(--gray-900)"
                    aria-hidden="true"
                    focusable="false"
                  />
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="nav-links flex items-center gap-2"
                  onClick={closeMenu}
                >
                  <IoPersonOutline
                    size={24}
                    className="text-(--gray-900)"
                    aria-hidden="true"
                    focusable="false"
                  />
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#skills"
                  className="nav-links flex items-center gap-2"
                  onClick={closeMenu}
                >
                  <IoBookOutline
                    size={24}
                    className="text-(--gray-900)"
                    aria-hidden="true"
                    focusable="false"
                  />
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="relative w-full flex justify-center items-center gap-2 font-semibold text-(--gray-50) bg-(--color-primary) px-4 py-2 rounded-lg"
                  onClick={closeMenu}
                >
                  <MdOutlineHeadphones size={22} aria-hidden="true" focusable="false" />
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
