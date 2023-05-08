import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent(props) {
  return (
    //Passing props to CardComponent so I can dynamically have different text, different img url, different title.
    <Card style={{ width: "18rem" }} className='card-hover d-flex m-auto'>
      <Card.Img variant='top' src={props.src} />
      <Card.Body>
        <Card.Title>
          <h2 className='text-center'>{props.title}</h2>
        </Card.Title>
        <Card.Text className='text-center color-light'>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
