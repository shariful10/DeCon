import React from "react";
import Gauge from "../Gauge/Gauge";
import Charts from "../Chart/Chart";
import Button from "../utils/Button";
import ChartTwo from "../Chart/ChartTwo";
import ProgressBar from "../utils/ProgressBar";
import logo from "../../assets/images/logo.jpeg";
import building from "../../assets/images/building.jpg";

const PdfGenerate = React.forwardRef((props, ref) => {
	return (
		<div className="p-5 bg-white w-[830px] mx-auto" ref={ref}>
			<div className="flex justify-between gap-6 items-center mb-5">
				<div className="">
					<img src={logo} className="w-[100px]" alt="logo" />
				</div>
				<div className="">
					<h1 className="text-lg font-bold text-center">
						Disassembly Potential of Connection <br /> DPC Report
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
								<h2>Building type:</h2>
								<div className="col-span-2">
									<input
										type="text"
										className="w-full pl-2 py-0.5 focus:outline-none"
										readOnly
										value="Office"
									/>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2>Country:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value="USA"
									/>
									<div className="flex items-end gap-2">
										<h2 className="whitespace-nowrap">Post Code:</h2>
										<input
											type="text"
											className="w-[114px] pl-2 py-0.5 focus:outline-none"
											readOnly
											value="1862"
										/>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2>City:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[87px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value="New York"
									/>
									<div className="flex items-end gap-2">
										<h2 className="whitespace-nowrap">Street:</h2>
										<input
											type="text"
											className="w-[87px] pl-2 py-0.5 focus:outline-none"
											readOnly
											value="49 Street"
										/>
									</div>
									<div className="flex items-end gap-2">
										<h2 className="whitespace-nowrap">No:</h2>
										<input
											type="text"
											className="w-[34px] pl-2 py-0.5 focus:outline-none"
											readOnly
											value={80}
										/>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2>Area:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value="5000 sq ft"
									/>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2>Construction date:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value="2020-01-01"
									/>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2>Calculation date:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value="2024-06-15"
									/>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2>Software version:</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value="1.0.0"
									/>
								</div>
							</div>
							<div className="grid grid-cols-3 mb-3">
								<h2 className="font-medium">
									Total <br /> building DPC:
								</h2>
								<div className="col-span-2 flex space-x-4">
									<input
										type="text"
										className="w-[114px] pl-2 py-0.5 focus:outline-none text-[26px] "
										readOnly
										value="84%"
									/>
								</div>
							</div>
						</div>
						<div className="">
							<img src={building} alt="building" />
						</div>
					</div>
				</div>
				<div>
					<h1 className="font-medium mt-5">Building's core:</h1>
					<div className="mt-3 p-5 bg-[#c4c4c4da]">
						<div className="flex justify-between">
							<div className="">
								<div className="grid grid-cols-2 gap-10 mb-3">
									<div className="">
										<h1>Number of connection:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value={80}
									/>
								</div>
								<div className="grid grid-cols-2 gap-10">
									<div className="">
										<h1>Number of barriers:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value={80}
									/>
								</div>
							</div>
							<div className="">
								<div className="grid grid-cols-2 gap-10">
									<div className="">
										<h1>Total DPC of the core:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value={80}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="border-2 border-[#c4c4c4da] pt-14 pb-10">
						<div className="w-1/2 mx-auto">
							<ProgressBar progress={80} />
						</div>
					</div>
				</div>
				<div>
					<h1 className="font-medium mt-5">Building's shell:</h1>
					<div className="mt-3 p-5 bg-[#c4c4c4da]">
						<div className="flex justify-between">
							<div className="">
								<div className="grid grid-cols-2 gap-10 mb-3">
									<div className="">
										<h1>Number of connection:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value={80}
									/>
								</div>
								<div className="grid grid-cols-2 gap-10">
									<div className="">
										<h1>Number of barriers:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value={80}
									/>
								</div>
							</div>
							<div className="">
								<div className="grid grid-cols-2 gap-10">
									<div className="">
										<h1>Total DPC of the shell:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value={80}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="border-2 border-[#c4c4c4da] pt-14 pb-10">
						<div className="w-1/2 mx-auto">
							<ProgressBar progress={80} />
						</div>
					</div>
				</div>
				<div>
					<h1 className="font-medium mt-5 pb-2">Building's core and shell:</h1>
					<div className="mt-3 p-5 bg-[#c4c4c4da]">
						<div className="flex justify-between">
							<div className="">
								<div className="grid grid-cols-2 gap-10 mb-3">
									<div className="">
										<h1 className="whitespace-nowrap">Number of connection:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value={80}
									/>
								</div>
								<div className="grid grid-cols-2 gap-10">
									<div className="">
										<h1 className="whitespace-nowrap">Number of barriers:</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 focus:outline-none"
										readOnly
										value={80}
									/>
								</div>
							</div>
							<div className="">
								<div className="grid grid-cols-2 gap-10">
									<div className="">
										<h1>
											Total DPC of the <br /> building's core and shell:
										</h1>
									</div>
									<input
										type="text"
										className="w-[120px] pl-2 py-0.5 h-7 focus:outline-none"
										readOnly
										value={80}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="border-2 border-[#c4c4c4da] p-10">
						<div>
							<div className="flex items-center justify-between gap-4">
								<div className="w-[40%] flex flex-col items-start justify-between gap-7">
									<ChartTwo
										color="#F4B081"
										title="Disassembly potential of the core connections DPC based on the DfD criteria and barriers"
									/>
									<Charts
										color="#4472C4"
										title="Disassembly potential of the core connections DPC"
									/>
								</div>

								<div className="w-[40%] flex flex-col items-center justify-center gap-7 px-5">
									<Gauge value={55} className="mr-[50px]" />
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
