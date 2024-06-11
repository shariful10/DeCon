import React from "react";

const Button = ({ btnTitle, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold bg-primary py-[7px] px-[44px] border-2 border-black ${className}`}
    >
      {btnTitle}
    </button>
  );
};

export default Button;
