import React from "react";

const Select = ({ input, meta, ...props }) => {
  let option = props.arr.map((o) => <option key={o.index}>{o}</option>);
  return (
    <div className="select">
      {/* <div className="flexrow"> */}
        <div className="select_name">{input.name}</div>
        <div>
          <select placeholder={props.placeholder} {...input} {...props}>
            <option></option>
            {option}
          </select>
        </div>
      {/* </div> */}
    </div>
  );
};
export default Select;
