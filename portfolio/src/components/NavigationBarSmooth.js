import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavigationBarSmooth = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand>Will Nylund</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link
            className="nav-link"
            to="experience"
            spy={true}
            smooth={true}
            duration={25}
          >
            Experience
          </Link>
          <Link
            className="nav-link"
            to="hobbies"
            spy={true}
            smooth={true}
            duration={25}
          >
            Hobbies
          </Link>
          <Link
            className="nav-link"
            to="projects"
            spy={true}
            smooth={true}
            duration={25}
          >
            Projects
          </Link>
          <Link
            className="nav-link"
            to="resume"
            spy={true}
            smooth={true}
            duration={25}
          >
            Resume
          </Link>
          <Link
            className="nav-link"
            to="contact"
            spy={true}
            smooth={true}
            duration={25}
          >
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBarSmooth;
