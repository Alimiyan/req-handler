import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Signin.css";
import { GoogleLogin } from "@moeindana/google-oauth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
                setName(response.name);
                console.log(response);
                navigate("/");
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
