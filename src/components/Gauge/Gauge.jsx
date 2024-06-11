import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

export default function Gauge({ value }) {
  return (
    <div className="relative">
      <div className="mt-8 ml-8">
        <ReactSpeedometer
          width={300}
          height={200}
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
          currentValueText={"${value}"}
          minValue={0}
          maxValue={100}
          value={value}
          segments={6}
          ringWidth={30}
          customSegmentStops={[0, 10, 30, 50, 70, 90, 100]}
          needleHeightRatio={0.7}
          // needleTransition="easeElastic"
        />
      </div>
      <div className="absolute top-0 left-0">
        <ReactSpeedometer
          width={362}
          height={200}
          forceRender={true}
          maxSegmentLabels={10}
          segmentColors={[
            "#e6e6e6",
            "#bfbfbf",
            "#a8a8a8",
            "#8f8f8f",
            "#707070",
            "#5f5f5f",
            "#484848",
            "#2f2f2f",
            "#1a1a1a",
            "#0e0e0e",
          ]}
          needleColor={"#00000000"}
          currentValueText={"${value}"}
          minValue={0}
          maxValue={100}
          value={value}
          segments={6}
          ringWidth={30}
          customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          needleHeightRatio={0.7}
        />
      </div>
    </div>
  );
}
