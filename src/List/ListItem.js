import React from "react";

const ListItem = ({ todo, remove }) => {
  return (
    <div>
      <ul>
        <li>
        <input type="checkbox"></input>
          {todo.name}
          <span className="close" onClick={remove}>&times;</span>
        </li>
      </ul>
    </div>
  );
};

export default ListItem;
