import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Experience() {
  return (
    <Container>
      <Row className='mb-3'>
        <Col>
          <h2 className='comp-heads '>Job Experience</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Software Engineer</h3>
          <p>Solution Street, June 2020 - January 2023</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='smaller-p'>Ruby on Rails, React, Javascript, HTML5, CSS, Git, Jira, Confluence, Bitbucket</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='smaller-p'>I started my Software Development Career at Solution Street, where I mainly focused on full-stack development using Ruby on Rails. I worked on many projects such as a catering platform, a yelp-like review platform, and a website monitoring platform. I worked on critical features on these applications and helped build the monitoring system from the ground up. I also turned that monitoring system into an API, and built a React Front-end for it!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
