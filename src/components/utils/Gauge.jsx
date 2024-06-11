import React from "react";

const Gauge = ({ value }) => {
	const clampedValue = Math.max(0, Math.min(value, 100));

	const angle = (clampedValue / 100) * 180;

	return (
		<div className="flex flex-col items-center">
			<svg width="250" height="150" viewBox="0 0 200 100" className="mb-2">
				<path
					d="M10,90 A80,80 0 0,1 40,30"
					fill="none"
					stroke="#ff0000"
					strokeWidth="20"
				/>
				<path
					d="M40,30 A80,80 0 0,1 80,10"
					fill="none"
					stroke="#ffcc00"
					strokeWidth="20"
				/>
				<path
					d="M80,10 A80,80 0 0,1 120,10"
					fill="none"
					stroke="#cccccc"
					strokeWidth="20"
				/>
				<path
					d="M120,10 A80,80 0 0,1 160,30"
					fill="none"
					stroke="#c0c0c0"
					strokeWidth="20"
				/>
				<path
					d="M160,30 A80,80 0 0,1 190,90"
					fill="none"
					stroke="#00ff00"
					strokeWidth="20"
				/>

				{/* Needle */}
				<line
					x1="100"
					y1="90"
					x2={100 + 80 * Math.cos(Math.PI * (1 - clampedValue / 100))}
					y2={90 - 80 * Math.sin(Math.PI * (1 - clampedValue / 100))}
					stroke="black"
					strokeWidth="2"
				/>

				{/* Needle base circle */}
				<circle cx="100" cy="90" r="3" fill="black" />
			</svg>
			<div className="text-4xl font-bold">{value}</div>
			<div className="text-sm mt-5">Total disassembly potential</div>
		</div>
	);
};

export default Gauge;
