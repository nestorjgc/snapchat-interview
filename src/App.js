import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import NavbarBrand from "./components/NavbarBrands";
import NavbarLandComponent from "./components/NavbarLandComponent";
import { Container, Row, Col } from "react-bootstrap";
import CarouselComponent from "./components/CarouselComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import PopoverComponent from "./components/PopoverComponent";
import { Card, CardGroup, CardImg } from "react-bootstrap";
import React from "react";
import { ReactDOM } from "react";

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
          <Row id='aboutme'>
            <Col sm={6}>
              <Image
                src='https://nestorjgc.io/assets/img/SurfPicNestorjgc.jpg'
                alt='Surfing pic1'
                className='surf-pic mb-2'
              />
            </Col>
            <Col sm={6} className='m-auto'>
              <h3 className='text-center font-weight-bold'>About Me!</h3>
              <p className='mt-4 mb-4'>
                My name is Nestor Garcia and this is a fictional shop for
                Snapchat! My passion for surfing is what got me to develop this
                store. I'm a multidisciplinary future Software Engineer who
                focuses on front-end and back-end applications. I specialize in
                responsive websites and functional user interfaces.
              </p>
              <PopoverComponent className=''></PopoverComponent>
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
            <h3 className='text-center font-weight-bold'>World Champions</h3>
            <Col sm={6}>
              <Card>
                <Card.Img
                  variant='top'
                  src='./img/Filipe.jpg'
                  alt='Toledo Picture'
                />
                <Card.Body>
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
                <Card.Body>
                  <Card.Text className='text-center font-weight-bold'>
                    Kelly Slater | 2020 | World Surf League Champion
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
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
