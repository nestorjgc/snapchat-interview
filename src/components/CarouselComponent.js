import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";

function CarouselComponent() {
  return (
    <div>
      <Carousel variant='light'>
        <Carousel.Item>
          <Image
            className='d-block w-100 center'
            src='./img/image2.jpg'
            alt='First Slide Picture'
          />

          <Carousel.Caption>
            <Image
              src='./img/logo-surf.png'
              alt='Logo Picture'
              className='logo-img__landing'
              fluid
            />
            <h3 className='logo-h3__landing'>Surf Shops</h3>
            <a href='#store'>
              <button
                type='button'
                className='btn btn-danger btn-lg'
                id='btn-checkout'
              >
                Check it out!
              </button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className='d-block w-100 center'
            src='./img/image1.jpg'
            alt='2nd Slide Picture'
          />

          <Carousel.Caption>
            <Image
              src='./img/logo-surf.png'
              alt='Logo Picture'
              className='logo-img__landing'
              fluid
            />
            <h3 className='logo-h3__landing'>Surf Shops</h3>
            <a href='#store'>
              <button type='button' className='btn btn-danger btn-lg'>
                Check it out!
              </button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
