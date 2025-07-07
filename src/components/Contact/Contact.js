import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    emailjs
      .sendForm(
        "service_ipmgg4b", // replace with your EmailJS service ID
        "template_q9k6td7", // replace with your EmailJS template ID
        formRef.current,
        "kRihlOw586X7-BjSZ" // replace with your EmailJS user ID (public key)
      )
      .then(
        (result) => {
          setSent(true);
          setSending(false);
        },
        (error) => {
          setError("Failed to send message. Please try again later.");
          setSending(false);
        }
      );
  };

  return (
    <Container fluid className="contact-section" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="project-heading">
              <strong className="purple">Contact Me</strong>
            </h1>
            {sent && <Alert variant="success">Message sent successfully!</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control name="user_name" type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="user_email" type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
