import React from "react";

export default function SelectDropdown({ label = "click here" }) {
  const data = [
    {
      label: "Dry connection",
      value: "dry_connection",
      image: "",
    },
    {
      label: "Dry connection",
      value: "",
      image: "",
    },
    {
      label: "",
      value: "",
      image: "",
    },
    {
      label: "",
      value: "",
      image: "",
    },
    {
      label: "",
      value: "",
      image: "",
    },
  ];

  return (
    <>
      <div className="relative inline-block w-full max-w-xs cursor-pointer">
        <div className="appearance-none w-full py-3 pl-3 pr-10 text-base leading-6 text-black bg-peach-200 border-[2px] border-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300 bg-[#FBE4D4]">
          <h3>Select</h3>
          <div></div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5">
          <div className="w-0 h-0 border-l-[9px] border-r-[9px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#4472C4]"></div>
        </div>
      </div>
    </>
  );
}
