import React from "react";
import AddJob from "./AddJob";
import SearchJob from "./SearchJob";

function Header() {
  return (
    <div className="header">
      <h1 className="title">Jobs Dashboard</h1>
      <SearchJob />
      {/* <AddJob /> */}
    </div>
  );
}

export default Header;
