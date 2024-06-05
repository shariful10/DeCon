import React from "react";

const Button = ({ btnTitle }) => {
	return (
		<button className="font-semibold bg-primary py-[7px] px-[44px] border-2 border-black">
			{btnTitle}
		</button>
	);
};

export default Button;
