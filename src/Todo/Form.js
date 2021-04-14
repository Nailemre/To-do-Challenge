import React from "react";

const Form = ({ onSubmit, value, onChange, id }) => {
 
  return (
    <form onSubmit={onSubmit}>
     
      <input
        className="input-style"
        onChange={onChange}
        value={value}
        placeholder="Planın nedir ? "
        id={id}
        type="text"
        required
      />
      <button type="text" className="button">
        +
      </button>
    </form>
  );
};

export default Form;
