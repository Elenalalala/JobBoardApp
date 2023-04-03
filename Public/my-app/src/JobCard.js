import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromList } from "./jobSlice";
import WageGraph from "./WageGraph";

function JobCard(job) {
  console.log("jobCard recieved:", job);
  const jobInfo = job.props;

  const dispatch = useDispatch();

  const handleRemove = (removedJob) => {
    console.log("removing object: ", removedJob);
    dispatch(deleteFromList(removedJob));
  };

  return (
    <div className="job_card">
      <div className="job_description">
        <div className="job_name">Job Name: {jobInfo.occTitle}</div>
        <div className="annual_salary">Annual Salary:{jobInfo.amean} </div>
      </div>
      <div className="graph">graph is here</div>
      <button
        className="remove_job"
        onClick={(e) => {
          console.log("handleRemoved:", jobInfo);
          handleRemove(jobInfo);
        }}
      >
        Delete X
      </button>
      <WageGraph></WageGraph>
    </div>
  );
}

export default JobCard;
