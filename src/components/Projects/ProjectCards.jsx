import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./Button.css"


function ProjectCards(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {showFullDescription
            ? props.description
            : props.description.length > 150
            ? `${props.description.substring(0, 150)}...`
            : props.description}
          {props.description.length > 150 && (
            <Button
              className="btn"
              onClick={toggleDescription}
            >
              {showFullDescription ? "Read Less" : "Read More"}
            </Button>
          )}
        </Card.Text>
        <Button variant="primary" href={props.gitHub} target="_blank">
          <BsGithub /> &nbsp; GitHub
        </Button>{" "}
        {props.HostedLink && (
          <Button
            variant="primary"
            href={props.HostedLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

<button class="button-87" role="button">Button 87</button>

