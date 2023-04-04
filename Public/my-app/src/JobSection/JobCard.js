import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromList } from "../Data/jobSlice";
import WageGraph from "./WageGraph";
import "./JobCard.css";

function JobCard(job) {
  console.log("jobCard recieved:", job);
  const jobInfo = job.props;
  console.log("jobInfo passsssss recieved:", jobInfo);
  const dispatch = useDispatch();

  const handleRemove = (removedJob) => {
    console.log("removing object: ", removedJob);
    dispatch(deleteFromList(removedJob));
  };

  return (
    <div className="job_card">
      <div className="job_description">
        <button
          className="remove_job"
          onClick={(e) => {
            console.log("handleRemoved:", jobInfo);
            handleRemove(jobInfo);
          }}
        >
          Delete X
        </button>
        <div className="job_info_container">
          <div className="job_name">
            <div className="job_name_header">Job Name</div>
            <div className="job_title">{jobInfo.occTitle}</div>
          </div>
          <div className="annual_salary">
            <div className="annual_salary_header">Average Annual Salary</div>
            <div className="amean">${jobInfo.amean}</div>
          </div>
        </div>
      </div>
      {/* <div className="graph">graph is here</div> */}
      <WageGraph props={jobInfo}></WageGraph>
    </div>
  );
}

export default JobCard;
