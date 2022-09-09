import React from "react";
import Navbar from "../Navbar/Navbar";
import Img from "../../Assets/req.png";
import { useNavigate } from "react-router-dom";

function Templates() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <h1>Templates</h1>
      <div style={{marginTop:"8px"}} className="row">
        <img onClick={navigate()} src={Img} alt="req" />
        <img src={Img} alt="req" />
        <img src={Img} alt="req" />
      </div>
    </div>
  );
}

export default Templates;
