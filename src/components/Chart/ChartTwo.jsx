import React from "react";
import Chart from "react-apexcharts";

export default function ChartTwo({ title, color, options }) {
  return (
    <div className="w-full">
      <div id="chart">
        <Chart
          options={options}
          series={options?.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
