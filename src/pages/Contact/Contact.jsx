import "./index.css";

export default function Contact() {
    return (
        <section className="projects-header-section" aria-labelledby="contact-page-title">
            <div className="projects-header">
                <h1 className="projects-header-title font-headline" id="contact-page-title">Contact</h1>
                <p className="projects-header-description font-body">
                    I am available for new opportunities and collaborations.
                </p>
                <a href="mailto:leocontacto12@gmail.com" className="featured-projects-link font-body" aria-label="Send email to Leonardo Pires">
                    Send an Email
                </a>
            </div>
        </section>
    )
}