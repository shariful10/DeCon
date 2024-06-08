import React from "react";

const defaultProps = {
  label: 34,
  type: "number",
};

export default function Input({ type, label }) {
  return (
    <input
      type={type}
      className="w-[100px] py-3 pl-3 pr-10 text-base leading-6 text-black bg-peach-200 border-[2px] border-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300 bg-[#D8D8D8]"
      value={label}
    />
  );
}

Input.defaultProps = {
  label: 34,
  type: "number",
};
