import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

const BarChart = () => {
  const chartData = [
    {
      label: "Venezuela",
      value: "290",
    },
    {
      label: "Saudi",
      value: "260",
    },
    {
      label: "Canada",
      value: "180",
    },
    {
      label: "Iran",
      value: "140",
    },
    {
      label: "Russia",
      value: "115",
    },
    {
      label: "UAE",
      value: "100",
    },
    {
      label: "US",
      value: "30",
    },
    {
      label: "China",
      value: "30",
    },
  ];
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "1000", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
        subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
        xAxisName: "Country", //Set the x-axis name
        yAxisName: "Reserves (MMbbl)", //Set the y-axis name
        numberSuffix: "K",
        theme: "fusion", //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: chartData,
    },
  };

  ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

  return <ReactFC {...chartConfigs} />;
};

export default BarChart;
