import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import List from "../List/List";

function Home() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="main">
      <Navbar />
      <h1 className="hm">The quickest way to write a request letter</h1>
      <div className="search">
        <textarea className="txtar" placeholder="Type your request here"
        onChange={inputHandler}
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default Home;
