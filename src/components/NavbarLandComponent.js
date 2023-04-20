import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarLandComponent() {
  return (
    <div>
      <Navbar variant='light' expand='lg' className='w-50 center'>
        <Container className='w-50'>
          <Navbar.Brand href='#'>
            <img src='./img/logo-surf.png' alt='' className='w-100' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>About</Nav.Link>
              <Nav.Link href='#link'>Services</Nav.Link>
              <Nav.Link href='#link'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarLandComponent;
