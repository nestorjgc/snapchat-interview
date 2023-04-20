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
            alt='First sliasdsade'
          />

          <Carousel.Caption>
            <Image
              src='./img/logo-surf.png'
              alt='asdsadsa'
              className='logo-img__landing'
              fluid
            />
            <h3 className='logo-h3__landing'>Surf Shops</h3>
            <button type='button' className='btn btn-danger btn-lg'>
              Check it out!
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
