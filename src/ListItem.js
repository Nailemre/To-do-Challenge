import React from "react";
import "./Cards/card.scss";
// import Card from "./Card"
const ListItem = ({ todo, remove }) => {
  return (
    <div>   
       
      
      <label><input type="checkbox"></input>  {todo.name}</label>
      
      <button onClick={remove} className="button">
        Sil
      </button>
    </div>
  );
};

export default ListItem;
