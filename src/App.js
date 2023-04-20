import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import NavbarBrand from "./components/NavbarBrands";
import NavbarLandComponent from "./components/NavbarLandComponent";
import { Container, Row, Col } from "react-bootstrap";
import CarouselComponent from "./components/CarouselComponent";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <header>
        <NavbarComponent />
        <NavbarBrand />
      </header>
      <CarouselComponent />

      <section>
        <NavbarLandComponent />
      </section>
      <main>
        <Container fluid>
          <Row>
            <Col sm={7}>Hello This Works!</Col>
            <Col sm={5}>ssss</Col>
          </Row>
          <Row>
            <Col sm={7}>8!</Col>
            <Col sm={5}>4!</Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
