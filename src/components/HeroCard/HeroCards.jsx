import "./index.css";

const cardPositionClasses = {
    experience: "top-3 md:top-8 lg:top-12 right-12 md:right-20 rotate-[5deg]",
    projects: "bottom-3 md:bottom-8 lg:bottom-12 left-12 sm:left-14 md:left-8 lg:-left-20 rotate-[-5deg]",
    presentationTop: "top-6 md:top-48 right-2 md:right-8 rotate-[4deg]",
    presentationBottom: "bottom-6 md:bottom-8 left-2 md:left-8 rotate-[-4deg]"
};

export default function HeroCards({ icon, title, description, positionVariant, mode = "floating" }) {
    const resolvedVariant = positionVariant ?? (title === "EXPERIENCE" ? "experience" : "projects");

    return (
        <div
            className={mode === "grid"
                ? "hero-card hero-card-grid"
                : `hero-card ${cardPositionClasses[resolvedVariant] ?? cardPositionClasses.projects}`}
        >
            <span aria-hidden="true">{ icon }</span>
            <span className="hero-card-title font-headline">{ title }</span>
            <p className="hero-card-description font-body ">{ description }</p>
        </div>
    )
}
