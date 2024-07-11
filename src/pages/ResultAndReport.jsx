import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Charts from "../components/Chart/Chart";
import ChartTwo from "../components/Chart/ChartTwo";
import Container from "../components/container/Container";
import Gauge from "../components/Gauge/Gauge";
import Button from "../components/utils/Button";

export default function ResultAndReport() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { buildingCoreTotalValue } = useSelector((state) => state.buildingCore);
  const { buildingShell, buildingShellTotalValue } = useSelector(
    (state) => state.buildingShell
  );

  // console.log("buildingShell =>", buildingShellTotalValue);
  console.log(
    "buildingShellTotalValue[totalConnectionTypesScore] ",
    buildingShellTotalValue["totalConnectionTypesScore"]
  );

  const CharOptionsOne = {
    series: [
      {
        name: "Core",
        data: [
          buildingCoreTotalValue["totalConnectionTypesScore"].toFixed(0) || 0,
          buildingCoreTotalValue["connectionAccessibilityScore"].toFixed(0) ||
            0,
          buildingCoreTotalValue["totalIndependencyScore"].toFixed(0) || 0,
          buildingCoreTotalValue["totalGpeScore"].toFixed(0) || 0,
          buildingCoreTotalValue["totalBarriersScore"].toFixed(0) || 0,
          10,
        ],
        dataLabels: {
          min: 0,
          max: 10,
        },
        color: "#4472C4",
      },
      {
        name: "Shell",
        data: [
          buildingShellTotalValue["totalConnectionTypesScore"].toFixed(0) || 0,
          buildingShellTotalValue["connectionAccessibilityScore"].toFixed(0) ||
            0,
          buildingShellTotalValue["totalIndependencyScore"].toFixed(0) || 0,
          buildingShellTotalValue["totalGpeScore"].toFixed(0) || 0,
          buildingShellTotalValue["totalBarriersScore"].toFixed(0) || 0,
          10,
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
      // categories
      categories: [
        "Connection type",
        "Connection Accessibility",
        "Independency",
        "Geometry of product edge",
        "Barriers",
      ],
    },
    yaxis: {
      labels: {
        max: 10,
        min: 0,
      },
    },
    fill: {
      opacity: 1,
    },
  };

  useEffect(() => {
    const { buildingCore } = buildingCoreTotalValue;

    setData([
      {
        x: "Column and beam",
        y: parseFloat(buildingCore?.columnAndBeamDPC)?.toFixed(0) || 0,
      },
      {
        x: "Column and slab",
        y: parseFloat(buildingCore?.columnAndSlabDPC)?.toFixed(0) || 0,
      },
      {
        x: "Column and bearing wall",
        y: parseFloat(buildingCore?.columnAndBearingWallDPC)?.toFixed(0) || 0,
      },
      {
        x: "Column and foundation",
        y: parseFloat(buildingCore?.columnAndFoundationDPC)?.toFixed(0) || 0,
      },
      {
        x: "Beam and slab",
        y: parseFloat(buildingCore?.beamAndSlabDPC)?.toFixed(0) || 0,
      },
      {
        x: "Beam and bearing wall",
        y: parseFloat(buildingCore?.slabAndBearingWallDPC)?.toFixed(0) || 0,
      },
      {
        x: "Column & Shell element",
        y: parseFloat(buildingShell?.columnAndShellElementDPC)?.toFixed(0) || 0,
      },
      {
        x: "Beam & Shell element",
        y: parseFloat(buildingShell?.beamAndShellElementDPC)?.toFixed(0) || 0,
      },
      {
        x: "Slab & Shell element",
        y: parseFloat(buildingShell?.slabAndShellElementDPC)?.toFixed(0) || 0,
      },
      {
        x: "Bearing wall & Shell element",
        y:
          parseFloat(buildingShell?.bearingWallAndShellElementDPC)?.toFixed(
            0
          ) || 0,
      },
    ]);
  }, [buildingCoreTotalValue?.buildingCore, buildingShell]);

  const totalConnections =
    buildingShellTotalValue.totalConnectionNumberScore +
    buildingCoreTotalValue.totalConnectionNumberScore;

  const totalDPC =
    buildingCoreTotalValue.totalDPCOfBuildingCore +
    buildingShellTotalValue.totalDPCOfBuildingCore;

  const DPBCS = totalDPC / totalConnections;

  const gaugeValue = Number(DPBCS) * 100;

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
              options={CharOptionsOne}
            />
            <Charts
              color="#4472C4"
              title="Disassembly potential of the core connections DPC"
              data={data}
            />
          </div>

          {/* Gauge and button */}
          <div className="w-1/2 flex flex-col items-center justify-center pl-10">
            <Gauge
              className="-ml-9"
              value={gaugeValue.toFixed(0) || 0}
              widthOne={300}
              widthTwo={362}
            />
            <p className="text-center"> Total disassembly potential </p>
            <div className="flex items-center justify-center gap-4 mt-5">
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
