import React from "react";
import { useSelector, useDispatch } from "react-redux";
import JobCard from "./JobCard";

function JobList() {
  const jobList = useSelector((state) => state.jobCollection.inList);
  const jobItem = jobList?.map((item) => {
    return <JobCard key={item.id} props={item} />;
  });
  return (
    <div className="job-list">
      <ul>{jobItem}</ul>
    </div>
  );
}

export default JobList;
