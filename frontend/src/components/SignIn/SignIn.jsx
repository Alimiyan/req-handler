import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Signin.css";
import { GoogleLogin } from "@moeindana/google-oauth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="fullscreen-containers">
        <div className="login-containers">
          <h1 className="logname">Login</h1>
         
          <div style={{ marginTop: "20px" }}>
            <GoogleLogin
              onSuccess={(response) => {
                // setEmail(response.email);
                // setUsername(response.name);
                console.log(response);
                axios.post("http://127.0.0.1:8000/api/login/",
                {
                  headers:{"Content-Type":"application/www-form-urlencoded"},
                  username: response.username,
                  email: response.email,
                }).then((res) => {
                  // console.log(res.data);
                  Cookies.set('id', res.data.id)
                  Cookies.set('name', res.data.username)
                  navigate("/");
                }).catch((err) => {
                  // alert("Login Failed", err);
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
