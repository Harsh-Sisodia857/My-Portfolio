import React, { useState } from "react";
import axios from "axios";

const UpdateResume = () => {
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  const handleUpdateResume = async () => {
    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);

      await axios.post("http://localhost:4000/api/updateResume", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: {
          username: localStorage.getItem("username"),
          token : localStorage.getItem("auth-token")
        }
      });

      alert("Resume updated successfully");
    } catch (error) {
      console.error("Error updating resume:", error);
      alert("Error updating resume");
    }
  };


  return (
    <div style={{ height: "100vh", color: "white" }}>
      <div style={{display : "flex", flexDirection : "column",alignItems : "center",justifyContent : "center"}}>
        <h1 style={{marginTop : "20px"}}>Update Resume</h1>
        <input type="file" style={{ width: "20%"}} onChange={handleFileChange} />
        <button onClick={handleUpdateResume}>Update Resume</button>
      </div>
    </div>
  );
};

export default UpdateResume;
