import ListCard from "../List/ListCard";
import { useState } from "react";
import "./AllCard.scss";

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
    <div className="parent">
      <div className="leftmenu">
        <div className="usercard">
          <img src="https://p.kindpng.com/picc/s/78-785827_user-profile-avatar-login-account-male-user-icon.png" alt="Avatar" className="avatar"></img>
          <div className="usercontainer">
            
              {JSON.parse(localStorage.getItem("myData")).firstName +' '+ JSON.parse(localStorage.getItem("myData")).secondName}
            
            
          </div>
        </div>
      </div>
      <div className="rightmenu">
        <ul>
          {cards.map((card) => {
            return <ListCard key={card} remove={() => removeClick(card)} />;
          })}
        </ul>

        <div className="todo-card">
          <button onClick={addClick} className="sag-ust side-btn">
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
}
