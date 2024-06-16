import React from "react";
import Chart from "react-apexcharts";

export default function Charts({ title, color, data }) {
  const series = [
    {
      name: "Actual",
      data: data,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    colors: [color],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: [title],
    },
  };
  return (
    <div className="w-full">
      <div id="chart">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
