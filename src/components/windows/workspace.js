import React from "react";
import { Route } from "react-router";
import Workbar from "../constructions/workbar";
import Holderswindow from "./holderswindow";

const Workspace = () => {
  return (
    <div className="workspace">
      <div className="flexcol">
      <Route path="/handinput" render={() => <Workbar />}/> 
      <Route path="/handinput/holders" render={()=> <Holderswindow />} />

      </div>
    </div>
  );
};

export default Workspace;
