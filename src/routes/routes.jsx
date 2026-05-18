import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Projects from "../pages/Projects/Projects"
import Contact from "../pages/Contact/Contact"
import BasePage from "../pages/BasePage/BasePage"
import ScrollToTop from "@/components/utils/ScrollToTop"

export default function AppRoutes({ lang, toggleLang }) {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<BasePage lang={lang} toggleLang={toggleLang} />}>
                        <Route index element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
}