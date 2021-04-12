import Form from "./Form";
import ListItem from "./ListItem";
import { useState } from "react";
import "./Form.scss";

 function Card() {
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
       <div className="wrapper">
        <div className="todo-card">
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
      </div>
    </>
  );
}
export default Card;