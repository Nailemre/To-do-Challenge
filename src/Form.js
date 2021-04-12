import React from "react";


const Form = ({ onSubmit, value, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        placeholder="Planın nedir ? "
        id="todo"
        type="text"
      />
      <button type="text" className="button">
        Add
      </button>
    </form>
  );
};

export default Form;
