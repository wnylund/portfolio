import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';

import NavigationBarSmooth from './components/NavigationBarSmooth';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Seperator from './components/Seperator';



function App() {
  return (
    <div className="App">
      <NavigationBarSmooth />
      <Container className="App-head">
        <Row>
          <Col xs={12} md={6} className="pb-3 pb-md-0">
            <h1>Will Nylund</h1>
            <p>Hi! I'm Will and I am graduating from Virginia Tech in May 2023 with a Computer Science Degree!</p>
              <Resume />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-md-end align-items-center pb-3 pb-md-0">
            <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt="Your Name" width="500" />
          </Col>
        </Row>
      </Container>
      <Seperator></Seperator>
      <main role="main" className="container">
        <Row>
          <Col xs={12} md={6}>
            <Element name="experience">
              <Experience />
            </Element>
          </Col>
          <Col xs={12} md={6}>
            <Element name="hobbies">
              <Hobbies />
            </Element>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={{ span: 6, offset: 3 }}>
            <Element name="projects">
              <Projects />
            </Element>
          </Col>
        </Row>
      </main>
      <Seperator></Seperator>
      <Element name="resume">
              <Resume />
        </Element>
      <Row>
        <Element name="contact">
          <Contact />
        </Element>
      </Row>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Will Nylund. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App;
