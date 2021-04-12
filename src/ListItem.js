import React from "react";
import "./Listitem.css";
const ListItem = ({ todo, remove }) => {
  return (
    <div>   
      <input type="checkbox"></input> 
      <label>{todo.name}</label>
      
      <button onClick={remove} classaName="button">
        Sil
      </button>
    </div>
  );
};

export default ListItem;
