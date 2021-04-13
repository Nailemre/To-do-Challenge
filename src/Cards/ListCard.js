import React from "react";
import Card from "./Card";
const ListCard = ({ card, remove}) => {
  return (
    <div>
      <button onClick={remove} className="button">
        Sil
      </button>
     
      <Card key={card}/>
    </div>
  );
};

export default ListCard;
