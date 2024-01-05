import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Swigoto from "../../assets/Projects/Swigoto.png";
import Showroom from "../../assets/Projects/Showroom.png";
import ToDo from "../../assets/Projects/To Do App.png";
import QuizApp from "../../assets/Projects/Quiz App.png";
import NewsApp from "../../assets/Projects/NewsApp1.png";
import Ecommerce from "../../assets/Projects/E-commerce1.png";
import RandomGIF from "../../assets/Projects/RandomGIF1.png";
import FoodApp from "../../assets/Projects/FoodApp1.png";

function Projects() {;
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Swigoto}
              title="Swigoto"
              description="Swigoto is a feature-rich food delivery web application designed to provide users with a seamless and convenient experience in ordering and enjoying their favorite meals from local restaurants."
              gitHub="https://github.com/Harsh-Sisodia857/Swigoto"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              title="Quiz Web Application"
              description="The Quiz Web Application is an interactive and dynamic platform designed to enhance learning through engaging quizzes"
              gitHub="https://github.com/Harsh-Sisodia857/React-Quiz-Web-App"
              HostedLink="https://quizappbyharsh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              title="TO-DO Web Application"
              description="The Todo Web Application is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to help users manage their tasks efficiently."
              gitHub="https://github.com/Harsh-Sisodia857/Todo-Web-App---MERN-Stack"
              HostedLink="https://todowebappbyharsh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Showroom}
              title="Showroom"
              description="It is a simple showroom web application build using React in which a user can search for desired cars available in the showroom"
              gitHub="https://github.com/Harsh-Sisodia857/ShowRoom"
              HostedLink="https://showroombyharsh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              title="E-commerce Web Application"
              description="E-commerce Web Application"
              gitHub="https://github.com/Harsh-Sisodia857/E-commerce-Website-using-MERN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewsApp}
              title="NewsMonkey"
              description="The NewsMonkey Web Application is built using React Js used to read the breaking news using News Api. There are Several Category Of News also Available, user can read the news based on their intrest."
              gitHub="https://github.com/Harsh-Sisodia857/NewsMonkey"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RandomGIF}
              title="Random GIF"
              description="This Application Generate Random GIFs using API and you can also provide text based on that text it will generate text."
              gitHub="https://github.com/Harsh-Sisodia857/Random-GIF-Genrator"
              HostedLink="https://randomgifgeneratorbyharsh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodApp}
              title="Food Delivery App"
              description="Swigoto is a feature-rich food delivery web application designed to provide users with a seamless and convenient experience in ordering and enjoying their favorite meals from local restaurants. Inspired by popular platforms like Swiggy and Zomato, Swigoto offers a user-friendly interface, robust features, and efficient food delivery services."
              gitHub="https://github.com/Harsh-Sisodia857/Swigoto"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
