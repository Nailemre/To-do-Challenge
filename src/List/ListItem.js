import React from "react";


const ListItem = ({ todo, remove }) => {
  return (
    <div>
      <label>
        <input type="checkbox"></input> {todo.name}
      </label>

      <button onClick={remove} className="button">
        Sil
      </button>
    </div>
  );
};

export default ListItem;
