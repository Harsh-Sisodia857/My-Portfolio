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
              description="Swigoto is a feature-rich food delivery web application designed to provide users with a seamless and convenient experience in ordering and enjoying their favorite meals from local restaurants.**Technology Used** : REACT JS, REDUX, TAILWIND CSS, BOOTSTRAP, NODE JS, EXPRESS JS, MONGODB, CLOUDINARY, JWT FOR AUTHENTICATION
              "
              gitHub="https://github.com/Harsh-Sisodia857/Swigoto"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              title="Quiz Web Application"
              description="The Quiz Web Application is an interactive and dynamic platform designed to enhance learning through engaging quizzes **Technology Used** : REACT JS, REDUX, TAILWIND CSS"
              gitHub="https://github.com/Harsh-Sisodia857/React-Quiz-Web-App"
              HostedLink="https://quizappbyharsh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              title="TO-DO Web Application"
              description="The Todo Web Application is a full-stack MERN application designed to help users manage their tasks efficiently.**Technology Used** : REACT JS, REDUX, BOOTSTRAP, NODE JS, EXPRESS JS, MONGODB, JWT FOR AUTHENTICATION"
              gitHub="https://github.com/Harsh-Sisodia857/Todo-Web-App---MERN-Stack"
              HostedLink="https://todowebappbyharsh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Showroom}
              title="Showroom"
              description="It is a simple showroom web application build using React in which a user can search for desired cars available in the showroom.**Technology Used** : REACT JS AND BOOTSTRAP"
              gitHub="https://github.com/Harsh-Sisodia857/ShowRoom"
              HostedLink="https://showroombyharsh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              title="E-commerce Web Application.**Technology Used** : REACT JS, REDUX, TAILWIND CSS, BOOTSTRAP, NODE JS, EXPRESS JS, MONGODB, CLOUDINARY, JWT FOR AUTHENTICATION"
              description="E-commerce Web Application"
              gitHub="https://github.com/Harsh-Sisodia857/E-commerce-Website-using-MERN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewsApp}
              title="NewsMonkey"
              description="The NewsMonkey Web Application is built using React Js used to read the breaking news using News Api. There are Several Category Of News also Available, user can read the news based on their intrest.**Technology Used** : REACT JS,BOOTSTRAP, APIs"
              gitHub="https://github.com/Harsh-Sisodia857/NewsMonkey"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RandomGIF}
              title="Random GIF"
              description="This Application Generate Random GIFs using API and you can also provide text based on that text it will generate text.**Technology Used** : REACT JS, BOOTSTRAP"
              gitHub="https://github.com/Harsh-Sisodia857/Random-GIF-Genrator"
              HostedLink="https://randomgifgeneratorbyharsh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextUtils}
              title="TextUtils"
              description="This is a simple react web application which is used to analyze the text like analyzing that how much time it will take to read the whole text entered and also perform some operation on text like converting to Uppercase, Lowercase, copying it.**Technology Used** : REACT JS AND BOOTSTRAP"
              gitHub="https://github.com/Harsh-Sisodia857/TextUtils"
              HostedLink="https://textutilsbyharshkumar.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShoppingSite}
              title="Shopping Site"
              description="Explore a seamless and immersive shopping experience on our cutting-edge website crafted with React and powered by the efficiency of Redux Toolkit. Discover a wide array of products,With the robust state management provided by Redux Toolkit, we've optimized the application for speed and responsiveness, allowing you to effortlessly browse, add items.**Technology Used** : REACT JS AND REDUX"
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
