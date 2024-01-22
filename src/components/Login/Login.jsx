import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
        try {
      const response = await fetch("http://localhost:4000/api/myData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);
      localStorage.setItem("auth-token", data.token);
      localStorage.setItem("username",data.username)
      if (!data.error) {
        navigate("/updateResume");
      } else {
        alert(data.error || "Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login");
    }
  };


  return (
    <div className="login-container">
      <p>This Url Only For Me To Update My CV</p>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="inputBox">
            <label for="username">Username :</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <label>Password :</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
