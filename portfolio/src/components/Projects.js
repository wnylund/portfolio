import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Projects() {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className='comp-heads'>Projects</h2>
        </Col>
      </Row>
      <Row>
      <Col>
          <h3>Will's Portfolio</h3>
          <p className='smaller-p'>I created a simple app that allows me to keep track of my lifts. By using this application, I can create workout for a specific date, add exercises and sets to that workout, and view all of my past workouts!</p>
          <a href="https://github.com/wnylund/wills-workouts">Will's Weights Github</a>
        </Col>
        <Col>
          <h3>Will's Weights</h3>
          <p className='smaller-p'>I created a simple app that allows me to keep track of my lifts. By using this application, I can create workout for a specific date, add exercises and sets to that workout, and view all of my past workouts!</p>
          <a href="https://github.com/wnylund/wills-workouts">Will's Weights Github</a>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <h3>Costco Compass</h3>
          <p className='smaller-p'>This was an app I created to get more familiar with MySQL, as well as Python and Flask. This app allows users to create an account to find products at different costco locations. An admin of this app is able to view all tables of the store, including products, employees, categories, locations, and a few more!</p>
          <a href="https://github.com/wnylund/CostcoCompass">Costco Compass Github</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
