import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "../components/navbar.js";

export default function Home(props) {
  return (
    <>
      <main className={styles.mainContent}>
        <Navigation />
        <Container fluid className="w-100 h-100 p-0" >
          <Row className="h-100">
            <Col className="my-auto justify-content-center d-flex">
              <div className={`text-center ${styles.heroDiv}`}>
                <span className={styles.heroText}>Mitchell Zubich</span>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}
