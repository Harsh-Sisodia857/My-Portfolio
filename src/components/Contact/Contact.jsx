import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAlert } from "react-alert";
import "./ContactForm.css"; 


function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [roleOffered, setRoleOffered] = useState("");
  const [message, setMessage] = useState("");
  const alert = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Company:", company);
    console.log("Role Offered:", roleOffered);
    console.log("Message:", message);
    alert.info("I will Reach Out to You Soon!");
    // You can add additional logic here, such as sending the form data to a server.
  };

  return (
    <Container className="contact-form-container">
      <div className="container2-0">
        <h2>Contact Me</h2>
        <hr />
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Company:
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Role Offered:
            <input
              type="text"
              value={roleOffered}
              onChange={(e) => setRoleOffered(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-field"
            />
          </label>
          <br />
          <button type="submit" onClick={handleSubmit} className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
}

export default ContactForm;