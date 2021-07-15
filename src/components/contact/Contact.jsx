import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "./Contact.css";
import Wave from "../../Data/images/wave5_up.svg";
const Contact = () => {
  return (
    <Container id="contact" fluid style={{ padding: "0px" }}>
      <img
        style={{
          zIndex: 10,
          position: "relative",
          backgroundColor: "#fff",
        }}
        src={Wave}
        alt="waveform"
      />
      <div className="contact-main">
        <div className="text-center p-2 ">
          <h2 style={{ fontFamily: "Zen Tokyo Zoo" }}>Contact Me</h2>
        </div>
        <div>
          <Form>
            <Row>
              <Col md={2}></Col>
              <Col md={3}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
              <Col md={3}>
                <Form.Control type="text" placeholder="Message" />
              </Col>
              <Col md={2}>
                <Button>submit </Button>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Form>
        </div>
      </div>
      <div style={{ backgroundColor: "#E2E0FF" }} className="text-center">
        made with ❤️ by vishal nagar
      </div>
    </Container>
  );
};

export default Contact;
