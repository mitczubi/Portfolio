import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "../components/navbar.js";

export default function Home(props) {
  return (
    <>
      <main className={styles.mainContent}>
        <Navigation />
        <Container fluid="md" className="w-100 h-100 p-0" >
          <Row className="h-100 mx-auto">
            <Col className="justify-content-center my-auto d-flex text-center">
              <div className={`text-center p-0 ${styles.heroDiv}`}>
                <span className={`p-3 ${styles.heroText}`}>Mitchell Zubich</span>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}
