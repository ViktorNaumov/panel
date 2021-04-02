import React from "react";
import { Route } from "react-router";
import Workbar from "../constructions/workbar";
import Holderswindow from "./holderswindow";
import Stockwindow from "./stockwindow"

const Workspace = () => {
  return (
    <div className="workspace">
      <div className="flexcol">
      <Route path="/handinput" render={() => <Workbar />}/> 
      <Route path="/handinput/holders" render={()=> <Holderswindow />} />
      <Route path="/handinput/stock" render={()=><Stockwindow/> } />
      </div>
    </div>
  );
};

export default Workspace;
