import React, { useState } from "react";

export default function Input(props) {
  const { type, label, className, handleSetData, attributesValue } = props;
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    const controlValue = event.target.value;
    setValue(Number(controlValue));
    handleSetData({
      connectionName: attributesValue?.connectionName,
      attributeKey: attributesValue?.attributeKey,
      controlValue: { score: Number(controlValue) },
    });
  };

  return (
    <input
      type={type}
      className={`w-full py-3 px-3 text-base leading-6 text-black bg-peach-200 border-[2px] border-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300 bg-[#D8D8D8] ${className}`}
      value={value}
      onChange={(e) => onChangeHandler(e)}
    />
  );
}

Input.defaultProps = {
  label: "",
  type: "number",
};
