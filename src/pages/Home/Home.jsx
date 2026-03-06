import "./index.css";
import FeaturedProject from "../../layouts/FeaturedProjects/FeaturedProjects";
import Hero from "../../layouts/Hero/Hero";
import About from './../../layouts/About/About';
import CTA from './../../layouts/CTA/CTA';
import { motion as Motion } from "framer-motion";

const sectionFade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.55, ease: "easeOut" }
};

export default function Home() {
    return (
        <>
            <Hero />

            <Motion.div {...sectionFade}>
                <FeaturedProject />
            </Motion.div>

            <Motion.div
                {...sectionFade}
                transition={{ ...sectionFade.transition, delay: 0.1 }}
            >
                <About />
            </Motion.div>

            <Motion.div
                {...sectionFade}
                transition={{ ...sectionFade.transition, delay: 0.15 }}
            >
                <CTA />
            </Motion.div>
        </>
    )
}
