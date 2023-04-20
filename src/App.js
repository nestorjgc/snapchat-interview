import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import NavbarBrand from "./components/NavbarBrands";
import NavbarLandComponent from "./components/NavbarLandComponent";
import { Container, Row, Col } from "react-bootstrap";
import CarouselComponent from "./components/CarouselComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import PopoverComponent from "./components/PopoverComponent";
import { Card } from "react-bootstrap";
import CardComponent from "./components/CardComponent";
import React from "react";
import FormComponent from "./components/FormComponent";
import GoogleMap from "./components/MapsComponent";
function App() {
  return (
    <div className='App'>
      <header id='home'>
        <NavbarComponent />
        <NavbarBrand />
      </header>
      <CarouselComponent />

      <section>
        <NavbarLandComponent />
      </section>
      <main>
        <Container fluid>
          <Row id='aboutme'>
            <Col sm={6}>
              <Image
                src='https://nestorjgc.io/assets/img/SurfPicNestorjgc.jpg'
                alt='Surfing pic1'
                className='surf-pic mb-2'
              />
            </Col>
            <Col sm={6} className='m-auto'>
              <h3 className='text-center font-weight-bold'>
                About Me & Business
              </h3>
              <p className='mt-4 mb-4'>
                My name is Nestor Garcia and this is a fictional shop for
                Snapchat! My passion for surfing is what got me to develop this
                store. I'm a multidisciplinary future Software Engineer who
                focuses on front-end and back-end applications. I specialize in
                responsive websites and functional user interfaces.
              </p>
              <PopoverComponent />
            </Col>
          </Row>
          <Row>
            <Col sm={6} className='m-auto' id='services'>
              <h3 className='text-center font-weight-bold'>Services: </h3>
              <p className='mt-4 mb-4 text-center'>
                Welcome to Long Beach Surf Shop! We offer a range variety of
                services. We offer Rental, Repair Surfboards and we also have a
                store!
              </p>
              <p className='text-center'>
                We offer rental services for a small price:
              </p>
              <table cellPadding={"15px"}>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Surfboard | 1 hour |</td>
                    <td>$30.00</td>
                  </tr>
                  <tr>
                    <td>Surfboard | 2 hours |</td>
                    <td>$40.00</td>
                  </tr>
                  <tr>
                    <td>Surfboard | Half Day |</td>
                    <td>$50.00</td>
                  </tr>
                  <tr>
                    <td>Wetsuit Rental |</td>
                    <td>$10.00</td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col sm={6}>
              <Image
                src='./img/rentalpic.jpg'
                alt='Rental Picture'
                className='surf-pic mb-2'
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Image
                src='./img/surfrepair.png'
                alt='Rental Picture'
                className='surf-pic mb-2'
              />
            </Col>
            <Col sm={6} className='m-auto' id='services'>
              <h3 className='text-center font-weight-bold'>Repairs: </h3>
              <p className='mt-4 mb-4 text-center'>
                We also offer repairs for any surfboards.
              </p>
              <p className='text-center'>
                Please reach us at 941-928-6332 to give you a quote. We
                especialize in:
              </p>
              <ul className='ul-repair'>
                <li className='text-center ul-li-repair'>Glass</li>
                <li className='text-center ul-li-repair'>Epoxy</li>
                <li className='text-center ul-li-repair'>Polyurethane </li>
                <li className='text-center ul-li-repair'>Wood</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <h3 className='text-center h3-store' id='store'>
              Store
            </h3>
            <Col sm={3}>
              <a href='#home' className='no-outline-store-card'>
                <CardComponent
                  src='./img/surfboard.jpg'
                  title="QuickSilver Surfboard | 8'6"
                  text='$750.00'
                  className='text-center'
                  alt='product1 '
                />
              </a>
            </Col>
            <Col sm={3}>
              <a href='#home' className='no-outline-store-card'>
                <CardComponent
                  src='./img/fins.jpg'
                  title='Fins | FCS'
                  text='$25.00'
                  className='text-center'
                  alt='product2'
                />
              </a>
            </Col>
            <Col sm={3}>
              <a href='#home' className='no-outline-store-card'>
                <CardComponent
                  src='./img/solidboard.jpg'
                  title="FireWare | Solid Board | 6'0"
                  text='$500.00'
                  className='text-center'
                  alt='product3'
                />
              </a>
            </Col>
            <Col sm={3}>
              <a href='#home' className='no-outline-store-card'>
                <CardComponent
                  src='./img/wetsuit.jpg'
                  alt='product4'
                  title='Wetsuit | 3/2 | Billabong'
                  text='$125.00'
                  className='text-center'
                />
              </a>
            </Col>
          </Row>
          <Row>
            <h3 className='text-center font-weight-bold word-champions-h3'>
              World Champions
            </h3>
            <Col sm={6}>
              <Card>
                <Card.Img
                  variant='top'
                  src='./img/Filipe.jpg'
                  alt='Toledo Picture'
                />
                <Card.Body className='card-body-bg'>
                  <Card.Text className='text-center font-weight-bold'>
                    Filipe Toledo | 2015 | World Surf League Champion
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card>
                <Card.Img
                  variant='top'
                  src='./img/kelly.jpg'
                  alt='Kelly Picture'
                />
                <Card.Body className='card-body-bg'>
                  <Card.Text className='text-center font-weight-bold'>
                    Kelly Slater | 2020 | World Surf League Champion
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Col sm={12}>
            <GoogleMap />
          </Col>
          <div className='form-div' id='contact'>
            <h3 className='text-center bg-form-text'>
              Please feel free to reach out!
            </h3>
            <FormComponent />
          </div>
        </Container>
        <footer>
          <small>
            @2023 Nestor Garcia | This Website is NOT for commercial use | Only
            for Snapchat
          </small>
        </footer>
      </main>
    </div>
  );
}

export default App;
