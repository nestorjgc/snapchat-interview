import { Navbar, Container } from "react-bootstrap";

function NavbarBrands() {
  return (
    <div>
      <Navbar variant='light' bg='light' expand='lg' className='center'>
        <Container className='w-100 navbar-resize'>
          <img
            src='	https://nestorjgc.github.io/snapchat/img/logo1.png'
            alt='Vans-logo'
            className='w-50'
          />
          <img
            src='	https://nestorjgc.github.io/snapchat/img/logo2.png'
            alt='Hurley-logo'
            className='w-50 nav-hurley'
          />
          <img
            src='	https://nestorjgc.github.io/snapchat/img/oneil.png'
            alt='Oneill-logo'
            className='w-50 '
          />
          <img
            src='https://nestorjgc.github.io/snapchat/img/fcs.png'
            alt='Fcs-logo'
            className='w-50 '
          />
          <img
            src='https://nestorjgc.github.io/snapchat/img/Rip-Curl-Logo.png'
            alt='Ripcurl-logo'
            className='w-50 nav-hurley'
          />
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarBrands;
