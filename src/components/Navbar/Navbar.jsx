import React from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

function Navbar() {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
    },
  });
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
          <ThemeProvider theme={theme}>
            <Button variant="outlined">Sign In</Button>
            <Button color="secondary" variant="outlined">Sign Up</Button>
          </ThemeProvider>
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
    </div>
  );
}

export default Navbar;
