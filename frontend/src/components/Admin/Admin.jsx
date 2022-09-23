import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const validate = () => {
    if (username === "admin" && password === "admin") {
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Login Failed");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="fullscreen-containers">
        <div className="login-containers">
          <h1 className="logname">Admin Login</h1>
          <form className="forms">
            <div className="input-groups">
              <input
                type="text"
                placeholder="Username"
                id="text"
                name="text"
                className="input-username"
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className="input-groups">
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="input-password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
          </form>
          <button type="button" className="btnlogin" onClick={validate}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
