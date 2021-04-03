import React from "react";
import { Route } from "react-router";
import HoldwindContainer from "../../conteiners/holdwindContainer";
import StockdwindContainer from "../../conteiners/stockwindContainer";
import Workbar from "../constructions/workbar";


const Workspace = () => {
  return (
    <div className="workspace">
      <div className="flexcol">
      <Route path="/handinput" render={() => <Workbar />}/> 
      <Route path="/handinput/holders" render={()=> <HoldwindContainer />} />
      <Route path="/handinput/stock" render={()=><StockdwindContainer/> } />
      </div>
    </div>
  );
};

export default Workspace;
