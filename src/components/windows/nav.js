import React from "react";
import NavItem from "../primitivs/navItem";
import {NavLink} from "react-router-dom"


const Nav =()=>{
    return (
        <div className="nav">
          <NavLink to ="/handinput"><NavItem name ="Ручной ввод"/></NavLink>
          
        </div>
    )
}

    export default Nav;