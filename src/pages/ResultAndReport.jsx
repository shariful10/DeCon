import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Gauge from "../components/Gauge/Gauge";
import { useNavigate } from "react-router-dom";
import Charts from "../components/Chart/Chart";
import Button from "../components/utils/Button";
import ChartTwo from "../components/Chart/ChartTwo";
import Container from "../components/container/Container";

export default function ResultAndReport() {
	const [data, setData] = useState([]);
	const navigate = useNavigate();
	const { buildingCoreTotalValue } = useSelector((state) => state.buildingCore);
	const { buildingShell, buildingShellTotalValue } = useSelector(
		(state) => state.buildingShell
	);

	const CharOptionsOne = {
		series: [
			{
				name: "Core",
				data: [
					buildingCoreTotalValue["totalConnectionTypesScore"],
					buildingCoreTotalValue["connectionAccessibilityScore"],
					buildingCoreTotalValue["totalIndependencyScore"],
					buildingCoreTotalValue["totalGpeScore"],
					buildingCoreTotalValue["totalBarriersScore"],
				],
				color: "#4472C4",
			},
			{
				name: "Shell",
				data: [
					buildingShellTotalValue["totalConnectionTypesScore"],
					buildingShellTotalValue["connectionAccessibilityScore"],
					buildingShellTotalValue["totalIndependencyScore"],
					buildingShellTotalValue["totalGpeScore"],
					buildingShellTotalValue["totalBarriersScore"],
				],
				color: "#ED7D31",
			},
		],
		chart: {
			type: "bar",
			height: 350,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "55%",
				endingShape: "rounded",
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ["transparent"],
		},
		xaxis: {
			categories: [
				"Connection type",
				"Connection Accessibility",
				"Independency",
				"Geometry of product edge",
				"Barriers",
			],
		},

		fill: {
			opacity: 1,
		},
	};

	useEffect(() => {
		const { buildingCore } = buildingCoreTotalValue;

		setData([
			{
				x: "Column and beam",
				y: parseFloat(buildingCore?.columnAndBeamDPC)?.toFixed(2) || 0,
			},
			{
				x: "Column and slab",
				y: parseFloat(buildingCore?.columnAndSlabDPC)?.toFixed(2) || 0,
			},
			{
				x: "Column and bearing wall",
				y: parseFloat(buildingCore?.columnAndBearingWallDPC)?.toFixed(2) || 0,
			},
			{
				x: "Column and foundation",
				y: parseFloat(buildingCore?.columnAndFoundationDPC)?.toFixed(2) || 0,
			},
			{
				x: "Beam and slab",
				y: parseFloat(buildingCore?.beamAndSlabDPC)?.toFixed(2) || 0,
			},
			{
				x: "Beam and bearing wall",
				y: parseFloat(buildingCore?.slabAndBearingWallDPC)?.toFixed(2) || 0,
			},
			{
				x: "Column & Shell element",
				y: parseFloat(buildingShell?.columnAndShellElementDPC)?.toFixed(2) || 0,
			},
			{
				x: "Beam & Shell element",
				y: parseFloat(buildingShell?.beamAndShellElementDPC)?.toFixed(2) || 0,
			},
			{
				x: "Slab & Shell element",
				y: parseFloat(buildingShell?.slabAndShellElementDPC)?.toFixed(2) || 0,
			},
			{
				x: "Bearing wall & Shell element",
				y:
					parseFloat(buildingShell?.bearingWallAndShellElementDPC)?.toFixed(
						2
					) || 0,
			},
		]);
	}, [buildingCoreTotalValue?.buildingCore, buildingShell]);

	const totalConnections =
		buildingShellTotalValue.totalConnectionNumberScore +
		buildingCoreTotalValue.totalConnectionNumberScore;

	const totalDPC =
		buildingCoreTotalValue.totalDPCOfBuildingCore +
		buildingShellTotalValue.totalDPCOfBuildingCore;

	const DPBCS = totalDPC / totalConnections;

	const gaugeValue = Number(DPBCS).toFixed(2) * 100;

	return (
		<Container>
			<div>
				<h1 className="text-center mb-7">
					Disassembly Potential of the Building’s core and shell
				</h1>
				<div className="flex items-start justify-between gap-7">
					<div className="w-1/2 flex flex-col items-start justify-between gap-7">
						<ChartTwo
							color="#F4B081"
							title="Disassembly potential of the core connections DPC based on the DfD criteria and barriers"
							options={CharOptionsOne}
						/>
						<Charts
							color="#4472C4"
							title="Disassembly potential of the core connections DPC"
							data={data}
						/>
					</div>
					<div className="w-1/2 flex flex-col items-center justify-center pl-10">
						<Gauge
							className="-ml-9"
							value={gaugeValue || 0}
							widthOne={300}
							widthTwo={362}
						/>
						<p className="text-center"> Total disassembly potential </p>
						<div className="flex items-center justify-center gap-4 mt-5">
							<div onClick={() => navigate("/building-shell")}>
								<Button btnTitle="Previous" />
							</div>
							<div onClick={() => navigate("/report")}>
								<Button btnTitle="Download report" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
