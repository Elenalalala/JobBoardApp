import React, { useState } from "react";
import DropDown from "./DropDown";

function SearchJob() {
  const [text, setText] = useState("");
  const [cards, setCards] = useState([]);

  async function searchForJob() {
    try {
      const response = await fetch(`http://localhost:8080/jobs/name/${text}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setCards([...cards, ...data]);
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  }

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="search_job">
      <input
        className="search_job_name"
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Search Job"
      />
      <button className="search" onClick={searchForJob}>
        Search
      </button>
      <DropDown dataSource={cards} />
    </div>
  );
}

export default SearchJob;
