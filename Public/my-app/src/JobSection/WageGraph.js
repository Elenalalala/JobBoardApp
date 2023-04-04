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
  const jobInfo = job.props;
  const mediumFiveYears = [jobInfo.amedian];
  const pct25FiveYears = [jobInfo.apct25];
  for (let i = 1; i < 5; i++) {
    let nextYear = mediumFiveYears[i - 1] * 1.03;
    let nextYearpct = pct25FiveYears[i - 1] * 1.03;
    mediumFiveYears.push(nextYear);
    pct25FiveYears.push(nextYearpct);
  }
  const labels = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];
  let data = {
    labels,
    datasets: [
      {
        label: "Annual Median",
        data: mediumFiveYears,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Annual 25th Percentile",
        data: pct25FiveYears,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192, 0.5)",
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
