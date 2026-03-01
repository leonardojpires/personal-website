import "./index.css";
import { useEffect, useRef } from "react";
import Rellax from "rellax";

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
        <div ref={cardRef} className={`hero-card ${
            title === "EXPERIENCE" 
            ? "top-3 md:top-5 right-12 md:right-16 lg:right-5 xl:-right-5 rotate-[5deg] float-animation"
            : "bottom-3 md:bottom-8 left-12 sm:left-14 md:left-8 lg:-left-20 rotate-[-5deg] float-reverse-animation"}`}>
            { icon }
            <span className="hero-card-title font-headline">{ title }</span>
            <p className="hero-card-description font-body ">{ description }</p>
        </div>
    )
}
