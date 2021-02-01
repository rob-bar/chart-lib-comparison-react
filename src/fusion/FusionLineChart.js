import React from "react";
import ReactFC from "react-fusioncharts";
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
import FusionCharts from "fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { dataLineCart } from "../data";

const FusionLineChart = () => {
  const schema = [
    {
      name: "Time",
      type: "date",
      format: "%Y-%m-%d %H:%M:%S",
    },
    {
      name: "Type",
      type: "string",
    },
    {
      name: "Value",
      type: "number",
    },
  ];

  const all = dataLineCart.flatMap((item) => [
    [item["Date"], "Load", item["Load"]],
    [item["Date"], "Temperature", item["Temperature"]],
    [item["Date"], "Cloudiness", item["Cloudiness"]],
    [item["Date"], "Irradiation", item["Irradiation"]],
  ]);

  const chartConfigs = {
    type: "timeseries",
    width: "1400",
    height: "800",
    chart: {
      theme: "fusion",
    },

    dataSource: {
      series: "Type",
      data: new FusionCharts.DataStore().createDataTable(all, schema),
    },
    caption: {
      text: "Sales Analysis",
    },
    subcaption: {
      text: "Grocery",
    },

    yaxis: [
      {
        plot: {
          value: "Grocery Sales Value",
        },
        format: {
          prefix: "$",
        },
        title: "Sale Value",
      },
    ],
  };
  console.log(chartConfigs);
  ReactFC.fcRoot(FusionCharts, TimeSeries, FusionTheme);

  return <ReactFC {...chartConfigs} />;
};

export default FusionLineChart;
