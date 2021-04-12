import React from "react";
const ListCard = ({ todo, remove }) => {
  return (
    <div>   
        <button onClick={remove} classaName="button">
        Sil
      </button>
      <label>{todo.name}</label>
      
      
    </div>
  );
};

export default ListCard;
