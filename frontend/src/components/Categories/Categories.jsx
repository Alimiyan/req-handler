import React, {useState} from "react";
import List from "../List/List";
import Navbar from "../Navbar/Navbar";

function Categories() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      <Navbar />
      <h1 style={{marginBottom:"60px"}}>Categories</h1>
      {/* <div className="search">
        <textarea className="txtar" placeholder="Search for templates here!"
        onChange={inputHandler}
        />
      <button className="btn2">Search</button> */}
      {/* </div> */}
      <List input={inputText}/>
    </div>
  );
}

export default Categories;
