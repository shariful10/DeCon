import React from "react";
import { useSelector } from "react-redux";
import Gauge from "../components/Gauge/Gauge";
import { useNavigate } from "react-router-dom";
import Charts from "../components/Chart/Chart";
import Button from "../components/utils/Button";
import ChartTwo from "../components/Chart/ChartTwo";
import Container from "../components/container/Container";

export default function ResultAndReport() {
  const navigate = useNavigate();
  const { buildingCoreTotalValue } = useSelector((state) => state.buildingCore);
  const { buildingShellTotalValue } = useSelector(
    (state) => state.buildingShell
  );

  const options = {
    series: [
      {
        name: "Core",
        data: [
          buildingCoreTotalValue["totalConnectionTypesScore"],
          buildingCoreTotalValue["connectionAccessibilityScore"],
          buildingCoreTotalValue["totalIndependencyScore"],
          buildingCoreTotalValue["totalGpeScore"],
          buildingCoreTotalValue["totalBarriersScore"],
        ],
        color: "#4472C4",
      },
      {
        name: "Shell",
        data: [
          buildingShellTotalValue["totalConnectionTypesScore"],
          buildingShellTotalValue["connectionAccessibilityScore"],
          buildingShellTotalValue["totalIndependencyScore"],
          buildingShellTotalValue["totalGpeScore"],
          buildingShellTotalValue["totalBarriersScore"],
        ],
        color: "#ED7D31",
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Connection type",
        "Connection Accessibility",
        "Independency",
        "Geometry of product edge",
        "Barriers",
      ],
    },

    fill: {
      opacity: 1,
    },
  };

  return (
    <Container>
      <div>
        <h1 className="text-center mb-7">
          Disassembly Potential of the Building’s core and shell
        </h1>
        <div className="flex items-start justify-between gap-7">
          <div className="w-1/2 flex flex-col items-start justify-between gap-7">
            <ChartTwo
              color="#F4B081"
              title="Disassembly potential of the core connections DPC based on the DfD criteria and barriers"
              options={options}
            />
            <Charts
              color="#4472C4"
              title="Disassembly potential of the core connections DPC"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <Gauge
              value={
                Number(
                  buildingCoreTotalValue.totalDPCOfBuildingCore +
                    buildingShellTotalValue.totalDPCOfBuildingCore
                ).toFixed(2) / 100
              }
              widthOne={300}
              widthTwo={362}
            />
            <p> Total disassembly potential </p>
            <div className="flex items-center gap-4 mt-5 -mr-5">
              <div onClick={() => navigate("/building-shell")}>
                <Button btnTitle="Previous" />
              </div>
              <div onClick={() => navigate("/report")}>
                <Button btnTitle="Download report" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
