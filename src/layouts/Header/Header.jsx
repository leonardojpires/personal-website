import "./index.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { MdOutlineHeadphones, MdOutlineWorkOutline } from "react-icons/md";
import { IoBookOutline, IoPersonOutline } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto px-8 md:px-4 lg:px-0">
        <div className="text-2xl font-bold font-headline">
          <Link
            to="/"
            className="text-transparent bg-clip-text bg-[var(--color-primary)]"
          >
            Leonardo Pires
          </Link>
        </div>

        {/* ---- Desktop Menu ----*/}
        <div className="hidden md:flex flex-row items-center gap-10 font-body">
          <a href="#featured-projects" className="nav-links">
            Work
          </a>
          <a href="#about" className="nav-links">
            About
          </a>
          <a href="#skills" className="nav-links">
            Skills
          </a>
          <a href="#contact" className="nav-links-contact">
            Get in touch
          </a>
        </div>

        {/* ---- Mobile Menu Button ---- */}
        <div className="menu-button" onClick={handleMenuClick}>
          <RxHamburgerMenu />
        </div>
      </nav>
      {/* ---- Mobile Menu ---- */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="font-body">
            <a href="#work" className="nav-links flex items-center gap-2">
              <MdOutlineWorkOutline size={20} className="text-[var(--gray-900)]" /> Work
            </a>
            <a href="#about" className="nav-links flex items-center gap-2">
              <IoPersonOutline size={20} className="text-[var(--gray-900)]" /> About
            </a>
            <a href="#skills" className="nav-links flex items-center gap-2">
              <IoBookOutline size={20} className="text-[var(--gray-900)]" /> Skills
            </a>
            <a href="#contact" className="relative w-full flex justify-center items-center gap-2 font-semibold text-(--gray-50) bg-(--color-primary) px-4 py-2">
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
