import "./index.css";

export default function CTA() {
    return (
        <section id="contact" className="cta-section" aria-labelledby="cta-title">
            <div className="cta-container">
                <h2 className="cta-title font-headline" id="cta-title">Let's Build Something Exceptional</h2>
                <p className="cta-description font-body">Available for freelance projects, consulting work, and full-time opportunities. Let's discuss how we can work together to bring your ideas to life!</p>
                <a href="mailto:leocontacto12@gmail.com" className="cta-button font-body" aria-label="Schedule a consultation by email">
                    Schedule a Consultation
                </a>
            </div>
        </section>
    )
}
