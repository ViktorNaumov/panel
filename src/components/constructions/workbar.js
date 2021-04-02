import React from "react";
import { NavLink } from "react-router-dom";
import BarItem from "../primitivs/barItem";


const Workbar = () => {
  return (
    <div className="workbar">
      <NavLink to="/handinput/stock">
      <BarItem name="Склад" />
      </NavLink>
      <NavLink to="/handinput/holders">
        <BarItem name="Параметры" />
      </NavLink>
      
    </div>
  );
};

export default Workbar;
