import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Img from "../../Assets/req.png";
import { useLocation, useNavigate } from "react-router-dom";

function Templates() {
  const location = useLocation();
  let navigate = useNavigate();
  const [req, setReq] = useState("");
  useEffect(() => {
    // alert(location.state.name)
    setReq(location.state.name);
  }, []);
  let action=()=>{
    navigate("/editor",{state:{"name":req}} )
  }
  return (
    <div>
      <Navbar />
      <h1>Templates</h1>
      <div style={{marginTop:"8px"}} className="row">
        <img style={{cursor:"pointer"}} onClick={action} src={Img} alt="req" />
        <img style={{cursor:"pointer"}} onClick={action} src={Img} alt="req" />
        <img style={{cursor:"pointer"}} onClick={action} src={Img} alt="req" />
      </div>
    </div>
  );
}

export default Templates;
