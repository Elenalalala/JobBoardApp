import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import "./SearchJob.css";
import OutsideAlerter from "./OutsideAlerter";
import { useDispatch, useSelector } from "react-redux";
import { addToList, toggleDropDown } from "../Data/jobSlice";

function SearchJob() {
  const [text, setText] = useState("");
  const [cards, setCards] = useState([]);
  const isVisible = useSelector(
    (state) => state.jobCollection.dropDownIsVisible
  );
  const dispatch = useDispatch();

  async function searchForJob() {
    //if input isn't empty or null
    if (text) {
      // //reset the card to prevent adds-on
      // setCards([]);
      //send http request to get the jobs with input title
      try {
        const response = await fetch(
          `http://localhost:8080/jobs/name/${text}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Recieve data from:", data);
        setCards(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    }
    //make the dropdown menu visible
    dispatch(toggleDropDown(true));
  }

  const handleInputChange = (event) => {
    setText(event.target.value);
    searchForJob();
  };
  const handleInputClick = (event) => {
    dispatch(toggleDropDown(true));
  };

  const handlePressEnter = (event) => {
    if (event.key === "Enter") {
      searchForJob();
    }
  };
  useEffect(() => {}, [isVisible]);

  return (
    <div className="search_job">
      <div className="search_bar">
        <input
          className="search_job_input"
          type="text"
          value={text}
          onChange={handleInputChange}
          onClick={handleInputClick}
          onKeyDown={handlePressEnter}
          placeholder="Search Job"
        />
        {isVisible && (
          <OutsideAlerter>
            <DropDown dataSource={cards} />
          </OutsideAlerter>
        )}
      </div>
      <button className="search" onClick={searchForJob}>
        Search
      </button>
    </div>
  );
}

export default SearchJob;
