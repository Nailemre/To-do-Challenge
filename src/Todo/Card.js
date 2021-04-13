import Form from "./";
import ListItem from "../List/ListItem";
import { useState } from "react";
import "./card.scss";

function Card(remove) {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      return alert("Bisey yazmadiniz, lutfen bisey yaziniz.");
    }

    const todoItems = todos;
    todoItems.splice(0, 0, { name: inputValue });
    setTodos(todoItems);
    setInputValue("");
  };

  const handleClick = (index) => {
    let newList = todos.slice();
    newList.splice(index, 1);
    return setTodos(newList);
  };

  return (
    <>
      <div className="todo-card">
      <button onClick={remove} className="delete">
        delete
      </button>
        <Form
          onSubmit={(event) => handleSubmit(event)}
          value={inputValue}
         
          onChange={(event) => setInputValue(event.target.value)}
        />
        
        <ul>
          {todos.map((todo, index) => {
            return (
              <ListItem
                key={index}
                todo={todo}
                remove={() => handleClick(index)}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Card;
