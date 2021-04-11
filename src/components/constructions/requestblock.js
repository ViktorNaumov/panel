// import React from "react";

const Requestblock = (props) => {
  

  const requests = props.requests.map((r) => (
    <div className="requestblock">
        <div className="idblock">Заявка № {r.id}</div>
        <div className="startblock">Начало {r.start_time}</div>
        <div className="finishblock">Окончание {r.finish_time}</div>
        <div className="summblock">Сумма отгрузки {r.summ} рублей</div>
    </div>
  ));
  return  requests 
};

export default Requestblock;
