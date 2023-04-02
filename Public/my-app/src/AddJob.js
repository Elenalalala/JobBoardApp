import React from "react";

function AddJob() {
  const addJobCard = () => {};
  return (
    <div className="add_job">
      <button className="add" onClick={addJobCard}>
        {" "}
        + Add New Job
      </button>
    </div>
  );
}

export default AddJob;
