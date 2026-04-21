import "./index.css";
import personalImage from "../../../public/imgs/hero/personal_picture.webp";
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
            Fullstack Web Developer & Code Enthusiast
          </span>
          <h1
            className="font-bold text-5xl md:text-7xl text-(--gray-900) mt-5 font-headline"
            id="home-hero-title"
          >
            Shaping Dreams Into{" "}
            <span className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          <p className="md:text-lg text-(--gray-500) mt-5 font-body w-2/3">
            I architect and develop high-performance web applications that
            combine technical precision with thoughtful user experience.
            specializing in fullstackdevelopment, design systems and scalable
            infrastructure.
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

        {/* <Motion.div
          className="hero-image mx-auto lg:mx-0"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        >
          <img
            src={personalImage}
            alt="Portrait of Leonardo Pires"
            className="pointer-events-none"
          />
          <HeroCards
            icon={
              <AiFillThunderbolt
                size={20}
                className="text-(--color-secondary)"
                aria-hidden="true"
                focusable="false"
              />
            }
            title="EXPERIENCE"
            description="2+ years"
          />
          <HeroCards
            icon={
              <FaBookBookmark
                size={20}
                className="text-(--color-secondary)"
                aria-hidden="true"
                focusable="false"
              />
            }
            title="PROJECTS"
            description="10+ projects"
          />
        </Motion.div> */}
      </div>
    </section>
  );
}
