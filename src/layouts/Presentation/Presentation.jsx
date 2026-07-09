import "./index.css";
import { motion as Motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroCards from "./../../components/HeroCard/HeroCards";
import {
  IoBriefcase,
} from "react-icons/io5";
import { IoIosBookmarks } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { translations } from "@/data/translations";
import { useLanguage } from "@/context/useLanguage";

export default function Presentation() {
  const { lang } = useLanguage();
  const methodologyRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: methodologyRef,
    offset: ["start end", "end start"],
  });
  const delayedXRaw = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const delayedX = useSpring(delayedXRaw, { stiffness: 60, damping: 22, mass: 0.7 });

  return (
    <section className="presentation-section">
      <Motion.div
        className="presentation-content"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
      >
        <span className="section-eyebrow font-body">
          {translations[lang].presentation.eyebrow}
        </span>
        <h2 className="presentation-title font-headline">
          {translations[lang].presentation.title}
        </h2>
        <p className="presentation-description font-body">
          { translations[lang].presentation.description }
        </p>

        <div className="presentation-grid">
          <div className="presentation-grid-top">
            <HeroCards
              mode="grid"
              icon={
                <MdComputer
                  size={20}
                  className="text-(--color-primary)"
                  aria-hidden="true"
                  focusable="false"
                />
              }
              title={translations[lang].presentation.cards.experience.title}
              description={translations[lang].presentation.cards.experience.description}
            />
          </div>

          <div className="presentation-grid-bottom">
            <HeroCards
              mode="grid"
              icon={
                <IoIosBookmarks
                  size={20}
                  className="text-(--color-primary)"
                  aria-hidden="true"
                  focusable="false"
                />
              }
              title={translations[lang].presentation.cards.learning.title}
              description={translations[lang].presentation.cards.learning.description}
            />

            <HeroCards
              mode="grid"
              icon={
                <IoBriefcase
                  size={20}
                  className="text-(--color-primary)"
                  aria-hidden="true"
                  focusable="false"
                />
              }
              title={translations[lang].presentation.cards.projects.title}
              description={translations[lang].presentation.cards.projects.description}
            />
          </div>
        </div>
      </Motion.div>

      <Motion.div
        ref={methodologyRef}
        className="presentation-methodology"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Motion.span
          className="presentation-methodology-accent"
          style={{ x: prefersReducedMotion ? 0 : delayedX }}
          aria-hidden="true"
        />
        <div className="presentation-methodology-heading">
          <span className="presentation-methodology-eyebrow font-body">
            {translations[lang].presentation.methodology.eyebrow}
          </span>
          <h3 className="presentation-methodology-title font-headline">
            {translations[lang].presentation.methodology.title}
          </h3>
          <p className="presentation-methodology-description font-body">
            {translations[lang].presentation.methodology.description}
          </p>
        </div>

        <ol className="presentation-methodology-list font-body">
          {translations[lang].presentation.methodology.steps.map((step, index) => (
            <li className="presentation-methodology-step" key={step.title}>
              <span className="presentation-methodology-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-headline">{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Motion.div>
    </section>
  );
}
