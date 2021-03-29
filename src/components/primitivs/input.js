import React from "react";

const Input = ({ input, meta, ...props }) => {
    debugger
  return (
    <div className="input">
      <div className="input_name">{props.lable}</div>
      <div>
        <input placeholder={props.placeholder} {...input} {...props}></input>
      </div>
    </div>
  );
};
export default Input;
