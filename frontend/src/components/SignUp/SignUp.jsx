import React from "react";
import Navbar from "../Navbar/Navbar";
import { GoogleLogin } from "@moeindana/google-oauth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function SignUp() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const validate = () => {
    axios
      .post("http://127.0.0.1:8000/api/signup/", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        // console.log(res.data);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
    // alert(email);
  };
  return (
    <div>
      <Navbar />
      <div className="fullscreen-containers">
        <div className="login-containers">
          <h1 className="logname">Sign Up</h1>

          <div style={{ marginTop: "20px" }}>
            <GoogleLogin
              onSuccess={(response) => {
                setEmail(response.email);
                setUsername(response.name);
                // console.log(response);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          <button type="button" className="btnlogin" onClick={validate}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
