import React from "react";
import { Col, Row } from "react-bootstrap";
import cppLogo from "../../assets/stack/cppLogo.png";
import jsLogo from "../../assets/stack/jsLogo.svg";
import nodejsLogo from "../../assets/stack/nodejsLogo.svg";
import reactLogo from "../../assets/stack/reactLogo.png";
import mongodbLogo from "../../assets/stack/mongodbLogo.svg";
import awsLogo from "../../assets/stack/awsLogo.jpg";
import gitLogo from "../../assets/stack/gitLogo.svg";
import pythonLogo from "../../assets/stack/pythonLogo.jpeg";
import Docker from "../../assets/stack/Docker.svg";
import k8 from "../../assets/stack/K8s.svg";
import netlify from "../../assets/stack/netlify.svg";
import HTMLLogo from "../../assets/stack/HTML.png";
import CSSLogo from "../../assets/stack/CSS.png";
import Bootstrap from "../../assets/stack/Bootstrap.svg";
import expressLogo from "../../assets/stack/Express.png";
import MaterialUI from "../../assets/stack/MaterialUI.svg";
import TailwindCSS from "../../assets/stack/Tailwind.png";
import Redux from "../../assets/stack/Redux.svg";
import SaaS from "../../assets/stack/Saas.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={HTMLLogo}
          alt="HTML"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={CSSLogo}
          alt="CSS"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={SaaS}
          alt="SAAS"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={Bootstrap}
          alt="CSS"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={MaterialUI}
          alt="CSS"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={TailwindCSS}
          alt="CSS"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={Redux}
          alt="CSS"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={cppLogo}
          alt="C++ Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={jsLogo}
          alt="JavaScript Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={nodejsLogo}
          alt="Node.js Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={reactLogo}
          alt="React Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={mongodbLogo}
          alt="MongoDB Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={expressLogo}
          alt="MongoDB Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={awsLogo}
          alt="AWS Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={gitLogo}
          alt="Git Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={pythonLogo}
          alt="Python Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={Docker}
          alt="Docker Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={k8}
          alt="Kubernetes Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={netlify}
          alt="Netlify Logo"
          style={{ width: "90px", transition: "all 0.5s" }}
        />
      </Col>
    </Row>
  );
}

export default Techstack;
