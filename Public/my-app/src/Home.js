import React from "react";
import JobList from "./JobList";
import Header from "./Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <JobList />
    </div>
  );
}

export default Home;
