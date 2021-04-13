// import Card from "./Cards/Card";
import ListCard from "./Cards/ListCard";
import { useState } from "react";


export default function App() {
  const [cards, setCards] = useState([]);

  const addClick = (index) => {
    let newList = cards.slice();
    newList.push(index);
    console.warn(newList)

    return setCards(newList);
  };

  const removeClick = (index) => {
    console.log(index);
    let List = cards.slice();
    List.splice(index, 1);
    
    return setCards(List);
  };

  return (
    <div>
      <ul>
        {cards.map((card, index) => {
          return (
            <ListCard
              key={index}
              card={card}
              remove={() => removeClick(index)}
            />
          );
        })}
      </ul>
      
        <div className="todo-card">
          <button onClick={addClick} className="ekle" >
            Ekle
          </button>
        </div>
     
    </div>
  );
}
