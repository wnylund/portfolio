import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Hobbies() {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className='comp-heads'>Hobbies</h2>
        </Col>
      </Row>
      <Row>
            <p>Two of my favorite things to do are play volleyball and lift weights!</p>
            <Col xs={12} md={6} className="d-flex justify-content-md-end align-items-center pb-3 pb-md-0">
              <img src={`${process.env.PUBLIC_URL}/volley.jpg`} alt="Your Name" width="225" height="300"/>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-md-end align-items-center pb-3 pb-md-0">
              <img src={`${process.env.PUBLIC_URL}/weight.png`} alt="Your Name" width="225" height="300"/>
            </Col>
      </Row>
    </Container>
  );
}

export default Hobbies;
