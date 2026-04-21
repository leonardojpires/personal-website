import "./index.css";
import { useEffect, useRef } from "react";
import Rellax from "rellax";
import { motion as Motion } from "framer-motion";

export default function HeroCards({ icon, title, description }) {
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            const rellax = new Rellax(cardRef.current, {
                speed: title === "EXPERIENCE" ? -2 : 2,
                center: true,
                wrapper: null,
                round: true,
                vertical: true,
                horizontal: false
            });

            return () => rellax.destroy()
        }
    }, [title])

    return (
        <Motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: title === "EXPERIENCE" ? -12 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: title === "EXPERIENCE" ? 0.35 : 0.5, ease: "easeOut" }}
            className={`hero-card ${
            title === "EXPERIENCE" 
            ? "top-3 md:top-8 lg:top-12 right-12 md:right-16 lg:right-5 xl:-right-5 rotate-[5deg] float-animation"
            : "bottom-3 md:bottom-8 lg:bottom-12 left-12 sm:left-14 md:left-8 lg:-left-20 rotate-[-5deg] float-reverse-animation"}`}
        >
            <span aria-hidden="true">{ icon }</span>
            <span className="hero-card-title font-headline">{ title }</span>
            <p className="hero-card-description font-body ">{ description }</p>
        </Motion.div>
    )
}
