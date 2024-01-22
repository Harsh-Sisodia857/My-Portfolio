import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useAlert } from "react-alert";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [roleOffered, setRoleOffered] = useState("");
  const [ctc, setCTC] = useState("");
  const [message, setMessage] = useState("");
  const alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !company || !roleOffered || !ctc) {
      alert.error("PLEASE FILL ALL THE REQUIRED FIELD");
      return;
    }

    // Checking for ctc :
    if (ctc <= 0) {
      alert.error("CTC CAN NOT BE NEGATIVE");
      return;
    }
    if (ctc < 3) {
      alert.error("CTC SHOULD BE GREATER THAN 3LPA");
      return;
    }

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
          ctc,
        }),
      });
      const res = await response.json();
      if (res.success) {
        alert.info("I will Reach Out to You Soon!");
        setName("");
        setEmail("");
        setCompany("");
        setRoleOffered("");
        setCTC("");
        setMessage("");
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
            Your Name<span className="required">*</span>:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              required
            />
          </label>
          <br />
          <label>
            Email<span className="required">*</span>:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </label>
          <br />
          <label>
            Company Name<span className="required">*</span>:
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="input-field"
              required
            />
          </label>
          <br />
          <label>
            Role Offered<span className="required">*</span>:
            <input
              type="text"
              value={roleOffered}
              onChange={(e) => setRoleOffered(e.target.value)}
              className="input-field"
              required
            />
          </label>
          <br />
          <label>
            CTC ( In LPA )<span className="required">*</span>:
            <input
              type="number"
              value={ctc}
              onChange={(e) => setCTC(e.target.value)}
              className="input-field"
              required
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
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
}

export default ContactForm;