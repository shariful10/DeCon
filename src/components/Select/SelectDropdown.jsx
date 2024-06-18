import React, { useState, useRef, useEffect } from "react";

export default function SelectDropdown(props) {
  const { contents, attributesValue, handleSetData, defaultValue } = props;
  const [value, setValue] = useState("");
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

  const handleSetValue = (optionValue) => {
    setExpandOptions(false);
    handleSetData({
      connectionName: attributesValue?.connectionName,
      attributeKey: attributesValue?.attributeKey,
      controlValue: optionValue,
    });
    setValue(optionValue?.label);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (defaultValue) {
      setValue(value || defaultValue?.label);
    }
  }, [value, defaultValue]);

  return (
    <>
      <div
        className="relative inline-block w-full max-w-xs cursor-pointer"
        onClick={expandDropdown}
        ref={dropdownRef}
      >
        <div className="appearance-none w-full py-3 pl-3 pr-10 text-base leading-6 text-black bg-peach-200 border-[2px] border-black focus:outline-none focus:shadow-outline-blue focus:border-blue-300 bg-[#FBE4D4]">
          <h3>
            {value
              ? value?.length > 20
                ? value?.substring(0, 10) + "..."
                : value
              : "Select"}
          </h3>
          {expandOptions && (
            <div
              className="absolute top-0 left-full right-0 w-full z-[200] h-auto rounded bg-white flex flex-col gap-[2px] m-0 p-0"
              onClick={(e) => e.stopPropagation()}
            >
              {contents?.map((content, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredOption(index)}
                  onMouseLeave={() => setHoveredOption(null)}
                  className="relative"
                >
                  <span className="block p-2 bg-[#E8EBF5] hover:bg-[#8DA9DB]">
                    {content?.label}
                  </span>
                  {hoveredOption === index && content?.options && (
                    <div className="absolute top-0 left-full right-[-15px] w-full z-[200] h-auto rounded bg-[#fff] flex flex-col gap-[2px]">
                      {content.options.map((option, subIndex) => (
                        <span
                          key={subIndex}
                          className="block py-1 px-2 bg-[#E8EBF5]"
                          onClick={() => handleSetValue(option)}
                        >
                          {option?.label}
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
