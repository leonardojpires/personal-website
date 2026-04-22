import "./index.css";
import { useEffect, useRef } from "react";
import Rellax from "rellax";
import { motion as Motion } from "framer-motion";

const cardPositionClasses = {
    experience: "top-3 md:top-8 lg:top-12 right-12 md:right-20 rotate-[5deg] float-animation",
    projects: "bottom-3 md:bottom-8 lg:bottom-12 left-12 sm:left-14 md:left-8 lg:-left-20 rotate-[-5deg] float-reverse-animation",
    presentationTop: "top-6 md:top-48 right-2 md:right-8 rotate-[4deg] float-animation",
    presentationBottom: "bottom-6 md:bottom-8 left-2 md:left-8 rotate-[-4deg] float-reverse-animation"
};

export default function HeroCards({ icon, title, description, positionVariant, mode = "floating", delay, floatVariant = "base" }) {
    const cardRef = useRef(null);
    const isGrid = mode === "grid";
    const resolvedVariant = positionVariant ?? (title === "EXPERIENCE" ? "experience" : "projects");
    const isTopCard = isGrid
        ? floatVariant !== "reverse"
        : (resolvedVariant === "experience" || resolvedVariant === "presentationTop");
    const rellaxSpeed = isTopCard ? -2 : 2;

    useEffect(() => {
        if (isGrid) {
            return undefined;
        }

        if (cardRef.current) {
            const rellax = new Rellax(cardRef.current, {
                speed: rellaxSpeed,
                center: true,
                wrapper: null,
                round: true,
                vertical: true,
                horizontal: false
            });

            return () => rellax.destroy()
        }
    }, [isGrid, rellaxSpeed])

    return (
        <Motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: isTopCard ? -12 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: delay ?? (isTopCard ? 0.35 : 0.5), ease: "easeOut" }}
            className={isGrid
                ? `hero-card hero-card-grid ${floatVariant === "reverse" ? "float-reverse-animation" : "float-animation"}`
                : `hero-card ${cardPositionClasses[resolvedVariant] ?? cardPositionClasses.projects}`}
        >
            <span aria-hidden="true">{ icon }</span>
            <span className="hero-card-title font-headline">{ title }</span>
            <p className="hero-card-description font-body ">{ description }</p>
        </Motion.div>
    )
}
