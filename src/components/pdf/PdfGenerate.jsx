import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/images/logo.jpeg";
import Charts from "../Chart/Chart";
import ChartTwo from "../Chart/ChartTwo";
import Gauge from "../Gauge/Gauge";
import ProgressBar from "../utils/ProgressBar";

const PdfGenerate = React.forwardRef((props, ref) => {
	const [data, setData] = useState([]);
	const { buildingInfo } = useSelector((state) => state.buildingInfo);
	const { buildingCoreTotalValue } = useSelector((state) => state.buildingCore);
	const { buildingShell, buildingShellTotalValue } = useSelector(
		(state) => state.buildingShell
	);

	const CharOptionsOne = {
		series: [
			{
				name: "Core",
				data: [
					buildingCoreTotalValue["totalConnectionTypesScore"]?.toFixed(0) || 0,
					buildingCoreTotalValue["connectionAccessibilityScore"]?.toFixed(0) ||
						0,
					buildingCoreTotalValue["totalIndependencyScore"]?.toFixed(0) || 0,
					buildingCoreTotalValue["totalGpeScore"]?.toFixed(0) || 0,
					buildingCoreTotalValue["totalBarriersScore"]?.toFixed(0) || 0,
				],
				color: "#4472C4",
			},
			{
				name: "Shell",
				data: [
					buildingShellTotalValue["totalConnectionTypesScore"]?.toFixed(0) || 0,
					buildingShellTotalValue["connectionAccessibilityScore"]?.toFixed(0) ||
						0,
					buildingShellTotalValue["totalIndependencyScore"]?.toFixed(0) || 0,
					buildingShellTotalValue["totalGpeScore"]?.toFixed(0) || 0,
					buildingShellTotalValue["totalBarriersScore"]?.toFixed(0) || 0,
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
		yaxis: {
			max: 100,
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
				y: parseFloat(buildingCore?.columnAndBeamDPC)?.toFixed(0) || 0,
			},
			{
				x: "Column and slab",
				y: parseFloat(buildingCore?.columnAndSlabDPC)?.toFixed(0) || 0,
			},
			{
				x: "Column and bearing wall",
				y: parseFloat(buildingCore?.columnAndBearingWallDPC)?.toFixed(0) || 0,
			},
			{
				x: "Column and foundation",
				y: parseFloat(buildingCore?.columnAndFoundationDPC)?.toFixed(0) || 0,
			},
			{
				x: "Beam and slab",
				y: parseFloat(buildingCore?.beamAndSlabDPC)?.toFixed(0) || 0,
			},
			{
				x: "Beam and bearing wall",
				y: parseFloat(buildingCore?.slabAndBearingWallDPC)?.toFixed(0) || 0,
			},
			{
				x: "Column & Shell element",
				y: parseFloat(buildingShell?.columnAndShellElementDPC)?.toFixed(0) || 0,
			},
			{
				x: "Beam & Shell element",
				y: parseFloat(buildingShell?.beamAndShellElementDPC)?.toFixed(0) || 0,
			},
			{
				x: "Slab & Shell element",
				y: parseFloat(buildingShell?.slabAndShellElementDPC)?.toFixed(0) || 0,
			},
			{
				x: "Bearing wall & Shell element",
				y:
					parseFloat(buildingShell?.bearingWallAndShellElementDPC)?.toFixed(
						0
					) || 0,
			},
		]);
	}, [buildingCoreTotalValue?.buildingCore, buildingShell]);

	const coreDPC = Number(buildingCoreTotalValue?.totalDPCOfBuildingCore) / 6;
	const shellDPC = Number(buildingShellTotalValue?.totalDPCOfBuildingCore) / 4;
	const coreAndShellDPC = (coreDPC + shellDPC) / 2;

	return (
		<div className="p-5 bg-white w-[830px] mx-auto" ref={ref}>
			<div className="flex justify-between gap-6 items-center mb-5">
				<div className="">
					<img src={logo} className="w-[100px]" alt="logo" />
				</div>
				<div className="">
					<h1 className="text-xl font-bold text-center">
						Disassembly Potential of the Building’s core and shell <br />
						<span className="text-3xl">Report</span>
					</h1>
				</div>
				<div />
			</div>
			<div className="pt-2">
				<h1 className="font-medium">Building information:</h1>
				<div className="mt-3 p-5 bg-[#c4c4c4da]">
					<div className="grid grid-cols-3 gap-6">
						<div className="col-span-2">
							<div className="grid grid-cols-3 mb-3">
								<h2 className="text-sm">Building type:</h2>
								<div className="col-span-2">
									<input
										type="text"
										className="w-full pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={buildingInfo?.buildingType}
									/>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2 className="text-sm">Country:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={buildingInfo?.country}
									/>
									<div className="flex items-end gap-2">
										<h2 className="whitespace-nowrap text-sm">Post Code:</h2>
										<input
											type="text"
											className="w-[114px] pl-2 py-0.5 focus:outline-none text-sm"
											readOnly
											value={buildingInfo?.postCode}
										/>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2 className="text-sm">City:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[87px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={buildingInfo?.city}
									/>
									<div className="flex items-end gap-2">
										<h2 className="whitespace-nowrap text-sm">Street:</h2>
										<input
											type="text"
											className="w-[87px] px-2 py-0.5 focus:outline-none text-sm"
											readOnly
											value={buildingInfo?.street}
										/>
									</div>
									<div className="flex items-end gap-2">
										<h2 className="text-sm">No:</h2>
										<input
											type="text"
											className="w-[34px] pl-2 py-0.5 focus:outline-none text-sm"
											readOnly
											value={buildingInfo?.no}
										/>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2 className="text-sm">Area:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] px-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={buildingInfo?.area}
									/>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2 className="text-sm">Construction date:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={buildingInfo?.constructionDate}
									/>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2 className="text-sm">Calculation date:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={buildingInfo?.calculationDate}
									/>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2 className="text-sm">Software version:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={buildingInfo?.softwareVersion}
									/>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2 className="font-medium text-sm">
									Total <br /> building DPB:
								</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] pl-2 py-0.5 focus:outline-none text-2xl"
										readOnly
										value={`${coreAndShellDPC.toFixed(2)}%`}
									/>
								</div>
							</div>
						</div>
						<div className="">
							<img src={buildingInfo?.image} alt="building" />
						</div>
					</div>
				</div>
				<div>
					<h1 className="font-medium mt-5">Building's core:</h1>
					<div className="mt-3 p-5 bg-[#c4c4c4da]">
						<div className="flex justify-between">
							<div className="">
								<div className="grid grid-cols-2 gap-10 mb-3">
									<div>
										<h1 className="text-sm">Number of connection:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={Number(
											buildingCoreTotalValue?.totalConnectionNumberScore
										)}
									/>
								</div>
								<div className="grid grid-cols-2 gap-10">
									<div>
										<h1 className="text-sm">Number of barriers:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={Number(buildingCoreTotalValue?.totalBarriersNumbers)}
									/>
								</div>
							</div>
							<div className="">
								<div className="grid grid-cols-2 gap-10">
									<div>
										<h1 className="text-sm">Total DPC of the core:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={coreDPC.toFixed(2)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="border-2 border-[#c4c4c4da] pt-16 pb-12">
						<div className="w-1/2 mx-auto">
							<ProgressBar progress={coreDPC.toFixed(2)} />
						</div>
					</div>
				</div>
				<div className="pb-16">
					<h1 className="font-medium mt-5">Building's core and shell:</h1>
					<div className="mt-3 p-5 bg-[#c4c4c4da]">
						<div className="flex justify-between">
							<div>
								<div className="grid grid-cols-2 gap-10 mb-3">
									<div>
										<h1 className="text-sm">Number of connection:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={Number(
											buildingShellTotalValue?.totalConnectionNumberScore
										)}
									/>
								</div>
								<div className="grid grid-cols-2 gap-10">
									<div>
										<h1 className="text-sm">Number of barriers:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={Number(
											buildingShellTotalValue?.totalBarriersNumbers
										)}
									/>
								</div>
							</div>
							<div>
								<div className="grid grid-cols-2 gap-10">
									<div>
										<h1 className="text-sm">Total DPC of the shell:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={shellDPC.toFixed(2)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="border-2 border-[#c4c4c4da] pt-16 pb-12">
						<div className="w-1/2 mx-auto">
							<ProgressBar progress={shellDPC.toFixed(2)} />
						</div>
					</div>
				</div>
				<div className="pt-5">
					<h1 className="font-medium pb-2">Building's core and shell:</h1>
					<div className="mt-3 p-5 bg-[#c4c4c4da]">
						<div className="flex justify-between">
							<div className="">
								<div className="grid grid-cols-2 gap-10 mb-3">
									<div>
										<h1 className="whitespace-nowrap text-sm">
											Number of connection:
										</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={Number(
											buildingCoreTotalValue?.totalConnectionNumberScore +
												buildingShellTotalValue?.totalConnectionNumberScore
										)}
									/>
								</div>
								<div className="grid grid-cols-2 gap-10">
									<div>
										<h1 className="whitespace-nowrap text-sm">
											Number of barriers:
										</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none text-sm"
										readOnly
										value={Number(
											buildingCoreTotalValue?.totalBarriersNumbers +
												buildingShellTotalValue?.totalBarriersNumbers
										)}
									/>
								</div>
							</div>
							<div className="">
								<div className="grid grid-cols-2 gap-10">
									<div>
										<h1 className="text-sm">
											Total DPC of the <br /> building's core and shell:
										</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 h-7 focus:outline-none text-sm"
										readOnly
										value={coreAndShellDPC.toFixed(2)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="border-2 border-[#c4c4c4da] p-10">
						<div>
							<div className="flex flex-col items-center justify-between gap-4">
								<div className="flex items-center justify-between gap-7 w-full">
									<ChartTwo
										color="#F4B081"
										title="Disassembly potential of the core connections DPC based on the DfD criteria and barriers"
										options={CharOptionsOne}
									/>
									<Gauge
										value={coreAndShellDPC.toFixed(2)}
										widthOne={200}
										widthTwo={262}
										className="mr-[50px] mt-6"
									/>
								</div>

								<div className="flex flex-col items-center justify-center gap-7 px-5 w-full">
									<Charts
										color="#4472C4"
										title="Disassembly Potential of the connections"
										data={data}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default PdfGenerate;
