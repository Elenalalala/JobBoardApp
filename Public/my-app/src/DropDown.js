import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function DropDown(props) {
  const list = props.dataSource;
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  console.log(list);
  const handleSelection = () => {
    setIsChecked(!isChecked);
  };

  const listItem = list?.map((item) => {
    return (
      <input
        type="checkbox"
        checked={isChecked}
        value={item.occTitle}
        onChange={handleSelection}
      />
    );
  });
  return (
    <div className="drop_down">
      <ul>{listItem}</ul>
    </div>
  );
}

export default DropDown;
