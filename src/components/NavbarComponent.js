import { Navbar, Container, Nav } from "react-bootstrap";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
function NavbarComponent() {
  return (
    <div>
      <Navbar bg='danger' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Nestor's Surfboards!</Navbar.Brand>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link
                href='https://www.instagram.com/nestorjgc/'
                target='_blank'
              >
                <FaInstagram />
              </Nav.Link>
              <Nav.Link href='https://github.com/nestorjgc' target='_blank'>
                <FaGithub />
              </Nav.Link>
              {/*               <Navbar.Text>Nestor's Surfboards!</Navbar.Text>
               */}{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
