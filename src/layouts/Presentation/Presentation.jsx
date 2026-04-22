import "./index.css";
import personalImage2 from "../../../public/imgs/hero/personal_picture_2.webp";
import { motion as Motion } from "framer-motion";
import HeroCards from "./../../components/HeroCard/HeroCards";
import { IoColorPaletteOutline, IoFlash, IoFolderOpenOutline, IoShield } from "react-icons/io5";

export default function Presentation() {
  return (
    <section className="presentation-section">
      <Motion.div
        className="presentation-content"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
      >
        <h2 className="presentation-title font-headline">The Digital Curator</h2>
        <p className="presentation-description font-body">
          I specialize in bridging the gap between complex backend architectures and
          intuitive, front-end visual hierarchies. My approach is rooted in the
          "Architectural Portfolio" philosophy: every line of code must serve a structural
          purpose while contributing to the overall user experience.
        </p>

        <div className="presentation-grid">
          <HeroCards
            mode="grid"
            delay={0.2}
            floatVariant="base"
            icon={
              <IoFolderOpenOutline
                size={18}
                className="text-(--color-primary)"
                aria-hidden="true"
                focusable="false"
              />
            }
            title="Architecture First"
            description="Scalable systems designed for longevity and performance."
          />

          <HeroCards
            mode="grid"
            delay={0.3}
            floatVariant="reverse"
            icon={
              <IoColorPaletteOutline
                size={18}
                className="text-(--color-secondary)"
                aria-hidden="true"
                focusable="false"
              />
            }
            title="Visual Fidelity"
            description="Meticulous attention to typography, spacing, and rhythm."
          />

          <HeroCards
            mode="grid"
            delay={0.4}
            floatVariant="base"
            icon={
              <IoFlash
                size={18}
                className="text-(--color-amber)"
                aria-hidden="true"
                focusable="false"
              />
            }
            title="Performance"
            description="Optimized assets and logic for sub-second load times."
          />

          <HeroCards
            mode="grid"
            delay={0.5}
            floatVariant="reverse"
            icon={
              <IoShield
                size={18}
                className="text-(--gray-900)"
                aria-hidden="true"
                focusable="false"
              />
            }
            title="Security"
            description="Robust data protection and secure API integrations."
          />
        </div>
      </Motion.div>

      <Motion.div
        className="presentation-image"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
      >
        <img
          src={personalImage2}
          alt="Portrait of Leonardo Pires"
          className="w-100 pointer-events-none"
        />
      </Motion.div>
    </section>
  );
}
