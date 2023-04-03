import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToList } from "./jobSlice";

function AddJob() {
  const dispatch = useDispatch();
  const addJobCard = () => {
    dispatch(addToList());
  };
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
