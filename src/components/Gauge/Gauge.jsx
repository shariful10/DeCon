import React from "react";

export default function Gauge({ value }) {
  const getColor = (value) => {
    if (value > 80) return "red-500";
    if (value > 60) return "orange-400";
    if (value > 40) return "yellow-300";
    return "green-500";
  };

  const rotateNeedle = {
    transform: `rotate(${(value / 100) * 180 - 90}deg)`,
  };

  return (
    <div className="relative w-[100dvw] h-72">
      <svg viewBox="0 0 100 50" className="w-full h-full">
        <path
          d="M10 45 A40 40 0 0 1 90 45"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="10"
        />
        <path
          d="M10 45 A40 40 0 0 1 90 45"
          fill="none"
          stroke={`#${getColor(value)}`}
          strokeWidth="10"
          strokeDasharray={`${value}, 100`}
        />
      </svg>
      <div
        className="absolute top-1/2 left-1/2 w-1 h-[10dvw] bg-black origin-bottom transform"
        style={rotateNeedle}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl">
        {value}
      </div>
    </div>
  );
}
