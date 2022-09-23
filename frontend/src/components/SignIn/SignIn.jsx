import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Signin.css";
import { GoogleLogin } from "@moeindana/google-oauth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  return (
    <div>
      <Navbar />
      <div className="fullscreen-containers">
        <div className="login-containers">
          <h1 className="logname">Login</h1>
          <form className="forms">
            <div className="input-groups">
              <input
                type="text"
                placeholder="Username"
                id="text"
                name="text"
                className="input-username"
              />
            </div>
            <div className="input-groups">
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="input-password"
              />
            </div>
          </form>
          <button type="button" className="btnlogin">
            Login
          </button>
          <div style={{ marginTop: "20px" }}>
            <GoogleLogin
              onSuccess={(response) => {
                setEmail(response.email);
                setUsername(response.name);
                // console.log(response);
                axios.post("http://127.0.0.1:8000/api/login/",
                {
                  username: username,
                  email: email,
                }).then((res) => {
                  navigate("/");
                  // console.log(res);
                }).catch((err) => {
                  alert("Login Failed");
                  console.log(err);
                });
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
