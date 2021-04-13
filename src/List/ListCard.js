import React from "react";
import Card from "../Todo/Card";
const ListCard = ({ card, remove}) => {
  return (
    <div>     
      <button onClick={remove} className="delete">
        sil
      </button>
     
      <Card key={card} remove={remove}/>
    </div>
  );
};

export default ListCard;
