import React from "react";
import Chart from "react-apexcharts";
import { dataLineCart } from "../data";

const range = 2000;

const Load = dataLineCart
  .slice(0, range)
  .map((item) => [Date.parse(item["Date"]), item["Load"]]);

const Temperature = dataLineCart
  .slice(0, range)
  .map((item) => [Date.parse(item["Date"]), item["Temperature"]]);

const Cloudiness = dataLineCart
  .slice(0, range)
  .map((item) => [Date.parse(item["Date"]), item["Cloudiness"]]);

const Irradiation = dataLineCart
  .slice(0, range)
  .map((item) => [Date.parse(item["Date"]), item["Irradiation"]]);

const LineChart = () => {
  const data = {
    series: [
      {
        name: "Load",
        data: Load,
      },
      {
        name: "Temperature",
        data: Temperature,
      },
      {
        name: "Cloudiness",
        data: Cloudiness,
      },
      {
        name: "Irradiation",
        data: Irradiation,
      },
    ],
    options: {
      chart: {
        height: 600,
        type: "line",
        toolbar: {
          show: false,
        },
        animations: {
          enabled: false,
        },
      },
      colors: ["#5573F7", "#E65F39", "#02B57E", "#131A38"],
      stroke: {
        curve: "straight",
        width: 2,
      },
      zoom: {
        enabled: true,
        type: "x",
        autoScaleYaxis: false,
        zoomedArea: {
          fill: {
            color: "#90CAF9",
            opacity: 0.4,
          },
          stroke: {
            color: "#0D47A1",
            opacity: 0.4,
            width: 1,
          },
        },
      },
      title: {
        text: "Electricity load",
        align: "centre",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        type: "datetime",
        title: {
          text: "Time",
        },
      },
      yaxis: {},
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
    },
  };
  return (
    <Chart
      options={data.options}
      series={data.series}
      type="line"
      width="1500"
    />
  );
};

export default LineChart;
