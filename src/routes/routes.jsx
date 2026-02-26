import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import Projects from "../pages/Projects/Projects"
import Contact from "../pages/Contact/Contact"
import BasePage from "../pages/BasePage/BasePage"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Route> 
            </Routes>
        </BrowserRouter>
    )
}