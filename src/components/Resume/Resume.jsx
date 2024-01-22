import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { useNavigate } from "react-router-dom";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import axios from "axios";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [resumeUrl, setResumeUrl] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    setWidth(window.innerWidth);
        const fetchResumeUrl = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/getResume", {
          responseType: "arraybuffer",
        });

        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setResumeUrl(url);
      } catch (error) {
        console.error("Error fetching resume:", error);
      }
    };

    fetchResumeUrl();
  }, []);
  const handleChangeResume = () => {
     navigate("/login");
  }
  console.log(resumeUrl)
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeUrl}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <Button
            variant="primary"
            style={{ maxWidth: "250px" }}
            onClick={handleChangeResume}
          >
            <AiOutlineDownload />
            &nbsp;Update CV
          </Button>
        </Row>

        <Row className="resume">
          {resumeUrl && (
            <Document
              file={resumeUrl}
              className="d-flex justify-content-center"
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
