import { Outlet } from "react-router-dom";
import Container from "../../layouts/Container/Container";
import Header from "../../layouts/Header/Header";

export default function BasePage() {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>        
        </>
    )
}