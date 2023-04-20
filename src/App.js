import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import NavbarBrand from "./components/NavbarBrands";
import NavbarLandComponent from "./components/NavbarLandComponent";
import { Container, Row, Col } from "react-bootstrap";
import CarouselComponent from "./components/CarouselComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

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
            <Col sm={6}>
              <Image
                src='https://cdn.shopify.com/s/files/1/0002/9596/0637/files/HEADER-MOBILE_1200x.jpg?v=1677129404'
                alt='Testing Picture'
                className='surf-pic'
              />
            </Col>
            <Col sm={6} className='m-auto'>
              <h3 className='text-center'>
                MASON HO AND THE RIDDLE OF INFINITE FUN
              </h3>
              <p>
                Has Mason Ho figured out how to have a good time, all the time?
                Sure, he has the prerequisite cache of tricks and skills in his
                repertoire, but it’s the little jinks, the spontaneous
                body-English and the old-school jives that make his whole
                approach an act of untainted self-expression.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={6} className='m-auto'>
              <h3 className='text-center'>
                MASON HO AND THE RIDDLE OF INFINITE FUN
              </h3>
              <p>
                Has Mason Ho figured out how to have a good time, all the time?
                Sure, he has the prerequisite cache of tricks and skills in his
                repertoire, but it’s the little jinks, the spontaneous
                body-English and the old-school jives that make his whole
                approach an act of untainted self-expression.
              </p>
            </Col>
            <Col sm={6}>
              <Image
                src='https://cdn.shopify.com/s/files/1/0002/9596/0637/files/HEADER-MOBILE_1200x.jpg?v=1677129404'
                alt='Testing Picture'
                className='surf-pic'
              />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
