import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

export default function Gauge({ value }) {
  return (
    <div className="">
      <ReactSpeedometer
        forceRender={true}
        maxSegmentLabels={0}
        segmentColors={[
          "#C00000",
          "#ff0000",
          "#ff8c00",
          "#ffd700",
          "#9acd32",
          "#008000",
        ]}
        needleColor={"#000000"}
        currentValueText={"Current Value: ${value}"}
        minValue={0}
        maxValue={100}
        value={value}
        segments={6}
        ringWidth={30}
        customSegmentStops={[0, 10, 30, 50, 70, 90, 100]}
      />
    </div>
  );
}
