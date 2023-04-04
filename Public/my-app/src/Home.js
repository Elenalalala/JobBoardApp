import React from "react";
import JobList from "./JobSection/JobList";
import Header from "./Navigation/Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <JobList />
    </div>
  );
}

export default Home;
