import "./index.css";
import FeaturedProject from "../../layouts/FeaturedProjects/FeaturedProjects";
import Hero from "../../layouts/Hero/Hero";
import About from './../../layouts/About/About';
import CTA from './../../layouts/CTA/CTA';

export default function Home() {
    return (
        <>
            <Hero />

            <FeaturedProject />

            <About />

            <CTA />
        </>
    )
}
