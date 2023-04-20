import React from "react";
import { Button } from "react-bootstrap";
import { Popover, OverlayTrigger } from "react-bootstrap";

function PopoverComponent() {
  const popover = (
    <Popover id='popover-basic'>
      <Popover.Header as='h3'>Nestor Garcia</Popover.Header>
      <Popover.Body>
        Want to learn more? Here's a link to my{" "}
        <a
          href='https://github.com/nestorjgc'
          target='_blank'
          rel='noreferrer'
          className='btn-outline-primary ml-2'
        >
          GitHub
        </a>{" "}
        portfolio for latest developments
      </Popover.Body>
    </Popover>
  );

  const Example = () => (
    <OverlayTrigger trigger='click' placement='right' overlay={popover}>
      <Button variant='' className='btn btn-outline-dark m-auto d-flex mb-5'>
        LEARN MORE! CLICK ME
      </Button>
    </OverlayTrigger>
  );

  return <Example />;
}

export default PopoverComponent;
