import Form from "./Form";
import ListItem from "../List/ListItem";
import { useState } from "react";
import "./card.scss";

function Card(remove) {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
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
    </>
  );
}
export default Card;
