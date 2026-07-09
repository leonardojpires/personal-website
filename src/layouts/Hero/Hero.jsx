import "./index.css";
import cvFile from "../../assets/CV/CV.pdf";
import { FaRegClipboard } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { motion as Motion } from "framer-motion";
import { translations } from "@/data/translations";
import { useLanguage } from "@/context/useLanguage";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section
      className="hero-root"
      aria-labelledby="home-hero-title"
    >
      <div className="hero-section">
        <Motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="section-eyebrow font-body">
            { translations[lang].hero.tagline }
          </span>
          <h1
            className="hero-title font-headline"
            id="home-hero-title"
          >
            { translations[lang].hero.pre_title }
            <span>
              { translations[lang].hero.title }
            </span>
          </h1>
          <p className="hero-description font-body">
              { translations[lang].hero.description }
          </p>
          <div className="hero-buttons font-bold">
            <a className="hero-button button-view-projects" href="#featured-projects">
              <FaRegClipboard size={20}/> 
              { translations[lang].hero.viewProjects }
            </a>
            
            <a
              className="hero-button button-download-cv"
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Leonardo Pires CV as PDF"
            >
              <LuDownload size={20}/>
              { translations[lang].hero.downloadCV }
            </a>
          </div>

          <div className="hero-trust-row font-body" aria-label="Availability">
            <span>{ translations[lang].hero.availability }</span>
            <span>{ translations[lang].hero.response }</span>
          </div>
        </Motion.div>

        {/* <Motion.aside
          className="hero-panel"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          aria-label="Freelance highlights"
        >
          <div className="hero-panel-header">
            <span className="hero-panel-kicker font-body">Portfolio snapshot</span>
            <strong className="font-headline">Build, launch, refine.</strong>
          </div>
          <div className="hero-stats">
            {translations[lang].hero.stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong className="font-headline">{stat.value}</strong>
                <span className="font-body">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-panel-note font-body">
            <span />
            <p>Dummy client note: focused on responsive builds, practical architecture, and launch-ready presentation.</p>
          </div>
        </Motion.aside> */}
      </div>
    </section>
  );
}
