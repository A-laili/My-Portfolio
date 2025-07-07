import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="project"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                Projects
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="resume"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                Contact Me
              </ScrollLink>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href=""
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
