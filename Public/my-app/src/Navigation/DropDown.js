import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSelected, addToList } from "../Data/jobSlice";
import "./DropDown.css";

function DropDown(props) {
  const list = props.dataSource;
  const dispatch = useDispatch();
  // console.log(list);
  const handleSelection = (item) => {
    dispatch(addSelected(item));
    dispatch(addToList());
  };

  const listItem = list?.map((item) => {
    // console.log("item start" + item.occTitle);

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
