
import ListCard from "../List/ListCard";
import { useState } from "react";

export default function AllCards() {
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const addClick = () => {
    let newList = cards.slice();
    setCount(count + 1);
    newList.push(count);

    return setCards(newList);
  };

  const removeClick = (index) => {
    let List = cards.slice();
    List.splice(cards[index], 1);

    // setCount(count -1);

    return setCards(List);
  };

  return (
    <div>
      <ul>
        {cards.map((card) => {
          
          return <ListCard key={card} remove={() => removeClick(card)} />;
        })}
      </ul>

      <div className="todo-card">
        <button onClick={addClick} className="create">
          Create
        </button>
      </div>
    </div>
  );
}
