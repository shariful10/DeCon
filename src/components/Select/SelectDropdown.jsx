import React, { useState, useRef, useEffect } from "react";

export default function SelectDropdown({ contents }) {
  const [expandOptions, setExpandOptions] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);
  const dropdownRef = useRef(null);

  function expandDropdown() {
    setExpandOptions(!expandOptions);
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setExpandOptions(false);
      setHoveredOption(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="relative inline-block w-full max-w-xs cursor-pointer"
        onClick={expandDropdown}
        ref={dropdownRef}
      >
        <div className="appearance-none w-full py-3 pl-3 pr-10 text-base leading-6 text-black bg-peach-200 border-[2px] border-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300 bg-[#FBE4D4]">
          <h3>Select</h3>
          {expandOptions && (
            <div
              className="absolute top-0 left-full right-0 w-full z-[200] h-auto p-2 rounded bg-slate-300 flex flex-col gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              {contents?.map((content, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredOption(index)}
                  onMouseLeave={() => setHoveredOption(null)}
                  className="relative"
                >
                  <span className="block p-2">{content?.label}</span>
                  {hoveredOption === index && content?.options && (
                    <div className="absolute top-0 left-full w-full z-[200] h-auto p-2 rounded bg-slate-500 flex flex-col gap-1">
                      {content.options.map((option, subIndex) => (
                        <span key={subIndex} className="block p-2">
                          {option.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5">
          <div className="w-0 h-0 border-l-[9px] border-r-[9px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#4472C4]"></div>
        </div>
      </div>
    </>
  );
}
