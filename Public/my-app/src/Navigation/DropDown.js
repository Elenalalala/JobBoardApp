import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSelected, addToList } from "../Data/jobSlice";
import "./DropDown.css";
import OutsideAlerter from "./OutsideAlerter";

function DropDown(props) {
  const list = props.dataSource;
  const dispatch = useDispatch();

  //update redux store with new selection
  const handleSelection = (item) => {
    dispatch(addSelected(item));
    dispatch(addToList());
  };

  //populate job cards base on what's selected
  const listItem = list?.map((item) => {
    return (
      <div
        key={item.id}
        className="job_card_item"
        name={item.occTitle}
        onClick={(e) => {
          handleSelection(item);
        }}
      >
        {item.occTitle}
      </div>
    );
  });
  return (
    <div className="drop_down">
      <ul className="job_card_list">
        {listItem.length != 0 ? listItem : <div>NotFound</div>}
      </ul>
    </div>
  );
}

export default DropDown;
