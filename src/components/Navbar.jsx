import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai"; 
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import "../style.css";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="sticky">
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img
            src={logo}
            className="logo"
            alt="brand"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <AiOutlineMenu size={24} style={{color : "orange"}} />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav" expanded={expanded}>
          <Nav className="ms-auto nav-box" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => setExpanded(false)}
              >
                <BsFillTelephoneOutboundFill style={{ marginBottom: "2px" }} />
                <span style={{ marginLeft: "8px" }}>Contact Me</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
