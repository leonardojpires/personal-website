import { Outlet } from "react-router-dom";
import Container from "../../layouts/Container/Container";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

export default function BasePage() {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />        
        </>
    )
}