import React, { useState } from "react";
import DropDown from "./DropDown";
import "./SearchJob.css";

function SearchJob() {
  const [text, setText] = useState("");
  const [cards, setCards] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  async function searchForJob() {
    //if input isn't empty or null
    if (text) {
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
        console.log(data);
        setCards(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    }
    //make the dropdown menu visible
    setIsVisible(true);
  }

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="search_job">
      <div className="search_bar">
        <input
          className="search_job_input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Search Job"
        />
        {isVisible && <DropDown dataSource={cards} />}
      </div>
      <button className="search" onClick={searchForJob}>
        Search
      </button>
    </div>
  );
}

export default SearchJob;
