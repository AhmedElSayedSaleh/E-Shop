import React from "react";

function Input(props) {
  return (
    <input
      className="main-input"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required={props.required}
    />
  );
}

export default Input;
