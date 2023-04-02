import React from "react";
import AddJob from "./AddJob";

function Header() {
  return (
    <div className="header">
      <h1 className="title">Jobs Dashboard</h1>
      <AddJob />
    </div>
  );
}

export default Header;
