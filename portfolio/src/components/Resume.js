import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Resume() {
  return (
    <Container>
      <Row>
        <Col>
          <p>Check out my Resume! <a href="/WillNylundR.pdf" download>Resume</a></p>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
