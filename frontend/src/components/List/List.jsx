import React, { useState } from "react";
import data from "./JSON.json";
import { useNavigate } from "react-router-dom";

function List(props) {
  const [req, setReq] = useState("");
  let navigate = useNavigate();
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "" && props.pg === "home") {
      return "";
    } else if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <div>
          <li
            style={{ margin: "5px", fontWeight: "bold" }}
            key={item.id}
            onClick={() => {
              console.log("clicked");
            }}
          >
            <button
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={() => {
                setReq(item.text);
                navigate("/templates", {state:{"name":item.text}});
                // alert(req)
              }}
            >
              {item.text}
            </button>
          </li>
        </div>
      ))}
    </ul>
  );
}
export default List;
