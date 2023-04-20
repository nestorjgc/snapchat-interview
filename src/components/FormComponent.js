import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='firstName'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type='name' placeholder='First Name' />
        <Form.Text className='text-muted'>
          We'll never share your information with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='lastName'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type='lastName' placeholder='Last Name' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type='email' placeholder='Email' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='zipcode'>
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type='zipcode' placeholder='Zipcode' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='address'>
        <Form.Label>Address</Form.Label>
        <Form.Control type='address' placeholder='Address' />
      </Form.Group>

      <Button variant='danger' type='submit' className='d-flex m-auto'>
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
