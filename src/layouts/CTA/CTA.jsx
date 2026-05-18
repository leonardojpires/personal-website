import { useLanguage } from "@/context/useLanguage";
import "./index.css";
import { translations } from "@/data/translations";

export default function CTA() {
    const { lang } = useLanguage();

    return (
        <section id="contact" className="cta-section" aria-labelledby="cta-title">
            <div className="cta-container">
                <h2 className="cta-title font-headline" id="cta-title">{ translations[lang].cta.headline }</h2>
                <p className="cta-description font-body">{ translations[lang].cta.description }</p>
                <a href="mailto:leocontacto12@gmail.com" className="cta-button font-body" aria-label="Schedule a consultation by email">
                    { translations[lang].cta.button }
                </a>
            </div>
        </section>
    )
}
