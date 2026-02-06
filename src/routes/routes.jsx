import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Portfolio from "../pages/Portfolio/Portfolio"
import Contact from "../pages/Contact/Contact"
import BasePage from "../pages/BasePage/BasePage"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact" element={<Contact />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    )
}