import React from "react";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";

// Register Chart.js components
Chart.register(Tooltip, Title, ArcElement, Legend);

function DoughnutChart({labels, values}) {
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: values,
        backgroundColor: [
          "#4A5567",
          "#E3E8EF",
          "#34D399",
          "#40CEFB",
          "#4070FB",
          "#1A1A1A",
          "#8A0E46",
          "#9ACCDB",
          "#D1DB9A",
          "#F4E61C"
        ],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
  };

  return (
    <>
      <div className="w-full h-full lg:w-[68%] my-10 flex justify-center">
        <Doughnut data={data} options={config} />
      </div>
    </>
  );
}

export default DoughnutChart;