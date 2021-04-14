import React from "react";
import Card from "../Todo/Card";
const ListCard = ({ card, remove }) => {
  return (
    <div className="todo-card">
      <button onClick={remove} className="close-card remove-style">
        X
      </button>
      <Card key={card} remove={remove}></Card>
    </div>
  );
};

export default ListCard;
