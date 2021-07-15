import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";

const NavigarionBar = () => {
  return (
    <Container fluid>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        variant="light"
        bg="light"
      >
        <Navbar.Brand
          href="#"
          className="custom-logo"
        >{`< Vishal Nagar />`}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto ">
            <Nav.Link href="#about" className="custom-link">
              About
            </Nav.Link>
            <Nav.Link href="#tools" className="custom-link">
              Tools
            </Nav.Link>
            <Nav.Link href="#timeline" className="custom-link">
              Education
            </Nav.Link>
            <Nav.Link href="#projects" className="custom-link">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="custom-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigarionBar;
