import React from "react";
import data from "./JSON.json";
import { useNavigate } from "react-router-dom";

function List(props) {
  let navigate = useNavigate();
  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul >
      {filteredData.map((item) => (
        <li style={{margin:"5px",fontWeight:"bold"}} key={item.id}><a href="/templates">{item.text}</a></li>
      ))}
    </ul>
  );
}
export default List;
