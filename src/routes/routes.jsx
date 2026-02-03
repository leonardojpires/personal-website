import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Portfolio from "../pages/Portfolio/Portfolio"
import Contact from "../pages/Contact/Contact"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}