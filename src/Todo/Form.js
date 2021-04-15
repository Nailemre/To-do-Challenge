import React from "react";

const Form = ({ onSubmit, value, onChange, id }) => {
 
  return (
    
    <form onSubmit={onSubmit}>
     <input className="input-style"
      placeholder="Title" />
      <input
        className="input-style"
        onChange={onChange}
        value={value}
        placeholder="What is your plan ? "
        id={id}
        type="text"
        required
      />
      <button type="text" className="add-button">
        +
      </button>
    </form>
  );
};

export default Form;
