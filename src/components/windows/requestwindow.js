import React from "react";
import Requestblock from "../constructions/requestblock";

const Requestwindow =(props)=>{
    let f =()=>{
        props.getdatarequest(props.choicerequest)
    }

    return(
        <div className="requestwindow">
            <div className="leblebutton">
                <div className="requestlable">Здесь будет информация о заявке</div>
                <button onClick={f}>Создать заявку</button>
            </div>
            <div>
                <Requestblock requests={props.requests} choice={props.choice} choicerequest={props.choicerequest}/>
            </div>
        </div>
    )
}

export default Requestwindow;