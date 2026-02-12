import "./index.css";
import FeaturedProject from "../../layouts/Featured Projects/FeaturedProjects";
import Hero from "../../layouts/Hero/Hero";
import About from './../../layouts/About/About';


export default function Home() {
    return (
        <>
            <Hero />

            <FeaturedProject />

            <About />
        </>
    )
}
