import { Outlet } from "react-router-dom";
import Container from "../../layouts/Container/Container";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

export default function BasePage({ lang, toggleLang }) {
    return (
        <>
            <a className="skip-link" href="#main-content">
                Skip to main content
            </a>
            <Header lang={lang} toggleLang={toggleLang} />
            <Container lang={lang}>
                <Outlet />
            </Container>
            <Footer />        
        </>
    )
}