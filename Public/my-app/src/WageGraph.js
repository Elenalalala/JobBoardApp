import React from "react";
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
function WageGraph() {
  const faker = [
    {
      title: "job1",
      amean: 2000,
    },
    {
      title: "job2",
      amean: 3000,
    },
    {
      title: "job2",
      amean: 3000,
    },
    {
      title: "job2",
      amean: 3000,
    },
    {
      title: "job2",
      amean: 3000,
    },
  ];
  const labels = [1, 2, 3, 4, 5];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: faker.map((data) => data.amean),
      },
    ],
  };
  return (
    <div className="wage_graph">
      <Line data={data}></Line>
    </div>
  );
}

export default WageGraph;
