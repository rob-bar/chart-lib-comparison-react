import React from "react";
import FusionCharts from "fusioncharts";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";
import TreeMap from "fusioncharts/fusioncharts.treemap";
import { dataEightHoursForFusion } from "../data";

ReactFC.fcRoot(FusionCharts, PowerCharts, TreeMap, FusionTheme);

const TreeMapChart = () => {
  const dataSource = {
    type: "treemap",
    width: "1000",
    height: "560",
    dataFormat: "JSON",

    dataSource: {
      data: dataEightHoursForFusion,
      colorrange: {
        mapbypercent: "1",
        gradient: "1",
        minvalue: "0",
        code: "#F2726F",
        startlabel: "Decline",
        endlabel: "Rise",
        color: [
          {
            code: "#FFC533",
            maxvalue: "50",
            label: "Static",
          },
          {
            code: "#62B58F",
            maxvalue: "100",
            label: "AVERAGE",
          },
        ],
      },
      chart: {
        showNavigationBar: "1",
        showLegend: "1",
        caption: "Trader Joe’s Sales Team Performance Analysis",
        subcaption: "Year Till Date",
        legendcaption: "YoY Sales Growth",
        plottooltext: "<b>$label</b>",
        algorithm: "squarified",
        theme: "fusion",
      },
    },
  };

  return <ReactFC {...dataSource} />;
};

export default TreeMapChart;
