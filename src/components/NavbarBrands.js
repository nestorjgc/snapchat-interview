import { Navbar, Container } from "react-bootstrap";

function NavbarBrands() {
  return (
    <div>
      <Navbar variant='light' bg='light' expand='lg' className='center'>
        <Container className='w-100 navbar-resize'>
          <img src='./img/logo1.png' alt='Vans-logo' className='w-50' />
          <img
            src='./img/logo2.png'
            alt='Hurley-logo'
            className='w-50 nav-hurley'
          />
          <img src='./img/oneil.png' alt='Oneill-logo' className='w-50 ' />
          <img src='./img/fcs.png' alt='Fcs-logo' className='w-50 ' />
          <img
            src='./img/Rip-Curl-Logo.png'
            alt='Ripcurl-logo'
            className='w-50 nav-hurley'
          />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarBrands;
