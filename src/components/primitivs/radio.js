import React from "react";

const Radio =(props)=>{
    return(
        <div className="input">
            <div className="input_name">{props.name}</div>
            <div><input placeholder={props.placeholder} type="radio"></input></div>
        </div>
    )
}
export default Radio;