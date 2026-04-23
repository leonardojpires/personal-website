import "./index.css";
import Hero from "../../layouts/Hero/Hero";
import Presentation from './../../layouts/Presentation/Presentation';
import About from './../../layouts/About/About';
import CTA from './../../layouts/CTA/CTA';
import { motion as Motion } from "framer-motion";
import FeaturedProjects from './../../layouts/FeaturedProjects/FeaturedProjects';


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

            <Presentation />

            <Motion.div {...sectionFade}>
                <FeaturedProjects />
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
