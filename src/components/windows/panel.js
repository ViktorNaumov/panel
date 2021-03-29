import React from "react";
import Nav from "./nav";
import Workspace from "./workspace";

const Panel = () => {
  return (
    <div className="border">
      <Nav />
      <Workspace />
    </div>
  );
};
export default Panel;
