import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { useState } from "react";
import List from "../List/List";
import Stack from "@mui/material/Stack";

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
        <textarea className="txtar" placeholder="Search for templates here!"
        onChange={inputHandler}
        />
      <button className="btn2">Search</button>
      </div>
      <List input={inputText}/>
    </div>
  );
}

export default Home;
