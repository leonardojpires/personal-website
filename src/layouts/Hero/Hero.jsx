import "./index.css";
import personalImage from "../../../public/imgs/hero/personal_picture.webp";
import HeroCards from "../../components/HeroCard/HeroCards";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaBookBookmark } from "react-icons/fa6";
import { motion as Motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-30 bg-linear-to-t from-gray-100 to-(--color-secondary)/20 flex justify-center min-h-screen">
      <div className="hero-section">

        <Motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="tracking-widest uppercase font-bold md:text-sm text-(--color-primary) font-body">
            Fullstack Web Developer & Code Enthusiast
          </span>
          <h1 className="font-bold text-5xl md:text-6xl text-(--gray-900) mt-5 font-headline">
            Shaping Dreams Into{" "}
            <span className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>
          <p className="md:text-lg text-(--gray-500) mt-5 font-body">
            I architect and develop high-performance web applications that
            combine technical precision with thoughtful user experience.
            specializing in fullstackdevelopment, design systems and scalable
            infrastructure.
          </p>
          <div className="hero-buttons font-bold">
            <button>View Projects</button>
            <button>Download CV</button>
          </div>
        </Motion.div>

        <Motion.div
          className="hero-image mx-auto lg:mx-0"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        >
          <img
            src={personalImage}
            alt="Leonardo Pires"
            className="pointer-events-none"
          />
          <HeroCards
            icon={<AiFillThunderbolt size={20} className="text-(--color-secondary)" />}
            title="EXPERIENCE"
            description="2+ years"
          />
          <HeroCards
            icon={<FaBookBookmark size={20} className="text-(--color-secondary)" />}
            title="PROJECTS"
            description="10+ projects"
          />
        </Motion.div>
      </div>
    </section>
  );
}
