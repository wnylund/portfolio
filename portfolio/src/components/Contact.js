import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <h3 className='comp-heads'>Contact Me</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form action="https://formspree.io/f/mqkonpew" method="POST">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className='medium-text mt-2 mb-2'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="_replyto" />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label className='medium-text mt-2 mb-2'>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="name" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label className='medium-text mt-2 mb-2'>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" />
            </Form.Group>

            <Button variant="primary" type="submit" className='mt-2'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
