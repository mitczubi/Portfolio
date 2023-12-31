import {Navbar, Container, Nav} from "react-bootstrap";
import styles from "../styles/Navigation.module.css";

export default function Navigation () {
    return (
        <>
            <Navbar sticky="top" expand="lg" bg="dark" data-bs-theme="dark" className={styles.navigationCustom}>
                <Container className={`${styles.customContainer} px-4`}>
                    <Navbar.Brand className={styles.navigationCustomText} href="/">
                        MZ
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse className={`justify-content-end mr-3 ${styles.navigationCollapseCustom}`}>
                        <Nav>
                        <Nav.Item>
                            <Nav.Link className={styles.navigationCustomText} href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={styles.navigationCustomText} href="/post">Blog</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}