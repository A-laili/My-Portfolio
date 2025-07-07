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
                <Form.Label style={{ color: "#be6adf" }}>Name</Form.Label>
                <Form.Control name="user_name" type="text" placeholder="Enter your name" required style={{ color: "#fff", background: "#222", borderColor: "#444" }} />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label style={{ color: "#be6adf" }}>Email address</Form.Label>
                <Form.Control name="user_email" type="email" placeholder="Enter your email" required style={{ color: "#fff", background: "#222", borderColor: "#444" }} />
              </Form.Group>
              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label style={{ color: "#be6adf" }}>Subject</Form.Label>
                <Form.Control name="subject" type="text" placeholder="Subject" required style={{ color: "#fff", background: "#222", borderColor: "#444" }} />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label style={{ color: "#be6adf" }}>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows={4} placeholder="Your message" required style={{ color: "#fff", background: "#222", borderColor: "#444" }} />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send A Message"}
              </Button>
            </Form>
            <div style={{ marginTop: "2rem", color: "#ccc" }}>
              <h4 style={{ color: "#be6adf" }}>Get in Touch</h4>
              <p>
                Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                <br />
                Simply fill the form and send me an email.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
