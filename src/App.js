// import Card from "./Cards/Card";
import ListCard from "./Cards/ListCard";
import { useState } from "react";


export default function App() {
  
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const addClick = () => {
    let newList = cards.slice();
    setCount(count + 1);
    newList.push(count);
   
    console.log(newList)
    return setCards(newList);
  };

  const removeClick = (index) => {
    
    let List = cards.slice();
    List.splice(cards[index], 1);
    console.log(List)
   // setCount(count -1);
    
    return setCards(List);
  };

  return (
    <div>
      <ul>
        {cards.map((card, index) => {
          console.log(card)
          return (
            <ListCard
            
              key={card}
              
              remove={() => removeClick(card)}
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
