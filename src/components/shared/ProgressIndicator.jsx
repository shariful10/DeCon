// ./src/ProgressIndicator.jsx
import React from "react";

const steps = [
  { label: "Construction type", completed: true },
  { label: "Core", completed: true },
  { label: "Shell", completed: false },
  { label: "Result & Report", completed: false },
];

const ProgressIndicator = () => {
  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-center justify-center relative w-[138px]"
        >
          <div className="flex flex-col items-center justify-end h-full">
            <div className="text-center mb-3 min-w-max">
              <span className="block text-sm">{step.label}</span>
            </div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step.completed
                  ? "bg-[#A9CD98] border-2 border-[#6fac47]"
                  : "bg-white border-2 border-gray-400"
              }`}
            >
              {step.completed ? (
                <span>
                  <svg
                    className="size-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="5"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
              ) : (
                <span className="text-green-400"></span>
              )}
            </div>
          </div>
          {index !== steps.length - 1 && (
            <div className="flex w-[102px] border-t-2 border-gray-400 mx-4 absolute bottom-5 md:-right-[67%] lg:-right-1/2 -z-10"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
