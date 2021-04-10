import React from "react";
import { NavLink, Route } from "react-router-dom";
import BarItem from "../primitivs/barItem";

const Workbar = () => {
  return (
    <div className="workbar">
      <Route
        path="/handinput"
        render={() => (
          <NavLink to="/handinput/stock">
            <BarItem name="Склад" />
          </NavLink>
        )}
      />

      <Route
        path="/handinput"
        render={() => (
          <NavLink to="/handinput/holders">
            <BarItem name="Параметры" />
          </NavLink>
        )}
      />
      <Route
        path="/orders"
        render={() => (
          <NavLink to="/orders/list">
            <BarItem name="Список" />
          </NavLink>
        )}
      />
      <Route
        path="/orders"
        render={() => (
          <NavLink to="/orders/payment">
            <BarItem name="Оплата" />
          </NavLink>
        )}
      />
      <Route
        path="/production"
        render={() => (
          <NavLink to="/production/request">
            <BarItem name="Создать заявку" />
          </NavLink>
        )}
      />
    </div>
  );
};

export default Workbar;
