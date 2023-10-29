import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from "../styles/Footer.module.css";
import { SocialIcon } from "react-social-icons";

export default function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className={`${styles.footerCustom} py-4`}>
                <Container>
                    <Row className={`justify-content-between`}>
                        <Col md={4} className={`customText d-flex align-items-center`}>
                            <span>&copy; {currentYear} Mitchell Zubich </span>
                        </Col>
                        <Nav className={`col-md-4 justify-content-end list-unstyled d-flex`}>
                            <Nav.Item className={`ms-3`}>
                                <SocialIcon network="linkedin" url="https://www.linkedin.com/in/mitchell-zubich/" style={{ height: 25, width: 25 }}/>
                            </Nav.Item>
                            <Nav.Item className={`ms-3`}>
                                <SocialIcon network="github" url="https://github.com/mitczubi" style={{ height: 25, width: 25 }}/>
                            </Nav.Item>
                            <Nav.Item className={`ms-3`}>
                                <SocialIcon network="instagram" url="https://www.instagram.com/mitchellzubich/" style={{ height: 25, width: 25 }}/>
                            </Nav.Item>
                        </Nav>
                    </Row>
                </Container>
            </footer>
        </>
    )
}