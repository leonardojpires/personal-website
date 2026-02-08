import { Outlet } from "react-router-dom";
import Container from "../../components/Container/Container";
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