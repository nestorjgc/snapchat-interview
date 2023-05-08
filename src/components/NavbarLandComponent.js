import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarLandComponent() {
  return (
    <div id='navvv'>
      <Navbar
        variant='light'
        expand='lg'
        className='w-50 center d-flex m-auto '
      >
        <Container className='responsive-mobile w-50 '>
          <Navbar.Brand href='#'>
            <img
              src='	https://nestorjgc.github.io/snapchat/img/logo-surf.png'
              alt=''
              className='w-100'
            />
          </Navbar.Brand>
          <Navbar id='basic-navbar-nav '>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#aboutme' id=''>
                About
              </Nav.Link>
              <Nav.Link href='#services'>Services</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarLandComponent;
