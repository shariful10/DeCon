// ./src/ProgressIndicator.jsx
import React from "react";

const steps = [
  { label: "Construction type", completed: true },
  { label: "Co", completed: true },
  { label: "Sh", completed: false },
  { label: "Result & Report", completed: false },
];

const ProgressIndicator = () => {
  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step.completed
                ? "bg-green-400"
                : "bg-white border-2 border-green-400"
            }`}
          >
            {step.completed ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            ) : (
              <span className="text-green-400"></span>
            )}
          </div>
          <div className="text-center mt-2">
            <span className="block text-sm">{step.label.split(" ")[0]}</span>
            <span className="block text-sm">{step.label.split(" ")[1]}</span>
          </div>
          {index !== steps.length - 1 && (
            <div className="flex-auto border-t-2 border-gray-300 mx-4"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
