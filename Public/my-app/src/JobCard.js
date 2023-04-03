import React from "react";

function JobCard(job) {
  console.log("jobCard recieved:", job);
  const jobInfo = job.props;
  return (
    <div className="job_card">
      <div className="job_description">
        <div className="job_name">Job Name: {jobInfo.occTitle}</div>
        <div className="annual_salary">Annual Salary:{jobInfo.amean} </div>
      </div>
      <div className="graph">graph is here</div>
    </div>
  );
}

export default JobCard;
