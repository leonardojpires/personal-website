import { Outlet } from "react-router-dom";
import Container from "../../components/Container/Container";

export default function BasePage() {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}