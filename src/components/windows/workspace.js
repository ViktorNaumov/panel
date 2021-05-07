import React from "react";
import { Route } from "react-router";
import HoldwindContainer from "../../conteiners/holdwindContainer";
import RequestwindContainer from "../../conteiners/requestwindContainer";
import StockdwindContainer from "../../conteiners/stockwindContainer";
import PaymentForm from "../constructions/paymentform"
import Workbar from "../constructions/workbar";


const Workspace = () => {
  return (
    <div className="workspace">
      <div className="flexcol">
        <Workbar />
        <Route path="/handinput/holders" render={() => <HoldwindContainer />} />
        <Route path="/handinput/stock" render={() => <StockdwindContainer />} />
        <Route path="/orders/payment" render={() => < PaymentForm/>} />
        <Route path="/production/request" render={() => < RequestwindContainer/>} />
      </div>
    </div>
  );
};

export default Workspace;
