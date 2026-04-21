import "./index.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { MdOutlineHeadphones, MdOutlineWorkOutline } from "react-icons/md";
import { IoBookOutline, IoPersonOutline } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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

  return (
    <header className="header">
      <nav
        className="flex justify-between items-center w-full max-w-7xl mx-auto px-8 md:px-4 lg:px-0"
        aria-label="Primary"
      >
        <div className="text-2xl font-bold font-headline">
          <Link
            to="/"
            className="text-transparent bg-clip-text bg-(--color-primary)"
          >
            Leonardo Pires
          </Link>
        </div>

        {/* ---- Desktop Menu ----*/}
        <ul className="hidden md:flex flex-row items-center gap-10 font-body">
          <li>
            <a href="/#featured-projects" className="nav-links">
              Work
            </a>
          </li>
          <li>
            <a href="/#about" className="nav-links">
              About
            </a>
          </li>
          <li>
            <a href="/#skills" className="nav-links">
              Skills
            </a>
          </li>
          <li>
            <a href="/#contact" className="nav-links-contact">
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
      {isMenuOpen && (
        <div className="mobile-menu" id="mobile-nav-menu">
          <ul className="font-body" aria-label="Mobile navigation">
            <li>
              <a
                href="/#featured-projects"
                className="nav-links flex items-center gap-2"
                onClick={closeMenu}
              >
                <MdOutlineWorkOutline
                  size={20}
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
                  size={20}
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
                  size={20}
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
                className="relative w-full flex justify-center items-center gap-2 font-semibold text-(--gray-50) bg-(--color-primary) px-4 py-2"
                onClick={closeMenu}
              >
                <MdOutlineHeadphones aria-hidden="true" focusable="false" />
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
