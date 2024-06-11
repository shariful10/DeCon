import React, { useState } from "react";

export default function Input({ type, label, className }) {
  const [value, setValue] = useState("");

  return (
    <input
      type={type}
      className={`w-full py-3 px-3 text-base leading-6 text-black bg-peach-200 border-[2px] border-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300 bg-[#D8D8D8] ${className}`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

Input.defaultProps = {
  label: "",
  type: "number",
};
