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

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const response = await fetch("http://localhost:4000/api/formData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            company,
            roleOffered,
            message,
          }),
        });

        if (response.ok) {
          console.log("Form data submitted successfully!");
          alert.info("I will Reach Out to You Soon!");
        } else {
          console.error("Error submitting form data:", response.statusText);
          alert.error("Error submitting form. Please try again later.");
        }
    } catch (error) {
        console.error("Error submitting form data:", error);
        alert.error("Error submitting form. Please try again later.");
    }
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