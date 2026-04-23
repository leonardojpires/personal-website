import "./index.css";
import personalImage2 from "../../../public/imgs/hero/personal_picture_2.webp";
import { motion as Motion } from "framer-motion";
import HeroCards from "./../../components/HeroCard/HeroCards";
import {
  IoBriefcase,
  IoFlash,
  IoFolderOpenOutline,
} from "react-icons/io5";
import { IoIosBookmarks, IoIosGitNetwork } from "react-icons/io";

export default function Presentation() {
  return (
    <section className="presentation-section">
      <Motion.div
        className="presentation-content"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
      >
        <h2 className="presentation-title font-headline">
          Architectural Portfolio
        </h2>
        <p className="presentation-description font-body">
          Coding is only one part of the process. I start by identifying the real problems, then design and architect scalable solutions before implementing them. Every step matters, from <strong>understanding</strong> the problem to delivering the final product.
        </p>

        <div className="presentation-grid">
          <div className="presentation-grid-top">
            <HeroCards
              mode="grid"
              icon={
                <IoIosGitNetwork
                  size={18}
                  className="text-(--color-primary)"
                  aria-hidden="true"
                  focusable="false"
                />
              }
              title="Intern at DIS"
              description="Currently working as a Full-Stack Developer at Digital Innovaition Systems"
            />
          </div>

          <div className="presentation-grid-bottom">
            <HeroCards
              mode="grid"
              icon={
                <IoIosBookmarks 
                  size={18}
                  className="text-(--gray-900)"
                  aria-hidden="true"
                  focusable="false"
                />
              }
              title="2+ Years Learning"
              description="Continuosly learning and expanding my skillet"
            />

            <HeroCards
              mode="grid"
              icon={
                <IoBriefcase
                  size={18}
                  className="text-(--color-secondary)"
                  aria-hidden="true"
                  focusable="false"
                />
              }
              title="10+ Projects"
              description="Developed multiple full-stack applications using modern web technologies"
            />
          </div>
        </div>
      </Motion.div>

      <Motion.div
        className="presentation-image"
        initial={{
          opacity: 0,
          x: 32,
          y: 8,
          scale: 0.96,
          rotate: 0.8,
          filter: "blur(6px)",
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
        }}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
      >
        <div className="presentation-image-shell">
          <span className="presentation-image-glow" aria-hidden="true" />
          <span className="presentation-image-ring" aria-hidden="true" />
          <span
            className="presentation-image-code-overlay"
            aria-hidden="true"
          />
          <img
            src={personalImage2}
            alt="Leonardo Pires"
            className="presentation-image-photo"
          />
        </div>
      </Motion.div>
    </section>
  );
}
