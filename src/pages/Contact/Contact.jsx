import "./index.css";
import { useLanguage } from "@/context/useLanguage";
import { translations } from "@/data/translations";

export default function Contact() {
    const { lang } = useLanguage();

    return (
        <section className="projects-header-section" aria-labelledby="contact-page-title">
            <div className="projects-header">
                <h1 className="projects-header-title font-headline" id="contact-page-title">{translations[lang].contactPage.title}</h1>
                <p className="projects-header-description font-body">
                    {translations[lang].contactPage.description}
                </p>
                <a href="mailto:leocontacto12@gmail.com" className="featured-projects-link font-body" aria-label={translations[lang].contactPage.emailLabel}>
                    {translations[lang].contactPage.button}
                </a>
            </div>
        </section>
    )
}
