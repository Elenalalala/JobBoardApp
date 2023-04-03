import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSelected } from "./jobSlice";

function DropDown(props) {
  const list = props.dataSource;
  const dispatch = useDispatch();
  // console.log(list);
  const handleSelection = (item) => {
    dispatch(addSelected(item));
  };

  const listItem = list?.map((item) => {
    // console.log("item start" + item.occTitle);
    return (
      <div
        key={item.id}
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
      <ul>{listItem}</ul>
    </div>
  );
}

export default DropDown;
