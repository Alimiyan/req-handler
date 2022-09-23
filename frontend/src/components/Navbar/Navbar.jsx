import React from "react";
import "./Navbar.css";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Navbar() {
  const [user, setUser] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("id")) {
      setUser(Cookies.get("name"));
    } else {
      setUser("");
    }
  }, []);
  return (
    <div>
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <nav id="navbar" className>
        <div className="nav-wrapper">
          {/* <div className="logo">
            <a href="#home">
              <i className="fa fa-angellist" /> Logo
            </a>
          </div> */}
          <ul id="menu">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/categories">Categories</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <Stack
            direction="row"
            spacing={2}
            style={{ float: "right", padding: "13px" }}
          >
            {user != "" ? (
              <div>
                <button
                style={{marginRight:"10px"}}
                  className="btn1"
                >
                  {user}
                </button>
                <button
                  onClick={() => {
                    if (user != "") {
                      Cookies.remove("name");
                      Cookies.remove("id");
                      setUser("");
                      alert("Logout Success");
                    } else {
                      alert("You are not logged in");
                    }
                    navigate("/signin");
                  }}
                  className="btn2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => {
                    navigate("/signin");
                  }}
                  className="btn1"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className="btn2"
                  style={{ marginLeft: "10px" }}
                >
                  Sign Up
                </button>
              </div>
            )}
          </Stack>
        </div>
      </nav>
      <div className="menuIcon">
        <span className="icon icon-bars" />
        <span className="icon icon-bars overlay" />
      </div>
      <div className="overlay-menu">
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
