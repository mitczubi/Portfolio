import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Home(props) {
  return (
    <>
      <div className={styles.mainContent}>
        <Container fluid="md" className="h-100 p-0" >
          <Row className="h-100 mx-auto">
            <Col className="justify-content-center my-auto d-flex text-center">
              <div className={`p-0 ${styles.heroDiv}`}>
                <span className={`p-3 ${styles.heroText}`}>Mitchell Zubich</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
