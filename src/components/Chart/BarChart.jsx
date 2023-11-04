import React from "react";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);

function BarChart({labels, values}) {
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "#4A5567",
          "#F4E61C",
          "#34D399",
          "#40CEFB",
          "#4070FB",
          "#1A1A1A",
          "#8A0E46",
          "#9ACCDB",
          "#D1DB9A",
          "#E3E8EF",
        ],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <div className="w-full h-full lg:w-[63%] my-10 flex justify-center">
      <Chart data={data} options={config} />
    </div>
  );
}

export default BarChart;
