import "./index.css";
import cvFile from "../../assets/CV/CV.pdf";
import HeroCards from "../../components/HeroCard/HeroCards";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRegClipboard } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { motion as Motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="pt-30 bg-linear-to-t from-gray-100 to-(--color-secondary)/20 flex justify-center min-h-screen"
      aria-labelledby="home-hero-title"
    >
      <div className="hero-section">
        <Motion.div
          className="w-full flex flex-col items-center text-center"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="tracking-widest uppercase font-bold md:text-sm text-(--color-primary) font-body text-center">
            Full-stack Web Developer & Code Enthusiast
          </span>
          <h1
            className="font-bold text-5xl md:text-7xl text-(--gray-900) mt-5 font-headline"
            id="home-hero-title"
          >
            Shaping Dreams Into Real{" "}
            <span className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">
              Web Experiences
            </span>
          </h1>
          <p className="md:text-lg text-(--gray-500) mt-5 font-body w-2/3">
            I architect and build robbust web applications from idea to production — working on both back-end systems and user-facing interfaces, with a focus on performance and scalability
          </p>
          <div className="hero-buttons font-bold">
            <div className="button-view-projects flex gap-4">
              <FaRegClipboard size={20}/> 
              <a href="#featured-projects">
                View Projects
              </a>
            </div>
            
            <div className="button-download-cv flex gap-4">
              <LuDownload size={20}/>
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Leonardo Pires CV as PDF"
              >
                Download CV
              </a>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
