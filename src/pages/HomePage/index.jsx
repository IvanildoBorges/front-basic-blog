import { Col, Container, Row } from "react-bootstrap";
import LayoutDefault from "../../components/layout/LayoutDefault";

const HomePage = () => {
  return (
    <LayoutDefault>
      <Container>
        <Row className="mt-5">
          <Col>Home Page</Col>
        </Row>
      </Container>
    </LayoutDefault>
  );
};

export default HomePage;
