import React from "react";
import "./Navbar.css";
import Stack from "@mui/material/Stack";

function Navbar() {
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
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#services">Categories</a>
            </li>

            <li>
              <a href="#about">Contact</a>
            </li>
          </ul>
          <Stack
            direction="row"
            spacing={2}
            style={{ float: "right", padding: "13px" }}
          >
            <button className="btn1">Sign In</button>
            <button className="btn2">Sign Up</button>
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
            <a href="#services">Categories</a>
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
