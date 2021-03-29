import React from "react";
import { Route } from "react-router";
import Workbar from "../constructions/workbar";
import Formwindow from "./formwindow";

const Workspace = () => {
  return (
    <div className="workspace">
      <div className="flexcol">
      <Route path="/handinput" render={() => <Workbar />}/> 
        <Formwindow />
      </div>
    </div>
  );
};

export default Workspace;
