// src/ProgressBar.js
import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ progress }) => {
	return (
		<div className="flex items-center gap-4">
			<p className="font-medium">0</p>
			<div className="relative w-full h-6">
				<div className="absolute w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 border border-black" />
				<div
					className="absolute top-0 left-0 h-full mb-10"
					style={{ width: `${progress}%` }}
				/>
				<div
					className="absolute -top-2 h-0 w-0 border-t-8 border-r-8 border-l-8 border-transparent border-t-black"
					style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
				/>
				<div className="absolute -top-5 left-0 flex justify-center items-center w-full h-full">
					<div
						className={`text-green-700 font-bold -top-4 absolute`}
						style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
					>
						{progress}%
					</div>
				</div>
			</div>
			<p className="font-medium">100</p>
		</div>
	);
};

ProgressBar.propTypes = {
	progress: PropTypes.number.isRequired,
};

export default ProgressBar;
