import React from "react";
import Chart from "react-apexcharts";
import { dataEightHours } from "../data";

const ApexTreeMap = () => {
  const data = {
    series: dataEightHours,
    options: {
      legend: {
        // show: true,
      },
      chart: {
        height: 350,
        type: "treemap",
      },
      title: {
        text: "Multidimensional Treemap",
      },
    },
  };
  return (
    <Chart
      options={data.options}
      series={data.series}
      type="treemap"
      height={650}
      width={400}
    />
  );
};

export default ApexTreeMap;
