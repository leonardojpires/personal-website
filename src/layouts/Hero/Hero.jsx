import "./index.css";
import cvFile from "../../assets/CV/CV.pdf";
import HeroCards from "../../components/HeroCard/HeroCards";
import SnowBackground from "../../components/SnowBackground/SnowBackground";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRegClipboard } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { motion as Motion } from "framer-motion";
import { translations } from "@/data/translations";
import { useLanguage } from "@/context/useLanguage";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section
      className="hero-root pt-30 bg-linear-to-t from-gray-100 to-(--color-secondary)/20 flex justify-center min-h-screen"
      aria-labelledby="home-hero-title"
    >
      <SnowBackground />
      <div className="hero-section">
        <Motion.div
          className="w-full flex flex-col items-center text-center"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="tracking-widest uppercase font-bold text-xs md:text-sm text-(--color-primary) font-body text-center bg-(--color-secondary)/10 px-3 py-1 rounded-full bg-clip-border">
            { translations[lang].hero.tagline }
          </span>
          <h1
            className="font-bold text-5xl md:text-7xl text-(--gray-900) mt-5 font-headline"
            id="home-hero-title"
          >
            { translations[lang].hero.pre_title } <br />
            <span className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">
              { translations[lang].hero.title }
            </span>
          </h1>
          <p className="md:text-lg text-(--gray-500) mt-5 font-body md:w-2/3">
              { translations[lang].hero.description }
          </p>
          <div className="hero-buttons font-bold">
            <div className="hero-button button-view-projects flex gap-4">
              <FaRegClipboard size={20}/> 
              <a href="#featured-projects">
                { translations[lang].hero.viewProjects }
              </a>
            </div>
            
            <div className="hero-button button-download-cv flex gap-4">
              <LuDownload size={20}/>
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Leonardo Pires CV as PDF"
              >
                { translations[lang].hero.downloadCV }
              </a>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
