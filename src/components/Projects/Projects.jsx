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
import ShoppingSite from "../../assets/Projects/ShoppingSite1.png";
import TextUtils from "../../assets/Projects/TextUtils1.png";
import keepingSecret from "../../assets/Projects/keepingSecret.png";

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
              description={
                "Swigoto is a feature-rich food delivery web application designed to provide users with a seamless and convenient experience in ordering and enjoying their favorite meals from local restaurants.\n\n**Technology Used:**\n- REACT JS\n- REDUX\n- TAILWIND CSS\n- BOOTSTRAP\n- NODE JS\n- EXPRESS JS\n- MONGODB\n- CLOUDINARY\n- JWT FOR AUTHENTICATION"
              }
              gitHub="https://github.com/Harsh-Sisodia857/Swigoto"
              HostedLink="https://swigoto.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              title="Quiz Web Application"
              description={
                "The Quiz Web Application is an interactive and dynamic platform designed to enhance learning through engaging quizzes.\n\n**Technology Used:**\n- REACT JS\n- REDUX\n- TAILWIND CSS"
              }
              gitHub="https://github.com/Harsh-Sisodia857/React-Quiz-Web-App"
              HostedLink="https://quizappbyharsh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              title="TO-DO Web Application"
              description={
                "The Todo Web Application is a full-stack MERN application designed to help users manage their tasks efficiently.\n\n**Technology Used:**\n- REACT JS\n- REDUX\n- BOOTSTRAP\n- NODE JS\n- EXPRESS JS\n- MONGODB\n- JWT FOR AUTHENTICATION"
              }
              gitHub="https://github.com/Harsh-Sisodia857/Todo-Web-App---MERN-Stack"
              HostedLink="https://to-do-web-app-3wms.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keepingSecret}
              title="Keeping Secret"
              description={
                "The Keeping Secret Web Application is a full-stack MERN application designed to share the secret of a person without revealing its identity.A person is allowed to share a single secret to others while creating a Public Secret.It works like a diary For a Person.\n\n**Technology Used:**\n- REACT JS\n- BOOTSTRAP\n- NODE JS\n- EXPRESS JS\n- MONGODB ATLAS\n- JWT FOR AUTHENTICATION"
              }
              gitHub="https://github.com/Harsh-Sisodia857/Keeping-Secret"
              HostedLink="https://secret-o3ng.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Showroom}
              title="Showroom"
              description={
                "It is a simple showroom web application built using React in which a user can search for desired cars available in the showroom.\n\n**Technology Used:**\n- REACT JS\n- BOOTSTRAP"
              }
              gitHub="https://github.com/Harsh-Sisodia857/ShowRoom"
              HostedLink="https://showroombyharsh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              title="E-commerce Web Application"
              description={
                "E-commerce Web Application with a robust stack for seamless shopping experience.\n\n**Technology Used:**\n- REACT JS\n- REDUX\n- TAILWIND CSS\n- BOOTSTRAP\n- NODE JS\n- EXPRESS JS\n- MONGODB\n- CLOUDINARY\n- JWT FOR AUTHENTICATION"
              }
              gitHub="https://github.com/Harsh-Sisodia857/E-commerce-Website-using-MERN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewsApp}
              title="NewsMonkey"
              description={
                "The NewsMonkey Web Application is built using React Js for reading breaking news using News Api. Explore news based on several categories.\n\n**Technology Used:**\n- REACT JS\n- BOOTSTRAP\n- APIs"
              }
              gitHub="https://github.com/Harsh-Sisodia857/NewsMonkey"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RandomGIF}
              title="Random GIF"
              description={
                "Generate Random GIFs using API and provide text for generating text-based GIFs.\n\n**Technology Used:**\n- REACT JS\n- BOOTSTRAP"
              }
              gitHub="https://github.com/Harsh-Sisodia857/Random-GIF-Genrator"
              HostedLink="https://randomgifgeneratorbyharsh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextUtils}
              title="TextUtils"
              description={
                "A simple react web application for text analysis, including features like analyzing reading time, text conversion (uppercase, lowercase), and copying.\n\n**Technology Used:**\n- REACT JS\n- BOOTSTRAP"
              }
              gitHub="https://github.com/Harsh-Sisodia857/TextUtils"
              HostedLink="https://textutilsbyharshkumar.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShoppingSite}
              title="Shopping Site"
              description={
                "Explore a seamless and immersive shopping experience on a cutting-edge website crafted with React and powered by the efficiency of Redux Toolkit.\n\n**Technology Used:**\n- REACT JS\n- REDUX"
              }
              gitHub="https://github.com/Harsh-Sisodia857/Shopping-Website"
              HostedLink="https://shoppingsitebyharshkumar.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
