import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import ContactMe from "./ContactMe.jsx"

function Intro() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a 4thyear student at Ajay Kumar Garg Engineering College
              pursuing B.Tech in Computer Science.
              <br />
              <br />I am passionate about Web Development & Coding. I am
              proficient in Data Structure.
              <i>
                <p>
                  I have always been a problem solver be it in real life to ones
                  in coding platform, I have solved
                  <b className="purple"> 450+ questions </b> on different coding
                  platform like GFG,Leetcode,Hackerrank and codestudio.
                </p>
              </i>
              <br />
              <br />
              Have experience in CP & Managing event. I am trying to earn more
              knowledge & experience to help myself grow more. &nbsp;
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <ContactMe />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Intro;
