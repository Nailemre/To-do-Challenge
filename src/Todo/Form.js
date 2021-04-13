import React from "react";


const Form = ({ onSubmit, value, onChange,id }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        placeholder="Planın nedir ? "
        id={id}
        type="text"
      />
      <button type="text" className="button">
        Add
      </button>
    </form>
  );
};

export default Form;
