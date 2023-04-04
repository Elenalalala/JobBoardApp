import React, { useState } from "react";
import "./WageGraph.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WageGraph(job) {
  //   const jobList = useSelector((state) => state.jobCollection.inList);
  const jobInfo = job.props;
  const fiveYears = [job.props.amean];
  for (let i = 1; i < 5; i++) {
    let nextYear = fiveYears[i - 1] * 1.03;
    fiveYears.push(nextYear);
  }
  const labels = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];
  let data = {
    labels,
    datasets: [
      {
        label: jobInfo.occTitle,
        data: fiveYears,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="wage_graph">
      <Line className="graph" data={data}></Line>
    </div>
  );
}

export default WageGraph;
