import React from "react";
import Requestblock from "../constructions/requestblock";

const Requestwindow =()=>{

    return(
        <div className="requestwindow">
            <div className="leblebutton">
                <div className="requestlable">Здесь будет информация о заявке</div>
                <button>Создать заявку</button>
            </div>
            <div>
                <Requestblock/>
            </div>
        </div>
    )
}

export default Requestwindow;